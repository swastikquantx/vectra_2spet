const fs = require('fs');
let html = fs.readFileSync('Pricing.html', 'utf-8');
console.log(html.slice(-100));
