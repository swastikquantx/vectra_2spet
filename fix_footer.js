const fs = require('fs');
let code = fs.readFileSync('build_index.js', 'utf-8');

const globalFooterHtml = `
const globalFooterHtml = \`<footer class="bg-white border-t border-slate-200 pt-12 pb-8 mt-16 text-sm font-sans w-full" id="global-footer" style="font-family: 'Inter', sans-serif;">
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
    <div class="flex flex-wrap gap-2 mb-8 items-center justify-start">
      <a href="https://www.facebook.com/quantxai.tech.fb/" target="_blank" class="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-50 transition-colors shadow-sm"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg> Facebook</a>
      <a href="https://www.instagram.com/akhilesh.mishra/" target="_blank" class="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-50 transition-colors shadow-sm"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram</a>
      <a href="https://x.com/Akhileshmishras" target="_blank" class="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-50 transition-colors shadow-sm"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> X (Twitter)</a>
      <a href="https://www.threads.com/@akhilesh.mishra" target="_blank" class="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-50 transition-colors shadow-sm"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> Threads</a>
      <a href="https://wa.me/917359777788" target="_blank" class="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-50 transition-colors shadow-sm"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> WhatsApp</a>
      <a href="https://t.me/Akhil718" target="_blank" class="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-50 transition-colors shadow-sm"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.272 6.8c-.89.349-1.045 1.135-.194 1.487l4.382 1.83 9.776-6.17c.45-.27.87.11.54.41l-7.915 7.15c-.19.17-.3.42-.3.69v4.29c0 .76.62.98.98.54l2.87-3.52 4.41 3.25c.82.61 1.62.3 1.9-.7l3.41-15.01c.28-1.24-.46-1.87-1.47-1.25z"></path></svg> Telegram</a>
      <a href="https://www.linkedin.com/in/akhilesh-mishra-61268a54/" target="_blank" class="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-50 transition-colors shadow-sm"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> LinkedIn</a>
    </div>

    <!-- Bottom Line -->
    <div class="pt-6 border-t border-slate-200 flex flex-col justify-between items-center text-[11px] text-slate-500">
      <div>© 2026 Swastik AI LABS. Architecting the Future with AI.</div>
    </div>
  </div>
</footer>\`;
`;

// Insert the variable definition before the loop
code = code.replace(/let pagesObj = \{\};/, globalFooterHtml + '\nlet pagesObj = {};');

// Safe injection logic looking for the last </body> tag
const appendLogic = `let content = fs.readFileSync(file, 'utf-8');
        if (file !== 'Admin_Panel.html') {
            // Prevent duplicate footers
            content = content.replace(/<footer id="global-footer".*?<\\/footer>/s, '');
            // Inject right before the last closing body tag
            const lastBodyIndex = content.lastIndexOf('</body>');
            if (lastBodyIndex !== -1) {
                content = content.substring(0, lastBodyIndex) + globalFooterHtml + '\\n' + content.substring(lastBodyIndex);
            } else {
                content += globalFooterHtml;
            }
        }`;

code = code.replace(/let content = fs\.readFileSync\(file, 'utf-8'\);/, appendLogic);

fs.writeFileSync('build_index.js', code, 'utf-8');
