const fs = require('fs');
let content = fs.readFileSync('Create_Studio.html', 'utf-8');
const footerStart = content.indexOf('<footer class="w-full shrink-0 z-10 relative mt-16"');
if (footerStart !== -1) {
  content = content.substring(0, footerStart) + "</body></html>";
  fs.writeFileSync('Create_Studio.html', content);
  console.log("Create Studio HTML footer removed");
} else {
  console.log("Not found in Create Studio");
}
