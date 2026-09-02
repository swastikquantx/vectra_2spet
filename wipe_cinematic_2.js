const fs = require('fs');
let code = fs.readFileSync('Cinematic-Arsenal-37-Engines.html', 'utf-8');

// There is one more layer, let's just make absolutely sure there is NO trace of Swastik AI Labs outside the nav
code = code.replace(/P\("div",\{className:"mt-10 text-center text-\[11px\] text-slate-400"[\s\S]*?\)\}\)\}\)/g, '""');

fs.writeFileSync('Cinematic-Arsenal-37-Engines.html', code, 'utf-8');
