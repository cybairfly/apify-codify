/**
 * ASCII Decoration Component
 * Animated or static ASCII art decorations
 */

const { ascii, createBox, createSpinner } = require('../utils/ascii-art');

const createAsciiDecoration = ({
  type = 'static',
  content = '',
  animation = null,
  position = 'inline',
  size = 'medium',
} = {}) => {
  return {
    render: () => `
      <div class="ascii-decoration ascii-decoration--${type} ascii-decoration--${position} ascii-decoration--${size}"
           data-animation="${animation || ''}"
           aria-hidden="true">
        <pre class="ascii-art">${content}</pre>
      </div>
    `,
    
    init: (element) => {
      if (!animation) return;
      
      const preElement = element.querySelector('.ascii-art');
      
      if (animation === 'spinner') {
        const spinner = createSpinner('line');
        setInterval(() => {
          preElement.textContent = spinner.next();
        }, 150);
      }
      
      if (animation === 'rotate') {
        const frames = ['|', '/', '-', '\\'];
        let frame = 0;
        setInterval(() => {
          preElement.textContent = frames[frame];
          frame = (frame + 1) % frames.length;
        }, 200);
      }
      
      if (animation === 'bounce') {
        const frames = ['^', ' ', 'v', ' '];
        let frame = 0;
        setInterval(() => {
          preElement.textContent = frames[frame];
          frame = (frame + 1) % frames.length;
        }, 300);
      }
      
      if (animation === 'pulse') {
        element.classList.add('ascii-decoration--pulse');
      }
    },
    
    styles: `
      .ascii-decoration {
        font-family: var(--font-mono);
        color: var(--color-text-tertiary);
        user-select: none;
        pointer-events: none;
      }
      
      .ascii-decoration--inline {
        display: inline-block;
      }
      
      .ascii-decoration--absolute {
        position: absolute;
      }
      
      .ascii-decoration--small {
        font-size: var(--text-xs);
      }
      
      .ascii-decoration--medium {
        font-size: var(--text-sm);
      }
      
      .ascii-decoration--large {
        font-size: var(--text-base);
      }
      
      .ascii-art {
        margin: 0;
        padding: 0;
        line-height: 1.2;
        white-space: pre;
        font-family: inherit;
      }
      
      .ascii-decoration--pulse {
        animation: pulse 2s ease-in-out infinite;
      }
      
      @keyframes pulse {
        0%, 100% {
          opacity: 0.3;
        }
        50% {
          opacity: 1;
        }
      }
      
      .ascii-decoration--rotate .ascii-art {
        animation: spin 1s linear infinite;
      }
      
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `,
  };
};

/**
 * Predefined ASCII decorations
 */
const decorations = {
  box: {
    simple: createBox({ content: ' ', style: 'single', width: 10 }),
    double: createBox({ content: ' ', style: 'double', width: 10 }),
    bracket: createBox({ content: ' ', style: 'bracket', width: 10 }),
  },
  
  arrows: {
    right: ascii.arrows.right,
    upRight: ascii.arrows.upRight,
    down: ascii.arrows.down,
    doubleDown: ascii.arrows.doubleDown,
  },
  
  faces: ascii.faces,
  
  symbols: ascii.symbols,
  
  progress: {
    bar: '====================',
    dots: '....................',
    dashes: '--------------------',
  },
  
  corners: {
    topLeft: '┌───',
    topRight: '───┐',
    bottomLeft: '└───',
    bottomRight: '───┘',
  },
};

module.exports = { createAsciiDecoration, decorations };
