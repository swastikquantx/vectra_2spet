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

const stringsToRemove = [
  "THE CINEMATIC ARSENAL — 37 Engines. One Plan. Infinite Stories.",
  "Vectra — Unlimited Cinema for Bharat",
  "Flat ₹499 • No tiers • No credits",
  "NPCI UPI Autopay",
  "B-805, Eaton Square, Lodha Sterling, Clariant Compound, Kolshet Road, Thane West 400607",
  "Cell: 7359777788",
  "UPI: 7359777788@upi",
  "Built with cutting-edge technology",
  "Empowering Innovation through Technology. Building growth engines, not just software.",
  "BUILT FOR CLOUDFLARE • WHITE THEME • VECTRA_OS",
  "© 2026 VECTRA • Create Cinematic Magic",
  "— THE CINEMATIC ARSENAL —"
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;

  for (const str of stringsToRemove) {
    if (content.includes(str)) {
      content = content.split(str).join('');
    }
  }

  // Find the exact block for Cinematic Arsenal footer text and wipe it out
  // Let's do a wider replace for that specific footer structure.
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Cleaned strings from ${file}`);
  }
}
