const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  let html = Buffer.from(pages['About_Swastilk.html'], 'base64').toString('utf-8');
  
  const oldArray = '[{label:"Home",active:!1},{label:"About Swastik",active:!0},{label:"How Does it works",active:!1},{label:"Solutions",active:!1},{label:"Enterprise",active:!1},{label:"Pricing",active:!1},{label:"Contact Us",active:!1}]';
  const newArray = '[{label:"Home",active:!1},{label:"About Swastik",active:!0},{label:"Cinematic Arsenal",active:!1},{label:"How it works",active:!1},{label:"Solutions",active:!1},{label:"Enterprise",active:!1},{label:"Pricing",active:!1}]';
  html = html.replace(oldArray, newArray);
  
  const oldBtn = 'c("a",{href:"#",className:"hidden sm:inline-flex items-center justify-center rounded-full bg-violet-600 hover:bg-violet-700 text-white text-[13.5px] font-semibold px-5 py-2.5 transition-colors shadow-sm shadow-violet-200",children:"Create Studio / Login"})';
  const newBtn = 'c("a",{href:"#",className:"hidden sm:inline-flex items-center justify-center rounded-full bg-violet-600 hover:bg-violet-700 text-white text-[13.5px] font-semibold px-5 py-2.5 transition-colors shadow-sm shadow-violet-200",children:"Create Studio"}), c("a",{href:"#",className:"hidden sm:inline-flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-[13.5px] font-semibold px-5 py-2.5 transition-colors shadow-sm",children:"Login/Create Account"})';
  
  if(html.includes(oldBtn)) {
    html = html.replace(oldBtn, newBtn);
  } else {
    console.log("oldBtn not found in About");
  }
  
  pages['About_Swastilk.html'] = Buffer.from(html, 'utf-8').toString('base64');
  
  const newPagesStr = JSON.stringify(pages);
  const newIndexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', newIndexHtml, 'utf-8');
  console.log('About updated');
}
