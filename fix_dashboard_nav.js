const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// Remove User_Dashboard.html from ORDER
html = html.replace(
  /const ORDER=\["Home.html", "About_Swastilk.html", "Cinematic-Arsenal-37-Engines.html", "How-It-Works.html", "Solutions.html", "Enterprise.html", "Pricing.html", "Create_Studio.html", "Auth-Genz-Registration.html", "User_Dashboard.html"\];/,
  'const ORDER=["Home.html", "About_Swastilk.html", "Cinematic-Arsenal-37-Engines.html", "How-It-Works.html", "Solutions.html", "Enterprise.html", "Pricing.html", "Create_Studio.html", "Auth-Genz-Registration.html"];'
);

fs.writeFileSync('index.html', html, 'utf-8');
console.log("Removed User_Dashboard from top nav.");
