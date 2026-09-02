const fs = require('fs');
let code = fs.readFileSync('Cinematic-Arsenal-37-Engines.html', 'utf-8');

// The line is: "© 2026 — THE CINEMATIC ARSENAL" or something similar in the original file. Let's just nuke the very last section div completely.
code = code.replace(/h\("div",\{className:"mt-10 text-center text-\[11px\] text-slate-400"[\s\S]*?\)\}\)\}\)/g, 'null');

fs.writeFileSync('Cinematic-Arsenal-37-Engines.html', code, 'utf-8');
