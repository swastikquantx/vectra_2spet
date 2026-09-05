const fs = require('fs');
let pricing = fs.readFileSync('Pricing.html', 'utf-8');
const footerStart = pricing.indexOf('<footer class="w-full shrink-0 z-10 relative mt-16"');
if (footerStart !== -1) {
  pricing = pricing.substring(0, footerStart) + "</body></html>";
  fs.writeFileSync('Pricing.html', pricing);
  console.log("Pricing HTML footer removed");
}
