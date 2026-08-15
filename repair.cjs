const fs = require('fs');

function fixHomePage() {
    let content = fs.readFileSync('d:/shilph-akka-free/src/pages/HomePage.jsx', 'utf8');
    
    // 1. Ayush Replacements
    content = content.replace(/60 Day Publications&#x27;/g, 'Ayush&#x27;');
    content = content.replace(/We are 60 Day Publications/g, 'I am Ayush');
    content = content.replace(/60 Day Publications is/g, 'Ayush is');
    content = content.replace(/60 Day Publications/g, 'Ayush');

    // Restore the logo replacements for the Testimonials as well!
    content = content.replace(/<p className=\"text-weight-semibold\">Chase Dimond<\/p>\s*<p>Email publication Expert<\/p>/g, '<p className=\"text-weight-semibold\">Ayush Dubey</p>\n                        <p>Medical Research Expert</p>');
    content = content.replace(/<img[^>]*chase%20dimond[^>]*>/g, '<img src={clientArmsCrossed} alt=\"Ayush Dubey\" loading=\"lazy\" className=\"testimonial13_client-image\" style={{ width: \'100%\', height: \'100%\', objectFit: \'cover\' }} />');

    content = content.replace(/<p className=\"text-weight-semibold\">Sharan Hegde<\/p>\s*<p>Founder &amp; CEO, The 1% Club<\/p>/g, '<p className=\"text-weight-semibold\">Ayush Dubey</p>\n                        <p>Medical Scholar</p>');
    content = content.replace(/<img[^>]*sharan[^>]*>/g, '<img src={clientGesturing} alt=\"Ayush Dubey\" loading=\"lazy\" className=\"testimonial13_client-image\" style={{ width: \'100%\', height: \'100%\', objectFit: \'cover\' }} />');

    // 2. Featured In Logos (directly replace with imports)
    if (!content.includes('import logo1')) {
        const importStatement = `import logo1 from "../assets/logo_1.png";\nimport logo2 from "../assets/logo_2.png";\nimport logo3 from "../assets/logo_3.png";\nimport logo4 from "../assets/logo_4.png";\n`;
        const lastImportIndex = content.lastIndexOf('import ');
        const nextNewline = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, nextNewline + 1) + importStatement + content.slice(nextNewline + 1);
    }
    content = content.replace(/https:\/\/cdn\.prod\.website-files\.com\/[^"']+pepper%20content\.png/g, '{logo1}');
    content = content.replace(/https:\/\/cdn\.prod\.website-files\.com\/[^"']+scoopwhoop\.png/g, '{logo2}');
    content = content.replace(/https:\/\/cdn\.prod\.website-files\.com\/[^"']+TEDx\.png/g, '{logo3}');
    content = content.replace(/https:\/\/cdn\.prod\.website-files\.com\/[^"']+telegraph\.png/g, '{logo4}');
    content = content.replace(/https:\/\/cdn\.prod\.website-files\.com\/[^"']+women%27s%20web\.png/g, '{logo1}');
    content = content.replace(/https:\/\/cdn\.prod\.website-files\.com\/[^"']+flexifunnel\.png/g, '{logo2}');
    
    // Clean up quotes around variables
    content = content.replace(/src="\{logo1\}"/g, 'src={logo1}');
    content = content.replace(/src="\{logo2\}"/g, 'src={logo2}');
    content = content.replace(/src="\{logo3\}"/g, 'src={logo3}');
    content = content.replace(/src="\{logo4\}"/g, 'src={logo4}');

    // 3. Inject the style block for HomePage
    if (!content.includes('.logo3_logo {')) {
        content = content.replace(
            /<section\s+data-w-id="[^"]+"\s+className="featured-in-section"\s*>/g,
            `$&\n        <style>{\`\n          .logo3_logo {\n            filter: none !important;\n            mix-blend-mode: multiply !important;\n            border-radius: 4px;\n          }\n        \`}</style>`
        );
    }
    
    fs.writeFileSync('d:/shilph-akka-free/src/pages/HomePage.jsx', content);
}

function fixConsultationPage() {
    let content = fs.readFileSync('d:/shilph-akka-free/src/pages/ConsultationPage.jsx', 'utf8');
    
    // Inject the style block for ConsultationPage
    if (!content.includes('.logo3_logo {')) {
        content = content.replace(
            /<section\s+data-w-id="[^"]+"\s+className="featured-in-section"\s*>/g,
            `$&\n        <style>{\`\n          .logo3_logo {\n            filter: none !important;\n            mix-blend-mode: multiply !important;\n            border-radius: 4px;\n          }\n        \`}</style>`
        );
    }
    
    fs.writeFileSync('d:/shilph-akka-free/src/pages/ConsultationPage.jsx', content);
}

fixHomePage();
fixConsultationPage();
console.log('Restored all modifications properly!');
