const fs = require('fs');
let code = fs.readFileSync('Cinematic-Arsenal-37-Engines.html', 'utf-8');

// The offending line: "Swastik AI LABS"
// We've stripped most of it but let's check for any remaining literal strings of Swastik anywhere.
code = code.replace(/Swastik AI LABS/g, '');
code = code.replace(/© 2026/g, '');
code = code.replace(/—/g, ''); // Be careful with mdash but it was part of that string

fs.writeFileSync('Cinematic-Arsenal-37-Engines.html', code, 'utf-8');
