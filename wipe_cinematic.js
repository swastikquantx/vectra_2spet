const fs = require('fs');
let code = fs.readFileSync('Cinematic-Arsenal-37-Engines.html', 'utf-8');

// The offending line: P("div",{className:"mt-10 text-center text-[11px] text-slate-400",children:[P("span", {className:"text-red-600 font-bold inline-flex items-center align-middle mx-1", children:[P("img",{src:"/742938a6-977c-4327-b1a1-983e4a7c9687.png",className:"h-[1em] w-auto mr-1.5 object-contain",alt:""}), "Swastik AI LABS"]}), " © ",new Date().getFullYear()," — "]})

code = code.replace(/P\("div",\{className:"mt-10 text-center text-\[11px\] text-slate-400".*?\}\)/g, '""');

fs.writeFileSync('Cinematic-Arsenal-37-Engines.html', code, 'utf-8');
