const fs = require('fs');

const adminHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VECTRA AI - Admin Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .syne { font-family: 'Syne', sans-serif; }
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: #09090b; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #27272a; border-radius: 10px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #3f3f46; }
  </style>
</head>
<body class="bg-[#09090b] text-zinc-300 h-screen overflow-hidden flex">

  <!-- Sidebar -->
  <aside class="w-64 border-r border-zinc-800 bg-[#0c0c0e] flex flex-col hidden md:flex shrink-0">
    <div class="h-16 flex items-center px-6 border-b border-zinc-800">
      <div class="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center mr-3">
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
      </div>
      <span class="syne text-white font-bold text-lg tracking-tight">VECTRA <span class="text-zinc-500">ADMIN</span></span>
    </div>
    
    <div class="flex-1 overflow-y-auto py-6 px-4 space-y-1">
      <p class="px-2 text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-2 mt-4">System Overview</p>
      <a href="#" class="flex items-center gap-3 px-3 py-2 bg-blue-600/10 text-blue-500 rounded-lg text-[13px] font-semibold">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
        Dashboard
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 rounded-lg text-[13px] font-medium transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        Users & Quotas
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 rounded-lg text-[13px] font-medium transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        Compute Nodes
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 rounded-lg text-[13px] font-medium transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
        GPU Cluster Load
      </a>
      
      <p class="px-2 text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-2 mt-6">Content</p>
      <a href="#" class="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 rounded-lg text-[13px] font-medium transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
        Active Generations
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 rounded-lg text-[13px] font-medium transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
        Moderation Queue
      </a>
    </div>

    <div class="p-4 border-t border-zinc-800">
      <button onclick="if(window.parent && window.parent.active){ window.parent.active='User_Dashboard.html'; window.parent.render(); window.parent.route(); }" class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-[13px] font-bold transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Exit to App
      </button>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="flex-1 flex flex-col h-screen overflow-hidden relative">
    
    <!-- Topbar -->
    <header class="h-16 shrink-0 flex items-center justify-between px-8 border-b border-zinc-800 bg-[#0c0c0e]/80 backdrop-blur-md relative z-20">
      <h1 class="text-[16px] font-bold text-white syne tracking-wide">Command Center</h1>
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
           <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
           <span class="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">All Systems Normal</span>
        </div>
        <div class="h-8 w-px bg-zinc-800 mx-2"></div>
        <button class="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        </button>
      </div>
    </header>

    <!-- Scrollable content -->
    <div class="flex-1 overflow-y-auto p-8 custom-scrollbar">
      
      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Metric 1 -->
        <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden">
           <div class="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
           <p class="text-[13px] text-zinc-400 font-medium mb-1">Total Active Users</p>
           <h3 class="text-3xl font-bold text-white syne mb-2">14,208</h3>
           <div class="flex items-center gap-1 text-emerald-400 text-[12px] font-medium">
             <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
             +12% this week
           </div>
        </div>
        
        <!-- Metric 2 -->
        <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden">
           <div class="absolute -right-4 -top-4 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl"></div>
           <p class="text-[13px] text-zinc-400 font-medium mb-1">Videos Rendered (24h)</p>
           <h3 class="text-3xl font-bold text-white syne mb-2">84,591</h3>
           <div class="flex items-center gap-1 text-emerald-400 text-[12px] font-medium">
             <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
             +5% this week
           </div>
        </div>

        <!-- Metric 3 -->
        <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden">
           <div class="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
           <p class="text-[13px] text-zinc-400 font-medium mb-1">Compute Credits Burned</p>
           <h3 class="text-3xl font-bold text-white syne mb-2">1.2M</h3>
           <div class="flex items-center gap-1 text-zinc-500 text-[12px] font-medium">
             <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"></path></svg>
             Steady burn rate
           </div>
        </div>

        <!-- Metric 4 -->
        <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden">
           <div class="absolute -right-4 -top-4 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"></div>
           <p class="text-[13px] text-zinc-400 font-medium mb-1">Cluster Load (GPU)</p>
           <h3 class="text-3xl font-bold text-white syne mb-2">92%</h3>
           <div class="flex items-center gap-1 text-amber-400 text-[12px] font-medium">
             <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
             Approaching capacity
           </div>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        <!-- Main Chart / Table Area -->
        <div class="xl:col-span-2">
          <div class="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-[18px] font-bold text-white syne">Recent Registrations</h2>
              <button class="text-[12px] text-blue-400 hover:text-blue-300 font-medium">View All</button>
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="border-b border-zinc-800">
                    <th class="pb-3 text-[12px] font-semibold text-zinc-500 uppercase tracking-wider">User</th>
                    <th class="pb-3 text-[12px] font-semibold text-zinc-500 uppercase tracking-wider">Plan</th>
                    <th class="pb-3 text-[12px] font-semibold text-zinc-500 uppercase tracking-wider">Status</th>
                    <th class="pb-3 text-[12px] font-semibold text-zinc-500 uppercase tracking-wider text-right">Credits</th>
                  </tr>
                </thead>
                <tbody class="text-[13px]">
                  <tr class="border-b border-zinc-800/50 hover:bg-zinc-800/20 transition-colors">
                    <td class="py-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded bg-gradient-to-r from-blue-500 to-indigo-500 flex flex-col justify-center items-center text-white font-bold text-[10px]">SK</div>
                        <div>
                          <div class="font-bold text-white">Sarah K.</div>
                          <div class="text-zinc-500 text-[11px]">sarah@studio.io</div>
                        </div>
                      </div>
                    </td>
                    <td class="py-4"><span class="px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-[11px] font-bold">Enterprise</span></td>
                    <td class="py-4"><div class="flex items-center gap-2 text-emerald-400"><div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Online</div></td>
                    <td class="py-4 text-right font-mono text-zinc-300">8,500</td>
                  </tr>
                  <tr class="border-b border-zinc-800/50 hover:bg-zinc-800/20 transition-colors">
                    <td class="py-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded bg-gradient-to-r from-emerald-500 to-teal-500 flex flex-col justify-center items-center text-white font-bold text-[10px]">MR</div>
                        <div>
                          <div class="font-bold text-white">Mike R.</div>
                          <div class="text-zinc-500 text-[11px]">mike.render@gmail.com</div>
                        </div>
                      </div>
                    </td>
                    <td class="py-4"><span class="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[11px] font-bold">Creator</span></td>
                    <td class="py-4"><div class="flex items-center gap-2 text-zinc-500"><div class="w-1.5 h-1.5 rounded-full bg-zinc-600"></div> Offline</div></td>
                    <td class="py-4 text-right font-mono text-zinc-300">1,200</td>
                  </tr>
                  <tr class="border-b border-zinc-800/50 hover:bg-zinc-800/20 transition-colors">
                    <td class="py-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded bg-gradient-to-r from-orange-500 to-red-500 flex flex-col justify-center items-center text-white font-bold text-[10px]">DL</div>
                        <div>
                          <div class="font-bold text-white">David L.</div>
                          <div class="text-zinc-500 text-[11px]">david@agency.com</div>
                        </div>
                      </div>
                    </td>
                    <td class="py-4"><span class="px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-[11px] font-bold">Enterprise</span></td>
                    <td class="py-4"><div class="flex items-center gap-2 text-emerald-400"><div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Online</div></td>
                    <td class="py-4 text-right font-mono text-zinc-300">4,150</td>
                  </tr>
                  <tr class="hover:bg-zinc-800/20 transition-colors">
                    <td class="py-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded bg-zinc-700 flex flex-col justify-center items-center text-white font-bold text-[10px]">JW</div>
                        <div>
                          <div class="font-bold text-white">James W.</div>
                          <div class="text-zinc-500 text-[11px]">james@freelance.net</div>
                        </div>
                      </div>
                    </td>
                    <td class="py-4"><span class="px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 text-[11px] font-bold">Free</span></td>
                    <td class="py-4"><div class="flex items-center gap-2 text-zinc-500"><div class="w-1.5 h-1.5 rounded-full bg-zinc-600"></div> Offline</div></td>
                    <td class="py-4 text-right font-mono text-zinc-300">50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Node Status -->
        <div class="xl:col-span-1 space-y-6">
          <div class="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 class="text-[18px] font-bold text-white syne mb-6">Engine Status</h2>
            
            <div class="space-y-5">
              <div>
                <div class="flex justify-between items-center mb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span class="text-[13px] font-bold text-white">VECTRA-3 Cinematic</span>
                  </div>
                  <span class="text-[12px] font-mono text-zinc-400">850 ms</span>
                </div>
                <div class="w-full bg-zinc-800 rounded-full h-1.5">
                  <div class="bg-blue-500 h-1.5 rounded-full" style="width: 92%"></div>
                </div>
                <p class="text-[11px] text-zinc-500 mt-1 text-right">92% Load</p>
              </div>

              <div>
                <div class="flex justify-between items-center mb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span class="text-[13px] font-bold text-white">VECTRA-Fast</span>
                  </div>
                  <span class="text-[12px] font-mono text-zinc-400">220 ms</span>
                </div>
                <div class="w-full bg-zinc-800 rounded-full h-1.5">
                  <div class="bg-emerald-500 h-1.5 rounded-full" style="width: 45%"></div>
                </div>
                <p class="text-[11px] text-zinc-500 mt-1 text-right">45% Load</p>
              </div>

              <div>
                <div class="flex justify-between items-center mb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-violet-500"></div>
                    <span class="text-[13px] font-bold text-white">Image-to-Video API</span>
                  </div>
                  <span class="text-[12px] font-mono text-zinc-400">1.2s</span>
                </div>
                <div class="w-full bg-zinc-800 rounded-full h-1.5">
                  <div class="bg-violet-500 h-1.5 rounded-full" style="width: 78%"></div>
                </div>
                <p class="text-[11px] text-zinc-500 mt-1 text-right">78% Load</p>
              </div>
            </div>
            
            <button class="w-full mt-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-[12px] font-bold rounded-xl transition-colors border border-zinc-700">
              Provision More Nodes
            </button>
          </div>

          <!-- Live Feed -->
          <div class="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-[18px] font-bold text-white syne flex items-center gap-2">
                <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                Live Render Feed
              </h2>
            </div>
            <div class="space-y-4">
              <div class="flex gap-3 items-start">
                <div class="w-12 h-12 rounded bg-zinc-800 overflow-hidden shrink-0 relative">
                   <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <svg class="w-4 h-4 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                   </div>
                </div>
                <div>
                  <p class="text-[12px] font-bold text-zinc-200 line-clamp-1">Cinematic drone shot over mars base...</p>
                  <p class="text-[11px] text-zinc-500 mt-0.5">VECTRA-3 • Generating 85%</p>
                </div>
              </div>
              <div class="flex gap-3 items-start">
                <div class="w-12 h-12 rounded bg-zinc-800 overflow-hidden shrink-0 relative">
                   <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2564&auto=format&fit=crop" class="w-full h-full object-cover opacity-50"/>
                   <div class="absolute inset-0 border border-emerald-500/50 rounded pointer-events-none"></div>
                </div>
                <div>
                  <p class="text-[12px] font-bold text-zinc-200 line-clamp-1">Retro synthwave digital landscape loop</p>
                  <p class="text-[11px] text-emerald-400 mt-0.5 font-medium">Completed • 2s ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </main>

</body>
</html>`;

// Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf-8');

// Replace the old admin label with the new one
indexHtml = indexHtml.replace('"Admin-Panel-UPI-Collect-Request.html": "Admin Login"', '"Admin_Panel.html": "Admin Dashboard"');

// Ensure Admin_Panel.html is in ORDER so it shows in the navigation
if (!indexHtml.includes('"Admin_Panel.html"')) {
   indexHtml = indexHtml.replace('const ORDER=[', 'const ORDER=["Admin_Panel.html", ');
}

// Write the pages mapping
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  // Remove the old one if it exists
  delete pages['Admin-Panel-UPI-Collect-Request.html'];
  
  // Add the new one
  pages['Admin_Panel.html'] = Buffer.from(adminHtml, 'utf-8').toString('base64');
  
  indexHtml = indexHtml.replace(match[1], JSON.stringify(pages));
  fs.writeFileSync('index.html', indexHtml, 'utf-8');
  console.log('Admin Dashboard generated and index updated.');
}
