const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  let html = Buffer.from(pages['Cinematic-Arsenal-37-Engines.html'], 'base64').toString('utf-8');
  
  const oldArray = '[{label:"Home",href:"/home"},{label:"About Swastik",href:"#about-swastik"},{label:"How Does it works",href:"#how-does-it-works"},{label:"Solutions",href:"#solutions"},{label:"Enterprise",href:"#enterprise"},{label:"Why Pay So Much",href:"#why-pay-so-much"},{label:"Pricing",href:"#pricing"},{label:"Contact Us",href:"#contact-us"}]';
  const newArray = '[{label:"Home",href:"/"},{label:"About Swastik",href:"/about"},{label:"Cinematic Arsenal",href:"/cinematic-arsenal"},{label:"How it works",href:"/how-it-works"},{label:"Solutions",href:"/solutions"},{label:"Enterprise",href:"/enterprise"},{label:"Pricing",href:"/pricing"}]';
  html = html.replace(oldArray, newArray);
  
  const oldBtn = 'h("a",{href:"#create-studio",className:"hidden lg:inline-flex items-center justify-center rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors shadow-sm",children:"Create Studio / Login"})';
  const newBtn = 'h("a",{href:"/studio",className:"hidden lg:inline-flex items-center justify-center rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors shadow-sm",children:"Create Studio"}), h("a",{href:"/login",className:"hidden lg:inline-flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 px-5 py-2.5 text-[13px] font-semibold text-slate-700 transition-colors shadow-sm",children:"Login/Create Account"})';
  
  if(html.includes(oldBtn)) {
    html = html.replace(oldBtn, newBtn);
  } else {
    console.log("oldBtn not found in Cinematic");
  }
  
  pages['Cinematic-Arsenal-37-Engines.html'] = Buffer.from(html, 'utf-8').toString('base64');
  
  const newPagesStr = JSON.stringify(pages);
  const newIndexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', newIndexHtml, 'utf-8');
  console.log('Cinematic updated');
}
