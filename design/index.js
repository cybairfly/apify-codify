/**
 * Design Framework Index
 * Central export point for all components and utilities
 */

// Components
const { createHero } = require('./components/hero');
const { createFeatureCard } = require('./components/feature-card');
const { createAsciiDecoration, decorations } = require('./components/ascii-decoration');
const { createNavigation } = require('./components/navigation');
const { createFooter } = require('./components/footer');
const { createTestimonial } = require('./components/testimonial');
const { createCtaSection } = require('./components/cta-section');
const { createCookbookFilter } = require('./components/cookbook-filter');
const { createButton } = require('./components/button');

// Layouts
const { createLandingLayout } = require('./layouts/landing');
const { createTwoColumnLayout } = require('./layouts/two-column');
const { createGridShowcase } = require('./layouts/grid-showcase');

// Utilities
const {
  ascii,
  createBox,
  createProgressBar,
  createSpinner,
  createLine,
  randomDecoration,
  createLabel,
  withArrow,
  createStatus,
  glitchText,
} = require('./utils/ascii-art');

const {
  createKeyframes,
  rotateAscii,
  fadeInOnScroll,
  staggerAnimation,
  typewriter,
  glitchEffect,
  hoverGlow,
  pulse,
  slideIn,
  animateCounter,
  parallax,
} = require('./utils/animations');

const {
  clampText,
  responsiveFontSize,
  formatNumber,
  smallCaps,
  truncate,
  mono,
  readingTime,
  highlight,
  codeFormat,
  gradientText,
  textShadow,
  titleCase,
  responsiveHeading,
  optimalLineLength,
  dynamicTracking,
} = require('./utils/typography');

module.exports = {
  // Components
  components: {
    createHero,
    createFeatureCard,
    createAsciiDecoration,
    createNavigation,
    createFooter,
    createTestimonial,
    createCtaSection,
    createCookbookFilter,
    createButton,
  },
  
  // Layouts
  layouts: {
    createLandingLayout,
    createTwoColumnLayout,
    createGridShowcase,
  },
  
  // Utilities
  utils: {
    ascii: {
      ascii,
      createBox,
      createProgressBar,
      createSpinner,
      createLine,
      randomDecoration,
      createLabel,
      withArrow,
      createStatus,
      glitchText,
      decorations,
    },
    animations: {
      createKeyframes,
      rotateAscii,
      fadeInOnScroll,
      staggerAnimation,
      typewriter,
      glitchEffect,
      hoverGlow,
      pulse,
      slideIn,
      animateCounter,
      parallax,
    },
    typography: {
      clampText,
      responsiveFontSize,
      formatNumber,
      smallCaps,
      truncate,
      mono,
      readingTime,
      highlight,
      codeFormat,
      gradientText,
      textShadow,
      titleCase,
      responsiveHeading,
      optimalLineLength,
      dynamicTracking,
    },
  },
};
