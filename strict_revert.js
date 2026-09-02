const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// 1. Revert header logo
html = html.replace(
    /<div class="flex items-center gap-3">.*?<div class="w-px h-10 bg-zinc-200 hidden sm:block"><\/div>/s,
    `<div class="flex items-center gap-3"><img src="https://storage.googleapis.com/a1aa/image/aC7Y63UeFhbiKxZzK81qD5qIftB9D3Rk8l23jA4UoPweQhLTA.jpg" class="h-[44px] w-auto" alt="VECTRA"/><div class="w-px h-10 bg-zinc-200 hidden sm:block"></div>`
);

// 2. Revert inner pages
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
        
        // Strip out the previous fallback and local logo, restoring the exact original cloud URL
        content = content.replace(
            /<img src="vectra_logo\.jpg"[^>]*>.*?<\/span>/g,
            '<img src="https://storage.googleapis.com/a1aa/image/aC7Y63UeFhbiKxZzK81qD5qIftB9D3Rk8l23jA4UoPweQhLTA.jpg" class="h-[24px] w-auto inline-block mr-2 align-middle" alt="VECTRA"/>'
        );
        content = content.replace(
            /<img src="vectra_logo\.jpg"[^>]*>/g,
            '<img src="https://storage.googleapis.com/a1aa/image/aC7Y63UeFhbiKxZzK81qD5qIftB9D3Rk8l23jA4UoPweQhLTA.jpg" class="h-[24px] w-auto inline-block mr-2 align-middle" alt="VECTRA"/>'
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
console.log("Strict revert to original cloud URL complete.");
