const fs = require('fs');
let code = fs.readFileSync('build_index.js', 'utf-8');

const newFooter = `const globalFooterHtml = \`<footer class="bg-white border-t border-zinc-200 py-10 mt-16 w-full shrink-0" id="global-footer" style="font-family: 'Inter', sans-serif;">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center gap-6">
    <div class="flex flex-wrap items-center justify-center gap-6 text-[13px] font-medium text-zinc-600">
      <button onclick="window.parent.active='Home.html'; window.parent.route(); window.parent.render();" class="hover:text-black transition-colors">Home</button>
      <button onclick="window.parent.active='About_Swastilk.html'; window.parent.route(); window.parent.render();" class="hover:text-black transition-colors">About Swastik</button>
      <button onclick="window.parent.active='How-It-Works.html'; window.parent.route(); window.parent.render();" class="hover:text-black transition-colors">How Does it works</button>
      <button onclick="window.parent.active='Solutions.html'; window.parent.route(); window.parent.render();" class="hover:text-black transition-colors">Solutions</button>
      <button onclick="window.parent.active='Pricing.html'; window.parent.route(); window.parent.render();" class="hover:text-black transition-colors">Pricing</button>
      <button onclick="window.parent.active='Enterprise.html'; window.parent.route(); window.parent.render();" class="hover:text-black transition-colors">Enterprise</button>
    </div>
    <div class="text-[12px] text-zinc-500">
      © 2026 Swastik AI LABS. Architecting the Future with AI.
    </div>
  </div>
</footer>\`;`;

const startTag = 'const globalFooterHtml = `';
const startIdx = code.indexOf(startTag);
if(startIdx !== -1) {
    const endTag = '</footer>\`;';
    const endIdx = code.indexOf(endTag, startIdx) + endTag.length;
    code = code.substring(0, startIdx) + newFooter + code.substring(endIdx);
    fs.writeFileSync('build_index.js', code, 'utf-8');
    console.log("Successfully replaced with simple footer");
} else {
    console.log("Could not find globalFooterHtml definition in code");
}
