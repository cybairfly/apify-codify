/**
 * Hero Component
 * Large hero section with headline, description, and CTA
 */

const { createLabel, ascii } = require('../utils/ascii-art');

const createHero = ({
  headline,
  subheadline = '',
  description,
  primaryCta = { text: 'Get Started', href: '#' },
  secondaryCta = null,
  badge = null,
  asciiDecoration = null,
} = {}) => {
  return {
    render: () => `
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            ${badge ? `
              <div class="hero-badge">
                ${createLabel({ text: badge })}
              </div>
            ` : ''}
            
            <h1 class="hero-headline">
              ${headline}
            </h1>
            
            ${subheadline ? `
              <h2 class="hero-subheadline">
                ${subheadline}
              </h2>
            ` : ''}
            
            <p class="hero-description">
              ${description}
            </p>
            
            <div class="hero-actions">
              <a href="${primaryCta.href}" class="btn btn-primary">
                ${primaryCta.text} ${ascii.arrows.right}
              </a>
              
              ${secondaryCta ? `
                <a href="${secondaryCta.href}" class="btn btn-secondary">
                  ${secondaryCta.text}
                </a>
              ` : ''}
            </div>
            
            ${asciiDecoration ? `
              <div class="hero-decoration" aria-hidden="true">
                <pre class="ascii-art">${asciiDecoration}</pre>
              </div>
            ` : ''}
          </div>
        </div>
      </section>
    `,
    
    styles: `
      .hero {
        position: relative;
        min-height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--space-16) 0;
        overflow: hidden;
      }
      
      .hero-content {
        text-align: center;
        max-width: 1000px;
        margin: 0 auto;
        position: relative;
        z-index: 1;
      }
      
      .hero-badge {
        font-size: var(--text-xs);
        font-family: var(--font-mono);
        color: var(--color-accent-primary);
        margin-bottom: var(--space-4);
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
      
      .hero-headline {
        font-size: var(--text-5xl);
        font-weight: var(--weight-black);
        line-height: var(--leading-tight);
        letter-spacing: -0.02em;
        margin-bottom: var(--space-4);
        color: var(--color-text-primary);
      }
      
      .hero-subheadline {
        font-size: var(--text-3xl);
        font-weight: var(--weight-bold);
        line-height: var(--leading-snug);
        margin-bottom: var(--space-6);
        color: var(--color-text-primary);
      }
      
      .hero-description {
        font-size: var(--text-lg);
        line-height: var(--leading-relaxed);
        color: var(--color-text-secondary);
        max-width: 700px;
        margin: 0 auto var(--space-8);
      }
      
      .hero-actions {
        display: flex;
        gap: var(--space-4);
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }
      
      .hero-decoration {
        position: absolute;
        bottom: -50px;
        right: -50px;
        font-size: var(--text-sm);
        color: var(--color-text-muted);
        opacity: 0.3;
        pointer-events: none;
      }
      
      @media (max-width: 768px) {
        .hero {
          min-height: 60vh;
          padding: var(--space-12) 0;
        }
        
        .hero-headline {
          font-size: var(--text-4xl);
        }
        
        .hero-subheadline {
          font-size: var(--text-2xl);
        }
        
        .hero-description {
          font-size: var(--text-base);
        }
      }
    `,
  };
};

module.exports = { createHero };
