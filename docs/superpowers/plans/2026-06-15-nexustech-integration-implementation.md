# Implementation Plan: NexusTech Integration with Bettrix

**Objective:** Integrate NexusTech's premium design system into Bettrix while preserving brand identity. Full scope, timeline ~2 hours.

---

## Task Breakdown

### 1. Setup Tailwind & Build Pipeline (30 min)

**1.1 Install dependencies**
```bash
npm install -D tailwindcss postcss autoprefixer @tailwindcss/forms
```

**1.2 Create `tailwind.config.js`**
- Map all Bettrix colors to Tailwind tokens
- Set custom spacing scale (8px base)
- Define typography scales (Plus Jakarta Sans + Inter)
- Border radius: 4px base

**1.3 Create `tailwind.css`**
- `@tailwind base`, `@tailwind components`, `@tailwind utilities`
- Custom utility classes for glass-card effect, text-gradient, reveal animations

**1.4 Create `postcss.config.js`**
- Process `tailwind.css` → compiled output

**1.5 Update `package.json`**
- Add script: `"build:css": "tailwindcss -i tailwind.css -o assets/styles.css"`
- Update build process to compile Tailwind before serving

**1.6 Update HTML head**
- Link compiled `assets/styles.css` (Tailwind output)
- Add fonts: Plus Jakarta Sans, Inter from Google Fonts

---

### 2. Component Library (45 min)

**2.1 Define utility classes in `tailwind.css`**

Glass card effect:
```css
@layer components {
  .glass-card {
    @apply bg-surface/60 backdrop-blur-xl border border-outline/30;
  }
  .glass-card:hover {
    @apply border-primary/50;
  }
}
```

Text gradient:
```css
.text-gradient {
  @apply bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent;
}
```

Reveal animation:
```css
@layer utilities {
  .reveal { @apply opacity-0 translate-y-5 transition-all duration-700; }
  .reveal.active { @apply opacity-100 translate-y-0; }
}
```

**2.2 Update HTML pages with Tailwind classes**

Buttons:
- Replace `.button` with `bg-primary text-white px-8 py-4 rounded font-bold hover:shadow-lg`
- Replace `.button--ghost` with `text-primary hover:opacity-80`

Cards:
- Replace `.card` with `glass-card p-8 rounded-lg`
- Add hover effects: `hover:border-primary/50`

Hero section:
- Use `grid grid-cols-1 lg:grid-cols-12 gap-gutter`
- Typography: `font-headline-lg text-headline-lg`

---

### 3. Page Refactoring (60 min)

#### 3.1 `index.html`
- Header: Keep existing structure, Tailwind classes
- Hero section:
  - Grid layout (7 col text, 5 col visual)
  - Update typography classes
  - Replace buttons with Tailwind versions
- Trust strip (if exists): Update spacing and typography
- Services section:
  - 3-column grid with middle card scaled up
  - Apply glass-card to each service
  - Add hover effects
- Showcase strip:
  - Keep existing render logic
  - Update card styling to match new design
  - Apply `glass-card` and hover states
- CTA section: Update button styling
- Footer: Keep existing, update spacing

#### 3.2 `portfolio.html`
- Hero: Same as index
- Portfolio grid:
  - Update card layout with glass-card
  - Proper spacing and gaps
  - Hover effects
- Showcase strip: Same as index
- Footer: Same

#### 3.3 `services.html`
- Hero with service intro
- Service cards grid (bento layout)
- Process section with left text, right visual
- Apply glass-card, proper spacing

#### 3.4 `contact.html`
- Form inputs: Dark background, 1px border, blue focus state
- Form layout: Proper spacing and grid
- CTA and messaging

#### 3.5 `pricing.html`
- Pricing cards with glass-card
- Highlight featured plan with scale effect
- Button styling

#### 3.6 `about.html`
- Typography updates
- Section spacing (64px/120px rhythm)
- Card styling

---

### 4. Testing & Validation (15 min)

**4.1 Run test suite**
```bash
npm test
```
Verify all existing tests pass.

**4.2 Responsive check**
- Mobile (< 768px): Single column, 20px margins
- Tablet (768-1279px): 8-column grid, 32px margins
- Desktop (1280px+): 12-column grid, 64px margins

**4.3 Link validation**
- Showcase strip links open correctly
- All internal navigation works
- CTA buttons route to correct pages

**4.4 Visual spot checks**
- No layout regressions
- Colors match Bettrix branding
- Component hover/active states work
- Animations smooth (reveal, transitions)

---

## Waves (Parallel Execution)

### Wave 1: Infrastructure (Sequential, 30 min)
1. Install Tailwind and dependencies
2. Create Tailwind config with color mapping
3. Create tailwind.css with utilities
4. Update package.json and build process

### Wave 2: Pages (Parallel, 45 min)
- **Agent A:** Refactor index.html + portfolio.html
- **Agent B:** Refactor services.html + contact.html
- **Agent C:** Refactor about.html + pricing.html

### Wave 3: Testing (Sequential, 15 min)
1. Run full test suite
2. Manual responsive testing
3. Verify showcase strip and links
4. Final visual review

---

## Git Workflow

**Branch:** `feature/nexustech-integration`

**Commits:**
1. `setup: configure tailwind and build pipeline`
2. `refactor: integrate nexustech design into index and portfolio`
3. `refactor: update services, contact, about, pricing pages`
4. `test: verify responsive design and component styling`

**PR criteria:**
- All tests passing
- Responsive design verified
- No console errors
- Showcase strip working
- Bettrix branding preserved

---

## Verification Checklist

- [ ] `npm run build:css` succeeds, outputs to `assets/styles.css`
- [ ] Site runs locally on port 4173 without errors
- [ ] Homepage responsive at 375px, 768px, 1280px
- [ ] Portfolio page responsive at all breakpoints
- [ ] Showcase strip displays with correct links
- [ ] All buttons and forms styled correctly
- [ ] Reveal animations work on scroll
- [ ] All tests pass (`npm test`)
- [ ] No console warnings or errors
- [ ] Build size reasonable (~50KB CSS uncompressed)
- [ ] Colors match Bettrix palette
- [ ] Typography hierarchy clear and consistent
