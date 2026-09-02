const fs = require('fs');

let auth = fs.readFileSync('Auth-Genz-Registration.html', 'utf-8');
auth = auth.replace(/className:"text-red-600 font-bold inline-flex items-center align-middle mx-1"/g, 'className:"inline-flex items-baseline mx-1"');
fs.writeFileSync('Auth-Genz-Registration.html', auth, 'utf-8');
console.log("Fixed alignment in Auth");
