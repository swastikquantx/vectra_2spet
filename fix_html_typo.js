const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');
html = html.replace(/<img src=<img src="vectra_logo\.jpg"/g, '<img src="vectra_logo.jpg"');
fs.writeFileSync('index.html', html, 'utf-8');
console.log("Fixed typo");
