# Bettrix Showcase Work Design Spec

## Overview
Bettrix should prominently showcase two client projects — **Prosno.io** and **PeakPack** — as compact, clickable proof items on the homepage and portfolio page. The goal is to strengthen credibility without adding heavy case-study content or changing the site’s overall structure.

## Goals
- Show Prosno.io and PeakPack as real work Bettrix has done.
- Keep the presentation compact and aligned with the current visual system.
- Make both items clickable to their live sites.
- Surface the showcase on both the homepage and portfolio page.

## Scope
In scope:
- Add a compact showcase strip for both projects.
- Link Prosno.io to `https://prosno-io.app/`.
- Link PeakPack to `https://peakpack.bettrix.tech/`.
- Reuse the existing card/pill styling so the strip feels native.

Out of scope:
- New case-study pages.
- Rewriting the portfolio filter system.
- Adding new routes or backend data.

## Placement
### Homepage
Insert the showcase strip near the existing trust/proof content so it reads as credibility, not as a separate feature block.

### Portfolio page
Add the same compact strip near the top of the page, before the larger case-study grid, so visitors see the strongest proof first.

## Component Design
The showcase should use two small link cards or pill-style items:
- Project name
- Optional short label such as “Live site” or “Featured work”
- External-link affordance

Each item should be visually distinct enough to scan quickly, but compact enough to avoid competing with the rest of the page.

## Interaction
- Clicking a project opens the live site in a new tab.
- The items should remain accessible and keyboard-focusable.
- Hover/focus states should match the current button/card treatment.

## Content
- **Prosno.io** — `https://prosno-io.app/`
- **PeakPack** — `https://peakpack.bettrix.tech/`

## Acceptance Criteria
- Both homepage and portfolio page show the new showcase strip.
- Both items link to the correct live URLs.
- The strip fits the existing layout without breaking responsiveness.
- The rest of the page content stays unchanged.
