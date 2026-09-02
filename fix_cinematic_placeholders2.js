const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  let html = Buffer.from(pages['Cinematic-Arsenal-37-Engines.html'], 'base64').toString('utf-8');
  
  const badPlaceholderStr = ', children: [h("div", {className: "h-12 w-12 rounded-full bg-slate-200 mb-4 animate-pulse flex items-center justify-center text-slate-400 text-lg"}, "✦"), h("div", {className: "text-[14px] font-bold text-slate-500 uppercase tracking-widest"}, "NEW ENGINE"), h("div", {className: "text-[11px] text-slate-400 mt-2 font-bold uppercase tracking-widest"}, "Coming Soon")]}))';
  const goodPlaceholderStr = ', children: [h("div", {className: "h-12 w-12 rounded-full bg-slate-200 mb-4 animate-pulse flex items-center justify-center text-slate-400 text-lg", children: "✦"}), h("div", {className: "text-[14px] font-bold text-slate-500 uppercase tracking-widest", children: "NEW ENGINE"}), h("div", {className: "text-[11px] text-slate-400 mt-2 font-bold uppercase tracking-widest", children: "Coming Soon"})]}))';

  html = html.replace(badPlaceholderStr, goodPlaceholderStr);
  
  pages['Cinematic-Arsenal-37-Engines.html'] = Buffer.from(html, 'utf-8').toString('base64');
  const newPagesStr = JSON.stringify(pages);
  const newIndexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', newIndexHtml, 'utf-8');
  console.log('Fixed placeholders successfully.');
}
