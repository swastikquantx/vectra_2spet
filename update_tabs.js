const fs = require('fs');
let html = fs.readFileSync('user_dashboard_draft.html', 'utf-8');

html = html.replace(
  '<a href="#" class="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-[13px] font-semibold transition-colors">',
  '<a href="#" id="nav-dashboard" onclick="switchTab(\'dashboard\'); return false;" class="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-[13px] font-semibold transition-colors">'
);
html = html.replace(
  '<a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-[13px] font-medium transition-colors">',
  '<a href="#" id="nav-projects" onclick="switchTab(\'projects\'); return false;" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-[13px] font-medium transition-colors">'
);
html = html.replace(
  '<a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-[13px] font-medium transition-colors">',
  '<a href="#" id="nav-assets" onclick="switchTab(\'assets\'); return false;" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-[13px] font-medium transition-colors">'
);
html = html.replace(
  '<a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-[13px] font-medium transition-colors">',
  '<a href="#" id="nav-billing" onclick="switchTab(\'billing\'); return false;" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-[13px] font-medium transition-colors">'
);
html = html.replace(
  '<a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-[13px] font-medium transition-colors">',
  '<a href="#" id="nav-settings" onclick="switchTab(\'settings\'); return false;" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-[13px] font-medium transition-colors">'
);

html = html.replace(
  '<div class="flex-1 overflow-y-auto p-8">',
  '<div class="flex-1 overflow-y-auto p-8" id="tab-dashboard">'
);

const otherTabs = `
    <div class="flex-1 overflow-y-auto p-8 hidden" id="tab-projects">
      <h1 class="text-[32px] font-bold tracking-tight mb-1 syne">My Projects</h1>
      <p class="text-[14px] text-slate-500">View and manage your cinematic generations.</p>
      <div class="mt-10 flex flex-col items-center justify-center p-12 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50">
         <svg class="w-12 h-12 text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
         <h3 class="text-[15px] font-bold text-slate-600 mb-1">No additional projects</h3>
         <p class="text-[13px] text-slate-500">Projects you create will appear here.</p>
      </div>
    </div>
    
    <div class="flex-1 overflow-y-auto p-8 hidden" id="tab-assets">
      <h1 class="text-[32px] font-bold tracking-tight mb-1 syne">Assets & Models</h1>
      <p class="text-[14px] text-slate-500">Manage your custom LoRAs, reference images, and audio tracks.</p>
      <div class="mt-10 flex flex-col items-center justify-center p-12 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50">
         <svg class="w-12 h-12 text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
         <h3 class="text-[15px] font-bold text-slate-600 mb-1">No assets uploaded</h3>
         <p class="text-[13px] text-slate-500">Upload images or audio to use in your generations.</p>
      </div>
    </div>
    
    <div class="flex-1 overflow-y-auto p-8 hidden" id="tab-billing">
      <h1 class="text-[32px] font-bold tracking-tight mb-1 syne">Usage & Billing</h1>
      <p class="text-[14px] text-slate-500">Monitor your compute credits and manage your subscription.</p>
      <div class="mt-10 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
         <h3 class="text-[16px] font-bold text-slate-900 mb-4">Current Plan: Enterprise</h3>
         <div class="mb-6">
            <div class="flex justify-between text-[13px] font-semibold text-slate-600 mb-2">
              <span>Compute Credits Used</span>
              <span>1,500 / 10,000 (15%)</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-2.5">
              <div class="bg-blue-600 h-2.5 rounded-full" style="width: 15%"></div>
            </div>
         </div>
         <button class="h-10 px-6 bg-slate-900 hover:bg-slate-800 text-white text-[13px] font-semibold rounded-full shadow-sm transition-colors">Buy More Credits</button>
      </div>
    </div>
    
    <div class="flex-1 overflow-y-auto p-8 hidden" id="tab-settings">
      <h1 class="text-[32px] font-bold tracking-tight mb-1 syne">Settings</h1>
      <p class="text-[14px] text-slate-500">Manage your account preferences and API keys.</p>
      <div class="mt-10 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm max-w-2xl">
         <div class="space-y-6">
            <div>
               <label class="block text-[13px] font-bold text-slate-700 mb-2">Display Name</label>
               <input type="text" value="Akhilesh" class="w-full h-10 px-4 bg-slate-50 border border-slate-200 rounded-xl text-[13px] outline-none focus:border-blue-500 focus:bg-white transition-all"/>
            </div>
            <div>
               <label class="block text-[13px] font-bold text-slate-700 mb-2">Email Address</label>
               <input type="email" value="akhil718@gmail.com" class="w-full h-10 px-4 bg-slate-50 border border-slate-200 rounded-xl text-[13px] outline-none focus:border-blue-500 focus:bg-white transition-all"/>
            </div>
            <div>
               <label class="block text-[13px] font-bold text-slate-700 mb-2">API Key</label>
               <div class="flex gap-2">
                  <input type="password" value="sk_live_123456789" readonly class="flex-1 h-10 px-4 bg-slate-100 border border-slate-200 rounded-xl text-[13px] outline-none text-slate-500"/>
                  <button class="h-10 px-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-[13px] font-semibold rounded-xl transition-colors">Copy</button>
               </div>
            </div>
         </div>
      </div>
    </div>
`;
html = html.replace('</main>', otherTabs + '\n  </main>');

const js = `
  <script>
    function switchTab(tabId) {
      document.getElementById('tab-dashboard').classList.add('hidden');
      document.getElementById('tab-projects').classList.add('hidden');
      document.getElementById('tab-assets').classList.add('hidden');
      document.getElementById('tab-billing').classList.add('hidden');
      document.getElementById('tab-settings').classList.add('hidden');
      
      const navs = ['nav-dashboard', 'nav-projects', 'nav-assets', 'nav-billing', 'nav-settings'];
      navs.forEach(nav => {
         const el = document.getElementById(nav);
         if (el) {
             el.className = 'flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-[13px] font-medium transition-colors';
         }
      });
      
      document.getElementById('tab-' + tabId).classList.remove('hidden');
      
      const activeNav = document.getElementById('nav-' + tabId);
      if (activeNav) {
          activeNav.className = 'flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-[13px] font-semibold transition-colors';
      }
    }
  </script>
</body>
`;
html = html.replace('</body>', js);

fs.writeFileSync('user_dashboard_draft.html', html, 'utf-8');

let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  pages['User_Dashboard.html'] = Buffer.from(html, 'utf-8').toString('base64');
  const newPagesStr = JSON.stringify(pages);
  indexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', indexHtml, 'utf-8');
  console.log('Index.html updated successfully.');
}
