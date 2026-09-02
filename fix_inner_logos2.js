const fs = require('fs');

const svgLogo = `<svg class="h-[24px] w-auto inline-block mr-2 align-middle" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="leftArm" x1="50" y1="20" x2="100" y2="120" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#0557fa" /><stop offset="100%" stop-color="#021447" /></linearGradient><linearGradient id="rightArm" x1="150" y1="20" x2="100" y2="120" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#03c4a1" /><stop offset="100%" stop-color="#021447" /></linearGradient></defs><polygon points="40,30 80,30 100,100 60,100" fill="url(#leftArm)" /><polygon points="160,30 120,30 100,100 140,100" fill="url(#rightArm)" /><g stroke="white" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M135,45 L105,90 L85,90" /><circle cx="135" cy="45" r="4" fill="white" /><path d="M145,60 L115,105 L95,105" /><circle cx="145" cy="60" r="4" fill="white" /><path d="M155,75 L125,120 L105,120" /><circle cx="155" cy="75" r="4" fill="white" /></g><text x="100" y="160" font-family="'Syne', sans-serif" font-size="34" font-weight="900" letter-spacing="0.25em" fill="#021447" text-anchor="middle">VECTRA</text><line x1="30" y1="180" x2="65" y2="180" stroke="#0557fa" stroke-width="2" /><text x="100" y="185" font-family="'Syne', sans-serif" font-size="14" font-weight="700" letter-spacing="0.3em" fill="#03c4a1" text-anchor="middle">AI BASED</text><line x1="135" y1="180" x2="170" y2="180" stroke="#0557fa" stroke-width="2" /></svg>`;

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
        // Replace the span text with the new SVG
        content = content.replace(/<span class="syne font-black text-\[12px\] tracking-widest text-black mr-2">VECTRA<\/span>/g, svgLogo);
        
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

// Let's also update the header and footer in index.html to match this exact better SVG
const svgLogoHeader = svgLogo.replace('h-[24px] w-auto inline-block mr-2 align-middle', 'h-[44px] w-auto');
const svgLogoFooter = svgLogo.replace('h-[24px] w-auto inline-block mr-2 align-middle', 'h-6 w-auto');

html = html.replace(/<svg class="h-\[44px\].*?<\/svg>/, svgLogoHeader);
html = html.replace(/<svg class="h-6.*?<\/svg>/, svgLogoFooter);

fs.writeFileSync('index.html', html, 'utf-8');
console.log("Updated all internal logos to SVG and repacked.");
