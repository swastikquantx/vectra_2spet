const fs = require('fs');
let home = fs.readFileSync('Home.html', 'utf-8');
let about = fs.readFileSync('About_Swastilk.html', 'utf-8');

const footerStart = home.indexOf('<footer');
const footerEnd = home.lastIndexOf('</body>');
const footerHtml = home.substring(footerStart, footerEnd);

// Remove any existing footer from about
const aboutFooterStart = about.indexOf('<footer');
if (aboutFooterStart !== -1) {
  const aboutFooterEnd = about.lastIndexOf('</body>');
  about = about.substring(0, aboutFooterStart) + about.substring(aboutFooterEnd);
}

// Ensure </body></html> is at the end
about = about.replace('</body></html>', '');
about = about + footerHtml + '</body></html>';

fs.writeFileSync('About_Swastilk.html', about);
console.log("Footer and script added to About_Swastilk.html");
