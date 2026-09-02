const fs = require('fs');
let code = fs.readFileSync('Cinematic-Arsenal-37-Engines.html', 'utf-8');

const startStr = 'h("section",{className:"bg-slate-50 border-t border-slate-200"';
const endStr = ']})})]})}Xc.createRoot'; // let's replace up to Xc.createRoot

const startIdx = code.indexOf(startStr);
const endIdx = code.indexOf(endStr, startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  // We want to replace everything from startIdx up to endIdx with just '""' or similar?
  // Actually, wait. The structure before startIdx is probably `, h("section", ...`
  // Let's replace the whole section with `null` so it becomes `..., null]})})]})}Xc.createRoot`
  
  const original = code;
  code = code.substring(0, startIdx) + 'null' + code.substring(endIdx);
  
  fs.writeFileSync('Cinematic-Arsenal-37-Engines.html', code, 'utf-8');
  console.log('REPLACED PRICING SECTION WITH NULL');
} else {
  console.log('COULD NOT FIND INDICES');
}
