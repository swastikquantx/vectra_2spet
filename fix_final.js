const fs = require('fs');

const idealFooter = `<footer id="global-footer" class="bg-white border-t border-slate-200 mt-auto py-6 relative z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-slate-500 font-medium">
    <div class="flex flex-wrap items-center justify-center gap-6">
      <a target="_parent" href="#Home.html" class="hover:text-slate-900 transition">Home</a>
      <a target="_parent" href="#About_Swastilk.html" class="hover:text-slate-900 transition">About</a>
      <a target="_parent" href="#Solutions.html" class="hover:text-slate-900 transition">Solutions</a>
      <a target="_parent" href="#Pricing.html" class="hover:text-slate-900 transition">Pricing</a>
      <a target="_parent" href="#Enterprise.html" class="hover:text-slate-900 transition">Enterprise</a>
    </div>
    <div class="text-[12px]">© 2026 Swastik AI LABS. Architecting the Future with AI.</div>
  </div>
</footer>`;

let build = fs.readFileSync('build_index.js', 'utf-8');

// The logic in build_index.js is probably:
// content = content.replace(/<footer[\s\S]*?<\/footer>/gi, '');
// content = content.substring(0, lastBodyIndex) + globalFooterHtml + '\n' + content.substring(lastBodyIndex);
// Let's inject this into build_index.js

build = build.replace(/const globalFooterHtml = `[\s\S]*?`;/, 'const globalFooterHtml = `' + idealFooter + '`;');
fs.writeFileSync('build_index.js', build, 'utf-8');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');
for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Remove any CSS hacks for footers
  content = content.replace(/<style>footer[^<]*<\/style>/g, '');
  content = content.replace(/<style>footer, #global-footer[^<]*<\/style>/g, '');
  
  fs.writeFileSync(file, content, 'utf-8');
}

console.log("Fixed final footers!");
