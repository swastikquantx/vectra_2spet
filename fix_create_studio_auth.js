const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  let html = Buffer.from(pages['Create_Studio.html'], 'base64').toString('utf-8');
  
  // 1. Add state variable
  const oldState = 'var tm=()=>{let[e,t]=kn.useState("HOME"),[n,r]=kn.useState(Array(24).fill(0).map(()=>Math.random()*100)),[l,o]=kn.useState(null);';
  const newState = 'var tm=()=>{let[showAuth,setShowAuth]=kn.useState(!1);let[e,t]=kn.useState("HOME"),[n,r]=kn.useState(Array(24).fill(0).map(()=>Math.random()*100)),[l,o]=kn.useState(null);';
  html = html.replace(oldState, newState);

  // 2. Add onClick to button
  const oldBtn = 'k("button",{className:"h-10 px-5 rounded-full bg-[#7c3aed] text-white text-[13px] font-semibold shadow-[0_8px_20px_rgba(124,58,237,0.25)] flex items-center gap-2",children:[m(Rr,{className:"w-4 h-4"})," New Project"]})';
  const newBtn = 'k("button",{onClick:()=>setShowAuth(!0),className:"h-10 px-5 rounded-full bg-[#7c3aed] text-white text-[13px] font-semibold shadow-[0_8px_20px_rgba(124,58,237,0.25)] flex items-center gap-2",children:[m(Rr,{className:"w-4 h-4"})," New Project"]})';
  html = html.replace(oldBtn, newBtn);

  // 3. Add Modal to the end of the main div
  const modalCode = ',showAuth && k("div", {className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"}, [k("div", {className: "bg-white w-full max-w-md rounded-[24px] shadow-2xl overflow-hidden"}, [k("div", {className: "p-6 text-center border-b border-slate-100 relative"}, [m("button", {onClick: () => setShowAuth(!1), className: "absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors text-[18px] leading-none pb-1"}, "✕"),m("div", {className: "w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center mx-auto mb-4"}, m(Sr, {className: "w-6 h-6 text-violet-600"})),m("h2", {className: "text-[20px] font-bold text-slate-900"}, "Welcome to Vectra Studio"),m("p", {className: "text-[13px] text-slate-500 mt-2"}, "Log in or create an account to start your first project.")]),k("div", {className: "p-6 flex flex-col gap-4"}, [k("div", {className: "flex flex-col gap-1"}, [m("label", {className: "text-[11px] font-semibold text-slate-600 uppercase tracking-widest ml-1"}, "Email"),m("input", {type: "email", placeholder: "Enter your email", className: "h-11 px-4 rounded-xl border border-slate-200 bg-slate-50 text-[14px] outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"})]),k("div", {className: "flex flex-col gap-1"}, [m("label", {className: "text-[11px] font-semibold text-slate-600 uppercase tracking-widest ml-1"}, "Password"),m("input", {type: "password", placeholder: "••••••••", className: "h-11 px-4 rounded-xl border border-slate-200 bg-slate-50 text-[14px] outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"})]),m("button", {className: "h-11 mt-2 rounded-xl bg-violet-600 text-white text-[14px] font-semibold shadow-sm hover:bg-violet-700 transition-colors flex items-center justify-center"}, "Login / Create Account"),m("div", {className: "text-center mt-2 text-[12px] text-slate-500"}, ["By continuing, you agree to our ", m("a", {href:"#", className: "text-violet-600 hover:underline"}, "Terms"), " and ", m("a", {href:"#", className: "text-violet-600 hover:underline"}, "Privacy"), "."])])])])';

  const endStr = 'f.id)})})]})},xc=tm';
  const newEndStr = 'f.id)})})]' + modalCode + ')},xc=tm';
  html = html.replace(endStr, newEndStr);

  pages['Create_Studio.html'] = Buffer.from(html, 'utf-8').toString('base64');
  
  const newPagesStr = JSON.stringify(pages);
  const newIndexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', newIndexHtml, 'utf-8');
  console.log('Create Studio Auth Modal injected successfully.');
}
