const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const PAGES = [
  { url: 'https://www.assistants-medicaux.com/', name: 'home' },
  { url: 'https://www.assistants-medicaux.com/avantages-demarches', name: 'avantages' },
  { url: 'https://www.assistants-medicaux.com/devenir-assistant-m%C3%A9dical', name: 'devenir' },
];

const IMG_DIR = path.join(__dirname, 'assets', 'images');
const DATA_DIR = path.join(__dirname, 'extracted');
fs.mkdirSync(IMG_DIR, { recursive: true });
fs.mkdirSync(DATA_DIR, { recursive: true });

function downloadFile(fileUrl, dest) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(fileUrl);
    const proto = parsedUrl.protocol === 'https:' ? https : http;
    const file = fs.createWriteStream(dest);
    const req = proto.get(fileUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' }
    }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    });
    req.on('error', err => { fs.unlink(dest, () => {}); reject(err); });
    req.setTimeout(15000, () => { req.abort(); reject(new Error('timeout')); });
  });
}

function slugify(url) {
  try {
    const u = new URL(url);
    const base = path.basename(u.pathname);
    return base.replace(/[^a-z0-9._-]/gi, '_').slice(0, 80) || 'image';
  } catch { return 'image_' + Date.now(); }
}

async function extractPage(browser, pageInfo) {
  console.log(`\n=== Extracting: ${pageInfo.url} ===`);
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36');

  await page.goto(pageInfo.url, { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 3000));

  // Scroll to trigger lazy loading
  await page.evaluate(async () => {
    for (let i = 0; i < 10; i++) {
      window.scrollBy(0, window.innerHeight);
      await new Promise(r => setTimeout(r, 400));
    }
    window.scrollTo(0, 0);
  });
  await new Promise(r => setTimeout(r, 2000));

  // Screenshot
  await page.screenshot({
    path: path.join(DATA_DIR, `${pageInfo.name}-screenshot.png`),
    fullPage: true
  });
  console.log(`  Screenshot saved`);

  // Extract all text content structured
  const content = await page.evaluate(() => {
    const result = {
      title: document.title,
      metaDescription: document.querySelector('meta[name="description"]')?.content || '',
      sections: []
    };

    // Get all meaningful text blocks
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, a[href], button');
    elements.forEach(el => {
      const text = el.innerText?.trim();
      if (text && text.length > 1) {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        result.sections.push({
          tag: el.tagName.toLowerCase(),
          text,
          href: el.href || null,
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          color: style.color,
          bgColor: style.backgroundColor,
          y: Math.round(rect.top + window.scrollY),
        });
      }
    });
    return result;
  });
  fs.writeFileSync(path.join(DATA_DIR, `${pageInfo.name}-content.json`), JSON.stringify(content, null, 2));
  console.log(`  Content extracted: ${content.sections.length} elements`);

  // Extract computed styles for key elements
  const styles = await page.evaluate(() => {
    const selectors = [
      'header', 'nav', 'footer',
      'h1', 'h2', 'h3', 'p',
      'a', 'button',
      '[class*="hero"]', '[class*="btn"]',
      '[class*="footer"]', '[class*="nav"]',
      '[class*="card"]', '[class*="section"]',
    ];
    const result = {};
    selectors.forEach(sel => {
      const el = document.querySelector(sel);
      if (!el) return;
      const s = window.getComputedStyle(el);
      result[sel] = {
        fontFamily: s.fontFamily,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        color: s.color,
        backgroundColor: s.backgroundColor,
        padding: s.padding,
        margin: s.margin,
        borderRadius: s.borderRadius,
        display: s.display,
      };
    });
    return result;
  });
  fs.writeFileSync(path.join(DATA_DIR, `${pageInfo.name}-styles.json`), JSON.stringify(styles, null, 2));

  // Extract ALL images
  const imageUrls = await page.evaluate(() => {
    const urls = new Set();
    // img tags
    document.querySelectorAll('img').forEach(img => {
      if (img.src) urls.add(img.src);
      if (img.dataset.src) urls.add(img.dataset.src);
    });
    // background images
    document.querySelectorAll('*').forEach(el => {
      const bg = window.getComputedStyle(el).backgroundImage;
      const match = bg.match(/url\(["']?([^"')]+)["']?\)/);
      if (match && match[1] && !match[1].startsWith('data:')) urls.add(match[1]);
    });
    // wix media manager
    document.querySelectorAll('[data-src], [data-bg]').forEach(el => {
      if (el.dataset.src) urls.add(el.dataset.src);
      if (el.dataset.bg) urls.add(el.dataset.bg);
    });
    return [...urls];
  });

  console.log(`  Found ${imageUrls.length} images, downloading...`);
  const imageMap = {};
  const downloaded = [];

  for (const imgUrl of imageUrls) {
    if (!imgUrl || imgUrl.startsWith('data:')) continue;
    try {
      const absUrl = new URL(imgUrl, pageInfo.url).href;
      const slug = slugify(absUrl);
      const ext = path.extname(slug) || '.jpg';
      const fname = slug.endsWith(ext) ? slug : slug + ext;
      const dest = path.join(IMG_DIR, fname);
      if (!fs.existsSync(dest)) {
        await downloadFile(absUrl, dest);
      }
      imageMap[imgUrl] = `/assets/images/${fname}`;
      downloaded.push(fname);
    } catch (e) {
      // skip failed
    }
  }
  console.log(`  Downloaded: ${downloaded.length} images`);
  fs.writeFileSync(path.join(DATA_DIR, `${pageInfo.name}-images.json`), JSON.stringify(imageMap, null, 2));

  // Extract full rendered HTML
  const html = await page.content();
  fs.writeFileSync(path.join(DATA_DIR, `${pageInfo.name}-rendered.html`), html);
  console.log(`  HTML saved (${Math.round(html.length/1024)}KB)`);

  await page.close();
  return { content, styles, imageUrls: downloaded };
}

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  const results = {};
  for (const pageInfo of PAGES) {
    try {
      results[pageInfo.name] = await extractPage(browser, pageInfo);
    } catch (e) {
      console.error(`Failed ${pageInfo.name}:`, e.message);
    }
  }

  await browser.close();
  console.log('\n=== EXTRACTION COMPLETE ===');
  console.log('Files saved to:', DATA_DIR);
  console.log('Images saved to:', IMG_DIR);
}

main().catch(console.error);
