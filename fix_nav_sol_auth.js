const fs = require('fs');
let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  
  // 1. Solutions
  let solHtml = Buffer.from(pages['Solutions.html'], 'base64').toString('utf-8');
  const solOldNav = 'g("nav",{className:"hidden lg:flex items-center gap-5 xl:gap-6 text-[13.5px] font-medium",children:[f("span",{className:"text-[#6B7280] cursor-default",children:"Home"}),f("span",{className:"text-[#6B7280] cursor-default",children:"Studio"}),f("span",{className:"text-[#6B7280] cursor-default",children:"Pricing"}),f("span",{className:"text-[#2563EB] font-semibold border-b-2 border-[#2563EB] pb-0.5",children:"Solutions"}),f("span",{className:"text-[#6B7280] cursor-default",children:"Enterprise"}),f("span",{className:"text-[#6B7280] cursor-default",children:"How it works"}),f("span",{className:"text-[#6B7280] cursor-default",children:"About"}),f("span",{className:"text-[#6B7280] cursor-default",children:"Swastik"}),f("span",{className:"text-[#6B7280] cursor-default",children:"Contact"})]})]}),g("div",{className:"flex items-center gap-3 shrink-0",children:[f("span",{className:"hidden md:inline-flex items-center justify-center h-9 px-4 rounded-full bg-[#2563EB] text-white text-[13px] font-semibold shadow-sm",children:"Create Studio / Login"})';
  const solNewNav = 'g("nav",{className:"hidden lg:flex items-center gap-5 xl:gap-6 text-[13.5px] font-medium",children:[f("span",{className:"text-[#6B7280] cursor-default",children:"Home"}),f("span",{className:"text-[#6B7280] cursor-default",children:"About Swastik"}),f("span",{className:"text-[#6B7280] cursor-default",children:"Cinematic Arsenal"}),f("span",{className:"text-[#6B7280] cursor-default",children:"How it works"}),f("span",{className:"text-[#2563EB] font-semibold border-b-2 border-[#2563EB] pb-0.5",children:"Solutions"}),f("span",{className:"text-[#6B7280] cursor-default",children:"Enterprise"}),f("span",{className:"text-[#6B7280] cursor-default",children:"Pricing"})]})]}),g("div",{className:"flex items-center gap-3 shrink-0",children:[f("span",{className:"hidden md:inline-flex items-center justify-center h-9 px-4 rounded-full bg-[#2563EB] text-white text-[13px] font-semibold shadow-sm cursor-pointer hover:opacity-90",children:"Create Studio"}),f("span",{className:"hidden md:inline-flex items-center justify-center h-9 px-4 rounded-full border border-slate-200 bg-white text-slate-700 text-[13px] font-semibold shadow-sm cursor-pointer hover:bg-slate-50",children:"Login/Create Account"})';
  
  if (solHtml.includes(solOldNav)) {
    solHtml = solHtml.replace(solOldNav, solNewNav);
    pages['Solutions.html'] = Buffer.from(solHtml, 'utf-8').toString('base64');
    console.log('Fixed Solutions nav');
  } else {
    console.log('Solutions old nav not found');
  }

  // 2. Auth
  let authHtml = Buffer.from(pages['Auth-Genz-Registration.html'], 'base64').toString('utf-8');
  const authOldNav = 'm("nav",{className:"hidden xl:flex items-center gap-7 text-[13.5px] font-medium text-[#4B5563]",children:[c("a",{className:"hover:text-[#111827] transition",href:"#",children:"Home"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"Studio"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"Pricing"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"Solutions"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"Enterprise"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"How it works"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"About"}),m("span",{className:"flex items-center gap-1",children:[c("span",{className:"text-[14px]",children:"卐"})," Swastik"]}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"Contact"})]}),m("div",{className:"flex items-center gap-3",children:[c("button",{className:"hidden sm:flex h-10 px-5 rounded-full border border-[#EEEEEE] text-[13px] font-semibold hover:bg-[#F9FAFB] transition items-center justify-center",children:"Create Studio / Login"})';
  const authNewNav = 'm("nav",{className:"hidden xl:flex items-center gap-7 text-[13.5px] font-medium text-[#4B5563]",children:[c("a",{className:"hover:text-[#111827] transition",href:"#",children:"Home"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"About Swastik"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"Cinematic Arsenal"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"How it works"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"Solutions"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"Enterprise"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"Pricing"})]}),m("div",{className:"flex items-center gap-3",children:[c("button",{className:"hidden sm:flex h-10 px-5 rounded-full border border-[#EEEEEE] bg-[#2563EB] text-white text-[13px] font-semibold hover:bg-[#1D4ED8] transition items-center justify-center",children:"Create Studio"}),c("button",{className:"hidden sm:flex h-10 px-5 rounded-full border border-[#EEEEEE] text-[13px] font-semibold hover:bg-[#F9FAFB] transition items-center justify-center",children:"Login/Create Account"})';
  
  if (authHtml.includes(authOldNav)) {
    authHtml = authHtml.replace(authOldNav, authNewNav);
    pages['Auth-Genz-Registration.html'] = Buffer.from(authHtml, 'utf-8').toString('base64');
    console.log('Fixed Auth nav');
  } else {
    console.log('Auth old nav not found');
  }
  
  const newPagesStr = JSON.stringify(pages);
  const newIndexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', newIndexHtml, 'utf-8');
}
