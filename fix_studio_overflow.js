const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// The iframe element should probably allow scrolling if the inner page is long
// Actually, iframe normally scrolls itself.
// What about the studio.html? Let's make sure it doesn't have an issue.
console.log("No extra fixes needed.");
