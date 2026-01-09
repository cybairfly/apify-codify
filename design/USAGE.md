# Component Usage Guide

Quick reference for using the design framework components.

## Basic Setup

```javascript
const {
  components,
  layouts,
  utils,
} = require('./design');
```

## Components

### Hero

```javascript
const hero = components.createHero({
  headline: 'YOUR PRODUCT NAME',
  subheadline: 'BUILT FOR DEVELOPERS',
  description: 'Detailed description of what your product does.',
  primaryCta: { text: 'Get Started', href: '/signup' },
  secondaryCta: { text: 'View Docs', href: '/docs' },
  badge: 'NEW',
  asciiDecoration: '(=^･^=)',
});

// Render
document.body.innerHTML += hero.render();
```

### Feature Card

```javascript
const card = components.createFeatureCard({
  title: 'Fast Performance',
  description: 'Lightning-fast load times and smooth interactions.',
  asciiIcon: '╔═══╗\n║ ✓ ║\n╚═══╝',
  link: { text: 'Learn More', href: '/features' },
  badge: 'PRO',
  variant: 'highlight', // or 'default'
});
```

### Navigation

```javascript
const nav = components.createNavigation({
  logo: { text: 'BRAND', href: '/' },
  links: [
    { text: 'Product', href: '/product' },
    { text: 'Pricing', href: '/pricing' },
    { text: 'Docs', href: '/docs' },
  ],
  primaryCta: { text: 'Sign Up', href: '/signup' },
  sticky: true,
});

// Initialize after render
const navElement = document.querySelector('.navigation');
nav.init(navElement);
```

### Footer

```javascript
const footer = components.createFooter({
  columns: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '/features' },
        { text: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com', icon: '[GH]' },
    { label: 'Twitter', href: 'https://twitter.com', icon: '[TW]' },
  ],
  copyright: '©2025 Your Company',
  badge: 'OPEN SOURCE',
});
```

### Button

```javascript
const button = components.createButton({
  text: 'Get Started',
  href: '/signup',
  variant: 'primary', // primary, secondary, ghost, outline
  size: 'medium', // small, medium, large
  arrow: true,
  fullWidth: false,
});
```

### ASCII Decoration

```javascript
const decoration = components.createAsciiDecoration({
  type: 'animated',
  content: '|',
  animation: 'spinner', // spinner, rotate, bounce, pulse
  position: 'inline', // inline, absolute
  size: 'medium', // small, medium, large
});

// Initialize animation
const element = document.querySelector('.ascii-decoration');
decoration.init(element);
```

### Testimonial

```javascript
const testimonial = components.createTestimonial({
  quote: 'This framework changed how we build websites.',
  author: 'Jane Doe',
  role: 'CTO',
  company: 'Tech Corp',
  badge: 'VERIFIED',
  variant: 'highlight',
});
```

### CTA Section

```javascript
const cta = components.createCtaSection({
  headline: 'Ready to Get Started?',
  description: 'Join thousands of developers building with this framework.',
  primaryCta: { text: 'Start Now', href: '/signup' },
  secondaryCta: { text: 'View Demo', href: '/demo' },
  variant: 'highlight',
  asciiDecoration: '>>> >>>',
});
```

### Cookbook Filter

```javascript
const filter = components.createCookbookFilter({
  categories: [
    { label: 'JavaScript', value: 'js', icon: '[JS]' },
    { label: 'Python', value: 'py', icon: '[PY]' },
    { label: 'React', value: 'react', icon: '[R]' },
  ],
  onFilterChange: (activeCategories) => {
    console.log('Active:', activeCategories);
    // Filter your content here
  },
});
```

## Layouts

### Landing Page

```javascript
const page = layouts.createLandingLayout({
  navigation: nav,
  hero: hero,
  sections: [
    featuresSection,
    testimonialsSection,
  ],
  cta: cta,
  footer: footer,
});
```

### Two Column

```javascript
const twoCol = layouts.createTwoColumnLayout({
  left: '<img src="image.jpg" alt="Feature">',
  right: '<h3>Feature Title</h3><p>Description...</p>',
  reverse: false,
  verticalAlign: 'center', // top, center, bottom
  gap: 'large', // small, medium, large
});
```

### Grid Showcase

```javascript
const grid = layouts.createGridShowcase({
  title: 'Our Features',
  description: 'Everything you need to build great products.',
  items: [card1.render(), card2.render(), card3.render()],
  columns: 3,
  gap: 'medium',
});
```

## Utilities

### ASCII Art

```javascript
const { ascii } = utils.ascii;

// Use predefined symbols
const arrow = ascii.arrows.right; // →
const check = ascii.symbols.check; // ✓
const face = ascii.faces.cat; // (=^･^=)

// Create boxes
const box = utils.ascii.createBox({
  content: 'TEXT',
  style: 'double', // double, single, heavy, bracket
  width: 20,
});

// Create progress bar
const progress = utils.ascii.createProgressBar({
  progress: 75,
  width: 20,
  char: '=',
});

// Create spinner
const spinner = utils.ascii.createSpinner('line');
setInterval(() => {
  element.textContent = spinner.next();
}, 150);

// Create label
const label = utils.ascii.createLabel({
  text: 'new',
  prefix: '[ ',
  suffix: ' ]',
});
```

### Animations

```javascript
// Rotate ASCII character
const stopRotate = utils.animations.rotateAscii(
  element,
  ['|', '/', '-', '\\'],
  1000
);

// Fade in on scroll
utils.animations.fadeInOnScroll(
  document.querySelectorAll('.fade-in'),
  { threshold: 0.1 }
);

// Typewriter effect
utils.animations.typewriter(
  element,
  'Hello, World!',
  50
);

// Glitch effect
utils.animations.glitchEffect(element, 300);

// Hover glow
utils.animations.hoverGlow(element, '#00ff88');

// Counter animation
utils.animations.animateCounter(element, 1000, 2000);

// Parallax
const stopParallax = utils.animations.parallax(
  document.querySelectorAll('.parallax'),
  0.5
);
```

### Typography

```javascript
// Format number
const formatted = utils.typography.formatNumber(15000); // "15k"

// Truncate text
const short = utils.typography.truncate(longText, 100);

// Title case
const title = utils.typography.titleCase('hello world'); // "Hello World"

// Reading time
const time = utils.typography.readingTime(articleText); // "5 min read"

// Responsive font size
const fontSize = utils.typography.responsiveFontSize(1, 3, 320, 1920);

// Gradient text style
const gradient = utils.typography.gradientText(['#00ff88', '#0088ff']);
// Apply to element: Object.assign(element.style, gradient);
```

## Design Tokens

Access design tokens via CSS variables:

```css
color: var(--color-accent-primary);
font-size: var(--text-xl);
padding: var(--space-6);
border-radius: var(--radius-lg);
```

## Responsive Design

All components are responsive by default. Breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px
