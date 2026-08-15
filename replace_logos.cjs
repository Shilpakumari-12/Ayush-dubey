const fs = require('fs');

const svg1 = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="100" y="38" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="%23ffffff" text-anchor="middle">Scopus</text></svg>';
const svg2 = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="100" y="38" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="%23ffffff" text-anchor="middle">PubMed</text></svg>';
const svg3 = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="100" y="38" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="%23ffffff" text-anchor="middle">Embase</text></svg>';
const svg4 = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="100" y="38" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="%23ffffff" text-anchor="middle">Web of Science</text></svg>';
const svg5 = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="100" y="38" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="%23ffffff" text-anchor="middle">SBME</text></svg>';
const svg6 = svg1;

function replaceLogos(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/https:\/\/cdn\.prod\.website-files\.com\/[^"']+pepper%20content\.png/g, svg1);
    content = content.replace(/https:\/\/cdn\.prod\.website-files\.com\/[^"']+scoopwhoop\.png/g, svg2);
    content = content.replace(/https:\/\/cdn\.prod\.website-files\.com\/[^"']+TEDx\.png/g, svg3);
    content = content.replace(/https:\/\/cdn\.prod\.website-files\.com\/[^"']+telegraph\.png/g, svg4);
    content = content.replace(/https:\/\/cdn\.prod\.website-files\.com\/[^"']+women%27s%20web\.png/g, svg5);
    content = content.replace(/https:\/\/cdn\.prod\.website-files\.com\/[^"']+flexifunnel\.png/g, svg6);
    fs.writeFileSync(filePath, content);
}

replaceLogos('d:/shilph-akka-free/src/pages/HomePage.jsx');
replaceLogos('d:/shilph-akka-free/src/pages/ConsultationPage.jsx');
console.log('Logos replaced!');
