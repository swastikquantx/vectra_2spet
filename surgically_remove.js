const fs = require('fs');
let code = fs.readFileSync('cinematic.html', 'utf-8');

const targetString = 'P("div",{className:"mt-10 text-center text-[11px] text-slate-400",children:[P("span", {className:"text-red-600 font-bold inline-flex items-center align-middle mx-1", children:[P("img",{src:"/742938a6-977c-4327-b1a1-983e4a7c9687.png",className:"h-[1em] w-auto mr-1.5 object-contain",alt:""}), "Swastik AI LABS"]}), " © ",new Date().getFullYear()," — THE CINEMATIC ARSENAL — 37 Engines. One Plan. Infinite Stories."]})';

if (code.includes(targetString)) {
  console.log('TARGET FOUND!');
  code = code.replace(targetString, 'null'); // replace the P("div" ...) with 'null' inside the array of children
  fs.writeFileSync('Cinematic-Arsenal-37-Engines.html', code, 'utf-8');
  console.log('REPLACED WITH NULL AND SAVED TO Cinematic-Arsenal-37-Engines.html');
} else {
  console.log('TARGET NOT FOUND!');
}
