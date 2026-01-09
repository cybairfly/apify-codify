/**
 * Two Column Layout
 * Side-by-side content layout
 */

const createTwoColumnLayout = ({
  left,
  right,
  reverse = false,
  verticalAlign = 'center',
  gap = 'large',
} = {}) => {
  const gapSizes = {
    small: 'var(--space-6)',
    medium: 'var(--space-8)',
    large: 'var(--space-12)',
  };
  
  return {
    render: () => `
      <div class="two-column ${reverse ? 'two-column--reverse' : ''}" 
           style="gap: ${gapSizes[gap]}; align-items: ${verticalAlign};">
        <div class="two-column-left">
          ${left}
        </div>
        <div class="two-column-right">
          ${right}
        </div>
      </div>
    `,
    
    styles: `
      .two-column {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-12);
        align-items: center;
      }
      
      .two-column--reverse {
        direction: rtl;
      }
      
      .two-column--reverse > * {
        direction: ltr;
      }
      
      .two-column-left,
      .two-column-right {
        width: 100%;
      }
      
      @media (max-width: 1024px) {
        .two-column {
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }
        
        .two-column--reverse {
          direction: ltr;
        }
      }
    `,
  };
};

module.exports = { createTwoColumnLayout };
