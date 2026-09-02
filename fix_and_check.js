const fs = require('fs');

// 1. Remove global footer injection completely from build_index.js
let build = fs.readFileSync('build_index.js', 'utf-8');
build = build.replace(/const globalFooterHtml = `[\s\S]*?`;/, 'const globalFooterHtml = "";');
// Also remove the injection logic if possible, or just let it inject empty string.
fs.writeFileSync('build_index.js', build, 'utf-8');

// 2. Let's check if Cinematic and Auth pages are valid HTML/JS
const cinematic = fs.readFileSync('Cinematic-Arsenal-37-Engines.html', 'utf-8');
const auth = fs.readFileSync('Auth-Genz-Registration.html', 'utf-8');

console.log('Cinematic size:', cinematic.length);
console.log('Auth size:', auth.length);

console.log('Cinematic end:', cinematic.substring(cinematic.length - 200));
console.log('Auth end:', auth.substring(auth.length - 200));

