const fs = require('fs');
let build = fs.readFileSync('build_index.js', 'utf-8');

const minimalFooter = `<footer id="global-footer" class="bg-white border-t border-slate-200 mt-auto py-6 relative z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[12px] text-zinc-500">
    © 2026 Swastik AI LABS. Architecting the Future with AI.
  </div>
</footer>`;

build = build.replace(/const globalFooterHtml = `[\s\S]*?`;/, 'const globalFooterHtml = `' + minimalFooter + '`;');
fs.writeFileSync('build_index.js', build, 'utf-8');
console.log('UPDATED BUILD SCRIPT');
