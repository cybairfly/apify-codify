/**
 * ASCII Art Utilities
 * Functions for generating and animating ASCII decorations
 */

const ascii = {
  // Box patterns
  boxes: {
    double: { tl: '╔', tr: '╗', bl: '╚', br: '╝', h: '═', v: '║' },
    single: { tl: '┌', tr: '┐', bl: '└', br: '┘', h: '─', v: '│' },
    heavy: { tl: '┏', tr: '┓', bl: '┗', br: '┛', h: '━', v: '┃' },
    bracket: { tl: '[', tr: ']', bl: '[', br: ']', h: '=', v: '|' },
  },

  // Arrows and indicators
  arrows: {
    right: '→',
    upRight: '↗',
    down: '↓',
    doubleDown: '↓↓',
    doubleRight: '>>',
    doubleLeft: '<<',
    up: '^',
    carets: '^^^',
  },

  // Progress indicators
  progress: {
    equals: '=',
    dash: '-',
    dot: '.',
    star: '*',
  },

  // Decorative symbols
  symbols: {
    check: '✓',
    star: '✶',
    bullet: '•',
    middot: '·',
    at: '@',
    hash: '#',
    dollar: '$',
  },

  // Emoticons and faces
  faces: {
    cat: '(=^･^=)',
    owl: '(o_o)',
    happy: '(^_^)',
    neutral: '(-_-)',
  },

  // Spinner frames
  spinner: {
    line: ['|', '/', '-', '\\'],
    dots: ['.', '..', '...', '....'],
    bounce: ['^', '-', 'v', '-'],
    arrows: ['←', '↖', '↑', '↗', '→', '↘', '↓', '↙'],
  },
};

/**
 * Create a box with content
 */
const createBox = ({ content, style = 'double', width = 20, padding = 1 }) => {
  const box = ascii.boxes[style];
  const innerWidth = width - 2;
  const paddedContent = content.padStart((innerWidth + content.length) / 2).padEnd(innerWidth);
  
  const top = box.tl + box.h.repeat(innerWidth) + box.tr;
  const middle = box.v + paddedContent + box.v;
  const bottom = box.bl + box.h.repeat(innerWidth) + box.br;
  
  return [top, middle, bottom].join('\n');
};

/**
 * Create a progress bar
 */
const createProgressBar = ({ progress = 50, width = 20, char = '=' }) => {
  const filled = Math.floor((progress / 100) * width);
  const empty = width - filled;
  return char.repeat(filled) + ' '.repeat(empty);
};

/**
 * Create animated spinner
 */
const createSpinner = (type = 'line') => {
  const frames = ascii.spinner[type];
  let currentFrame = 0;
  
  return {
    next: () => {
      const frame = frames[currentFrame];
      currentFrame = (currentFrame + 1) % frames.length;
      return frame;
    },
    frames,
  };
};

/**
 * Create a decorative line
 */
const createLine = ({ length = 40, char = '─', ends = '' }) => {
  if (ends) {
    return ends[0] + char.repeat(length - 2) + ends[1];
  }
  return char.repeat(length);
};

/**
 * Random ASCII decoration selector
 */
const randomDecoration = (category = 'symbols') => {
  const items = Object.values(ascii[category]);
  return items[Math.floor(Math.random() * items.length)];
};

/**
 * Create a label with ASCII decoration
 */
const createLabel = ({ text, prefix = '[ ', suffix = ' ]' }) => {
  return `${prefix}${text.toUpperCase()}${suffix}`;
};

/**
 * Format text with ASCII arrows
 */
const withArrow = (text, arrow = '→') => {
  return `${text} ${arrow}`;
};

/**
 * Create a status indicator
 */
const createStatus = ({ status, showIcon = true }) => {
  const icons = {
    success: '✓',
    error: '✗',
    warning: '!',
    info: 'i',
    pending: '...',
  };
  
  return showIcon ? `${icons[status] || ''} ${status}` : status;
};

/**
 * Generate random glitch text effect
 */
const glitchText = (text, intensity = 0.1) => {
  const glitchChars = '!<>-_\\/[]{}—=+*^?#$@';
  return text.split('').map(char => {
    if (Math.random() < intensity && char !== ' ') {
      return glitchChars[Math.floor(Math.random() * glitchChars.length)];
    }
    return char;
  }).join('');
};

module.exports = {
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
};
