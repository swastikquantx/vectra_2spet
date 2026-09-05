const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// The unzipped index.html has ORDER and LABELS from 09:11.
// We must update them to the 10:35 UTC state.
const oldOrder = 'const ORDER=["Home.html", "About_Swastilk.html", "Cinematic-Arsenal-37-Engines.html", "How-It-Works.html", "Solutions.html", "Enterprise.html", "Pricing.html", "Create_Studio.html", "Auth-Genz-Registration.html"];';
const newOrder = 'const ORDER=["Home.html", "About_Swastilk.html", "Cinematic-Arsenal-37-Engines.html", "How-It-Works.html", "Solutions.html", "Enterprise.html", "Pricing.html", "Create_Studio.html", "Concierge_Studio.html", "Auth-Genz-Registration.html"];';
indexHtml = indexHtml.replace(oldOrder, newOrder);

const oldLabels = 'const LABELS={"Home.html": "Home", "About_Swastilk.html": "About Swastik", "Cinematic-Arsenal-37-Engines.html": "Cinematic Arsenal", "How-It-Works.html": "How It Works", "Solutions.html": "Solutions", "Enterprise.html": "Enterprise", "Pricing.html": "Pricing", "Create_Studio.html": "Create Studio", "Auth-Genz-Registration.html": "Login/Create Account", "User_Dashboard.html": "User Dashboard", "Admin_Panel.html": "Admin Dashboard"};';
const newLabels = 'const LABELS={"Home.html": "Home", "About_Swastilk.html": "About Swastik", "Cinematic-Arsenal-37-Engines.html": "Cinematic Arsenal", "How-It-Works.html": "How It Works", "Solutions.html": "Solutions", "Enterprise.html": "Enterprise", "Pricing.html": "Pricing", "Create_Studio.html": "Create Studio", "Auth-Genz-Registration.html": "Login/Create Account", "User_Dashboard.html": "User Dashboard", "Admin_Panel.html": "Admin Dashboard", "Concierge_Studio.html": "Concierge Studio"};';

// Note: It's possible oldLabels was slightly different. Let's just regex replace LABELS entirely.
indexHtml = indexHtml.replace(/const LABELS=\{[^}]*\};/, newLabels);

fs.writeFileSync('index.html', indexHtml);
console.log('Fixed ORDER and LABELS');
