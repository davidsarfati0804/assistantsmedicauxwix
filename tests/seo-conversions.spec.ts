import { test, expect, type Page, type Route } from '@playwright/test';

const site = 'https://assistants-medicaux.com';
const local = 'http://127.0.0.1:3100';
const consentKey = 'mesdocs-analytics-consent-v1';

test.afterEach(async ({ page }) => {
  // Let navigation and prefetch requests settle before removing interceptors.
  await page.waitForLoadState('networkidle');
  await page.unrouteAll({ behavior: 'wait' });
});

// Fetch via Node so browser navigation/teardown cannot dispose an APIResponse
// while a prefetched resource is being fulfilled. Only the local server is used.
async function localResponse(route: Route) {
  const url = new URL(route.request().url());
  const requestHeaders = { ...route.request().headers() };
  delete requestHeaders.host;
  try {
    const response = await fetch(local + url.pathname + url.search, { headers: requestHeaders });
    const body = Buffer.from(await response.arrayBuffer());
    const headers = Object.fromEntries(response.headers);
    for (const name of ['content-encoding', 'content-length', 'transfer-encoding']) delete headers[name];
    await route.fulfill({ status: response.status, headers, body });
  } catch (error) {
    if (!(error instanceof Error) || !/closed|cancelled|aborted/i.test(error.message)) throw error;
  }
}

// Production hostname in the browser, but ALL site requests go to the local
// build. Every form POST is mocked and every external request is intercepted.

async function isolate(page: Page, accepted = true) {
  // This guard remains after page routes are removed: even an unload beacon
  // during teardown must never reach the actual production server.
  await page.context().route('**/*', route => route.abort());
  await page.route('**/*', async route => {
    const request = route.request();
    const url = new URL(request.url());
    if (url.origin === site && url.pathname === '/api/lead-alert') {
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
    } else if (url.origin === site) {
      if (request.method() !== 'GET' && request.method() !== 'HEAD') throw new Error('Unmocked mutation: ' + url.pathname);
      await localResponse(route);
    } else if (url.hostname === 'www.googletagmanager.com') {
      await route.fulfill({ contentType: 'application/javascript', body: "document.cookie='_ga=isolated; Path=/; SameSite=Lax; Secure';document.cookie='_ga_72CR5EDK0P=isolated; Path=/; SameSite=Lax; Secure';" });
    } else await route.abort();
  });
  if (accepted) await page.addInitScript(key => localStorage.setItem(key, JSON.stringify({ choice: 'accepted', at: Date.now() })), consentKey);
}

async function events(page: Page) {
  return page.evaluate(() => (window.dataLayer || [])
    .filter(entry => typeof entry === 'object' && entry !== null && '0' in entry && entry[0] === 'event')
    .map(entry => Array.from(entry as ArrayLike<unknown>)));
}

const forms = [
  { path: '/', name: 'contact' },
  { path: '/contact', name: 'contact-page' },
  { path: '/prendre-rendez-vous', name: 'rendez-vous' },
];

for (const form of forms) {
  for (const status of [200, 400, 500, 'network'] as const) {
    test(`${form.name}: ${status}, no live submission, accurate success`, async ({ page }) => {
      await isolate(page);
      let posts = 0;
      await page.route('**/netlify-forms.html', async route => {
        if (route.request().method() !== 'POST') return route.fallback();
        posts++;
        if (status === 'network') return route.abort('failed');
        await route.fulfill({ status, contentType: 'text/plain', body: status === 200 ? 'Saved' : 'Error' });
      });
      await page.goto(site + form.path);
      const element = page.locator(`form[name="${form.name}"]`);
      await element.locator('[name="profil"]').selectOption('candidat');
      await element.locator('[name="nom-prenom"]').fill('Test Confidentiel');
      await element.locator('[name="telephone"]').fill('0601020304');
      await element.locator('[name="email"]').fill('private-test@example.invalid');
      if (form.name === 'contact-page') {
        await element.locator('[name="besoin"]').selectOption('candidature');
        await element.locator('[name="message"]').fill('MESSAGE_PRIVE_NE_PAS_TRANSMETTRE');
      }
      await element.locator('[name="rgpd"]').check();
      await element.locator('button[type="submit"]').click();
      const success = status === 200;
      if (success) await expect(element).toHaveCount(0);
      else {
        await expect(element.getByRole('alert')).toBeVisible();
        await expect(element.locator('[name="email"]')).toHaveValue('private-test@example.invalid');
        await expect(element.locator('button[type="submit"]')).toBeEnabled();
      }
      const recorded = await events(page);
      expect(recorded.filter(row => row[1] === 'generate_lead')).toHaveLength(success ? 1 : 0);
      expect(recorded.filter(row => row[1] === 'form_start_custom')).toHaveLength(1);
      if (success) expect(recorded.find(row => row[1] === 'generate_lead')?.[2]).toEqual({ form_name: form.name, lead_profile: 'candidat', lead_need: form.name === 'contact-page' ? 'candidature' : 'inconnu', send_to: 'G-72CR5EDK0P' });
      else expect(recorded.filter(row => row[1] === 'form_error')).toHaveLength(1);
      expect(posts).toBe(1);
      const serialized = JSON.stringify(recorded);
      for (const value of ['Test Confidentiel', '0601020304', 'private-test@', 'MESSAGE_PRIVE']) expect(serialized).not.toContain(value);
    });
  }
}

test('consent: no tag before choice, refusal, acceptance and withdrawal', async ({ page, context }) => {
  await isolate(page, false);
  await page.goto(site + '/contact');
  await expect(page.getByRole('region', { name: 'Choix des cookies' })).toBeVisible();
  expect(await page.locator('#mesdocs-google-tag').count()).toBe(0);
  await page.getByRole('button', { name: 'Refuser', exact: true }).click();
  await expect(page.getByRole('region', { name: 'Choix des cookies' })).toHaveCount(0);
  expect(await page.locator('#mesdocs-google-tag').count()).toBe(0);
  await page.getByRole('button', { name: 'Gérer mes cookies' }).click();
  await page.getByRole('button', { name: 'Accepter', exact: true }).click();
  await expect(page.locator('#mesdocs-google-tag')).toHaveCount(1);
  await expect.poll(async () => (await context.cookies()).some(c => c.name === '_ga')).toBe(true);
  await page.getByRole('button', { name: 'Gérer mes cookies' }).click();
  await page.getByRole('button', { name: 'Refuser', exact: true }).click();
  expect(await page.evaluate(() => window['ga-disable-G-72CR5EDK0P'])).toBe(true);
  expect((await context.cookies()).filter(c => c.name.startsWith('_ga'))).toHaveLength(0);
  await page.locator('form[name="contact-page"] [name="nom-prenom"]').fill('No tracking');
  expect(await events(page)).toHaveLength(0);
});

test('refused consent does not prevent a successful submission', async ({ page }) => {
  await isolate(page, false);
  await page.route('**/netlify-forms.html', route => route.fulfill({ status: 200, body: 'Saved' }));
  await page.goto(site + '/prendre-rendez-vous');
  await page.getByRole('button', { name: 'Refuser', exact: true }).click();
  const form = page.locator('form[name="rendez-vous"]');
  await form.locator('[name="nom-prenom"]').fill('Test');
  await form.locator('[name="telephone"]').fill('0601020304');
  await form.locator('[name="rgpd"]').check();
  await form.locator('button[type="submit"]').click();
  await expect(form).toHaveCount(0);
  expect(await events(page)).toHaveLength(0);
});

test('validation, duplicate submit guard, network retry and false 200 fallback', async ({ page }) => {
  await isolate(page);
  let posts = 0;
  await page.route('**/netlify-forms.html', async route => {
    posts++;
    if (posts === 1) return route.fulfill({ status: 200, body: '<title>Netlify Forms Definitions</title>' });
    await new Promise(resolve => setTimeout(resolve, 150));
    return route.fulfill({ status: 200, body: 'Saved' });
  });
  await page.goto(site + '/prendre-rendez-vous');
  const form = page.locator('form[name="rendez-vous"]');
  await form.locator('button[type="submit"]').click();
  expect(posts).toBe(0);
  expect((await events(page)).filter(row => row[1] === 'generate_lead')).toHaveLength(0);
  await form.locator('[name="nom-prenom"]').fill('Test');
  await form.locator('[name="telephone"]').fill('0601020304');
  await form.locator('[name="rgpd"]').check();
  await form.locator('button[type="submit"]').click();
  await expect(form.getByRole('alert')).toBeVisible();
  expect((await events(page)).filter(row => row[1] === 'generate_lead')).toHaveLength(0);
  await form.evaluate(node => {
    node.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    node.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  });
  await expect(form).toHaveCount(0);
  expect(posts).toBe(2);
  expect((await events(page)).filter(row => row[1] === 'generate_lead')).toHaveLength(1);
});

test('all public pages: mobile width, H1, accessible labels and unique ids', async ({ page }) => {
  test.setTimeout(90_000);
  await isolate(page, false);
  const paths = ['/', '/assistants-medicaux', '/avantages-demarches', '/dispositif-cpam', '/aide-collective-assistant-medical', '/recrutement-assistant-medical', '/devenir-assistant-medical', '/groupement-employeurs-medecin-liberal', '/assistant-medical-vs-secretaire-medicale', '/assistant-medical-maison-de-sante', '/assistant-medical-medecin-specialiste', '/contact', '/prendre-rendez-vous', '/mentions-legales', '/politique-confidentialite'];
  for (const path of paths) {
    await page.goto(site + path);
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1')).toHaveCount(1);
    if (['/devenir-assistant-medical', '/recrutement-assistant-medical'].includes(path)) {
      await expect(page.locator('body')).not.toContainText('3 ans pour obtenir');
      await expect(page.locator('body')).toContainText('2 ans');
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), path).toBe(true);
    const problems = await page.evaluate(() => {
      const fields = [...document.querySelectorAll<HTMLInputElement>('input:not([type=hidden]),select,textarea')];
      const ids = [...document.querySelectorAll('[id]')].map(node => node.id);
      return { unlabeled: fields.filter(node => !node.labels?.length).map(node => node.name), duplicateIds: ids.filter((id, i) => ids.indexOf(id) !== i) };
    });
    expect(problems, path).toEqual({ unlabeled: [], duplicateIds: [] });
  }
});

test('local development and preview hostnames never load Analytics', async ({ page }) => {
  await page.addInitScript(key => localStorage.setItem(key, JSON.stringify({ choice: 'accepted', at: Date.now() })), consentKey);
  await page.goto(local);
  await expect(page.getByRole('button', { name: 'Gérer mes cookies' })).toBeVisible();
  expect(await page.locator('#mesdocs-google-tag').count()).toBe(0);
  await page.route('https://preview-test.netlify.app/**', async route => {
    await localResponse(route);
  });
  await page.goto('https://preview-test.netlify.app/');
  await expect(page.getByRole('button', { name: 'Gérer mes cookies' })).toBeVisible();
  expect(await page.locator('#mesdocs-google-tag').count()).toBe(0);
});

test('technical endpoints, legacy redirects and sitemap', async ({ request }) => {
  for (const endpoint of ['/dashboard', '/api/brevo/account', '/api/brevo/campaigns/create']) {
    const response = await request.get(local + endpoint);
    expect(response.status()).toBe(404);
    expect(response.headers()['x-robots-tag']).toBe('noindex, nofollow');
  }
  expect((await request.post(local + '/api/lead-alert', { data: {} })).status()).toBe(403);
  expect((await request.post(local + '/api/lead-alert', { data: {}, headers: { Origin: site } })).status()).toBe(400);
  const definition = await request.get(local + '/netlify-forms.html');
  expect(definition.headers()['x-robots-tag']).toBe('noindex, nofollow');
  expect(await definition.text()).toContain('name="profil"');
  for (const [oldPath, newPath] of [['/book-online', '/prendre-rendez-vous'], ['/about-7', '/assistants-medicaux'], ['/cout-assistant-medical-aide-cpam', '/dispositif-cpam']]) {
    const response = await request.get(local + oldPath, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe(newPath);
  }
  expect((await request.get(local + '/definitely-missing-seo-test')).status()).toBe(404);
  const sitemap = await (await request.get(local + '/sitemap.xml')).text();
  expect(sitemap.match(/<loc>/g)).toHaveLength(13);
  expect(sitemap).not.toContain('/dashboard');
});


test('partial alerts restore contact details only, once, and never generate a lead', async ({ page }) => {
  await isolate(page, false);
  const alerts: Record<string, unknown>[] = [];
  await page.route('**/api/lead-alert', async route => {
    alerts.push(route.request().postDataJSON());
    await route.fulfill({ status: 200, body: '{"ok":true}' });
  });
  await page.goto(site + '/contact');
  await page.getByRole('button', { name: 'Refuser', exact: true }).click();
  const form = page.locator('form[name="contact-page"]');
  await form.locator('[name="nom-prenom"]').fill('Test Prive');
  await form.locator('[name="email"]').fill('test@example.invalid');
  await form.locator('[name="message"]').fill('MESSAGE_NON_TRANSMIS');
  expect(alerts).toHaveLength(0);
  await page.getByRole('heading', { name: 'Envoyez-nous un message' }).click();
  await expect.poll(() => alerts.length).toBe(1);
  expect(alerts[0].data).toEqual({ 'nom-prenom': 'Test Prive', email: 'test@example.invalid' });
  expect(alerts[0].form_name).toBe('contact-page');
  await page.evaluate(() => window.dispatchEvent(new Event('pagehide')));
  expect(alerts).toHaveLength(1);
  expect(await events(page)).toHaveLength(0);
  expect(JSON.stringify(await page.evaluate(() => window.dataLayer || []))).not.toContain('Test Prive');
});

test('no partial alert for an empty or successfully submitted form', async ({ page }) => {
  await isolate(page);
  let alerts = 0;
  await page.route('**/api/lead-alert', async route => { alerts++; await route.fulfill({ status: 200, body: '{}' }); });
  await page.route('**/netlify-forms.html', route => route.fulfill({ status: 200, body: 'Saved' }));
  await page.goto(site + '/prendre-rendez-vous');
  const form = page.locator('form[name="rendez-vous"]');
  await form.locator('[name="nom-prenom"]').focus();
  await page.getByRole('heading', { name: 'Demandez à être rappelé', exact: true }).first().click();
  expect(alerts).toBe(0);
  await form.locator('[name="nom-prenom"]').fill('Test');
  await form.locator('[name="telephone"]').fill('0601020304');
  await form.locator('[name="rgpd"]').check();
  await form.locator('button[type="submit"]').click();
  await expect(form).toHaveCount(0);
  await page.evaluate(() => window.dispatchEvent(new Event('pagehide')));
  expect(alerts).toBe(0);
  expect((await events(page)).filter(row => row[1] === 'generate_lead')).toHaveLength(1);
});
