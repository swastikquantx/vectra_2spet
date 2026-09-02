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
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf-8');
      // Strip all footers
      content = content.replace(/<footer[\s\S]*?<\/footer>/gi, '');
      fs.writeFileSync(file, content, 'utf-8');
      console.log(`Stripped footers from ${file}`);
    }
  } catch (e) {
    console.error(`Error processing ${file}: ${e}`);
  }
}
