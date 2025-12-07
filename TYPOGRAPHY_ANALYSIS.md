# Typography Analysis & System Documentation

## Current State Analysis

### Font Family
- **Primary:** SF-Pro (custom font, weights 100-900)
- **Loaded but unused:** Comfortaa, Roboto (from Google Fonts - should be removed)

### Current Typography Issues Found

#### 1. **Inconsistent Units**
- Mix of `px`, `vw`, `rem`, `em`
- H1: `10vw` (extremely large, can break layout)
- H2: `5vw` (responsive but inconsistent)
- H3: `48px` (fixed, not responsive)
- Body: `16px` (fixed)
- Various Tailwind classes mixing units

#### 2. **Font Weights (Inconsistent)**
- Body: 400 (Regular)
- H1/H2: 500 (Medium)
- H3: 700 (Bold)
- Various: 600 (Semibold), Bold (700)
- Some using `font-light` (300), `font-semibold` (600)
- No clear weight hierarchy

#### 3. **Line Heights (Inconsistent)**
- H1: `1` (too tight)
- H2/H3: `140%` (good)
- Body: varies (`leading-relaxed`, `leading-tight`, default)
- No consistent system

#### 4. **Font Sizes (No Unified Scale)**
- H1: 10vw (responsive, but extreme)
- H2: 5vw (responsive)
- H3: 48px (fixed)
- H5: `larger` (undefined)
- Body: 16px
- Various: text-xs, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl
- Project title: `text-[36px]` (arbitrary)
- Mobile menu: `text-4xl` (36px)

#### 5. **Accessibility Issues**
- `text-gray-400` (#9CA3AF) on light background - contrast ratio ~4.5:1 (needs 4.5:1 for normal, 3:1 for large)
- `text-gray-600` (#4B5563) - better but could be darker
- Some light text might not meet WCAG AA standards

#### 6. **Spacing Issues**
- Letter spacing: `-0.03em` only on headings
- `tracking-wider` used inconsistently
- No consistent spacing scale

---

## Proposed Typography System

### Type Scale (Modular Scale: 1.25 ratio)
Based on 16px base (1rem):

- **H1:** 3.052rem (48.8px) → `clamp(2rem, 5vw, 3.052rem)`
- **H2:** 2.441rem (39.1px) → `clamp(1.75rem, 4vw, 2.441rem)`
- **H3:** 1.953rem (31.2px) → `clamp(1.5rem, 3vw, 1.953rem)`
- **H4:** 1.563rem (25px) → `clamp(1.25rem, 2.5vw, 1.563rem)`
- **H5:** 1.25rem (20px) → `clamp(1.125rem, 2vw, 1.25rem)`
- **H6:** 1rem (16px) → `clamp(0.875rem, 1.5vw, 1rem)`
- **Body:** 1rem (16px) - base
- **Small:** 0.875rem (14px)
- **Caption:** 0.75rem (12px)
- **Button:** 1rem (16px)

### Font Weights (Unified System)
- **H1-H3:** 600 (Semibold) - for prominence
- **H4-H6:** 500 (Medium) - for hierarchy
- **Body:** 400 (Regular) - for readability
- **Small/Caption:** 400 (Regular)
- **Buttons:** 500 (Medium) - for emphasis
- **Labels:** 500 (Medium)

### Line Heights (Readability Optimized)
- **H1:** 1.2 (tight for large headings)
- **H2-H3:** 1.3 (slightly tight for headings)
- **H4-H6:** 1.4 (balanced)
- **Body:** 1.6 (comfortable reading)
- **Small:** 1.5
- **Buttons:** 1.5 (compact)

### Letter Spacing
- **H1-H3:** -0.02em (slightly tighter)
- **H4-H6:** -0.01em (minimal)
- **Body:** 0 (normal)
- **Small/Caption:** 0.01em (slightly wider for small text)
- **Buttons:** 0.02em (wider for emphasis)

### Color Contrast (WCAG AA Compliant)
- **Primary Text:** #000000 (black) - 21:1 contrast
- **Secondary Text:** #1F2937 (dark gray) - 13:1 contrast
- **Tertiary Text:** #4B5563 (medium gray) - 7:1 contrast
- **Body Text:** #000000 or #1F2937
- **Buttons:** White text on black (#FFFFFF on #000000)

---

## Implementation Plan

1. Create CSS variables for all typography values
2. Replace all hardcoded sizes with rem-based clamp() functions
3. Normalize font weights across all headings
4. Fix contrast issues
5. Remove unused font imports
6. Update all components to use new system

