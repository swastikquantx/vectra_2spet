const fs = require('fs');

// Read the image and create a data URI
const imgBuf = fs.readFileSync('vectra_logo.jpg');
const base64Data = imgBuf.toString('base64');
const dataUri = `data:image/avif;base64,${base64Data}`;

// Replace in index.html
let html = fs.readFileSync('index.html', 'utf-8');
html = html.replace(/<img src="vectra_logo\.jpg"/g, `<img src="${dataUri}"`);
fs.writeFileSync('index.html', html, 'utf-8');

console.log("Inlined the logo as a Data URI.");
