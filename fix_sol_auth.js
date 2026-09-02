const fs = require('fs');
let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  
  // 1. Solutions
  let solHtml = Buffer.from(pages['Solutions.html'], 'base64').toString('utf-8');
  let p1 = solHtml.indexOf('g("nav",{className:"hidden lg:flex items-center gap-5 xl:gap-6 text-[13.5px] font-medium"');
  let p2 = solHtml.indexOf('children:"Get Started"})]})]})', p1) + 'children:"Get Started"})]})]})'.length;
  
  if (p1 !== -1 && p2 > p1) {
    const newNav = 'g("nav",{className:"hidden lg:flex items-center gap-5 xl:gap-6 text-[13.5px] font-medium",children:[f("span",{className:"text-[#6B7280] cursor-default",children:"Home"}),f("span",{className:"text-[#6B7280] cursor-default",children:"About Swastik"}),f("span",{className:"text-[#6B7280] cursor-default",children:"Cinematic Arsenal"}),f("span",{className:"text-[#6B7280] cursor-default",children:"How it works"}),f("span",{className:"text-[#2563EB] font-semibold border-b-2 border-[#2563EB] pb-0.5",children:"Solutions"}),f("span",{className:"text-[#6B7280] cursor-default",children:"Enterprise"}),f("span",{className:"text-[#6B7280] cursor-default",children:"Pricing"})]})]}),g("div",{className:"flex items-center gap-3 shrink-0",children:[f("span",{className:"hidden md:inline-flex items-center justify-center h-9 px-4 rounded-full bg-[#2563EB] text-white text-[13px] font-semibold shadow-sm cursor-pointer hover:bg-[#1D4ED8]",children:"Create Studio"}),f("span",{className:"inline-flex items-center justify-center h-9 px-4 rounded-full border border-[#E5E7EB] bg-white text-[#111827] text-[13px] font-semibold cursor-pointer hover:bg-slate-50",children:"Login/Create Account"})]})]})';
    
    solHtml = solHtml.substring(0, p1) + newNav + solHtml.substring(p2);
    pages['Solutions.html'] = Buffer.from(solHtml, 'utf-8').toString('base64');
    console.log('Solutions nav updated');
  } else {
    console.log('Solutions bounds not found');
  }

  // 2. Auth
  let authHtml = Buffer.from(pages['Auth-Genz-Registration.html'], 'base64').toString('utf-8');
  let ap1 = authHtml.indexOf('m("nav",{className:"hidden xl:flex items-center gap-7 text-[13.5px] font-medium text-[#4B5563]"');
  let ap2 = authHtml.indexOf('children:"Get Started"})]})]})', ap1) + 'children:"Get Started"})]})]})'.length;
  
  if (ap1 !== -1 && ap2 > ap1) {
    const newAuthNav = 'm("nav",{className:"hidden xl:flex items-center gap-7 text-[13.5px] font-medium text-[#4B5563]",children:[c("a",{className:"hover:text-[#111827] transition",href:"#",children:"Home"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"About Swastik"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"Cinematic Arsenal"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"How it works"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"Solutions"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"Enterprise"}),c("a",{className:"hover:text-[#111827] transition",href:"#",children:"Pricing"})]}),m("div",{className:"flex items-center gap-3",children:[c("button",{className:"hidden sm:flex h-10 px-5 rounded-full bg-[#2563EB] text-white text-[13px] font-semibold hover:bg-[#1D4ED8] transition shadow-[0_4px_14px_rgba(37,99,235,0.25)] items-center justify-center",children:"Create Studio"}),c("button",{className:"hidden sm:flex h-10 px-5 rounded-full border border-[#E5E7EB] text-[13px] font-semibold hover:bg-[#F9FAFB] transition items-center justify-center text-slate-700 bg-white",children:"Login/Create Account"})]})]})';
    
    authHtml = authHtml.substring(0, ap1) + newAuthNav + authHtml.substring(ap2);
    pages['Auth-Genz-Registration.html'] = Buffer.from(authHtml, 'utf-8').toString('base64');
    console.log('Auth nav updated');
  } else {
    console.log('Auth bounds not found');
  }

  const newPagesStr = JSON.stringify(pages);
  const newIndexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', newIndexHtml, 'utf-8');
}
