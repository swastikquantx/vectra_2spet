const fs = require('fs');

const files = [
  'Cinematic-Arsenal-37-Engines.html'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;

  // Let's completely nuke any empty text center divs that might be causing layout spacing issues at the bottom
  content = content.replace(/P\("div",\{className:"mt-10 text-center text-\[11px\] text-slate-400".*?\}\)/g, 'null');

  // Let's completely nuke any section that is empty
  content = content.replace(/h\("section",\{className:"bg-slate-50 border-t border-slate-200",children:P\("div",\{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16",children:\[""\]\}\)\}\)/g, 'null');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Wiped empty structure from ${file}`);
  }
}
