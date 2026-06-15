# Bettrix Showcase Strip Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a compact, clickable showcase strip for Prosno.io and PeakPack on the homepage and portfolio page.

**Architecture:** Keep the site static and reuse the existing shared chrome pattern in `assets/site.js`. Add one small shared renderer for the showcase strip, mount it into both pages with a `data-site-showcase` placeholder, and style it with the current card/pill system so the new content feels native instead of bolted on.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node test runner

---

### Task 1: Add the shared showcase renderer and styles

**Files:**
- Modify: `assets/site.js`
- Modify: `assets/styles.css`
- Modify: `tests/site.test.mjs`

- [ ] **Step 1: Write the failing test**

```js
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

test('shared showcase assets define both projects and links', async () => {
  const js = await readFile(new URL('../assets/site.js', import.meta.url), 'utf8');
  assert.ok(js.includes('Prosno.io'), 'site.js should define Prosno.io');
  assert.ok(js.includes('PeakPack'), 'site.js should define PeakPack');
  assert.ok(js.includes('https://prosno-io.app/'), 'site.js should include the Prosno.io URL');
  assert.ok(js.includes('https://peakpack.bettrix.tech/'), 'site.js should include the PeakPack URL');
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site.test.mjs`
Expected: FAIL because the showcase renderer and strings do not exist yet.

- [ ] **Step 3: Write minimal implementation**

```js
const showcaseItems = [
  {
    name: 'Prosno.io',
    href: 'https://prosno-io.app/',
    label: 'Live site',
  },
  {
    name: 'PeakPack',
    href: 'https://peakpack.bettrix.tech/',
    label: 'Live site',
  },
];

function showcaseMarkup() {
  return `
    <section class="showcase-strip">
      <div class="section__header">
        <div class="section__eyebrow">Selected work</div>
        <h2>Live projects worth a closer look.</h2>
        <p class="section__subhead">
          Prosno.io and PeakPack show the kind of sites Bettrix builds when the work needs to look
          polished and feel credible.
        </p>
      </div>
      <div class="showcase-strip__grid">
        ${showcaseItems
          .map(
            (item) => `
              <a class="showcase-card" href="${item.href}" target="_blank" rel="noopener noreferrer">
                <span class="showcase-card__label">${item.label}</span>
                <strong>${item.name}</strong>
                <span class="showcase-card__meta">${new URL(item.href).hostname}</span>
              </a>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}
```

```css
.showcase-strip {
  padding: 1.25rem;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.showcase-strip__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.showcase-card {
  display: grid;
  gap: 0.35rem;
  padding: 1.1rem 1.15rem;
  border-radius: 20px;
  border: 1px solid rgba(26, 86, 219, 0.12);
  background: linear-gradient(180deg, #fff, #f8fbff);
}

.showcase-card:hover,
.showcase-card:focus-visible {
  transform: translateY(-1px);
  box-shadow: 0 16px 30px rgba(30, 58, 95, 0.08);
}

.showcase-card__label {
  display: inline-flex;
  width: fit-content;
  padding: 0.28rem 0.6rem;
  border-radius: 999px;
  color: var(--blue);
  background: rgba(26, 86, 219, 0.08);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.showcase-card__meta {
  color: var(--muted);
  font-size: 0.92rem;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/site.test.mjs`
Expected: PASS after the showcase strings and styles are added.

- [ ] **Step 5: Commit**

```bash
git add assets/site.js assets/styles.css tests/site.test.mjs
git commit -m "feat: add shared showcase strip styles"
```

### Task 2: Mount the showcase strip on the homepage and portfolio page

**Files:**
- Modify: `index.html`
- Modify: `portfolio.html`
- Modify: `assets/site.js`
- Modify: `tests/site.test.mjs`

- [ ] **Step 1: Write the failing test**

```js
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const pages = ['index.html', 'portfolio.html'];

for (const file of pages) {
  test(`${file} includes the showcase placeholder`, async () => {
    const html = await readFile(new URL(`../${file}`, import.meta.url), 'utf8');
    assert.ok(html.includes('data-site-showcase'), `${file} should include data-site-showcase`);
  });
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site.test.mjs`
Expected: FAIL because the homepage and portfolio page do not yet include the showcase placeholder.

- [ ] **Step 3: Write minimal implementation**

```html
<section class="section section--soft">
  <div class="container" data-site-showcase></div>
</section>
```

Insert the block after the trust strip on `index.html` and after the hero section on `portfolio.html`, before the filter tabs.

```js
document.querySelectorAll('[data-site-showcase]').forEach((placeholder) => {
  placeholder.innerHTML = showcaseMarkup();
});
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/site.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add index.html portfolio.html assets/site.js tests/site.test.mjs
git commit -m "feat: add showcase strip to homepage and portfolio"
```
