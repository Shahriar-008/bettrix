# NexusTech Design Integration with Bettrix Branding

**Scope:** Integrate NexusTech's premium component library, spacing system, and layout patterns into Bettrix while preserving Bettrix brand colors and identity.

---

## Strategy: Hybrid Integration

**What Stays (Bettrix Identity):**
- Header/footer structure and Bettrix branding
- Current color scheme (white bg, navy text, blue accents)
- Existing page routes and structure
- Site navigation and information architecture

**What Changes (NexusTech Improvements):**
- Premium spacing rhythm (64px margins, 120px section gaps, 8px scale)
- Component patterns (soft 4px corners, tonal layers, hover states)
- Typography hierarchy (Plus Jakarta Sans for headlines, Inter for body)
- Grid system (12-column desktop, 8-column tablet, 4-column mobile)
- Responsive breakpoints aligned to NexusTech's system
- Card/button/input designs with glassmorphism and subtle borders

---

## Architecture

### 1. Tailwind Configuration
**File:** `tailwind.config.js` (new)

Replace manual CSS with Tailwind, configured with:
- **Custom spacing scale:** 8px base unit (matches NexusTech)
- **Color tokens:** Map Bettrix colors to NexusTech naming:
  - Primary accent: Bettrix blue (#1a56db) → `primary`
  - Navy text: (#1e3a5f) → `navy`
  - Surface layers: Bettrix whites → `surface`, `surface-container`
  - Text colors: → `on-surface`, `on-surface-variant`
- **Border radius:** Soft 4px base (matches NexusTech)
- **Typography scales:** Plus Jakarta Sans for `headline-*`, Inter for `body-*` and `label-*`

### 2. CSS Architecture
**Files:**
- `assets/styles.css` — Core variables and utility helpers (kept simple)
- `tailwind.css` — Tailwind directives, custom utilities
- HTML pages use `class=""` with Tailwind classes

### 3. Component Patterns
Apply NexusTech patterns to existing Bettrix components:

| Component | NexusTech Pattern | Implementation |
|-----------|-------------------|-----------------|
| Buttons | Primary (solid blue bg), Secondary (border), Ghost (no bg) | Replace `.button` with Tailwind classes |
| Cards | Soft border, hover border-color change, background lift | `.glass-card` utility in Tailwind |
| Input fields | Darker background, 1px border, focus blue border | Form styling from Tailwind |
| Hero section | Premium spacing, gradient text on accent | Update hero layout with grid cols/gaps |
| Services grid | 3-column bento layout, center card scaled up | Convert to Tailwind grid |
| Showcase strip | Soft cards with hover effects, proper spacing | Keep existing but restyle with Tailwind |

### 4. Responsive Breakpoints
- **Desktop:** 1280px+ (12-column grid, 64px margins)
- **Tablet:** 768px-1279px (8-column grid, 32px margins)
- **Mobile:** <768px (4-column grid / single column, 20px margins)

---

## Implementation Tasks

### Phase 1: Setup Tailwind & Config
1. Create `tailwind.config.js` with Bettrix color mapping
2. Create `tailwind.css` with Tailwind directives
3. Add Tailwind build to `package.json` scripts
4. Update HTML head to link compiled CSS

### Phase 2: Component Refactor
1. Update button styles (`.button`, `.button--ghost`)
2. Refactor card styles (`.card`, `.service-card`, `.showcase-card`)
3. Update hero section layout (spacing, typography classes)
4. Refactor services grid (bento layout)
5. Update form inputs (contact form, etc.)

### Phase 3: Pages Refactor
1. `index.html` — Hero + services + showcase + CTA
2. `portfolio.html` — Hero + portfolio grid + showcase
3. `services.html` — Hero + service cards + process
4. `contact.html` — Form with updated inputs
5. `about.html` — Typography and spacing updates
6. `pricing.html` — Card layouts with new styles

### Phase 4: Testing & Validation
1. All tests pass (existing test suite)
2. Responsive design verified (mobile, tablet, desktop)
3. Link to showcase strip preserved
4. Performance: no regression in build size or load time

---

## Color Mapping (Bettrix → NexusTech Tokens)

```
Bettrix                    NexusTech Token
-------------------------------------------
#ffffff (bg)              surface
#f9fafb (surface)         surface-container-low
#eef2f7 (surface-strong)  surface-container
#1e3a5f (navy)            on-surface (text)
#1a56db (blue/accent)     primary
#0e9f6e (green)           tertiary (success)
#374151 (text)            on-surface
#6b7280 (muted)           on-surface-variant
#e5e7eb (line)            outline
```

---

## Typography

- **Headlines:** `Plus Jakarta Sans` (700-800 weight)
  - XL: 48px
  - LG: 32px
  - MD: 24px
  - SM: 18px

- **Body:** `Inter` (400 weight)
  - LG: 18px / 1.6
  - MD: 16px / 1.6
  - SM: 14px / 1.5

- **Labels:** `Inter` (600 weight, uppercase)
  - MD: 12px / 1

---

## Spacing System

```
8px base unit:
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 80px
5xl: 120px (section gap)
```

---

## Component Examples

### Button
```html
<!-- Primary -->
<button class="bg-primary text-white px-8 py-4 rounded font-bold hover:shadow-lg">
  Action
</button>

<!-- Secondary -->
<button class="border border-outline text-on-surface px-8 py-4 rounded font-bold hover:bg-surface-container">
  Secondary
</button>

<!-- Ghost -->
<button class="text-primary px-8 py-4 rounded font-bold hover:text-primary/80">
  Ghost
</button>
```

### Card (Glass Effect)
```html
<div class="bg-surface border border-outline/30 rounded-lg p-8 hover:border-primary/50 transition-all">
  <!-- Content -->
</div>
```

### Hero Layout
```html
<section class="py-120 px-20 md:px-64">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-32">
    <div class="lg:col-span-7">
      <!-- Headline, copy, CTA -->
    </div>
    <div class="lg:col-span-5">
      <!-- Visual -->
    </div>
  </div>
</section>
```

---

## Testing Strategy

1. **Unit Tests:** Verify components render with correct classes
2. **Visual Tests:** Check layout at breakpoints (mobile, tablet, desktop)
3. **Link Tests:** Ensure showcase strip and CTA links work
4. **Performance:** CSS file size, no unused classes
5. **Accessibility:** Color contrast, semantic HTML preserved

---

## Success Criteria

✅ All existing tests pass  
✅ Responsive design works at all breakpoints  
✅ Bettrix branding and colors preserved  
✅ NexusTech spacing and component patterns applied  
✅ Build time < 5 seconds  
✅ No JavaScript errors in browser console  
✅ Showcase strip displays and links work  
✅ All pages render correctly locally
