const fs = require('fs');

const originalComponentString = `showAuth && k("div", {className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm", children: [k("div", {className: "bg-white w-full max-w-md rounded-[24px] shadow-2xl overflow-hidden", children: [k("div", {className: "p-6 text-center border-b border-slate-100 relative", children: [m("button", {onClick: () => setShowAuth(!1), className: "absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors text-[18px] leading-none pb-1", children: "✕"}),m("div", {className: "w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center mx-auto mb-4", children: m(Sr, {className: "w-6 h-6 text-violet-600"})}),m("h2", {className: "text-[20px] font-bold text-slate-900", children: "Welcome to Vectra Studio"}),m("p", {className: "text-[13px] text-slate-500 mt-2", children: "Log in or create an account to start your first project."})]}),k("div", {className: "p-6 flex flex-col gap-4", children: [k("div", {className: "flex flex-col gap-1", children: [m("label", {className: "text-[11px] font-semibold text-slate-600 uppercase tracking-widest ml-1", children: "Email"}),m("input", {type: "email", placeholder: "Enter your email", className: "h-11 px-4 rounded-xl border border-slate-200 bg-slate-50 text-[14px] outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"})]}),k("div", {className: "flex flex-col gap-1", children: [m("label", {className: "text-[11px] font-semibold text-slate-600 uppercase tracking-widest ml-1", children: "Password"}),m("input", {type: "password", placeholder: "••••••••", className: "h-11 px-4 rounded-xl border border-slate-200 bg-slate-50 text-[14px] outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"})]}),m("button", {className: "h-11 mt-2 rounded-xl bg-violet-600 text-white text-[14px] font-semibold shadow-sm hover:bg-violet-700 transition-colors flex items-center justify-center", children: "Login / Create Account"}),m("div", {className: "text-center mt-2 text-[12px] text-slate-500", children: ["By continuing, you agree to our ", m("a", {href:"#", className: "text-violet-600 hover:underline", children: "Terms"}), " and ", m("a", {href:"#", className: "text-violet-600 hover:underline", children: "Privacy"}), "."]})]})]})]})`;

let html = fs.readFileSync('Create_Studio.html', 'utf-8');

const regex = /showAuth && k\("div"[\s\S]*?\}\,xc=tm;/;
const replacement = originalComponentString + ']})},xc=tm;';

html = html.replace(regex, replacement);
fs.writeFileSync('Create_Studio_test3.html', html, 'utf-8');

const acorn = require('acorn');
const scriptMatches = [...html.matchAll(/<script.*?>([\s\S]*?)<\/script>/g)];
const code = scriptMatches[0][1];

try {
  acorn.parse(code, { ecmaVersion: 2022 });
  console.log('Parsed successfully!');
} catch (e) {
  console.log(e.message);
  console.log('Error at pos:', e.pos);
  console.log('Context:', code.substring(Math.max(0, e.pos - 40), e.pos + 40));
}
