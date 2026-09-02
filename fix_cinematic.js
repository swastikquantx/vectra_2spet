const fs = require('fs');

// The Cinematic page is blank because I broke the React brackets. 
// "null]})})]})}Xc.createRoot"
// Let's restore the Cinematic page from cinematic_fixed.html (which is a clean backup before the null replacement).
let backup = fs.readFileSync('cinematic.html', 'utf-8'); // the original one

// The user wants:
// 1. Remove the old footer
// 2. Remove the global footer
// 3. Remove the pricing section

backup = backup.replace(/<footer id="global-footer"[\s\S]*?<\/footer>/gi, '');
backup = backup.replace(/<footer[\s\S]*?<\/footer>/gi, '');
backup = backup.replace(/© 2026 Swastik AI LABS. Architecting the Future with AI./g, '');
backup = backup.replace(/THE CINEMATIC ARSENAL[\s\S]*?Swastik AI LABS[\s\S]*?Privacy Policy/gi, '');

fs.writeFileSync('Cinematic-Arsenal-37-Engines.html', backup, 'utf-8');
console.log('Restored Cinematic from backup and removed footer');

// Now for the Login page (Auth-Genz-Registration.html)
let auth = fs.readFileSync('auth_page.html', 'utf-8');
auth = auth.replace(/<footer id="global-footer"[\s\S]*?<\/footer>/gi, '');
auth = auth.replace(/<footer[\s\S]*?<\/footer>/gi, '');
fs.writeFileSync('Auth-Genz-Registration.html', auth, 'utf-8');
console.log('Restored Auth from backup and removed footer');

// Make sure build_index doesn't inject it anymore
let build = fs.readFileSync('build_index.js', 'utf-8');
build = build.replace(/const globalFooterHtml = `[\s\S]*?`;/, 'const globalFooterHtml = "";');
fs.writeFileSync('build_index.js', build, 'utf-8');

