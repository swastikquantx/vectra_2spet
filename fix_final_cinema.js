const fs = require('fs');
let code = fs.readFileSync('Cinematic-Arsenal-37-Engines.html', 'utf-8');

// Completely remove the last section that contains the footer text
code = code.replace(/h\("section",\{className:"bg-slate-50 border-t border-slate-200"[\s\S]*?\)\}\]\}\)/g, '""');

// Also catch the specific trailing string that caused the issue:
code = code.replace(/,"Swastik AI LABS"\]\}\), " © ",new Date\(\)\.getFullYear\(\)," — "\]\}\)/g, '');

fs.writeFileSync('Cinematic-Arsenal-37-Engines.html', code, 'utf-8');
