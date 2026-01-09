/**
 * Testimonial Component
 * Customer quote with attribution
 */

const createTestimonial = ({
  quote,
  author,
  role = '',
  company = '',
  logo = null,
  badge = null,
  variant = 'default',
} = {}) => {
  return {
    render: () => `
      <div class="testimonial testimonial--${variant}">
        ${badge ? `
          <div class="testimonial-badge">${badge}</div>
        ` : ''}
        
        ${logo ? `
          <div class="testimonial-logo">
            ${logo}
          </div>
        ` : ''}
        
        <blockquote class="testimonial-quote">
          "${quote}"
        </blockquote>
        
        <div class="testimonial-author">
          <cite class="testimonial-name">${author}</cite>
          ${role || company ? `
            <span class="testimonial-meta">
              ${role}${role && company ? ', ' : ''}${company}
            </span>
          ` : ''}
        </div>
      </div>
    `,
    
    styles: `
      .testimonial {
        background: var(--color-bg-tertiary);
        border: var(--border-width) solid var(--color-border);
        border-radius: var(--radius-lg);
        padding: var(--space-6);
        position: relative;
      }
      
      .testimonial--highlight {
        border-color: var(--color-accent-primary);
      }
      
      .testimonial-badge {
        position: absolute;
        top: var(--space-4);
        right: var(--space-4);
        font-size: var(--text-xs);
        font-family: var(--font-mono);
        color: var(--color-accent-primary);
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
      
      .testimonial-logo {
        margin-bottom: var(--space-4);
        opacity: 0.7;
      }
      
      .testimonial-quote {
        font-size: var(--text-base);
        line-height: var(--leading-relaxed);
        color: var(--color-text-primary);
        margin: 0 0 var(--space-5);
        font-style: normal;
      }
      
      .testimonial-author {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
      }
      
      .testimonial-name {
        font-size: var(--text-sm);
        font-weight: var(--weight-semibold);
        color: var(--color-text-primary);
        font-style: normal;
      }
      
      .testimonial-meta {
        font-size: var(--text-xs);
        color: var(--color-text-tertiary);
      }
      
      @media (max-width: 768px) {
        .testimonial {
          padding: var(--space-5);
        }
      }
    `,
  };
};

module.exports = { createTestimonial };
