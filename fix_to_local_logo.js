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
        
        // Replace the broken cloud link with a local link
        content = content.replace(/https:\/\/storage\.googleapis\.com\/a1aa\/image\/aC7Y63UeFhbiKxZzK81qD5qIftB9D3Rk8l23jA4UoPweQhLTA\.jpg/g, 'vectra_logo.jpg');
        
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

// Also replace in the main index.html header
html = html.replace(/https:\/\/storage\.googleapis\.com\/a1aa\/image\/aC7Y63UeFhbiKxZzK81qD5qIftB9D3Rk8l23jA4UoPweQhLTA\.jpg/g, 'vectra_logo.jpg');

fs.writeFileSync('index.html', html, 'utf-8');
console.log("Updated to use local vectra_logo.jpg");
