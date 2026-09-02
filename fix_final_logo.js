const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// 1. Fix header logo
html = html.replace(
    /<img src="https:\/\/storage\.googleapis\.com\/a1aa\/image\/aC7Y63UeFhbiKxZzK81qD5qIftB9D3Rk8l23jA4UoPweQhLTA\.jpg" class="h-\[44px\] w-auto" alt="VECTRA"\/>/g,
    `<img src="vectra_logo.jpg" class="h-[44px] w-auto" alt="VECTRA"/>`
);

// 2. Fix inner pages (they are base64 encoded in the PAGES object)
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
        
        // Replace the broken cloud URL with the new local vectra_logo.jpg
        content = content.replace(
            /<img src="https:\/\/storage\.googleapis\.com\/a1aa\/image\/aC7Y63UeFhbiKxZzK81qD5qIftB9D3Rk8l23jA4UoPweQhLTA\.jpg"[^>]*>/g,
            '<img src="vectra_logo.jpg" class="h-[24px] w-auto inline-block mr-2 align-middle" alt="VECTRA"/>'
        );

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

html = html.replace(/const PAGES=\{.*?\};/s, newPagesStr);

fs.writeFileSync('index.html', html, 'utf-8');
console.log("Successfully linked vectra_logo.jpg to header and all internal pages.");
