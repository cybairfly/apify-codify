# Design System

Complete design tokens and guidelines for the E2B-inspired framework.

## Color Palette

### Base Colors
```css
--color-bg-primary: #0a0a0a;          /* Near-black background */
--color-bg-secondary: #050505;        /* Deeper black */
--color-bg-tertiary: #111111;         /* Card/section backgrounds */
--color-bg-elevated: #191919;         /* Elevated surfaces */

--color-text-primary: #f5f5f5;        /* Off-white for headlines */
--color-text-secondary: #d1d5db;      /* Light gray for body text */
--color-text-tertiary: #9ca3af;       /* Medium gray for meta */
--color-text-muted: #6b7280;          /* Subtle gray */

--color-accent-primary: #ff6e3a;      /* Orange accent (E2B brand) */
--color-accent-secondary: #e65c2e;    /* Darker orange */
--color-accent-warning: #fbbf24;      /* Yellow for highlights */
--color-accent-purple: #a855f7;       /* Purple accent */

--color-border: #262626;              /* Subtle borders */
--color-border-hover: #404040;        /* Hover state borders */
--color-border-active: #525252;       /* Active state borders */
```

### Semantic Colors
```css
--color-success: #10b981;
--color-info: #3b82f6;
--color-warning: #fbbf24;
--color-error: #ef4444;
```

## Typography

### Font Families
```css
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'SF Mono', 'Monaco', 'Cascadia Code', 'Courier New', monospace;
--font-display: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale
```css
--text-xs: 0.65rem;      /* 10.4px - tiny labels */
--text-sm: 0.75rem;      /* 12px - small text, captions */
--text-base: 0.875rem;   /* 14px - body text */
--text-md: 1rem;         /* 16px - comfortable reading */
--text-lg: 1.125rem;     /* 18px - large body */
--text-xl: 1.5rem;       /* 24px - section headers */
--text-2xl: 2rem;        /* 32px - page titles */
--text-3xl: 2.5rem;      /* 40px - hero headers */
--text-4xl: 3.5rem;      /* 56px - massive hero text */
--text-5xl: 4.5rem;      /* 72px - oversized displays */
```

### Font Weights
```css
--weight-normal: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
--weight-black: 900;
```

### Line Heights
```css
--leading-tight: 1.1;     /* Headers */
--leading-snug: 1.25;     /* Subheaders */
--leading-normal: 1.5;    /* Body text */
--leading-relaxed: 1.75;  /* Comfortable reading */
```

## Spacing Scale

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.5rem;    /* 24px */
--space-6: 2rem;      /* 32px */
--space-8: 3rem;      /* 48px */
--space-10: 4rem;     /* 64px */
--space-12: 6rem;     /* 96px */
--space-16: 8rem;     /* 128px */
--space-20: 12rem;    /* 192px */
```

## Layout

### Container Widths
```css
--container-xs: 640px;
--container-sm: 768px;
--container-md: 1024px;
--container-lg: 1280px;
--container-xl: 1536px;
```

### Grid System
- 12-column responsive grid
- Flexible gutters: 16px (mobile) to 32px (desktop)
- Support for nested grids

## Borders & Radius

```css
--border-width: 1px;
--border-width-thick: 2px;

--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

## Shadows & Elevation

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.5);
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.6);
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.7);
--shadow-glow: 0 0 20px rgba(0, 255, 136, 0.3);
```

## Animations

### Timing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Durations
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--duration-slower: 600ms;
```

### Common Animations
- ASCII character rotation
- Fade in/out
- Slide transitions
- Hover scale effects
- Glow pulse effects

## ASCII Art Patterns

### Decorative Elements
```
Boxes:     ╔═══╗  ┌───┐  [===]  (o_o)
           ║   ║  │   │  
           ╚═══╝  └───┘  

Arrows:    →  ↗  ↓↓  >>  <<  ^  ^^^

Progress:  ======  ----  ....  ****

Symbols:   ✓  ✶  •  ·  @  #  $
```

### Animation Characters
```
Frames for rotation: | / - \
Frames for bounce: ^ - v
Frames for loading: . .. ... ....
```

## Component Patterns

### Card Style
- Dark background with subtle border
- Minimal padding for information density
- Hover effect: border brightens, subtle lift
- Optional ASCII decoration in corner

### Button Styles
- **Primary**: Bright accent background, bold text
- **Secondary**: Outlined with accent color
- **Ghost**: Text-only with hover underline
- All include arrow (→) or ASCII decoration

### Section Layouts
- Full-width hero with centered content
- Alternating 2-column sections (image/text)
- Grid layouts for feature cards (3-4 columns)
- Compact footer with multiple columns

### Typography Hierarchy
- Oversized hero headers (4xl-5xl)
- Section titles in uppercase, smaller font (xs-sm)
- Feature titles medium-large (xl-2xl)
- Body text kept small and tight (sm-base)
- Heavy use of letter-spacing for small caps

## Interaction Patterns

### Hover Effects
- Subtle border color change
- ASCII decoration animation
- Scale transform (1.02-1.05)
- Glow effect on accent elements

### Scroll Behaviors
- Sticky navigation header
- Fade-in on scroll for sections
- Parallax on hero elements (optional)

### Responsive Breakpoints
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

## Accessibility

- Minimum contrast ratio 4.5:1 for body text
- 3:1 for large text and UI components
- Focus indicators using accent colors
- Keyboard navigation support
- Semantic HTML structure
- ARIA labels for ASCII decorations
