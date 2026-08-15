const fs = require('fs');

const premiumStyle = `<style>{\`
  .featured-in-section {
    background-color: #ffffff !important;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    padding-top: 60px !important;
    padding-bottom: 60px !important;
    overflow: hidden !important;
  }
  .featured-in-section .text-color-white {
    color: #6b7280 !important;
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 1rem;
  }
  .logo3_component {
    display: flex !important;
    flex-wrap: nowrap !important;
    overflow: hidden !important;
  }
  .logo3_list {
    display: flex !important;
    flex-wrap: nowrap !important;
    align-items: center !important;
    justify-content: space-around !important;
    gap: 80px !important;
    min-width: 100% !important;
    padding-right: 80px !important; 
  }
  .logo3_logo {
    height: 120px !important;
    width: 250px !important;
    object-fit: contain !important;
    mix-blend-mode: multiply !important;
    opacity: 1 !important; /* Make them fully visible */
    filter: none !important; /* Remove grayscale so we can see them clearly */
    transition: all 0.3s ease !important;
    flex-shrink: 0 !important;
    display: block !important;
    transform: scale(2.5) !important; /* Zoom in to crop out huge white padding */
  }
  .logo3_wrapper {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0 !important;
    margin: 0 !important;
    flex-shrink: 0 !important;
    flex: 0 0 auto !important;
    width: 250px !important;
    height: 150px !important;
    overflow: hidden !important; /* Hide the overlapping white padding */
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
console.log('Logos zoomed in to fix tiny images with large padding!');
