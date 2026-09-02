const fs = require('fs');
let code = fs.readFileSync('build_index.js', 'utf-8');

const newFooterHtml = `const globalFooterHtml = \`<footer class="bg-[#050a15] border-t border-[#1e293b] pt-12 pb-8 mt-16 font-sans w-full" id="global-footer" style="font-family: 'Inter', sans-serif;">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
      <div class="md:col-span-2">
        <div class="flex items-center gap-3 mb-4">
          <img src="vectra_logo.jpg" alt="VECTRA" class="h-6 w-auto object-contain brightness-0 invert" />
          <span class="text-[11px] font-bold tracking-widest text-[#3b82f6] uppercase" style="font-family: 'Syne', sans-serif;">CREATE CINEMATIC MAGIC</span>
        </div>
        <p class="text-slate-400 mb-6 leading-relaxed text-[13px]">
          <strong class="text-white">Swastik AI LABS:</strong> Empowering Innovation through Technology. Building growth engines, not just software.
        </p>
        <div class="flex flex-wrap gap-2 mb-6">
          <span class="px-3 py-1 bg-[#0f172a] text-slate-300 border border-[#1e293b] rounded-full text-[11px] font-semibold">AI • Quant • Video • Apps</span>
          <span class="px-3 py-1 bg-[#170f2a] text-[#a855f7] border border-[#3b0f59] rounded-full text-[11px] font-semibold">Growth Engines</span>
        </div>
      </div>
      <div>
        <h4 class="font-bold text-white mb-4 text-sm">Company</h4>
        <ul class="space-y-3 text-slate-400 text-[13px] font-medium">
          <li><button onclick="window.parent.active='Home.html'; window.parent.route(); window.parent.render();" class="hover:text-white transition-colors">Home</button></li>
          <li><button onclick="window.parent.active='About_Swastilk.html'; window.parent.route(); window.parent.render();" class="hover:text-white transition-colors">About Swastik</button></li>
          <li><button onclick="window.parent.active='How-It-Works.html'; window.parent.route(); window.parent.render();" class="hover:text-white transition-colors">How Does it works</button></li>
          <li><button onclick="window.parent.active='Solutions.html'; window.parent.route(); window.parent.render();" class="hover:text-white transition-colors">Solutions</button></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-white mb-4 text-sm">Products</h4>
        <ul class="space-y-3 text-slate-400 text-[13px] font-medium">
          <li><a href="#" class="hover:text-white transition-colors">QuantX Intelligence</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Vectra Video Suite</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Spectre Builder</a></li>
          <li><button onclick="window.parent.active='Enterprise.html'; window.parent.route(); window.parent.render();" class="hover:text-white transition-colors">Enterprise</button></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-white mb-4 text-sm">Resources</h4>
        <ul class="space-y-3 text-slate-400 text-[13px] font-medium mb-6">
          <li><button onclick="window.parent.active='Pricing.html'; window.parent.route(); window.parent.render();" class="hover:text-white transition-colors">Pricing</button></li>
          <li><a href="#" class="hover:text-white transition-colors">Contact Us</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Documentation</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Security</a></li>
        </ul>
      </div>
    </div>

    <!-- Social Buttons Row -->
    <div class="flex flex-wrap items-center gap-3 mb-10 mt-6">
      <a href="https://www.facebook.com/quantxai.tech.fb/" target="_blank" class="flex items-center gap-2.5 px-[16px] py-[9px] rounded-[10px] bg-[#0a152d] border border-[#173d7a] text-[#3b82f6] font-semibold text-[15px] hover:bg-[#102447] transition-colors shadow-sm">
        <svg class="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> 
        Facebook
      </a>
      <a href="https://www.instagram.com/akhilesh.mishra/" target="_blank" class="flex items-center gap-2.5 px-[16px] py-[9px] rounded-[10px] bg-[#210a17] border border-[#70143c] text-[#f43f5e] font-semibold text-[15px] hover:bg-[#320f23] transition-colors shadow-sm">
        <svg class="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        Instagram
      </a>
      <a href="https://x.com/Akhileshmishras" target="_blank" class="flex items-center gap-2.5 px-[16px] py-[9px] rounded-[10px] bg-[#1f2937] border border-[#374151] text-[#f9fafb] font-semibold text-[15px] hover:bg-[#374151] hover:border-[#475569] transition-colors shadow-sm">
        <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        X (Twitter)
      </a>
      <a href="https://www.threads.com/@akhilesh.mishra" target="_blank" class="flex items-center gap-2.5 px-[16px] py-[9px] rounded-[10px] bg-[#18181b] border border-[#3f3f46] text-[#f9fafb] font-semibold text-[15px] hover:bg-[#27272a] hover:border-[#52525b] transition-colors shadow-sm">
        <svg class="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22.25c-5.65 0-10.25-4.6-10.25-10.25S6.35 1.75 12 1.75c4.71 0 8.65 3.2 9.87 7.62.13.48-.15.98-.63 1.11-.48.13-.98-.15-1.11-.63-.98-3.56-4.15-6.1-8.13-6.1-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25c3.27 0 6.23-1.92 7.57-4.86.63-1.39.95-2.91.95-4.47 0-1.87-.56-3.61-1.62-5.02-1.2-1.59-3.01-2.5-4.99-2.5-2.77 0-5.18 1.83-5.94 4.49-.07.25-.1.52-.1.79 0 1.25.75 2.37 1.94 2.82.68.25 1.44.22 2.1-.09.34-.16.63-.38.87-.66 1.05-1.23.95-3.08-.24-4.22-.64-.61-1.5-.95-2.39-.95-1.18 0-2.28.61-2.92 1.62-.64.99-.83 2.18-.5 3.3.46 1.57 1.88 2.66 3.53 2.66h.04c.83 0 1.62-.29 2.25-.83.63-.53 1.03-1.27 1.14-2.09.05-.34.25-2.07-.63-3.01-.64-.69-1.55-1.07-2.52-1.07-1.47 0-2.81 1.01-3.23 2.44-.22.75-.16 1.56.17 2.27.53 1.15 1.62 1.93 2.89 2.03.32.02.64 0 .95-.07.95-.2 1.77-.73 2.34-1.5.39-.53.64-1.16.71-1.81.04-.32.05-.65.05-.97 0 1.34-.33 2.65-.96 3.82-1.14 2.14-3.4 3.51-5.83 3.51z"/></svg>
        Threads
      </a>
      <a href="https://wa.me/917359777788" target="_blank" class="flex items-center gap-2.5 px-[16px] py-[9px] rounded-[10px] bg-[#022c1e] border border-[#045e3f] text-[#10b981] font-semibold text-[15px] hover:bg-[#03402c] transition-colors shadow-sm">
        <svg class="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.395 0 0 5.395 0 12.033c0 2.115.548 4.177 1.593 5.992L.015 23.996l6.113-1.603a11.967 11.967 0 0 0 5.903 1.554h.005c6.633 0 12.032-5.396 12.032-12.032C24.068 5.395 18.673 0 12.031 0zm0 19.98c-1.787 0-3.538-.48-5.074-1.39l-.364-.216-3.771.989 1.006-3.676-.237-.377a9.92 9.92 0 0 1-1.523-5.305c0-5.501 4.477-9.982 9.972-9.982 5.504 0 9.98 4.481 9.98 9.982 0 5.501-4.476 9.975-9.98 9.975zm5.474-7.48c-.3-.15-1.774-.875-2.049-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.287-.635-2.316-1.127-3.237-2.735-.175-.3-.02-.462.13-.612.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.243-.585-.49-.505-.675-.515-.175-.01-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.887 1.225 3.087c.15.2 2.1 3.2 5.087 4.487 1.838.795 2.65.85 3.513.712.987-.156 1.775-.725 2.025-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/></svg>
        WhatsApp
      </a>
      <a href="https://t.me/Akhil718" target="_blank" class="flex items-center gap-2.5 px-[16px] py-[9px] rounded-[10px] bg-[#061d36] border border-[#075985] text-[#0ea5e9] font-semibold text-[15px] hover:bg-[#0a2e54] transition-colors shadow-sm">
        <svg class="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.18-.08-.05-.19-.02-.27 0-.11.03-1.9 1.21-5.36 3.55-.5.35-.96.52-1.37.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.48.97-.74 3.82-1.66 6.37-2.76 7.65-3.3 3.65-1.53 4.41-1.79 4.9-1.8.11 0 .35.03.48.14.11.09.14.22.15.34-.01.05-.01.12-.02.16z"/></svg>
        Telegram
      </a>
      <a href="https://www.linkedin.com/in/akhilesh-mishra-61268a54/" target="_blank" class="flex items-center gap-2.5 px-[16px] py-[9px] rounded-[10px] bg-[#0a152d] border border-[#1e3a8a] text-[#3b82f6] font-semibold text-[15px] hover:bg-[#102447] transition-colors shadow-sm">
        <svg class="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        LinkedIn
      </a>
    </div>

    <!-- Bottom Line -->
    <div class="pt-6 border-t border-[#1e293b] flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-slate-400">
      <div>© 2026 <strong class="text-white">Swastik AI LABS.</strong> Architecting the Future with AI.</div>
    </div>
  </div>
</footer>\`;`;

const startTag = 'const globalFooterHtml = `';
const startIdx = code.indexOf(startTag);
if(startIdx !== -1) {
    const endTag = '</footer>\`;';
    const endIdx = code.indexOf(endTag, startIdx) + endTag.length;
    code = code.substring(0, startIdx) + newFooterHtml + code.substring(endIdx);
    fs.writeFileSync('build_index.js', code, 'utf-8');
    console.log("Successfully patched PERFECT socials");
} else {
    console.log("Could not find globalFooterHtml definition in code");
}
