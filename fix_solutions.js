const fs = require('fs');
let html = fs.readFileSync('Solutions.html', 'utf-8');
const target = 'g("div",{className:"mt-6 mb-16 rounded-[20px] border p-6 md:p-8 text-center",style:{background:"#FAFAFA",borderColor:"#EEEEEE"},children:[f("div",{className:"text-[11px] font-bold tracking-[0.2em] text-[#9CA3AF] uppercase mb-4",children:"TRUSTED BY"}),f("div",{className:"flex flex-wrap justify-center gap-6 md:gap-10 opacity-60",children:["ENTERPRISE 1","FINANCE CO","HEALTH+","TELCO","MEDIA GROUP","GOV SEC"].map((r,l)=>f("div",{className:"text-[13px] font-bold tracking-widest text-[#6B7280]",children:r},l))}),f("div",{className:"mt-6 text-[12px] text-[#9CA3AF]",children:"© Vectra AI • Attack Signal Intelligence™"})]})';

if (html.includes(target)) {
    html = html.replace(target, '""'); // replace with empty string literal since it's an element in an array
    fs.writeFileSync('Solutions.html', html, 'utf-8');
    console.log("Successfully removed TRUSTED BY block from Solutions.html");
} else {
    console.log("Could not find the target string exactly. Using regex.");
    html = html.replace(/g\("div",\{className:"mt-6 mb-16 rounded-\[20px\].*?© Vectra AI • Attack Signal Intelligence™"\}\)\}\)/, '""');
    fs.writeFileSync('Solutions.html', html, 'utf-8');
    console.log("Regex replace done.");
}
