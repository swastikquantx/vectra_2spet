const fs = require('fs');
let pricing = fs.readFileSync('Pricing.html', 'utf-8');

// I will insert it right before: S("div",{className:"flex items-center gap-4"
const insertTarget = `S("div",{className:"flex items-center gap-4"`;
const toInsert = `S("div",{children:["© ",new Date().getFullYear(), " ", S("span", {className:"whitespace-nowrap mx-1", children:[S("img",{src:"/742938a6-977c-4327-b1a1-983e4a7c9687.png",className:"inline-block align-text-bottom h-[1em] w-auto mr-1.5 object-contain",alt:""}), ""]}), " • "]}),`;

if (pricing.includes(insertTarget) && !pricing.includes(toInsert)) {
  pricing = pricing.replace(insertTarget, toInsert + insertTarget);
  fs.writeFileSync('Pricing.html', pricing);
  console.log("Pricing React restored");
}
