/**
 * Landing Page Layout
 * Complete landing page structure
 */

const createLandingLayout = ({
  navigation,
  hero,
  sections = [],
  cta,
  footer,
} = {}) => {
  return {
    render: () => `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Landing Page</title>
        <link rel="stylesheet" href="../styles/tokens.css">
        <link rel="stylesheet" href="../styles/base.css">
        <link rel="stylesheet" href="../styles/utilities.css">
      </head>
      <body>
        ${navigation.render()}
        
        <main>
          ${hero.render()}
          
          ${sections.map(section => section.render()).join('\n')}
          
          ${cta.render()}
        </main>
        
        ${footer.render()}
      </body>
      </html>
    `,
    
    styles: `
      main {
        min-height: 100vh;
      }
      
      section {
        position: relative;
      }
      
      section + section {
        margin-top: var(--space-20);
      }
    `,
  };
};

module.exports = { createLandingLayout };
