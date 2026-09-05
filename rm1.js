const fs = require('fs');
let txt = fs.readFileSync('Pricing.html', 'utf-8');
const search = `S("div",{children:["© ",new Date().getFullYear(), " ", S("span", {className:"whitespace-nowrap mx-1", children:[S("img",{src:"/742938a6-977c-4327-b1a1-983e4a7c9687.png",className:"inline-block align-text-bottom h-[1em] w-auto mr-1.5 object-contain",alt:""}), ""]}), " • "]}),`;
if (txt.includes(search)) {
  txt = txt.replace(search, "");
  fs.writeFileSync('Pricing.html', txt);
  console.log("Removed from Pricing.html!");
} else {
  console.log("Not found in Pricing.html!");
}
