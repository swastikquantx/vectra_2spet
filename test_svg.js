const fs = require('fs');

const refinedSvg = `<svg class="h-[24px] w-auto inline-block mr-2 align-middle" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="leftArm" x1="40" y1="20" x2="100" y2="130" gradientUnits="userSpaceOnUse">
<stop offset="0%" stop-color="#0557fa" />
<stop offset="100%" stop-color="#021447" />
</linearGradient>
<linearGradient id="rightArm" x1="160" y1="20" x2="100" y2="130" gradientUnits="userSpaceOnUse">
<stop offset="0%" stop-color="#03c4a1" />
<stop offset="100%" stop-color="#021447" />
</linearGradient>
</defs>
<polygon points="30,20 75,20 105,125 60,125" fill="url(#leftArm)" />
<polygon points="170,20 125,20 95,125 140,125" fill="url(#rightArm)" />
<!-- Background cutout for the overlapping right arm -->
<polygon points="168,20 127,20 97,125 138,125" fill="url(#rightArm)" />
<g stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M140,40 L108,95 L95,95" />
<circle cx="140" cy="40" r="4.5" fill="white" />
<path d="M152,55 L118,112 L105,112" />
<circle cx="152" cy="55" r="4.5" fill="white" />
<path d="M164,70 L128,129 L115,129" />
<circle cx="164" cy="70" r="4.5" fill="white" />
</g>
<text x="100" y="160" font-family="'Syne', sans-serif" font-size="34" font-weight="900" letter-spacing="0.25em" fill="#021447" text-anchor="middle">VECTRA</text>
<line x1="30" y1="180" x2="55" y2="180" stroke="#0557fa" stroke-width="1.5" />
<text x="100" y="184" font-family="'Syne', sans-serif" font-size="12" font-weight="700" letter-spacing="0.3em" fill="#03c4a1" text-anchor="middle">AI BASED</text>
<line x1="145" y1="180" x2="170" y2="180" stroke="#0557fa" stroke-width="1.5" />
</svg>`;

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
        content = content.replace(/<svg class="h-\[24px\].*?<\/svg>/g, refinedSvg);
        
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

const svgLogoHeader = refinedSvg.replace('h-[24px] w-auto inline-block mr-2 align-middle', 'h-[44px] w-auto');
const svgLogoFooter = refinedSvg.replace('h-[24px] w-auto inline-block mr-2 align-middle', 'h-6 w-auto');

html = html.replace(/<svg class="h-\[44px\].*?<\/svg>/, svgLogoHeader);
html = html.replace(/<svg class="h-6.*?<\/svg>/, svgLogoFooter);

fs.writeFileSync('index.html', html, 'utf-8');
console.log("Updated to refined SVG.");
