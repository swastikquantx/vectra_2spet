const fs = require('fs');
let build = fs.readFileSync('build_index.js', 'utf-8');

const correctFooter = `<footer id="global-footer" class="bg-white border-t border-slate-200 mt-auto py-6 relative z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
    <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] font-medium text-zinc-600">
      <button onclick="window.parent.active='Home.html'; window.parent.route(); window.parent.render();" class="hover:text-black transition-colors">Home</button>
      <button onclick="window.parent.active='About_Swastilk.html'; window.parent.route(); window.parent.render();" class="hover:text-black transition-colors">About</button>
      <button onclick="window.parent.active='Solutions.html'; window.parent.route(); window.parent.render();" class="hover:text-black transition-colors">Solutions</button>
      <button onclick="window.parent.active='Pricing.html'; window.parent.route(); window.parent.render();" class="hover:text-black transition-colors">Pricing</button>
      <button onclick="window.parent.active='Enterprise.html'; window.parent.route(); window.parent.render();" class="hover:text-black transition-colors">Enterprise</button>
    </div>
    <div class="text-[12px] text-zinc-500">
      © 2026 Swastik AI LABS. Architecting the Future with AI.
    </div>
  </div>
</footer>`;

build = build.replace(/const globalFooterHtml = `.*?`;/s, "const globalFooterHtml = `" + correctFooter + "`;");
fs.writeFileSync('build_index.js', build, 'utf-8');
