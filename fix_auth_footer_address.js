const fs = require('fs');

let auth = fs.readFileSync('Auth-Genz-Registration.html', 'utf-8');

auth = auth.replace(/Swastik AI LABS.*?B-805, Eaton Square, Lodha Sterling, Clariant Compound, Kolshet Road, Thane West 400607/g, '');
auth = auth.replace(/Cell: 7359777788/g, '');
auth = auth.replace(/UPI: 7359777788@upi/g, '');


fs.writeFileSync('Auth-Genz-Registration.html', auth, 'utf-8');
console.log("Removed address block from Auth-Genz-Registration.html");

