const fs = require('fs');
let auth = fs.readFileSync('Auth-Genz-Registration.html', 'utf-8');
const targetStr = `m("div",{className:"text-[12px] leading-[1.6] text-[#6B7280]",children:[c("span",{className:"font-bold text-[#111827]",children:c("span", {className:"whitespace-nowrap mx-1", children:[c("img",{src:"/742938a6-977c-4327-b1a1-983e4a7c9687.png",className:"inline-block align-text-bottom h-[1em] w-auto mr-1.5 object-contain",alt:""}), "Swastik AI LABS"]})})," • B-805, Eaton Square, Lodha Sterling, Clariant Compound, Kolshet Road, Thane West 400607",c("br",{className:"hidden md:block"}),m("span",{className:"inline-flex gap-4 mt-1 md:mt-0",children:[m("span",{children:["Cell: ",c("span",{className:"font-medium text-[#111827]",children:"7359777788"})]}),m("span",{children:["UPI: ",c("span",{className:"font-mono font-medium text-[#111827]",children:"7359777788@upi"})]})]})]}),`;

if (auth.includes(targetStr)) {
  auth = auth.replace(targetStr, "");
  fs.writeFileSync('Auth-Genz-Registration.html', auth);
  console.log("Auth fixed");
} else {
  console.log("Auth target not found!");
}
