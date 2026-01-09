/**
 * Cookbook Filter Component
 * Interactive filter/tag system for content
 */

const createCookbookFilter = ({
  categories = [],
  onFilterChange = null,
} = {}) => {
  return {
    render: () => `
      <div class="cookbook-filter">
        <div class="cookbook-filter-label">
          All
        </div>
        
        <div class="cookbook-filter-tags">
          ${categories.map((category, index) => `
            <button 
              class="cookbook-filter-tag" 
              data-category="${category.value}"
              data-index="${index}">
              ${category.icon ? `<span class="cookbook-filter-icon">${category.icon}</span>` : ''}
              ${category.label}
            </button>
          `).join('')}
        </div>
        
        <button class="cookbook-filter-add">
          + Suggest New
        </button>
      </div>
    `,
    
    init: (element) => {
      const tags = element.querySelectorAll('.cookbook-filter-tag');
      
      tags.forEach(tag => {
        tag.addEventListener('click', () => {
          // Toggle active state
          tag.classList.toggle('active');
          
          // Get active categories
          const active = Array.from(element.querySelectorAll('.cookbook-filter-tag.active'))
            .map(t => t.dataset.category);
          
          // Call callback
          if (onFilterChange) {
            onFilterChange(active);
          }
        });
      });
    },
    
    styles: `
      .cookbook-filter {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        flex-wrap: wrap;
        padding: var(--space-6) 0;
      }
      
      .cookbook-filter-label {
        font-size: var(--text-sm);
        font-weight: var(--weight-medium);
        color: var(--color-text-primary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      
      .cookbook-filter-tags {
        display: flex;
        gap: var(--space-2);
        flex-wrap: wrap;
        flex: 1;
      }
      
      .cookbook-filter-tag {
        display: inline-flex;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-2) var(--space-3);
        font-size: var(--text-xs);
        font-weight: var(--weight-medium);
        color: var(--color-text-secondary);
        background: var(--color-bg-tertiary);
        border: var(--border-width) solid var(--color-border);
        border-radius: var(--radius-full);
        cursor: pointer;
        transition: all var(--duration-fast) var(--ease-out);
      }
      
      .cookbook-filter-tag:hover {
        color: var(--color-text-primary);
        border-color: var(--color-border-hover);
      }
      
      .cookbook-filter-tag.active {
        color: var(--color-bg-primary);
        background: var(--color-accent-primary);
        border-color: var(--color-accent-primary);
      }
      
      .cookbook-filter-icon {
        display: inline-block;
        width: 16px;
        height: 16px;
      }
      
      .cookbook-filter-add {
        padding: var(--space-2) var(--space-3);
        font-size: var(--text-xs);
        font-weight: var(--weight-medium);
        color: var(--color-accent-primary);
        background: transparent;
        border: var(--border-width) solid var(--color-accent-primary);
        border-radius: var(--radius-full);
        cursor: pointer;
        transition: all var(--duration-fast) var(--ease-out);
      }
      
      .cookbook-filter-add:hover {
        color: var(--color-bg-primary);
        background: var(--color-accent-primary);
      }
      
      @media (max-width: 768px) {
        .cookbook-filter {
          flex-direction: column;
          align-items: flex-start;
        }
        
        .cookbook-filter-tags {
          width: 100%;
        }
      }
    `,
  };
};

module.exports = { createCookbookFilter };
