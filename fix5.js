const fs = require('fs');
let about = fs.readFileSync('About_Swastilk.html', 'utf-8');

// 1. Remove the hidden style
const hiddenStyle = '<style>footer { display: none !important; }</style>';
if (about.includes(hiddenStyle)) {
  about = about.replace(hiddenStyle, '');
}

// 2. Remove the old HTML footer
const footerStart = about.indexOf('<footer class="w-full shrink-0 z-10 relative mt-16"');
const footerStartAlt = about.indexOf('<footer class="w-full relative mt-16"');
const target = footerStart !== -1 ? footerStart : footerStartAlt;

if (target !== -1) {
  about = about.substring(0, target) + "</body></html>";
}

fs.writeFileSync('About_Swastilk.html', about);
console.log("About Us fixed");
