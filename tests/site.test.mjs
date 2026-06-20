import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const pages = [
  ['index.html', ['Better websites. Faster results.', 'How We Work', 'Pricing preview', 'Frequently asked questions']],
  ['services.html', ['Custom website builds', 'Website maintenance', 'How we work', 'Who Bettrix helps']],
  ['portfolio.html', ['Portfolio', 'filter', 'Case studies', 'Results']],
  ['pricing.html', ['Starter', 'Business', 'Pro', 'Comparison', 'Pricing FAQ']],
  ['about.html', ['Brand story', 'Values', 'Process', 'Trusted by']],
  ['contact.html', ['Book a discovery call', 'Contact form', 'WhatsApp', 'Response promise']],
];

for (const [file, needles] of pages) {
  test(`${file} includes the expected content`, async () => {
    const html = await readFile(new URL(`../${file}`, import.meta.url), 'utf8');
    for (const needle of needles) {
      assert.ok(
        html.toLowerCase().includes(needle.toLowerCase()),
        `${file} should include "${needle}"`,
      );
    }
  });
}

test('shared assets define the Bettrix color system', async () => {
  const css = await readFile(new URL('../assets/styles.css', import.meta.url), 'utf8');
  for (const token of ['#101415', '#e0e3e5', '#bcc7de', '#1e293b', '#b7c8e1', '#45474c']) {
    assert.ok(css.toLowerCase().includes(token), `Expected CSS token ${token}`);
  }
});

test('shared showcase assets define both projects and links', async () => {
  const js = await readFile(new URL('../assets/site.js', import.meta.url), 'utf8');
  for (const needle of [
    'Prosno.io',
    'PeakPack',
    'https://prosno-io.app/',
    'https://peakpack.bettrix.tech/',
  ]) {
    assert.ok(js.includes(needle), `Expected showcase asset ${needle}`);
  }
});

for (const file of ['index.html', 'portfolio.html']) {
  test(`${file} includes the showcase placeholder`, async () => {
    const html = await readFile(new URL(`../${file}`, import.meta.url), 'utf8');
    assert.ok(html.includes('data-site-showcase'), `${file} should include data-site-showcase`);
  });
}
