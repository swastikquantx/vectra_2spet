const fs = require('fs');
let html = fs.readFileSync('about.html', 'utf-8');

const qXReplacement = `V("div", {className: "w-full h-[240px] bg-[#0b0f19] rounded-xl p-5 flex flex-col justify-between overflow-hidden relative", children: [
  c("div", {className: "absolute inset-0 opacity-10", style:{backgroundImage:'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize:'20px 20px'}}),
  V("div", {className: "flex justify-between items-center relative z-10", children: [
    c("span", {className: "text-[10px] text-emerald-400 font-mono flex items-center gap-1.5", children: [c("span", {className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}), "LIVE STREAM"]}),
    c("span", {className: "text-[10px] text-slate-500 font-mono", children: "Q-ENGINE"})
  ]}),
  c("div", {className: "flex-1 flex items-end gap-[3px] mt-4 relative z-10", children: 
    [40, 70, 45, 90, 65, 80, 100, 55, 85, 110, 75, 120, 85, 60, 95, 105, 80, 110, 70, 90, 60, 80, 50, 100].map((h, i) => 
      c("div", {className: \`w-full rounded-t-sm \${i%3===0 ? 'bg-emerald-500' : 'bg-violet-600'} transition-all hover:opacity-80\`, style: {height: Math.min(100, (h*0.7)) + '%'}}, i)
    )
  })
]}`;

const vectraReplacement = `V("div", {className: "w-full h-[240px] bg-slate-50 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden", children: [
  V("div", {className: "flex items-center gap-3 relative z-10", children: [
    c("div", {className: "h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"}),
    c("div", {className: "h-1.5 flex-1 bg-slate-200 rounded-full overflow-hidden", children: c("div", {className:"h-full bg-gradient-to-r from-rose-500 to-violet-500 w-[65%]"})}),
    c("span", {className: "text-[10px] text-slate-500 font-mono", children: "00:12:45:08"})
  ]}),
  V("div", {className: "space-y-3 relative z-10 mt-6", children: [
    V("div", {className: "h-10 w-full bg-indigo-100/50 rounded-lg border border-indigo-200 flex items-center px-3", children: c("span", {className: "text-[10px] font-bold text-indigo-700 tracking-wider", children:"VIDEO TRACK"})}),
    V("div", {className: "h-10 w-[85%] bg-emerald-100/50 rounded-lg border border-emerald-200 flex items-center px-3", children: c("span", {className: "text-[10px] font-bold text-emerald-700 tracking-wider", children:"AUDIO FX"})}),
    V("div", {className: "h-10 w-[60%] bg-amber-100/50 rounded-lg border border-amber-200 flex items-center px-3", children: c("span", {className: "text-[10px] font-bold text-amber-700 tracking-wider", children:"SUBTITLES"})})
  ]}),
  V("div", {className: "flex justify-end mt-4 relative z-10", children: c("div", {className: "px-4 py-1.5 bg-slate-900 text-white rounded-full text-[10px] font-bold tracking-widest uppercase", children:"RENDER"})})
]}`;

const spectreReplacement = `V("div", {className: "w-full h-[240px] bg-[#0a0a0a] rounded-xl p-5 flex items-center justify-center relative overflow-hidden", children: [
  c("div", {className: "absolute inset-0 opacity-20", style:{backgroundImage:'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize:'16px 16px'}}),
  V("div", {className: "relative z-10 flex flex-col items-center gap-2", children: [
    c("div", {className: "px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-[11px] font-mono shadow-md", children: "CONCEPT"}),
    c("div", {className: "h-6 w-px bg-violet-500"}),
    V("div", {className: "flex gap-4", children: [
      c("div", {className: "px-4 py-2 bg-violet-900/40 border border-violet-500/50 rounded-lg text-violet-300 text-[11px] font-mono shadow-md", children: "WEB"}),
      c("div", {className: "px-4 py-2 bg-blue-900/40 border border-blue-500/50 rounded-lg text-blue-300 text-[11px] font-mono shadow-md", children: "MOBILE"})
    ]}),
    c("div", {className: "h-6 w-px bg-emerald-500"}),
    c("div", {className: "px-5 py-2.5 bg-emerald-900/40 border border-emerald-400/50 rounded-lg text-emerald-400 text-[12px] font-mono font-bold shadow-[0_0_20px_rgba(16,185,129,0.2)]", children: "DEPLOYMENT"})
  ]})
]}`;

html = html.replace('c("img",{src:Uf,alt:"QuantX diagram",className:"w-full max-h-[320px] object-contain bg-white"})', qXReplacement);
html = html.replace('c("img",{src:Lf,alt:"Vectra workflow diagram",className:"w-full max-h-[340px] object-contain bg-white"})', vectraReplacement);
html = html.replace('c("img",{src:Ef,alt:"Spectre diagram",className:"w-full max-h-[320px] object-contain bg-white"})', spectreReplacement);

fs.writeFileSync('about_fixed.html', html, 'utf-8');

const indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  pages['About_Swastilk.html'] = Buffer.from(html, 'utf-8').toString('base64');
  const newPagesStr = JSON.stringify(pages);
  const newIndexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', newIndexHtml, 'utf-8');
  console.log('Successfully updated About page and embedded into index.html');
}
