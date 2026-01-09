/**
 * Grid Showcase Layout
 * Responsive grid for displaying multiple items
 */

const createGridShowcase = ({
  title = '',
  description = '',
  items = [],
  columns = 3,
  gap = 'medium',
} = {}) => {
  const gapSizes = {
    small: 'var(--space-4)',
    medium: 'var(--space-6)',
    large: 'var(--space-8)',
  };
  
  return {
    render: () => `
      <section class="grid-showcase">
        <div class="container">
          ${title || description ? `
            <div class="grid-showcase-header">
              ${title ? `
                <h2 class="grid-showcase-title">${title}</h2>
              ` : ''}
              ${description ? `
                <p class="grid-showcase-description">${description}</p>
              ` : ''}
            </div>
          ` : ''}
          
          <div class="grid-showcase-items" 
               style="grid-template-columns: repeat(${columns}, 1fr); gap: ${gapSizes[gap]};">
            ${items.map(item => `
              <div class="grid-showcase-item">
                ${item}
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `,
    
    styles: `
      .grid-showcase {
        padding: var(--space-12) 0;
      }
      
      .grid-showcase-header {
        text-align: center;
        max-width: 800px;
        margin: 0 auto var(--space-12);
      }
      
      .grid-showcase-title {
        font-size: var(--text-3xl);
        font-weight: var(--weight-black);
        line-height: var(--leading-tight);
        color: var(--color-text-primary);
        margin-bottom: var(--space-4);
      }
      
      .grid-showcase-description {
        font-size: var(--text-base);
        line-height: var(--leading-normal);
        color: var(--color-text-secondary);
      }
      
      .grid-showcase-items {
        display: grid;
        gap: var(--space-6);
      }
      
      .grid-showcase-item {
        height: 100%;
      }
      
      @media (max-width: 1024px) {
        .grid-showcase-items {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      
      @media (max-width: 768px) {
        .grid-showcase {
          padding: var(--space-8) 0;
        }
        
        .grid-showcase-items {
          grid-template-columns: 1fr !important;
          gap: var(--space-4);
        }
      }
    `,
  };
};

module.exports = { createGridShowcase };
