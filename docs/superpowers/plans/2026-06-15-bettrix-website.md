# Bettrix Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fast, conversion-focused marketing website for Bettrix with six pages, a clear discovery-call CTA, and a consistent professional design system.

**Architecture:** Implement the site as a Next.js App Router marketing website with shared layout primitives, centralized content data, and reusable section components. Keep visual styling token-driven in CSS/Tailwind so page templates stay thin and each page only composes sections. Add lightweight scroll reveal behavior and end-to-end checks for navigation, CTA visibility, and contact entry points.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Inter font, Playwright

---

### Task 1: Create the site shell and design tokens

**Files:**
- Create: `app/layout.tsx`
- Create: `app/globals.css`
- Create: `tailwind.config.ts`
- Create: `lib/site.ts`
- Create: `components/ui/button.tsx`
- Create: `components/ui/card.tsx`
- Create: `components/layout/header.tsx`
- Create: `components/layout/footer.tsx`
- Create: `components/layout/whatsapp-button.tsx`
- Create: `tests/unit/layout.test.tsx`

- [ ] **Step 1: Write the failing test**

```ts
import { render, screen } from '@testing-library/react';
import Layout from '@/app/layout';

test('root layout exposes the Bettrix brand and WhatsApp CTA', () => {
  render(<Layout><main>Content</main></Layout>);
  expect(screen.getByText('Bettrix')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /whatsapp/i })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --runInBand tests/unit/layout.test.tsx`
Expected: FAIL because the layout and shared layout components do not exist yet.

- [ ] **Step 3: Write minimal implementation**

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>Bettrix</header>
        <main>{children}</main>
        <a href="https://wa.me/" aria-label="WhatsApp">WhatsApp</a>
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --runInBand tests/unit/layout.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx app/globals.css tailwind.config.ts lib/site.ts components/ui/button.tsx components/ui/card.tsx components/layout/header.tsx components/layout/footer.tsx components/layout/whatsapp-button.tsx
git commit -m "feat: add Bettrix site shell"
```

### Task 2: Add homepage sections and shared content data

**Files:**
- Create: `app/page.tsx`
- Create: `components/sections/hero.tsx`
- Create: `components/sections/trust-strip.tsx`
- Create: `components/sections/services-snapshot.tsx`
- Create: `components/sections/how-it-works.tsx`
- Create: `components/sections/portfolio-highlights.tsx`
- Create: `components/sections/pricing-preview.tsx`
- Create: `components/sections/testimonials.tsx`
- Create: `components/sections/faq-preview.tsx`
- Modify: `lib/site.ts`
- Create: `tests/unit/home-page.test.tsx`

- [ ] **Step 1: Write the failing test**

```ts
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

test('home page contains the discovery-call hero and all core sections', () => {
  render(<HomePage />);
  expect(screen.getByRole('heading', { name: /better websites\. faster results\./i })).toBeInTheDocument();
  expect(screen.getByText(/how it works/i)).toBeInTheDocument();
  expect(screen.getByText(/pricing preview/i)).toBeInTheDocument();
  expect(screen.getByText(/faq/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --runInBand tests/unit/home-page.test.tsx`
Expected: FAIL because the page and section components are not implemented yet.

- [ ] **Step 3: Write minimal implementation**

```tsx
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSnapshot />
      <HowItWorks />
      <PortfolioHighlights />
      <PricingPreview />
      <Testimonials />
      <FaqPreview />
    </>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --runInBand tests/unit/home-page.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx components/sections/*.tsx lib/site.ts
git commit -m "feat: add Bettrix homepage sections"
```

### Task 3: Build the Services and Pricing pages

**Files:**
- Create: `app/services/page.tsx`
- Create: `app/pricing/page.tsx`
- Create: `components/sections/service-detail-grid.tsx`
- Create: `components/sections/maintenance-offer.tsx`
- Create: `components/sections/pricing-cards.tsx`
- Create: `components/sections/pricing-comparison.tsx`
- Create: `components/sections/pricing-faq.tsx`
- Create: `tests/unit/services-page.test.tsx`
- Create: `tests/unit/pricing-page.test.tsx`

- [ ] **Step 1: Write the failing test**

```ts
import { render, screen } from '@testing-library/react';
import ServicesPage from '@/app/services/page';
import PricingPage from '@/app/pricing/page';

test('services page explains builds and maintenance', () => {
  render(<ServicesPage />);
  expect(screen.getByText(/custom website builds/i)).toBeInTheDocument();
  expect(screen.getByText(/website maintenance/i)).toBeInTheDocument();
});

test('pricing page shows starter, business, and pro', () => {
  render(<PricingPage />);
  expect(screen.getByText(/starter/i)).toBeInTheDocument();
  expect(screen.getByText(/business/i)).toBeInTheDocument();
  expect(screen.getByText(/pro/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --runInBand tests/unit/services-page.test.tsx tests/unit/pricing-page.test.tsx`
Expected: FAIL because the pages and pricing components do not exist yet.

- [ ] **Step 3: Write minimal implementation**

```tsx
export default function ServicesPage() {
  return (
    <>
      <section>Custom website builds</section>
      <section>Website maintenance</section>
    </>
  );
}
```

```tsx
export default function PricingPage() {
  return (
    <>
      <section>Starter</section>
      <section>Business</section>
      <section>Pro</section>
    </>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --runInBand tests/unit/services-page.test.tsx tests/unit/pricing-page.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add app/services/page.tsx app/pricing/page.tsx components/sections/service-detail-grid.tsx components/sections/maintenance-offer.tsx components/sections/pricing-cards.tsx components/sections/pricing-comparison.tsx components/sections/pricing-faq.tsx
git commit -m "feat: add services and pricing pages"
```

### Task 4: Build the Portfolio page with filters and case study cards

**Files:**
- Create: `app/portfolio/page.tsx`
- Create: `components/portfolio/filter-tabs.tsx`
- Create: `components/portfolio/case-study-card.tsx`
- Create: `components/portfolio/case-study-grid.tsx`
- Create: `tests/unit/portfolio-page.test.tsx`

- [ ] **Step 1: Write the failing test**

```ts
import { render, screen } from '@testing-library/react';
import PortfolioPage from '@/app/portfolio/page';

test('portfolio page exposes filter tabs and case study summaries', () => {
  render(<PortfolioPage />);
  expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument();
  expect(screen.getByText(/problem/i)).toBeInTheDocument();
  expect(screen.getByText(/solution/i)).toBeInTheDocument();
  expect(screen.getByText(/result/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --runInBand tests/unit/portfolio-page.test.tsx`
Expected: FAIL because the portfolio page and filter components are not implemented yet.

- [ ] **Step 3: Write minimal implementation**

```tsx
export default function PortfolioPage() {
  return (
    <>
      <div role="tablist">
        <button>All</button>
      </div>
      <article>
        <h3>Problem</h3>
        <p>Solution</p>
        <p>Result</p>
      </article>
    </>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --runInBand tests/unit/portfolio-page.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add app/portfolio/page.tsx components/portfolio/filter-tabs.tsx components/portfolio/case-study-card.tsx components/portfolio/case-study-grid.tsx
git commit -m "feat: add portfolio case studies"
```

### Task 5: Build the About and Contact pages

**Files:**
- Create: `app/about/page.tsx`
- Create: `app/contact/page.tsx`
- Create: `components/sections/brand-story.tsx`
- Create: `components/sections/values-grid.tsx`
- Create: `components/forms/contact-form.tsx`
- Create: `components/forms/discovery-call-link.tsx`
- Create: `components/sections/response-promise.tsx`
- Create: `tests/unit/about-page.test.tsx`
- Create: `tests/unit/contact-page.test.tsx`

- [ ] **Step 1: Write the failing test**

```ts
import { render, screen } from '@testing-library/react';
import AboutPage from '@/app/about/page';
import ContactPage from '@/app/contact/page';

test('about page describes the brand story and values', () => {
  render(<AboutPage />);
  expect(screen.getByText(/brand story/i)).toBeInTheDocument();
  expect(screen.getByText(/speed/i)).toBeInTheDocument();
  expect(screen.getByText(/clarity/i)).toBeInTheDocument();
});

test('contact page makes booking and whatsapp obvious', () => {
  render(<ContactPage />);
  expect(screen.getByRole('link', { name: /book a discovery call/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /whatsapp/i })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --runInBand tests/unit/about-page.test.tsx tests/unit/contact-page.test.tsx`
Expected: FAIL because the pages and contact components are not implemented yet.

- [ ] **Step 3: Write minimal implementation**

```tsx
export default function AboutPage() {
  return (
    <>
      <section>Brand story</section>
      <section>Speed</section>
      <section>Clarity</section>
    </>
  );
}
```

```tsx
export default function ContactPage() {
  return (
    <>
      <a href="/book">Book a discovery call</a>
      <a href="https://wa.me/">WhatsApp</a>
    </>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --runInBand tests/unit/about-page.test.tsx tests/unit/contact-page.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add app/about/page.tsx app/contact/page.tsx components/sections/brand-story.tsx components/sections/values-grid.tsx components/forms/contact-form.tsx components/forms/discovery-call-link.tsx components/sections/response-promise.tsx
git commit -m "feat: add about and contact pages"
```

### Task 6: Add motion, responsiveness, and end-to-end coverage

**Files:**
- Modify: `app/globals.css`
- Modify: `components/layout/header.tsx`
- Modify: `components/layout/footer.tsx`
- Modify: `components/ui/button.tsx`
- Create: `playwright.config.ts`
- Create: `tests/e2e/navigation.spec.ts`
- Create: `tests/e2e/contact.spec.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { test, expect } from '@playwright/test';

test('navigation reaches all six pages', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /services/i }).click();
  await expect(page).toHaveURL(/\/services/);
  await page.getByRole('link', { name: /portfolio/i }).click();
  await expect(page).toHaveURL(/\/portfolio/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx playwright test tests/e2e/navigation.spec.ts`
Expected: FAIL because the browser tests and responsive interaction wiring are not present yet.

- [ ] **Step 3: Write minimal implementation**

```css
.reveal {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 200ms ease, transform 200ms ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

```ts
export default defineConfig({
  testDir: './tests/e2e',
  use: { baseURL: 'http://localhost:3000' }
});
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx playwright test tests/e2e/navigation.spec.ts tests/e2e/contact.spec.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add app/globals.css components/layout/header.tsx components/layout/footer.tsx components/ui/button.tsx playwright.config.ts tests/e2e/navigation.spec.ts tests/e2e/contact.spec.ts
git commit -m "feat: add responsive polish and e2e coverage"
```

### Task 7: Final verification and release notes

**Files:**
- Modify: `README.md`
- Modify: `app/page.tsx`
- Modify: `app/services/page.tsx`
- Modify: `app/portfolio/page.tsx`
- Modify: `app/pricing/page.tsx`
- Modify: `app/about/page.tsx`
- Modify: `app/contact/page.tsx`

- [ ] **Step 1: Run the full validation set**

Run:
```bash
npm run lint
npm test
npm run build
npx playwright test
```
Expected: All commands pass without errors.

- [ ] **Step 2: Check content against the spec**

Verify each page includes the ordered sections defined in the design spec, the brand palette matches the approved colors, and the discovery-call CTA remains the dominant conversion path.

- [ ] **Step 3: Update release notes**

```md
## Bettrix Website
- Added six-page marketing site structure.
- Added design system tokens and shared layout.
- Added pricing, portfolio, contact, and WhatsApp conversion paths.
```

- [ ] **Step 4: Commit**

```bash
git add README.md app/page.tsx app/services/page.tsx app/portfolio/page.tsx app/pricing/page.tsx app/about/page.tsx app/contact/page.tsx
git commit -m "docs: finalize Bettrix website release"
```

