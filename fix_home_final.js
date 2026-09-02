const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf-8');
const match = html.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  let decoded = Buffer.from(pages['Home.html'], 'base64').toString('utf-8');

  // 1. Remove the injected trending script
  const scriptRegex = /<script>\s*setTimeout\(\(\) => \{[\s\S]*?<\/script>\s*<\/body>/i;
  decoded = decoded.replace(scriptRegex, '</body>');

  // 2. Remove the pricing section and replace with a simple footer
  const startIdx = decoded.indexOf('d("section",{className:"bg-slate-50 border-t border-slate-200 py-6"');
  const endIdx = decoded.indexOf('Hc.createRoot');

  if (startIdx !== -1 && endIdx !== -1) {
    const simpleFooter = 'd("section",{className:"bg-slate-50 border-t border-slate-200 py-6",children:d("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10",children:d("div",{className:"text-center text-[11px] text-slate-400",children:["Swastik Technologies © ",new Date().getFullYear()," — THE CINEMATIC ARSENAL — 37 Engines. One Plan. Infinite Stories."]}).valueOf()}).valueOf()})]})]})]})}';
    decoded = decoded.substring(0, startIdx) + simpleFooter + decoded.substring(endIdx);
  }

  // 3. Fill the empty grid spaces
  const originalGrid = 'children:i.map((a)=>h("div",{className:"group relative rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-violet-200 transition-all flex flex-col",children:[h("div",{className:"flex items-start justify-between",children:[h("div",{className:"flex items-center gap-3",children:[d("span",{className:"inline-flex h-6 min-w-9 items-center justify-center rounded-full bg-violet-600 px-2 text-[11px] font-bold text-white tracking-widest",children:a.id}),d("div",{className:"h-10 w-10 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center text-[18px]",children:Lp[a.id]||"✦"})]}),d("span",{className:"text-[10px] font-semibold tracking-widest uppercase text-slate-400",children:"ENGINE"})]}),d("h3",{className:"mt-4 text-[16px] font-bold tracking-tight leading-snug text-slate-900",children:a.title}),d("ul",{className:"mt-4 space-y-2",children:a.items.map((c,p)=>h("li",{className:"flex gap-2 text-[12px] leading-5 text-gray-600",children:[d("span",{className:"mt-[2px] inline-flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-600",children:"✓"}),d("span",{className:"min-w-0",children:c})]},p))}),d("div",{className:"mt-auto pt-5",children:d("span",{className:"inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-800",children:a.save})})]},a.id))';
  
  const newGrid = `children:[...i.map((a)=>h("div",{className:"group relative rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-violet-200 transition-all flex flex-col",children:[h("div",{className:"flex items-start justify-between",children:[h("div",{className:"flex items-center gap-3",children:[d("span",{className:"inline-flex h-6 min-w-9 items-center justify-center rounded-full bg-violet-600 px-2 text-[11px] font-bold text-white tracking-widest",children:a.id}),d("div",{className:"h-10 w-10 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center text-[18px]",children:Lp[a.id]||"✦"})]}),d("span",{className:"text-[10px] font-semibold tracking-widest uppercase text-slate-400",children:"ENGINE"})]}),d("h3",{className:"mt-4 text-[16px] font-bold tracking-tight leading-snug text-slate-900",children:a.title}),d("ul",{className:"mt-4 space-y-2",children:a.items.map((c,p)=>h("li",{className:"flex gap-2 text-[12px] leading-5 text-gray-600",children:[d("span",{className:"mt-[2px] inline-flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-600",children:"✓"}),d("span",{className:"min-w-0",children:c})]},p))}),d("div",{className:"mt-auto pt-5",children:d("span",{className:"inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-800",children:a.save})})]},a.id)), ...Array.from({length: (3 - (i.length % 3)) % 3}).map((_, idx) => h("div", {className: "group relative rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm overflow-hidden flex flex-col justify-center items-center text-center cursor-pointer hover:border-violet-200 hover:shadow-lg transition-all", children: [d("div", {className: "w-12 h-12 rounded-full bg-violet-100 text-[20px] flex items-center justify-center mb-3", children: "🚀"}), d("h3", {className: "text-[16px] font-bold text-slate-900", children: "Trending Now"}), d("p", {className: "text-[12px] text-slate-500 mt-2 leading-relaxed", children: "Discover viral community masterpieces & new model fine-tunes."})]}, "empty_" + u.key + "_" + idx))]`;

  if (decoded.includes(originalGrid)) {
     decoded = decoded.replace(originalGrid, newGrid);
  } else {
     console.log('Failed to match original grid map.');
  }
  
  // Re-encode
  pages['Home.html'] = Buffer.from(decoded, 'utf-8').toString('base64');
  const newPagesStr = JSON.stringify(pages);
  const newHtml = html.replace(match[1], newPagesStr);
  
  fs.writeFileSync('index.html', newHtml, 'utf-8');
  console.log('Successfully removed trending section, removed pricing, and filled empty grid spaces.');
}
