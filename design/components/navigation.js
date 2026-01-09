/**
 * Navigation Component
 * Header navigation with logo, links, and CTA
 */

const createNavigation = ({
  logo = { text: 'LOGO', href: '/' },
  links = [],
  primaryCta = null,
  sticky = true,
} = {}) => {
  return {
    render: () => `
      <nav class="navigation ${sticky ? 'navigation--sticky' : ''}">
        <div class="container">
          <div class="navigation-inner">
            <a href="${logo.href}" class="navigation-logo">
              ${logo.text}
            </a>
            
            <button class="navigation-toggle" aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <div class="navigation-menu">
              <ul class="navigation-links">
                ${links.map(link => `
                  <li class="navigation-item">
                    <a href="${link.href}" class="navigation-link">
                      ${link.text}
                    </a>
                  </li>
                `).join('')}
              </ul>
              
              ${primaryCta ? `
                <a href="${primaryCta.href}" class="btn btn-primary btn-sm">
                  ${primaryCta.text}
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </nav>
    `,
    
    init: (element) => {
      const toggle = element.querySelector('.navigation-toggle');
      const menu = element.querySelector('.navigation-menu');
      
      toggle?.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu?.classList.toggle('active');
      });
      
      // Close menu on link click
      const links = element.querySelectorAll('.navigation-link');
      links.forEach(link => {
        link.addEventListener('click', () => {
          toggle?.classList.remove('active');
          menu?.classList.remove('active');
        });
      });
    },
    
    styles: `
      .navigation {
        background: var(--color-bg-primary);
        border-bottom: var(--border-width) solid var(--color-border);
        padding: var(--space-4) 0;
        z-index: var(--z-sticky);
      }
      
      .navigation--sticky {
        position: sticky;
        top: 0;
      }
      
      .navigation-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-6);
      }
      
      .navigation-logo {
        font-size: var(--text-lg);
        font-weight: var(--weight-black);
        font-family: var(--font-mono);
        color: var(--color-text-primary);
        text-decoration: none;
        letter-spacing: 0.05em;
      }
      
      .navigation-toggle {
        display: none;
        flex-direction: column;
        gap: 4px;
        background: none;
        border: none;
        padding: var(--space-2);
        cursor: pointer;
      }
      
      .navigation-toggle span {
        display: block;
        width: 24px;
        height: 2px;
        background: var(--color-text-primary);
        transition: all var(--duration-base) var(--ease-out);
      }
      
      .navigation-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      
      .navigation-toggle.active span:nth-child(2) {
        opacity: 0;
      }
      
      .navigation-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
      }
      
      .navigation-menu {
        display: flex;
        align-items: center;
        gap: var(--space-6);
      }
      
      .navigation-links {
        display: flex;
        align-items: center;
        gap: var(--space-5);
        list-style: none;
        margin: 0;
        padding: 0;
      }
      
      .navigation-link {
        font-size: var(--text-sm);
        font-weight: var(--weight-medium);
        color: var(--color-text-secondary);
        text-decoration: none;
        transition: color var(--duration-fast) var(--ease-out);
      }
      
      .navigation-link:hover {
        color: var(--color-text-primary);
      }
      
      @media (max-width: 768px) {
        .navigation-toggle {
          display: flex;
        }
        
        .navigation-menu {
          position: fixed;
          top: 65px;
          left: 0;
          right: 0;
          background: var(--color-bg-primary);
          border-bottom: var(--border-width) solid var(--color-border);
          padding: var(--space-6);
          flex-direction: column;
          align-items: flex-start;
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
          transition: all var(--duration-base) var(--ease-out);
        }
        
        .navigation-menu.active {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }
        
        .navigation-links {
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }
        
        .navigation-link {
          padding: var(--space-2) 0;
          font-size: var(--text-base);
        }
      }
    `,
  };
};

module.exports = { createNavigation };
