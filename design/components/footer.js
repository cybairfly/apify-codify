/**
 * Footer Component
 * Multi-column footer with links and info
 */

const { ascii } = require('../utils/ascii-art');

const createFooter = ({
  columns = [],
  social = [],
  copyright = '',
  badge = null,
} = {}) => {
  return {
    render: () => `
      <footer class="footer">
        <div class="container">
          ${badge ? `
            <div class="footer-badge">
              ${badge}
            </div>
          ` : ''}
          
          <div class="footer-columns">
            ${columns.map(column => `
              <div class="footer-column">
                <h4 class="footer-column-title">${column.title}</h4>
                <ul class="footer-links">
                  ${column.links.map(link => `
                    <li>
                      <a href="${link.href}" class="footer-link">
                        ${link.text}
                      </a>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
          
          <div class="footer-bottom">
            ${social.length ? `
              <div class="footer-social">
                ${social.map(item => `
                  <a href="${item.href}" class="footer-social-link" aria-label="${item.label}">
                    ${item.icon || item.label}
                  </a>
                `).join('')}
              </div>
            ` : ''}
            
            ${copyright ? `
              <p class="footer-copyright">
                ${copyright}
              </p>
            ` : ''}
          </div>
        </div>
      </footer>
    `,
    
    styles: `
      .footer {
        background: var(--color-bg-secondary);
        border-top: var(--border-width) solid var(--color-border);
        padding: var(--space-12) 0 var(--space-8);
        margin-top: var(--space-20);
      }
      
      .footer-badge {
        font-size: var(--text-xs);
        font-family: var(--font-mono);
        color: var(--color-accent-primary);
        text-align: center;
        margin-bottom: var(--space-8);
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
      
      .footer-columns {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--space-8);
        margin-bottom: var(--space-8);
      }
      
      .footer-column-title {
        font-size: var(--text-sm);
        font-weight: var(--weight-semibold);
        color: var(--color-text-primary);
        margin-bottom: var(--space-4);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      
      .footer-links {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .footer-links li {
        margin-bottom: var(--space-2);
      }
      
      .footer-link {
        font-size: var(--text-sm);
        color: var(--color-text-secondary);
        text-decoration: none;
        transition: color var(--duration-fast) var(--ease-out);
      }
      
      .footer-link:hover {
        color: var(--color-accent-primary);
      }
      
      .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: var(--space-8);
        border-top: var(--border-width) solid var(--color-border);
        gap: var(--space-6);
        flex-wrap: wrap;
      }
      
      .footer-social {
        display: flex;
        gap: var(--space-4);
      }
      
      .footer-social-link {
        font-size: var(--text-sm);
        color: var(--color-text-secondary);
        text-decoration: none;
        transition: color var(--duration-fast) var(--ease-out);
      }
      
      .footer-social-link:hover {
        color: var(--color-accent-primary);
      }
      
      .footer-copyright {
        font-size: var(--text-xs);
        color: var(--color-text-tertiary);
      }
      
      @media (max-width: 768px) {
        .footer {
          padding: var(--space-8) 0 var(--space-6);
        }
        
        .footer-columns {
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }
        
        .footer-bottom {
          flex-direction: column;
          align-items: flex-start;
        }
      }
      
      @media (max-width: 480px) {
        .footer-columns {
          grid-template-columns: 1fr;
        }
      }
    `,
  };
};

module.exports = { createFooter };
