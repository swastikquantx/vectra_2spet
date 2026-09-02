const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  let html = Buffer.from(pages['Home.html'], 'base64').toString('utf-8');
  
  const oldArray = 'xc=[{label:"Home",href:"/home"},{label:"About Swastik",href:"/about"},{label:"How Does it works",href:"/how-it-works"},{label:"Solutions",href:"/solutions"},{label:"Enterprise",href:"/enterprise"},{label:"Why Pay So Much",href:"/why-pay-so-much"},{label:"Pricing",href:"/pricing"},{label:"Contact Us",href:"/contact"}]';
  const newArray = 'xc=[{label:"Home",href:"/home"},{label:"About Swastik",href:"/about"},{label:"Cinematic Arsenal",href:"/cinematic-arsenal"},{label:"How it works",href:"/how-it-works"},{label:"Solutions",href:"/solutions"},{label:"Enterprise",href:"/enterprise"},{label:"Pricing",href:"/pricing"}]';
  html = html.replace(oldArray, newArray);
  
  const oldBtn = 'd("a",{href:"/studio",className:"hidden lg:inline-flex items-center justify-center rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors shadow-sm",children:"Create Studio / Login"})';
  const newBtn = 'd("a",{href:"/studio",className:"hidden lg:inline-flex items-center justify-center rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors shadow-sm",children:"Create Studio"}), d("a",{href:"/login",className:"hidden lg:inline-flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 px-5 py-2.5 text-[13px] font-semibold text-slate-700 transition-colors shadow-sm",children:"Login/Create Account"})';
  
  if(html.includes(oldBtn)) {
    html = html.replace(oldBtn, newBtn);
  } else {
    console.log("oldBtn not found in Home");
  }
  
  pages['Home.html'] = Buffer.from(html, 'utf-8').toString('base64');
  
  const newPagesStr = JSON.stringify(pages);
  const newIndexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', newIndexHtml, 'utf-8');
  console.log('Home updated');
}
