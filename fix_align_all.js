const fs = require('fs');
const htmlFiles = [
  'Home.html',
  'About_Swastilk.html',
  'Cinematic-Arsenal-37-Engines.html',
  'How-It-Works.html',
  'Solutions.html',
  'Enterprise.html',
  'Pricing.html',
  'Create_Studio.html',
  'Auth-Genz-Registration.html',
  'User_Dashboard.html',
  'Studio_Editor.html',
  'Admin_Panel.html'
];

for (const file of htmlFiles) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    // We already changed it in some files to 'inline-flex items-baseline mx-1', so we need to be careful.
    // Let's replace 'text-red-600 font-bold inline-flex items-center align-middle mx-1' everywhere.
    content = content.replace(/className:"text-red-600 font-bold inline-flex items-center align-middle mx-1"/g, 'className:"inline-flex items-baseline mx-1"');
    fs.writeFileSync(file, content, 'utf-8');
  }
}
console.log("Fixed alignment in all files");
