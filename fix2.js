const fs = require('fs');
let pricing = fs.readFileSync('Pricing.html', 'utf-8');
const targetStr = `S("div",{children:["© ",new Date().getFullYear(), " ", S("span", {className:"whitespace-nowrap mx-1", children:[S("img",{src:"/742938a6-977c-4327-b1a1-983e4a7c9687.png",className:"inline-block align-text-bottom h-[1em] w-auto mr-1.5 object-contain",alt:""}), ""]}), " • "]}),`;

if (pricing.includes(targetStr)) {
  pricing = pricing.replace(targetStr, "");
  fs.writeFileSync('Pricing.html', pricing);
  console.log("Pricing fixed");
} else {
  console.log("Pricing target not found!");
}
