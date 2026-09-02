const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;

  // Fix nav links
  content = content.replace(/<a[^>]*href="[^"]*"[^>]*>(Home)<\/a>/g, (m, p1) => m.replace(/href="[^"]*"/, 'target="_parent" href="#Home.html"'));
  content = content.replace(/<a[^>]*href="[^"]*"[^>]*>(About Swastik|About)<\/a>/g, (m, p1) => m.replace(/href="[^"]*"/, 'target="_parent" href="#About_Swastilk.html"'));
  content = content.replace(/<a[^>]*href="[^"]*"[^>]*>(Cinematic Arsenal)<\/a>/g, (m, p1) => m.replace(/href="[^"]*"/, 'target="_parent" href="#Cinematic-Arsenal-37-Engines.html"'));
  content = content.replace(/<a[^>]*href="[^"]*"[^>]*>(How it works|How It Works)<\/a>/g, (m, p1) => m.replace(/href="[^"]*"/, 'target="_parent" href="#How-It-Works.html"'));
  content = content.replace(/<a[^>]*href="[^"]*"[^>]*>(Solutions)<\/a>/g, (m, p1) => m.replace(/href="[^"]*"/, 'target="_parent" href="#Solutions.html"'));
  content = content.replace(/<a[^>]*href="[^"]*"[^>]*>(Enterprise)<\/a>/g, (m, p1) => m.replace(/href="[^"]*"/, 'target="_parent" href="#Enterprise.html"'));
  content = content.replace(/<a[^>]*href="[^"]*"[^>]*>(Pricing)<\/a>/g, (m, p1) => m.replace(/href="[^"]*"/, 'target="_parent" href="#Pricing.html"'));

  if (file === 'Create_Studio.html') {
    // Remove Vectra text
    content = content.replace(/VECTRA STUDIO OS • BUILD 2\.4\.1 • WHITE EDITION • ALL SYSTEMS VIOLET/g, '');
    content = content.replace(/No dark backgrounds • Pure #ffffff/g, '');
    content = content.replace(/© 2025 VECTRA LABS/gi, '');
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log('Fixed links/text in ' + file);
  }
}

let build = fs.readFileSync('build_index.js', 'utf-8');
const idealFooter = `<footer id="global-footer" class="bg-white border-t border-slate-200 mt-auto py-6 relative z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-zinc-500">
    <div class="flex flex-wrap items-center justify-center gap-4">
      <a href="#Home.html" onclick="window.parent.location.hash='#Home.html'; window.parent.location.reload();" class="hover:text-zinc-900 transition">Home</a>
      <a href="#About_Swastilk.html" onclick="window.parent.location.hash='#About_Swastilk.html'; window.parent.location.reload();" class="hover:text-zinc-900 transition">About</a>
      <a href="#Solutions.html" onclick="window.parent.location.hash='#Solutions.html'; window.parent.location.reload();" class="hover:text-zinc-900 transition">Solutions</a>
      <a href="#Pricing.html" onclick="window.parent.location.hash='#Pricing.html'; window.parent.location.reload();" class="hover:text-zinc-900 transition">Pricing</a>
      <a href="#Enterprise.html" onclick="window.parent.location.hash='#Enterprise.html'; window.parent.location.reload();" class="hover:text-zinc-900 transition">Enterprise</a>
    </div>
    <div>© 2026 Swastik AI LABS. Architecting the Future with AI.</div>
  </div>
</footer>`;

build = build.replace(/const globalFooterHtml = `[\s\S]*?`;/, 'const globalFooterHtml = `' + idealFooter + '`;');
fs.writeFileSync('build_index.js', build, 'utf-8');
console.log('Updated build script with ideal footer');
