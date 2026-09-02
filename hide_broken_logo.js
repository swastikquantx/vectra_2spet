const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');
// Fix the title as well
html = html.replace(/<title>.*?<\/title>/, '<title>Vectra</title>');

fs.writeFileSync('index.html', html, 'utf-8');
console.log("Updated title in index.html");
