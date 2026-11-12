import { test, expect } from '@playwright/test';

const local = 'http://127.0.0.1:3100';
type Node = Record<string, unknown>;

function nodes(value: unknown): Node[] {
  if (Array.isArray(value)) return value.flatMap(nodes);
  if (!value || typeof value !== 'object') return [];
  const node = value as Node;
  return '@graph' in node ? nodes(node['@graph']) : [node];
}

function structuredData(html: string): Node[] {
  return [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap(match => nodes(JSON.parse(match[1])));
}

test('public pages expose one linked identity and valid service/page graphs in initial HTML', async ({ request }) => {
  const xml = await (await request.get(local + '/sitemap.xml')).text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]));
  expect(urls).toHaveLength(13);
  let servicePages = 0;
  for (const url of urls) {
    const response = await request.get(local + url.pathname);
    expect(response.ok(), url.pathname).toBe(true);
    const data = structuredData(await response.text());
    const organizations = data.filter(node => node['@id'] === 'https://assistants-medicaux.com/#organization');
    expect(organizations, url.pathname).toHaveLength(1);
    expect(organizations[0].identifier).toEqual({ '@type': 'PropertyValue', propertyID: 'SIREN', value: '942339052' });
    expect(organizations[0].sameAs).toContain('https://annuaire-entreprises.data.gouv.fr/entreprise/mesdocs-groupement-d-employeurs-942339052');
    expect(organizations[0].sameAs).not.toContain('https://www.ameli.fr/node/916286');
    const websites = data.filter(node => node['@type'] === 'WebSite');
    expect(websites, url.pathname).toHaveLength(1);
    expect(websites[0].publisher).toEqual({ '@id': organizations[0]['@id'] });
    for (const service of data.filter(node => node['@type'] === 'Service')) {
      servicePages++;
      expect(service).not.toHaveProperty('dateModified');
      expect(service.provider).toEqual({ '@id': organizations[0]['@id'] });
      const page = data.find(node => node['@type'] === 'WebPage' && (node.mainEntity as Node)?.['@id'] === service['@id']);
      expect(page, url.pathname).toBeDefined();
      expect(page?.isPartOf).toEqual({ '@id': websites[0]['@id'] });
      expect(page?.url).toBe(url.href);
    }
  }
  expect(servicePages).toBe(8);
});

test('groupement FAQ answers match visible HTML and llms contains no obsolete sales claims', async ({ request }) => {
  const html = await (await request.get(local + '/groupement-employeurs-medecin-liberal')).text();
  const faq = structuredData(html).find(node => node['@type'] === 'FAQPage');
  const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
    .replace(/<[^>]*>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&').replace(/\s+/g, ' ');
  expect(faq).toBeDefined();
  for (const question of faq?.mainEntity as Node[]) {
    expect(visible).toContain(question.name);
    expect(visible).toContain((question.acceptedAnswer as Node).text);
  }
  const llms = await (await request.get(local + '/llms.txt')).text();
  expect(llms).toContain('942339052');
  for (const obsolete of ['7 420', '6 à 8 semaines', 'agréé par', 'cout-assistant-medical', 'www.assistants-medicaux.com', '€']) {
    expect(llms).not.toContain(obsolete);
  }
});
