const fs = require('fs');

function fixConsultationContent() {
    let content = fs.readFileSync('d:/shilph-akka-free/src/pages/ConsultationPage.jsx', 'utf8');
    
    // 1. Text Replacements (branding)
    content = content.replace(/60 Day Publications&#x27;/g, 'Ayush&#x27;');
    content = content.replace(/We are 60 Day Publications/g, 'I am Ayush');
    content = content.replace(/60 Day Publications is/g, 'Ayush is');
    // We want to be careful not to replace the title "60 Day Publications" if it's in the footer/navbar, but ConsultationPage doesn't have the navbar/footer inline, they are separate components.
    // However, it does have "60 Day Publications" in testimonials and text.
    content = content.replace(/60 Day Publications/g, 'Ayush');
    
    // The previous replace might have affected "60 Day Publications" in places we want it, but for the body it should all be Ayush.

    // 2. Testimonial Text & Image Replacements
    // If not already replaced (in case I did it before):
    content = content.replace(/<p className="text-weight-semibold">Chase Dimond<\/p>\s*<p>Email Marketing Expert<\/p>/gi, '<p className="text-weight-semibold">Ayush Dubey</p>\n                        <p>Medical Research Expert</p>');
    
    content = content.replace(/<p className="text-weight-semibold">Sharan Hegde<\/p>\s*<p>Founder &amp; CEO, The 1% Club<\/p>/gi, '<p className="text-weight-semibold">Ayush Dubey</p>\n                        <p>Medical Scholar</p>');

    // Replace testimonial images (Chase Dimond and Sharan)
    content = content.replace(/<img[^>]*chase%20dimond[^>]*>/gi, '<img src={clientArmsCrossed} alt="Ayush Dubey" loading="lazy" className="testimonial13_client-image" style={{ width: \'100%\', height: \'100%\', objectFit: \'cover\' }} />');
    content = content.replace(/<img[^>]*sharan[^>]*>/gi, '<img src={clientGesturing} alt="Ayush Dubey" loading="lazy" className="testimonial13_client-image" style={{ width: \'100%\', height: \'100%\', objectFit: \'cover\' }} />');

    // 3. Replace "consultation 1", 2, and 3 images
    content = content.replace(/<img[^>]*consultation%201[^>]*>/gi, '<img src={clientArmsCrossed} alt="Medical Consultation" loading="lazy" className="offers_image" style={{ width: \'100%\', height: \'100%\', objectFit: \'cover\' }} />');
    content = content.replace(/<img[^>]*consultation%202[^>]*>/gi, '<img src={clientGesturing} alt="Research Planning" loading="lazy" className="offers_image" style={{ width: \'100%\', height: \'100%\', objectFit: \'cover\' }} />');
    content = content.replace(/<img[^>]*consultation%203[^>]*>/gi, '<img src={clientArmsCrossed} alt="Publication Strategy" loading="lazy" className="offers_image" style={{ width: \'100%\', height: \'100%\', objectFit: \'cover\' }} />');

    // 4. Ensure imports are at the top (they should be since I added them for logos)
    // clientArmsCrossed and clientGesturing were already imported in ConsultationPage.jsx in my very first script.

    fs.writeFileSync('d:/shilph-akka-free/src/pages/ConsultationPage.jsx', content);
}

fixConsultationContent();
console.log('ConsultationPage content and images fully replaced with Ayush assets!');
