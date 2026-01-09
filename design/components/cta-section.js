/**
 * CTA Section Component
 * Call-to-action section with headline and buttons
 */

const { ascii } = require('../utils/ascii-art');

const createCtaSection = ({
  headline,
  description = '',
  primaryCta = { text: 'Get Started', href: '#' },
  secondaryCta = null,
  variant = 'default',
  asciiDecoration = null,
} = {}) => {
  return {
    render: () => `
      <section class="cta-section cta-section--${variant}">
        <div class="container">
          <div class="cta-content">
            ${asciiDecoration ? `
              <div class="cta-decoration" aria-hidden="true">
                <pre class="ascii-art">${asciiDecoration}</pre>
              </div>
            ` : ''}
            
            <h2 class="cta-headline">
              ${headline}
            </h2>
            
            ${description ? `
              <p class="cta-description">
                ${description}
              </p>
            ` : ''}
            
            <div class="cta-actions">
              <a href="${primaryCta.href}" class="btn btn-primary">
                ${primaryCta.text} ${ascii.arrows.right}
              </a>
              
              ${secondaryCta ? `
                <a href="${secondaryCta.href}" class="btn btn-secondary">
                  ${secondaryCta.text}
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </section>
    `,
    
    styles: `
      .cta-section {
        padding: var(--space-16) 0;
        position: relative;
        overflow: hidden;
      }
      
      .cta-section--highlight {
        background: var(--color-bg-tertiary);
        border-top: var(--border-width) solid var(--color-border);
        border-bottom: var(--border-width) solid var(--color-border);
      }
      
      .cta-content {
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
        position: relative;
      }
      
      .cta-decoration {
        position: absolute;
        top: -30px;
        right: -30px;
        font-family: var(--font-mono);
        font-size: var(--text-sm);
        color: var(--color-text-muted);
        opacity: 0.3;
        pointer-events: none;
      }
      
      .cta-headline {
        font-size: var(--text-4xl);
        font-weight: var(--weight-black);
        line-height: var(--leading-tight);
        color: var(--color-text-primary);
        margin-bottom: var(--space-4);
      }
      
      .cta-description {
        font-size: var(--text-lg);
        line-height: var(--leading-relaxed);
        color: var(--color-text-secondary);
        margin-bottom: var(--space-8);
      }
      
      .cta-actions {
        display: flex;
        gap: var(--space-4);
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }
      
      @media (max-width: 768px) {
        .cta-section {
          padding: var(--space-12) 0;
        }
        
        .cta-headline {
          font-size: var(--text-3xl);
        }
        
        .cta-description {
          font-size: var(--text-base);
        }
      }
    `,
  };
};

module.exports = { createCtaSection };
