const fs = require('fs');

const files = [
  'Cinematic-Arsenal-37-Engines.html'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;

  // Let's find ANY text that matches what is in the screenshot. The screenshot says:
  // "Swastik AI LABS © 2026 —"
  
  // Actually, I bet the string is hardcoded differently in the react source.
  content = content.replace(/["']Swastik AI LABS["']/gi, '""');
  content = content.replace(/["'] © ["']/gi, '""');
  content = content.replace(/["'] — ["']/gi, '""');
  content = content.replace(/new Date\(\)\.getFullYear\(\)/gi, '""');
  content = content.replace(/["'] — THE CINEMATIC ARSENAL — 37 Engines\. One Plan\. Infinite Stories\.["']/gi, '""');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Wiped react specific strings from ${file}`);
  }
}
