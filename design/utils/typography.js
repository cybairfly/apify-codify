/**
 * Typography Utilities
 * Helper functions for text formatting and styling
 */

/**
 * Clamp text to specified lines with ellipsis
 */
const clampText = (text, maxLines = 3) => {
  return {
    display: '-webkit-box',
    WebkitLineClamp: maxLines,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  };
};

/**
 * Calculate optimal font size based on container
 */
const responsiveFontSize = (minSize, maxSize, minWidth = 320, maxWidth = 1920) => {
  return `clamp(${minSize}rem, ${minSize}rem + (${maxSize} - ${minSize}) * ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth})), ${maxSize}rem)`;
};

/**
 * Format number with suffix (k, M, B)
 */
const formatNumber = (num) => {
  if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B';
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
};

/**
 * Convert text to uppercase with tracking
 */
const smallCaps = (text) => {
  return {
    text: text.toUpperCase(),
    letterSpacing: '0.1em',
    fontSize: '0.75rem',
  };
};

/**
 * Truncate text with ellipsis
 */
const truncate = (text, maxLength = 100, ellipsis = '...') => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - ellipsis.length) + ellipsis;
};

/**
 * Add monospace styling
 */
const mono = (text) => {
  return {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.875em',
    letterSpacing: '-0.02em',
  };
};

/**
 * Calculate reading time
 */
const readingTime = (text, wordsPerMinute = 200) => {
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

/**
 * Highlight text with accent color
 */
const highlight = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
};

/**
 * Format as code snippet
 */
const codeFormat = (text) => {
  return `\`${text}\``;
};

/**
 * Create gradient text effect
 */
const gradientText = (colors = ['#00ff88', '#0088ff']) => {
  return {
    background: `linear-gradient(90deg, ${colors.join(', ')})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };
};

/**
 * Add text shadow for depth
 */
const textShadow = (depth = 'medium') => {
  const shadows = {
    light: '0 1px 2px rgba(0, 0, 0, 0.3)',
    medium: '0 2px 4px rgba(0, 0, 0, 0.5)',
    heavy: '0 4px 8px rgba(0, 0, 0, 0.7)',
    glow: '0 0 10px rgba(0, 255, 136, 0.5)',
  };
  return shadows[depth] || shadows.medium;
};

/**
 * Format title case
 */
const titleCase = (text) => {
  return text.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });
};

/**
 * Create responsive heading sizes
 */
const responsiveHeading = (level) => {
  const sizes = {
    1: { mobile: '2.5rem', desktop: '4.5rem' },
    2: { mobile: '2rem', desktop: '3.5rem' },
    3: { mobile: '1.5rem', desktop: '2.5rem' },
    4: { mobile: '1.25rem', desktop: '2rem' },
    5: { mobile: '1.125rem', desktop: '1.5rem' },
    6: { mobile: '1rem', desktop: '1.25rem' },
  };
  
  return sizes[level] || sizes[3];
};

/**
 * Calculate optimal line length
 */
const optimalLineLength = (fontSize) => {
  // Aim for 50-75 characters per line
  const charWidth = fontSize * 0.5;
  return Math.round(65 * charWidth);
};

/**
 * Add letter spacing based on font size
 */
const dynamicTracking = (fontSize) => {
  // Smaller fonts need more tracking
  if (fontSize < 0.875) return '0.05em';
  if (fontSize > 2) return '-0.02em';
  return '0';
};

module.exports = {
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
};
