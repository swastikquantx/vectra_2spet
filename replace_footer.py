import re

with open("index.html", "r") as f:
    content = f.read()

start_tag = '<div id="global-footer-container">'

start_idx = content.find(start_tag)
end_idx = content.rfind('frame.srcdoc=html;')

if start_idx != -1 and end_idx != -1:
    new_footer = """<div id="global-footer-container" class="relative w-full z-50">
<footer class="border-t border-[#1E293B] bg-[#0B0F19] w-full pt-12 pb-16 font-sans text-[13px]">
  <div class="max-w-[1440px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-8 relative">
    
    <!-- Top Links -->
    <div class="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[#94A3B8] font-medium">
      <a href="#" onclick="active='Home.html'; render(); route(); return false;" class="hover:text-white transition">AI Dashboard</a>
      <a href="#" onclick="active='Home.html'; render(); route(); return false;" class="text-blue-400 hover:text-blue-300 transition">Indian Indices</a>
      <a href="#" onclick="active='Home.html'; render(); route(); return false;" class="text-indigo-400 hover:text-indigo-300 transition">Global Indices</a>
      <a href="#" onclick="active='Home.html'; render(); route(); return false;" class="hover:text-white transition">NSE Equities</a>
      <a href="#" onclick="active='Home.html'; render(); route(); return false;" class="hover:text-white transition">BSE Equities</a>
      <a href="#" onclick="active='Home.html'; render(); route(); return false;" class="hover:text-white transition">Futures &amp; Options (F&amp;O)</a>
      <a href="#" onclick="active='Home.html'; render(); route(); return false;" class="hover:text-white transition">MCX Commodities</a>
      <a href="#" onclick="active='Home.html'; render(); route(); return false;" class="hover:text-white transition">Currencies (Forex)</a>
      <a href="#" onclick="active='Home.html'; render(); route(); return false;" class="hover:text-white transition">Crypto Radar</a>
      <a href="#" onclick="active='About_Swastilk.html'; render(); route(); return false;" class="hover:text-white transition">About Us</a>
      <a href="#" onclick="active='Pricing.html'; render(); route(); return false;" class="text-[#00E676] hover:text-[#00C853] transition font-bold">Pricing &amp; Plans</a>
    </div>

    <!-- Second Row Links -->
    <div class="flex flex-wrap justify-center gap-x-6 gap-y-3 items-center text-[#94A3B8] font-medium mt-2">
      <a href="#" onclick="active='Auth-Genz-Registration.html'; render(); route(); return false;" class="text-indigo-400 hover:text-indigo-300 transition">User Login / Sign Up</a>
      <a href="#" onclick="active='Cinematic-Arsenal-37-Engines.html'; render(); route(); return false;" class="hover:text-white transition">27 Factors Engine</a>
      <a href="#" class="text-[#00E676] hover:text-[#00C853] transition">Android App (Play Store)</a>
      <button onclick="active='Admin_Panel.html'; render(); route(); return false;" class="flex items-center gap-2 bg-[#2D0B40] hover:bg-[#3D0F58] border border-[#5B1682] text-[#E9D5FF] px-4 py-1.5 rounded-full transition font-semibold">
        <div class="w-1.5 h-1.5 rounded-full bg-[#c084fc]"></div>
        Admin Console
      </button>
    </div>

    <!-- Social Buttons -->
    <div class="flex flex-wrap justify-center gap-3 mt-4">
      <button class="flex items-center gap-2 px-4 py-1.5 rounded-xl border border-[#1877F2]/40 bg-transparent text-[#1877F2] hover:bg-[#1877F2]/10 transition font-medium text-[13px]">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        Facebook
      </button>
      <button class="flex items-center gap-2 px-4 py-1.5 rounded-xl border border-[#E1306C]/50 bg-transparent text-[#E1306C] hover:bg-[#E1306C]/10 transition font-medium text-[13px]">
         <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
         Instagram
      </button>
      <button class="flex items-center gap-2 px-4 py-1.5 rounded-xl border border-zinc-500/50 bg-transparent text-zinc-300 hover:bg-zinc-500/10 transition font-medium text-[13px]">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        X (Twitter)
      </button>
      <button class="flex items-center gap-2 px-4 py-1.5 rounded-xl border border-zinc-400/50 bg-[#27272a] text-zinc-200 hover:bg-zinc-600/50 transition font-medium text-[13px]">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/><path d="M15 12V10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10V14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14V14"/></svg>
        Threads
      </button>
      <button class="flex items-center gap-2 px-4 py-1.5 rounded-xl border border-[#00E676]/40 bg-transparent text-[#00E676] hover:bg-[#00E676]/10 transition font-medium text-[13px]">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp
      </button>
      <button class="flex items-center gap-2 px-4 py-1.5 rounded-xl border border-[#00A8E8]/40 bg-transparent text-[#00A8E8] hover:bg-[#00A8E8]/10 transition font-medium text-[13px]">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM5.275 11.724l11.455-4.41c.531-.195.986.134.808.932l-1.925 9.07c-.168.756-.615.945-1.246.59l-3.447-2.54-1.663 1.6c-.184.184-.339.34-.694.34l.248-3.523 6.417-5.795c.279-.248-.06-.386-.432-.138l-7.93 4.99-3.418-1.067c-.744-.233-.76-.745.155-1.104z"/></svg>
        Telegram
      </button>
      <button class="flex items-center gap-2 px-4 py-1.5 rounded-xl border border-[#0A66C2]/40 bg-transparent text-[#0A66C2] hover:bg-[#0A66C2]/10 transition font-medium text-[13px]">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        LinkedIn
      </button>
    </div>

    <!-- Disclaimer -->
    <div class="max-w-5xl text-center text-[#64748B] text-[12px] leading-relaxed mt-6 mb-2 px-4">
      QuantX AI is an independent, artificial intelligence-based investment research and analytical assistant. We are <strong class="text-[#94A3B8]">STRICTLY NOT A BROKER</strong> and do not provide trade execution, order placement, depository, or portfolio management tools. All outputs, ratings, and price fluctuation alerts represent statistical probabilities derived from 54+ quantitative factors for research purposes only.
    </div>

    <!-- Copyright -->
    <div class="text-[#475569] text-[12px] text-center mb-4">
      © 2026 QuantX AI Tech Pvt Ltd. All rights reserved. Indian Markets (NSE, BSE, MCX, NCDEX) &amp; Global Analytics.
    </div>
    
  </div>
</footer>

<!-- Floating Action Button -->
<div class="fixed bottom-6 right-6 z-[9999]">
  <button class="relative group flex items-center gap-2 bg-gradient-to-r from-[#2B4BFF] to-[#00E5FF] text-white px-5 py-3 rounded-full font-bold shadow-[0_4px_24px_rgba(43,75,255,0.4)] hover:shadow-[0_4px_32px_rgba(0,229,255,0.5)] transition-all hover:-translate-y-0.5" style="border-radius: 9999px;">
    <div class="absolute -top-1 -right-1 w-3 h-3 bg-[#00E5FF] rounded-full border-2 border-[#0B0F19]"></div>
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    AI Research Chat ✨
  </button>
</div>
</div>
<style>
  #root > footer { display: none !important; }
  body > footer { display: none !important; }
  #global-footer-container footer { display: block !important; }
</style>
<script>
  function hideOldFooters() {
    const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    const toHide = [];
    while (node = textNodes.nextNode()) {
      const txt = node.nodeValue;
      if (txt.includes('©') || txt.includes('Eaton Square, Lodha') || txt.includes('THE CINEMATIC ARSENAL') || txt.includes('Swastik AI LABS ©')) {
        let parent = node.parentElement;
        while(parent && parent.tagName !== 'BODY' && parent.id !== 'root') {
          if (parent.textContent.length < 600) {
            toHide.push(parent);
          }
          parent = parent.parentElement;
        }
      }
    }
    toHide.forEach(el => {
      let highest = el;
      while(highest.parentElement && highest.parentElement.id !== 'root' && highest.parentElement.tagName !== 'BODY') {
         highest = highest.parentElement;
      }
      if (highest && highest.textContent.length < 800) {
         highest.style.display = 'none';
      }
    });
  }

  window.addEventListener('DOMContentLoaded', hideOldFooters);
  const observer = new MutationObserver(() => {
    hideOldFooters();
  });
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  }
</script>`; """

    new_content = content[:start_idx] + new_footer + content[end_idx:]
    with open("index.html", "w") as f:
        f.write(new_content)
    print("Successfully replaced footer.")
else:
    print("Could not find start or end tags.", start_idx, end_idx)
