const fs = require('fs');

const svg1 = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="100" y="38" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="%23ffffff" text-anchor="middle">Scopus</text></svg>';
const svg2 = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="100" y="38" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="%23ffffff" text-anchor="middle">PubMed</text></svg>';
const svg3 = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="100" y="38" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="%23ffffff" text-anchor="middle">Embase</text></svg>';
const svg4 = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="100" y="38" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="%23ffffff" text-anchor="middle">Web of Science</text></svg>';
const svg5 = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="100" y="38" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="%23ffffff" text-anchor="middle">SBME</text></svg>';
const svg6 = svg1;

function updateLogos(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Add imports if they don't exist
    if (!content.includes('import logo1')) {
        const importStatement = `import logo1 from "../assets/logo_1.png";\nimport logo2 from "../assets/logo_2.png";\nimport logo3 from "../assets/logo_3.png";\nimport logo4 from "../assets/logo_4.png";\n`;
        // Insert after the last import
        const lastImportIndex = content.lastIndexOf('import ');
        const nextNewline = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, nextNewline + 1) + importStatement + content.slice(nextNewline + 1);
    }

    // Replace the src attributes
    content = content.split(`src="${svg1}"`).join(`src={logo1}`);
    content = content.split(`src="${svg2}"`).join(`src={logo2}`);
    content = content.split(`src="${svg3}"`).join(`src={logo3}`);
    content = content.split(`src="${svg4}"`).join(`src={logo4}`);
    content = content.split(`src="${svg5}"`).join(`src={logo1}`); // Reusing logo1 since we only have 4
    content = content.split(`src="${svg6}"`).join(`src={logo2}`); // svg6 is same as svg1, this line won't do much if already replaced, but just in case.

    fs.writeFileSync(filePath, content);
}

updateLogos('d:/shilph-akka-free/src/pages/HomePage.jsx');
updateLogos('d:/shilph-akka-free/src/pages/ConsultationPage.jsx');
console.log('Logos successfully swapped to actual images.');
