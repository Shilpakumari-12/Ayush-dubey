const fs = require('fs');

const premiumStyle = `<style>{\`
  .featured-in-section {
    background-color: #ffffff !important;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }
  .featured-in-section .text-color-white {
    color: #6b7280 !important;
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 0.875rem;
  }
  .logo3_logo {
    height: 60px !important;
    width: auto !important;
    max-width: 180px !important;
    object-fit: contain;
    filter: grayscale(100%) contrast(0.8) opacity(0.6) !important;
    transition: all 0.3s ease !important;
    mix-blend-mode: normal !important;
  }
  .logo3_logo:hover {
    filter: grayscale(0%) contrast(1) opacity(1) !important;
  }
  .logo3_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
    height: 100px;
  }
\`}</style>`;

function enhanceFeaturedIn(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the existing style block inside featured-in-section
    const styleStart = content.indexOf('<style>{`\n          .logo3_logo {');
    if (styleStart !== -1) {
        const styleEnd = content.indexOf('`}</style>', styleStart) + 10;
        content = content.substring(0, styleStart) + premiumStyle + content.substring(styleEnd);
        fs.writeFileSync(filePath, content);
    } else {
        console.log("Could not find style block in " + filePath);
    }
}

enhanceFeaturedIn('d:/shilph-akka-free/src/pages/HomePage.jsx');
enhanceFeaturedIn('d:/shilph-akka-free/src/pages/ConsultationPage.jsx');
console.log('Featured In section enhanced!');
