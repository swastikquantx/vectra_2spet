const fs = require('fs');
let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  
  // 3. Pricing
  let phtml = Buffer.from(pages['Pricing.html'], 'base64').toString('utf-8');
  const pRightSide = 'S("div",{className:"flex items-center gap-3",children:[S("div",{className:"hidden md:flex items-center gap-2 text-[12px] text-zinc-500",children:[p("span",{className:"w-2 h-2 bg-emerald-500 rounded-full animate-pulse"}),"vectra.swastikllc.in/pricing • live preview"]}),S("a",{href:"#trial",className:"px-4 h-9 rounded-full bg-zinc-900 text-white text-[13px] font-medium inline-flex items-center gap-1.5 hover:bg-black transition",children:["Start free trial ",p(hn,{size:14})]})]})';
  const newPRightSide = 'S("nav",{className:"hidden xl:flex items-center gap-7 text-[13.5px] font-medium text-zinc-600",children:[p("a",{className:"hover:text-zinc-900 transition",href:"#",children:"Home"}),p("a",{className:"hover:text-zinc-900 transition",href:"#",children:"About Swastik"}),p("a",{className:"hover:text-zinc-900 transition",href:"#",children:"Cinematic Arsenal"}),p("a",{className:"hover:text-zinc-900 transition",href:"#",children:"How it works"}),p("a",{className:"hover:text-zinc-900 transition",href:"#",children:"Solutions"}),p("a",{className:"hover:text-zinc-900 transition",href:"#",children:"Enterprise"}),p("a",{className:"font-bold text-zinc-900 transition",href:"#",children:"Pricing"})]}),S("div",{className:"flex items-center gap-3",children:[p("a",{className:"hidden sm:flex h-9 px-4 rounded-full bg-zinc-900 text-white text-[13px] font-semibold hover:bg-black transition items-center justify-center",href:"#",children:"Create Studio"}),p("a",{className:"hidden sm:flex h-9 px-4 rounded-full border border-zinc-200 text-[13px] font-semibold hover:bg-zinc-50 transition items-center justify-center text-zinc-800",href:"#",children:"Login/Create Account"})]})';
  
  if (phtml.includes(pRightSide)) {
    phtml = phtml.replace(pRightSide, newPRightSide);
    pages['Pricing.html'] = Buffer.from(phtml, 'utf-8').toString('base64');
    console.log('Pricing nav updated');
  } else {
    console.log('Pricing right side not found');
  }

  // 4. Enterprise
  let ehtml = Buffer.from(pages['Enterprise.html'], 'base64').toString('utf-8');
  // I need to check Enterprise's raw html or jsx
  
  // 5. How It Works
  let hihtml = Buffer.from(pages['How-It-Works.html'], 'base64').toString('utf-8');
  const hiRightSide = '<div class="flex justify-end"><a href="#create" class="h-10 px-6 rounded-full bg-black text-white text-[13px] font-semibold inline-flex items-center gap-2 hover:bg-zinc-800 transition">Create Studio / Login <span>↗</span></a></div>';
  const newHiNav = '<nav class="flex items-center justify-center gap-5 text-[13.5px] font-medium text-zinc-600 mb-6 flex-wrap"><a href="#" class="hover:text-zinc-900 transition">Home</a><a href="#" class="hover:text-zinc-900 transition">About Swastik</a><a href="#" class="hover:text-zinc-900 transition">Cinematic Arsenal</a><a href="#" class="hover:text-zinc-900 transition font-bold text-zinc-900">How it works</a><a href="#" class="hover:text-zinc-900 transition">Solutions</a><a href="#" class="hover:text-zinc-900 transition">Enterprise</a><a href="#" class="hover:text-zinc-900 transition">Pricing</a></nav><div class="flex justify-center gap-3 mb-8"><a href="#create" class="h-10 px-6 rounded-full bg-black text-white text-[13px] font-semibold inline-flex items-center justify-center hover:bg-zinc-800 transition">Create Studio</a><a href="#login" class="h-10 px-6 rounded-full border border-zinc-200 bg-white text-zinc-800 text-[13px] font-semibold inline-flex items-center justify-center hover:bg-zinc-50 transition">Login/Create Account</a></div>';
  
  if (hihtml.includes(hiRightSide)) {
    hihtml = hihtml.replace(hiRightSide, newHiNav);
    pages['How-It-Works.html'] = Buffer.from(hihtml, 'utf-8').toString('base64');
    console.log('How-It-Works nav updated');
  } else {
    console.log('How-It-Works right side not found');
  }

  const newPagesStr = JSON.stringify(pages);
  const newIndexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', newIndexHtml, 'utf-8');
}
