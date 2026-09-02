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

let pagesObj = {};
for (const file of htmlFiles) {
    try {
        let content = fs.readFileSync(file, 'utf-8');
        
        // Remove the custom SVG in inner pages and put back an img tag
        content = content.replace(/<svg class="h-\[24px\].*?<\/svg>/s, '<img src="https://storage.googleapis.com/a1aa/image/aC7Y63UeFhbiKxZzK81qD5qIftB9D3Rk8l23jA4UoPweQhLTA.jpg" class="h-[24px] w-auto inline-block mr-2 align-middle" alt="VECTRA"/>');
        
        let b64 = Buffer.from(encodeURIComponent(content).replace(/%([0-9A-F]{2})/g, (match, p1) => {
            return String.fromCharCode('0x' + p1);
        }), 'binary').toString('base64');
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

let html = fs.readFileSync('index.html', 'utf-8');
html = html.replace(/const PAGES=\{.*?\};/s, newPagesStr);

fs.writeFileSync('index.html', html, 'utf-8');
console.log("Reverted logos in all pages and repacked.");
