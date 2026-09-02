const fs = require('fs');

let index = fs.readFileSync('index.html', 'utf-8');
const match = index.match(/const PAGES=({.*?});/s) || index.match(/PAGES=({.*?});/s);

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

let pagesObj = {};
for (const file of htmlFiles) {
    try {
        let content = fs.readFileSync(file, 'utf-8');
        // Encode using base64 natively
        let b64 = Buffer.from(content, 'utf-8').toString('base64');
        pagesObj[file] = b64;
    } catch(e) {
        console.log("Missing " + file);
    }
}

let newPagesStr = 'const PAGES={';
let first = true;
for (const [k, v] of Object.entries(pagesObj)) {
    if (!first) newPagesStr += ',';
    newPagesStr += `"${k}":"${v}"`;
    first = false;
}
newPagesStr += '};';

const newIndex = index.substring(0, match.index) + newPagesStr + index.substring(match.index + match[0].length);

// Also we should ensure no weird binary characters are outside of PAGES.
// We can just create a clean index.html if we have the router part.
// But let's first try just saving this.
fs.writeFileSync('index_fixed.html', newIndex, 'utf-8');
console.log("Created index_fixed.html");
