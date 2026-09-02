const fs = require('fs');
let code = fs.readFileSync('build_index.js', 'utf-8');

// Find and remove the social buttons block
code = code.replace(/<!-- Social Buttons Row -->.*?<!-- Bottom Line -->/s, '<!-- Bottom Line -->');

fs.writeFileSync('build_index.js', code, 'utf-8');
