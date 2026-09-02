const fs = require('fs');

const files = [
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

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;

  // 1. Remove the Cinematic Arsenal text div entirely (it's inside h("div", ...))
  content = content.replace(/h\("div",\{className:"mt-10 text-center text-\[11px\] text-slate-400".*?Infinite Stories\."\}\]\}\)/g, '""');

  // 2. Remove React footers: replace [a-z]\("footer",\{.*?\}\)
  // Since regexing nested brackets is hard, let's just wipe out the specific text contents so they render empty, or hide them.
  // Actually, let's just inject the CSS to hide ALL footers except #global-footer.
  
  // 3. For the specific texts that might be in divs:
  content = content.replace(/THE CINEMATIC ARSENAL — 37 Engines\. One Plan\. Infinite Stories\./g, '');
  content = content.replace(/Vectra — Unlimited Cinema for Bharat/g, '');
  content = content.replace(/Flat ₹499 • No tiers • No credits/g, '');
  content = content.replace(/NPCI UPI Autopay/g, '');
  content = content.replace(/B-805, Eaton Square, Lodha Sterling, Clariant Compound, Kolshet Road, Thane West 400607/g, '');
  content = content.replace(/Cell: 7359777788/g, '');
  content = content.replace(/UPI: 7359777788@upi/g, '');
  content = content.replace(/Built with.*?cutting-edge technology/g, '');
  content = content.replace(/Empowering Innovation through Technology\. Building growth engines, not just software\./g, '');
  content = content.replace(/BUILT FOR CLOUDFLARE • WHITE THEME • VECTRA_OS/g, '');
  
  // Just to be absolutely safe, let's inject a CSS rule into the head of every file that hides all footers
  if (!content.includes('footer:not(#global-footer)')) {
     content = content.replace('</head>', '<style>footer:not(#global-footer) { display: none !important; }</style></head>');
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Cleaned ${file}`);
  }
}
