const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf-8');
const match = html.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  let decoded = Buffer.from(pages['Home.html'], 'base64').toString('utf-8');

  const originalWPGrid = 'children:wp.map((u)=>h("div",{className:"rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-violet-200 transition-all flex flex-col group",children:[h("div",{className:"flex items-start justify-between gap-3",children:[d("div",{className:"h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-[16px] group-hover:bg-violet-600 transition-colors",children:u.icon}),d("span",{className:"text-[10px] font-mono bg-slate-50 border border-slate-200 rounded-full px-2 py-1 text-slate-600 truncate max-w-[130px]",children:u.fn})]}),d("h4",{className:"mt-3 text-[14px] font-bold leading-tight",children:u.name}),d("div",{className:"mt-1 text-[11px] font-semibold tracking-wide uppercase text-violet-600 leading-tight",children:u.meta}),d("p",{className:"mt-2 text-[12px] leading-5 text-slate-600",children:u.desc}),h("div",{className:"mt-auto pt-3 flex items-center gap-2",children:[d("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-500"}),d("span",{className:"text-[11px] font-mono text-slate-500",children:"Production ready • No watermark"})]})]},u.name))';
  
  const newWPGrid = `children:[...wp.map((u)=>h("div",{className:"rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-violet-200 transition-all flex flex-col group",children:[h("div",{className:"flex items-start justify-between gap-3",children:[d("div",{className:"h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-[16px] group-hover:bg-violet-600 transition-colors",children:u.icon}),d("span",{className:"text-[10px] font-mono bg-slate-50 border border-slate-200 rounded-full px-2 py-1 text-slate-600 truncate max-w-[130px]",children:u.fn})]}),d("h4",{className:"mt-3 text-[14px] font-bold leading-tight",children:u.name}),d("div",{className:"mt-1 text-[11px] font-semibold tracking-wide uppercase text-violet-600 leading-tight",children:u.meta}),d("p",{className:"mt-2 text-[12px] leading-5 text-slate-600",children:u.desc}),h("div",{className:"mt-auto pt-3 flex items-center gap-2",children:[d("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-500"}),d("span",{className:"text-[11px] font-mono text-slate-500",children:"Production ready • No watermark"})]})]},u.name)), ...Array.from({length: (3 - (wp.length % 3)) % 3}).map((_, idx) => h("div", {className: "rounded-[18px] border border-slate-100 bg-slate-50/50 p-5 shadow-sm flex flex-col justify-center items-center text-center", children: [d("div", {className: "w-10 h-10 rounded-full bg-violet-50 text-[18px] flex items-center justify-center mb-3", children: "✨"}), d("h3", {className: "text-[14px] font-bold text-slate-500", children: "Coming Soon"}), d("p", {className: "text-[11px] text-slate-400 mt-1", children: "New core method in training..."})]}, "wp_empty_" + idx))]`;

  if (decoded.includes(originalWPGrid)) {
     decoded = decoded.replace(originalWPGrid, newWPGrid);
     console.log('Successfully filled empty spaces in the 13 Core Engines section!');
  } else {
     console.log('Failed to match the 13 Core Engines grid.');
  }
  
  pages['Home.html'] = Buffer.from(decoded, 'utf-8').toString('base64');
  const newPagesStr = JSON.stringify(pages);
  const newHtml = html.replace(match[1], newPagesStr);
  
  fs.writeFileSync('index.html', newHtml, 'utf-8');
}
