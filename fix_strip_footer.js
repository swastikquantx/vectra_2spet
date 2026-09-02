const fs = require('fs');
let code = fs.readFileSync('build_index.js', 'utf-8');

// Replace the weak regex with a strong one that kills all footers
code = code.replace(
    /content = content\.replace\(\/<footer id="global-footer"\.\*\?<\\\/footer>\/s, ''\);/,
    "content = content.replace(/<footer[\\\\s\\\\S]*?<\\/footer>/gi, '');"
);

fs.writeFileSync('build_index.js', code, 'utf-8');
console.log("Updated build_index.js to strip all existing footers");
