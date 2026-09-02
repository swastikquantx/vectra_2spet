const fs = require('fs');

const files = [
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

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;

  // Extremely aggressive wipe of the specific strings outside of the nav links
  content = content.replace(/Swastik AI LABS © 2026 —/g, '');
  content = content.replace(/Swastik AI LABS/g, '');
  content = content.replace(/© 2026/g, '');
  content = content.replace(/THE CINEMATIC ARSENAL — 37 Engines\. One Plan\. Infinite Stories\./g, '');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Aggressively wiped literal strings from ${file}`);
  }
}
