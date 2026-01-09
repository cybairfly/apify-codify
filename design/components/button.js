/**
 * Button Component
 * Reusable button styles and variants
 */

const { ascii } = require('../utils/ascii-art');

const createButton = ({
  text,
  href = '#',
  variant = 'primary',
  size = 'medium',
  arrow = false,
  fullWidth = false,
} = {}) => {
  const Tag = href ? 'a' : 'button';
  const hrefAttr = href ? `href="${href}"` : '';
  
  return {
    render: () => `
      <${Tag} 
        ${hrefAttr}
        class="btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full' : ''}">
        ${text} ${arrow ? ascii.arrows.right : ''}
      </${Tag}>
    `,
    
    styles: `
      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--space-2);
        padding: var(--space-3) var(--space-6);
        font-size: var(--text-base);
        font-weight: var(--weight-semibold);
        text-decoration: none;
        border: var(--border-width) solid transparent;
        border-radius: var(--radius-md);
        cursor: pointer;
        transition: all var(--duration-fast) var(--ease-out);
        white-space: nowrap;
      }
      
      /* Variants */
      .btn--primary {
        color: var(--color-bg-primary);
        background: var(--color-accent-primary);
        border-color: var(--color-accent-primary);
      }
      
      .btn--primary:hover {
        background: transparent;
        color: var(--color-accent-primary);
        box-shadow: var(--shadow-glow);
      }
      
      .btn--secondary {
        color: var(--color-text-primary);
        background: transparent;
        border-color: var(--color-border-hover);
      }
      
      .btn--secondary:hover {
        border-color: var(--color-accent-primary);
        color: var(--color-accent-primary);
      }
      
      .btn--ghost {
        color: var(--color-text-secondary);
        background: transparent;
        border-color: transparent;
      }
      
      .btn--ghost:hover {
        color: var(--color-accent-primary);
      }
      
      .btn--outline {
        color: var(--color-accent-primary);
        background: transparent;
        border-color: var(--color-accent-primary);
      }
      
      .btn--outline:hover {
        color: var(--color-bg-primary);
        background: var(--color-accent-primary);
      }
      
      /* Sizes */
      .btn--small {
        padding: var(--space-2) var(--space-4);
        font-size: var(--text-sm);
      }
      
      .btn--medium {
        padding: var(--space-3) var(--space-6);
        font-size: var(--text-base);
      }
      
      .btn--large {
        padding: var(--space-4) var(--space-8);
        font-size: var(--text-lg);
      }
      
      /* Modifiers */
      .btn--full {
        width: 100%;
      }
      
      .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      
      @media (max-width: 768px) {
        .btn {
          padding: var(--space-3) var(--space-5);
        }
      }
    `,
  };
};

module.exports = { createButton };
