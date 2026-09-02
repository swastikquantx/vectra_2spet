const fs = require('fs');
let indexHtml = fs.readFileSync('index.html', 'utf-8');

const oldOrderStr = 'const ORDER=["Home.html", "Solutions.html", "How-It-Works.html", "Cinematic-Arsenal-37-Engines.html", "Create_Studio.html", "Pricing.html", "Enterprise.html", "About_Swastilk.html", "Auth-Genz-Registration.html"];';
const newOrderStr = 'const ORDER=["Home.html", "About_Swastilk.html", "Cinematic-Arsenal-37-Engines.html", "How-It-Works.html", "Solutions.html", "Enterprise.html", "Pricing.html", "Create_Studio.html", "Auth-Genz-Registration.html"];';

indexHtml = indexHtml.replace(oldOrderStr, newOrderStr);

const oldLabelsStr = 'const LABELS={"Home.html": "Home", "Solutions.html": "Solutions", "How-It-Works.html": "How It Works", "Cinematic-Arsenal-37-Engines.html": "Cinematic Arsenal", "Create_Studio.html": "Create Studio", "Pricing.html": "Pricing", "Enterprise.html": "Enterprise", "About_Swastilk.html": "About Swastilk", "Auth-Genz-Registration.html": "Login/Create Account", "Admin-Panel-UPI-Collect-Request.html": "Admin Login"};';
const newLabelsStr = 'const LABELS={"Home.html": "Home", "About_Swastilk.html": "About Swastik", "Cinematic-Arsenal-37-Engines.html": "Cinematic Arsenal", "How-It-Works.html": "How It Works", "Solutions.html": "Solutions", "Enterprise.html": "Enterprise", "Pricing.html": "Pricing", "Create_Studio.html": "Create Studio", "Auth-Genz-Registration.html": "Login/Create Account", "Admin-Panel-UPI-Collect-Request.html": "Admin Login"};';

indexHtml = indexHtml.replace(oldLabelsStr, newLabelsStr);

fs.writeFileSync('index.html', indexHtml, 'utf-8');
console.log('Fixed shell nav order');
