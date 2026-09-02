const fs = require('fs');

let about = fs.readFileSync('About_Swastilk.html', 'utf-8');

about = about.replace(/className:"text-red-600 font-bold inline-flex items-center align-middle mx-1"/g, 'className:"inline-flex items-baseline mx-1"');

fs.writeFileSync('About_Swastilk.html', about, 'utf-8');
console.log("Fixed alignment in About_Swastilk.html");
