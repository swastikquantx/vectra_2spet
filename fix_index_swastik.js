const fs = require('fs');
let code = fs.readFileSync('build_index.js', 'utf-8');

// I also need to put it back in the global footer because I just wiped it from EVERYWHERE
code = code.replace(
  /<div class="text-\[12px\] text-zinc-500">[\s\S]*?<\/div>/,
  '<div class="text-[12px] text-zinc-500">      © 2026 Swastik AI LABS. Architecting the Future with AI.    </div>'
);

fs.writeFileSync('build_index.js', code, 'utf-8');
console.log("Restored the one true footer text.");
