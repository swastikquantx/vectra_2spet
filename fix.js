const fs = require('fs');
let html = fs.readFileSync('Home_decoded.js', 'utf-8');

// 1. Hide the pricing section
html = html.replace(
  /d\("section",\{className:"bg-slate-50 border-t border-slate-200 py-6"/g, 
  'd("section",{className:"hidden"'
);

// 2. Fill the empty spaces in the engines grid
const originalGrid = 'children:i.map((a)=>h("div",{className:"group relative rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-violet-200 transition-all flex flex-col",children:[h("div",{className:"flex items-start justify-between",children:[h("div",{className:"flex items-center gap-3",children:[d("span",{className:"inline-flex h-6 min-w-9 items-center justify-center rounded-full bg-violet-600 px-2 text-[11px] font-bold text-white tracking-widest",children:a.id}),d("div",{className:"h-10 w-10 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center text-[18px]",children:Lp[a.id]||"✦"})]}),d("span",{className:"text-[10px] font-semibold tracking-widest uppercase text-slate-400",children:"ENGINE"})]}),d("h3",{className:"mt-4 text-[16px] font-bold tracking-tight leading-snug text-slate-900",children:a.title}),d("ul",{className:"mt-4 space-y-2",children:a.items.map((c,p)=>h("li",{className:"flex gap-2 text-[12px] leading-5 text-gray-600",children:[d("span",{className:"mt-[2px] inline-flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-600",children:"✓"}),d("span",{className:"min-w-0",children:c})]},p))}),d("div",{className:"mt-auto pt-5",children:d("span",{className:"inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-800",children:a.save})})]},a.id))';

const newGrid = `children:[...i.map((a)=>h("div",{className:"group relative rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-violet-200 transition-all flex flex-col",children:[h("div",{className:"flex items-start justify-between",children:[h("div",{className:"flex items-center gap-3",children:[d("span",{className:"inline-flex h-6 min-w-9 items-center justify-center rounded-full bg-violet-600 px-2 text-[11px] font-bold text-white tracking-widest",children:a.id}),d("div",{className:"h-10 w-10 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center text-[18px]",children:Lp[a.id]||"✦"})]}),d("span",{className:"text-[10px] font-semibold tracking-widest uppercase text-slate-400",children:"ENGINE"})]}),d("h3",{className:"mt-4 text-[16px] font-bold tracking-tight leading-snug text-slate-900",children:a.title}),d("ul",{className:"mt-4 space-y-2",children:a.items.map((c,p)=>h("li",{className:"flex gap-2 text-[12px] leading-5 text-gray-600",children:[d("span",{className:"mt-[2px] inline-flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-600",children:"✓"}),d("span",{className:"min-w-0",children:c})]},p))}),d("div",{className:"mt-auto pt-5",children:d("span",{className:"inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-800",children:a.save})})]},a.id)), ...Array.from({length: (3 - (i.length % 3)) % 3}).map((_, idx) => h("div", {className: "group relative rounded-[24px] border border-slate-100 bg-slate-50/50 p-6 shadow-sm flex flex-col justify-center items-center text-center", children: [d("div", {className: "w-10 h-10 rounded-full bg-violet-50 text-[18px] flex items-center justify-center mb-3", children: "✨"}), d("h3", {className: "text-[14px] font-bold text-slate-500", children: "Coming Soon"}), d("p", {className: "text-[11px] text-slate-400 mt-1", children: "New engine in training..."})]}, "empty_" + u.key + "_" + idx))]`;

if (html.includes(originalGrid)) {
  html = html.replace(originalGrid, newGrid);
  console.log('Successfully replaced grid mapping logic.');
} else {
  console.log('Failed to replace grid mapping logic.');
}

// Write the repaired HTML back into index.html
const mainFile = fs.readFileSync('index.html', 'utf-8');
const match = mainFile.match(/const PAGES=({.*?});/);
if (match) {
   const pages = JSON.parse(match[1]);
   pages['Home.html'] = Buffer.from(html, 'utf-8').toString('base64');
   const newPagesStr = JSON.stringify(pages);
   const newMain = mainFile.replace(match[1], newPagesStr);
   fs.writeFileSync('index.html', newMain, 'utf-8');
   console.log('Restored Home.html cleanly.');
}
