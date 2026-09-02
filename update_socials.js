const fs = require('fs');
let code = fs.readFileSync('build_index.js', 'utf-8');

const newFooterHtml = `const globalFooterHtml = \`<footer class="bg-white border-t border-slate-200 pt-12 pb-8 mt-16 text-sm font-sans w-full" id="global-footer" style="font-family: 'Inter', sans-serif;">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
      <div class="md:col-span-2">
        <div class="flex items-center gap-3 mb-4">
          <img src="vectra_logo.jpg" alt="VECTRA" class="h-6 w-auto object-contain" />
          <span class="text-[11px] font-bold tracking-widest text-indigo-600 uppercase" style="font-family: 'Syne', sans-serif;">CREATE CINEMATIC MAGIC</span>
        </div>
        <p class="text-slate-500 mb-6 leading-relaxed text-xs">
          <strong class="text-slate-800">Swastik AI LABS:</strong> Empowering Innovation through Technology. Building growth engines, not just software.
        </p>
        <div class="flex flex-wrap gap-2 mb-6">
          <span class="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[11px] font-semibold">AI • Quant • Video • Apps</span>
          <span class="px-3 py-1 bg-purple-50 text-purple-600 border border-purple-100 rounded-full text-[11px] font-semibold">Growth Engines</span>
        </div>
      </div>
      <div>
        <h4 class="font-bold text-slate-900 mb-4 text-sm">Company</h4>
        <ul class="space-y-3 text-slate-500 text-xs font-medium">
          <li><button onclick="window.parent.active='Home.html'; window.parent.route(); window.parent.render();" class="hover:text-indigo-600">Home</button></li>
          <li><button onclick="window.parent.active='About_Swastilk.html'; window.parent.route(); window.parent.render();" class="text-purple-600">About Swastik</button></li>
          <li><button onclick="window.parent.active='How-It-Works.html'; window.parent.route(); window.parent.render();" class="hover:text-indigo-600">How Does it works</button></li>
          <li><button onclick="window.parent.active='Solutions.html'; window.parent.route(); window.parent.render();" class="hover:text-indigo-600">Solutions</button></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-slate-900 mb-4 text-sm">Products</h4>
        <ul class="space-y-3 text-slate-500 text-xs font-medium">
          <li><a href="#" class="hover:text-indigo-600">QuantX Intelligence</a></li>
          <li><a href="#" class="hover:text-indigo-600">Vectra Video Suite</a></li>
          <li><a href="#" class="hover:text-indigo-600">Spectre Builder</a></li>
          <li><button onclick="window.parent.active='Enterprise.html'; window.parent.route(); window.parent.render();" class="hover:text-indigo-600">Enterprise</button></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-slate-900 mb-4 text-sm">Resources</h4>
        <ul class="space-y-3 text-slate-500 text-xs font-medium mb-6">
          <li><button onclick="window.parent.active='Pricing.html'; window.parent.route(); window.parent.render();" class="hover:text-indigo-600">Pricing</button></li>
          <li><a href="#" class="hover:text-indigo-600">Contact Us</a></li>
          <li><a href="#" class="hover:text-indigo-600">Documentation</a></li>
          <li><a href="#" class="hover:text-indigo-600">Security</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-slate-900 mb-4 text-sm">Connect</h4>
        <ul class="space-y-3 text-slate-500 text-xs font-medium">
          <li><a href="https://www.linkedin.com/in/akhilesh-mishra-61268a54/" target="_blank" class="hover:text-indigo-600">LinkedIn</a></li>
          <li><a href="https://x.com/Akhileshmishras" target="_blank" class="hover:text-indigo-600">X / Twitter</a></li>
          <li><a href="mailto:hello@swastik.tech" class="hover:text-indigo-600">hello@swastik.tech</a></li>
        </ul>
      </div>
    </div>

    <!-- Social Buttons Row -->
    <div class="flex flex-wrap gap-3 mb-8 items-center justify-start">
      <a href="https://www.facebook.com/quantxai.tech.fb/" target="_blank" class="flex items-center gap-2 px-4 py-2.5 bg-[#09152b] border border-[#173a76] text-[#4d93ff] rounded-xl text-[13px] font-semibold hover:bg-[#0f244a] transition-all"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg> Facebook</a>
      <a href="https://www.instagram.com/akhilesh.mishra/" target="_blank" class="flex items-center gap-2 px-4 py-2.5 bg-[#250d1a] border border-[#851d4e] text-[#f43f5e] rounded-xl text-[13px] font-semibold hover:bg-[#3d1329] transition-all"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram</a>
      <a href="https://x.com/Akhileshmishras" target="_blank" class="flex items-center gap-2 px-4 py-2.5 bg-[#141820] border border-[#374151] text-[#f8fafc] rounded-xl text-[13px] font-semibold hover:bg-[#272d3a] transition-all"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> X (Twitter)</a>
      <a href="https://www.threads.com/@akhilesh.mishra" target="_blank" class="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1c] border border-[#3f3f46] text-[#f8fafc] rounded-xl text-[13px] font-semibold hover:bg-[#27272a] transition-all"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-6.142c1.78-.17 3-1.42 3-3.2 0-1.78-1.22-3.03-3-3.2V8.342c-2.3.17-4 1.83-4 4.11 0 2.28 1.7 3.94 4 4.11v-1.114c-1.15-.12-2-.95-2-2.1 0-1.15.85-1.98 2-2.1v4.2z"/></svg> Threads</a>
      <a href="https://wa.me/917359777788" target="_blank" class="flex items-center gap-2 px-4 py-2.5 bg-[#062317] border border-[#055d3b] text-[#22c55e] rounded-xl text-[13px] font-semibold hover:bg-[#0b3826] transition-all"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> WhatsApp</a>
      <a href="https://t.me/Akhil718" target="_blank" class="flex items-center gap-2 px-4 py-2.5 bg-[#0a1e36] border border-[#114b79] text-[#0ea5e9] rounded-xl text-[13px] font-semibold hover:bg-[#112d4f] transition-all"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.18-.08-.05-.19-.02-.27 0-.11.03-1.9 1.21-5.36 3.55-.5.35-.96.52-1.37.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.48.97-.74 3.82-1.66 6.37-2.76 7.65-3.3 3.65-1.53 4.41-1.79 4.9-1.8.11 0 .35.03.48.14.11.09.14.22.15.34-.01.05-.01.12-.02.16z"/></svg> Telegram</a>
      <a href="https://www.linkedin.com/in/akhilesh-mishra-61268a54/" target="_blank" class="flex items-center gap-2 px-4 py-2.5 bg-[#09152b] border border-[#173a76] text-[#4d93ff] rounded-xl text-[13px] font-semibold hover:bg-[#0f244a] transition-all"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> LinkedIn</a>
    </div>

    <!-- Bottom Line -->
    <div class="pt-6 border-t border-slate-200 flex flex-col justify-between items-center text-[11px] text-slate-500">
      <div>© 2026 Swastik AI LABS. Architecting the Future with AI.</div>
    </div>
  </div>
</footer>\`;`;

// Find where globalFooterHtml is defined and replace it
const startTag = 'const globalFooterHtml = `';
const startIdx = code.indexOf(startTag);
if(startIdx !== -1) {
    const endTag = '</footer>\`;';
    const endIdx = code.indexOf(endTag, startIdx) + endTag.length;
    code = code.substring(0, startIdx) + newFooterHtml + code.substring(endIdx);
    fs.writeFileSync('build_index.js', code, 'utf-8');
    console.log("Replaced footer with dark themed social buttons");
} else {
    console.log("Could not find globalFooterHtml definition in code");
}
