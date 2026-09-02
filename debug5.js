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
const esprima = require('esprima');
try {
  esprima.parseScript(spectreReplacement);
  console.log("ok");
} catch(e) {
  console.log(e);
}
