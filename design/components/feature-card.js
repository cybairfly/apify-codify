/**
 * Feature Card Component
 * Card displaying a feature with icon, title, description, and optional link
 */

const { ascii } = require('../utils/ascii-art');

const createFeatureCard = ({
  title,
  description,
  icon = null,
  asciiIcon = null,
  link = null,
  badge = null,
  variant = 'default',
} = {}) => {
  return {
    render: () => `
      <div class="feature-card feature-card--${variant}">
        ${asciiIcon ? `
          <div class="feature-card-ascii" aria-hidden="true">
            <pre class="ascii-art">${asciiIcon}</pre>
          </div>
        ` : icon ? `
          <div class="feature-card-icon">
            ${icon}
          </div>
        ` : ''}
        
        <div class="feature-card-content">
          ${badge ? `
            <span class="feature-card-badge">${badge}</span>
          ` : ''}
          
          <h3 class="feature-card-title">
            ${title}
          </h3>
          
          <p class="feature-card-description">
            ${description}
          </p>
          
          ${link ? `
            <a href="${link.href}" class="feature-card-link">
              ${link.text} ${ascii.arrows.right}
            </a>
          ` : ''}
        </div>
      </div>
    `,
    
    styles: `
      .feature-card {
        position: relative;
        background: var(--color-bg-tertiary);
        border: var(--border-width) solid var(--color-border);
        border-radius: var(--radius-lg);
        padding: var(--space-6);
        transition: all var(--duration-base) var(--ease-out);
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      
      .feature-card:hover {
        border-color: var(--color-border-hover);
        transform: translateY(-2px);
      }
      
      .feature-card--highlight {
        border-color: var(--color-accent-primary);
      }
      
      .feature-card--highlight:hover {
        box-shadow: var(--shadow-glow);
      }
      
      .feature-card-ascii {
        font-family: var(--font-mono);
        font-size: var(--text-sm);
        color: var(--color-accent-primary);
        margin-bottom: var(--space-4);
        line-height: 1.2;
      }
      
      .feature-card-icon {
        width: 48px;
        height: 48px;
        margin-bottom: var(--space-4);
        color: var(--color-accent-primary);
      }
      
      .feature-card-content {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      
      .feature-card-badge {
        display: inline-block;
        font-size: var(--text-xs);
        font-family: var(--font-mono);
        color: var(--color-accent-primary);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: var(--space-2);
      }
      
      .feature-card-title {
        font-size: var(--text-xl);
        font-weight: var(--weight-bold);
        line-height: var(--leading-snug);
        margin-bottom: var(--space-3);
        color: var(--color-text-primary);
      }
      
      .feature-card-description {
        font-size: var(--text-sm);
        line-height: var(--leading-normal);
        color: var(--color-text-secondary);
        margin-bottom: var(--space-4);
        flex: 1;
      }
      
      .feature-card-link {
        font-size: var(--text-sm);
        font-weight: var(--weight-medium);
        color: var(--color-accent-secondary);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: var(--space-2);
        transition: color var(--duration-fast) var(--ease-out);
      }
      
      .feature-card-link:hover {
        color: var(--color-accent-primary);
      }
      
      @media (max-width: 768px) {
        .feature-card {
          padding: var(--space-5);
        }
      }
    `,
  };
};

module.exports = { createFeatureCard };
