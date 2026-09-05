const fs = require('fs');
let index = fs.readFileSync('index.html', 'utf8');

// The file payloads are likely stored in a variable like `const files = { ... }` or `window.FILES = ...`. 
// We want to regenerate index.html with the footers removed from all inner files if possible, 
// OR we just use our separate HTML files. Is index.html being dynamically rebuilt?
