const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  
  // My previous "null" replacement probably broke the React brackets. 
  // Let's restore Cinematic and Auth from backup if possible. 
  // If no backup, I need to look closely at the React render call.
}

console.log("Checking Cinematic render call...");
const c = fs.readFileSync('Cinematic-Arsenal-37-Engines.html', 'utf-8');
console.log(c.substring(c.lastIndexOf('.createRoot') - 100, c.lastIndexOf('.createRoot') + 50));

console.log("Checking Auth render call...");
const a = fs.readFileSync('Auth-Genz-Registration.html', 'utf-8');
console.log(a.substring(a.lastIndexOf('.createRoot') - 100, a.lastIndexOf('.createRoot') + 50));
