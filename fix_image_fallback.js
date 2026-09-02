const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// Header fallback
html = html.replace(
  /<img src="vectra_logo\.jpg" class="h-\[44px\] w-auto" alt="VECTRA"\/>/,
  `<img src="vectra_logo.jpg" class="h-[44px] w-auto" alt="VECTRA" onerror="this.style.display='none'; document.getElementById('fallback-logo-header').style.display='block';" />
   <div id="fallback-logo-header" style="display:none;" class="flex flex-col font-black leading-[0.82] tracking-[0.18em] text-[24px] syne text-blue-900"><span>VECTRA</span></div>`
);

// We need to also fix it inside the PAGES object. 
// But the inner pages also have it.
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
        
        content = content.replace(
          /<img src="vectra_logo\.jpg" class="h-\[24px\] w-auto inline-block mr-2 align-middle" alt="VECTRA"\/>/g, 
          `<img src="vectra_logo.jpg" class="h-[24px] w-auto inline-block mr-2 align-middle" alt="VECTRA" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-block';" /><span style="display:none;" class="syne font-black text-[14px] tracking-widest text-blue-900 mr-2 align-middle">VECTRA</span>`
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
console.log("Added onerror fallbacks to prevent broken image icons.");
