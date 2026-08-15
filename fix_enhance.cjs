const fs = require('fs');

const premiumStyle = `<style>{\`
  .featured-in-section {
    background-color: #ffffff !important;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    padding-top: 80px !important;
    padding-bottom: 80px !important;
  }
  .featured-in-section .text-color-white {
    color: #6b7280 !important;
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 0.875rem;
  }
  .logo3_logo {
    height: 120px !important;
    width: auto !important;
    max-width: 250px !important;
    object-fit: contain;
    mix-blend-mode: multiply !important;
    opacity: 0.6 !important;
    filter: grayscale(100%) !important;
    transition: all 0.3s ease !important;
  }
  .logo3_logo:hover {
    opacity: 1 !important;
    filter: grayscale(0%) !important;
  }
  .logo3_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 50px;
    height: 160px;
  }
\`}</style>`;

function fixFeaturedIn(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the existing style block inside featured-in-section
    const styleStart = content.indexOf('<style>{`\n  .featured-in-section {');
    if (styleStart !== -1) {
        const styleEnd = content.indexOf('`}</style>', styleStart) + 10;
        content = content.substring(0, styleStart) + premiumStyle + content.substring(styleEnd);
        fs.writeFileSync(filePath, content);
    } else {
        console.log("Could not find style block in " + filePath);
    }
}

fixFeaturedIn('d:/shilph-akka-free/src/pages/HomePage.jsx');
fixFeaturedIn('d:/shilph-akka-free/src/pages/ConsultationPage.jsx');
console.log('Logos made even bigger!');
