const fs = require('fs');
let index = fs.readFileSync('index.html', 'utf8');
index = index.replace(
    /"Create_Studio.html", "Auth-Genz-Registration.html","Concierge_Studio.html"/,
    '"Create_Studio.html", "Concierge_Studio.html", "Auth-Genz-Registration.html"'
);
fs.writeFileSync('index.html', index, 'utf8');
console.log("Fixed order in index.html");
