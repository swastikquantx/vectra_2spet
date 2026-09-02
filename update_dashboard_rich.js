const fs = require('fs');
let html = fs.readFileSync('user_dashboard_draft.html', 'utf-8');

// Replace tab-projects content
const projectsHtml = `
    <div class="flex-1 overflow-y-auto p-8 hidden" id="tab-projects">
      <div class="flex justify-between items-end mb-8">
        <div>
          <h1 class="text-[32px] font-bold tracking-tight mb-1 syne">My Projects</h1>
          <p class="text-[14px] text-slate-500">View and manage your cinematic generations.</p>
        </div>
        <div class="flex gap-2">
          <select class="h-10 px-4 bg-white border border-slate-200 rounded-full text-[13px] font-medium outline-none hover:bg-slate-50 transition-colors cursor-pointer">
            <option>All Projects</option>
            <option>Completed</option>
            <option>Rendering</option>
          </select>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Project 1 -->
        <div class="group rounded-3xl bg-white border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
          <div class="aspect-video bg-slate-100 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <button class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:scale-110 transition-transform"><svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
              <button class="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg></button>
            </div>
            <div class="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-md rounded-md text-white text-[10px] font-bold tracking-wider">00:15</div>
          </div>
          <div class="p-5 flex justify-between items-start">
            <div>
              <h3 class="text-[15px] font-bold text-slate-900 mb-1">Cyberpunk City Pan</h3>
              <p class="text-[12px] text-slate-500">VECTRA-3 Cinematic • Sep 14</p>
            </div>
            <button class="text-slate-400 hover:text-blue-600 transition-colors p-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></button>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="group rounded-3xl bg-white border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
          <div class="aspect-video bg-slate-100 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2564&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <button class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:scale-110 transition-transform"><svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
              <button class="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg></button>
            </div>
            <div class="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-md rounded-md text-white text-[10px] font-bold tracking-wider">00:42</div>
          </div>
          <div class="p-5 flex justify-between items-start">
            <div>
              <h3 class="text-[15px] font-bold text-slate-900 mb-1">Retro Synthwave Loop</h3>
              <p class="text-[12px] text-slate-500">VECTRA-HyperReal • Sep 13</p>
            </div>
            <button class="text-slate-400 hover:text-blue-600 transition-colors p-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></button>
          </div>
        </div>
      </div>
    </div>
`;
const tabProjectsRegex = /<div class="flex-1 overflow-y-auto p-8 hidden" id="tab-projects">[\s\S]*?(?=<div class="flex-1 overflow-y-auto p-8 hidden" id="tab-assets">)/;
html = html.replace(tabProjectsRegex, projectsHtml + '\n    ');

// Replace tab-assets content
const assetsHtml = `
    <div class="flex-1 overflow-y-auto p-8 hidden" id="tab-assets">
      <div class="flex justify-between items-end mb-8">
        <div>
          <h1 class="text-[32px] font-bold tracking-tight mb-1 syne">Assets & Models</h1>
          <p class="text-[14px] text-slate-500">Manage your custom LoRAs, reference images, and audio tracks.</p>
        </div>
      </div>
      
      <!-- Drag & Drop Zone -->
      <div class="mb-10 w-full border-2 border-dashed border-blue-200 rounded-3xl bg-blue-50/50 hover:bg-blue-50 transition-colors flex flex-col items-center justify-center py-12 cursor-pointer group">
        <div class="w-14 h-14 bg-white rounded-full shadow-sm border border-blue-100 flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform duration-300">
           <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
        </div>
        <h3 class="text-[15px] font-bold text-blue-900 mb-1">Click or drag files to upload</h3>
        <p class="text-[13px] text-blue-600/70">Supports JPG, PNG, MP3, WAV, and .safetensors (max 5GB)</p>
      </div>

      <!-- Tabs -->
      <div class="flex gap-8 border-b border-slate-200 mb-8">
        <button class="pb-3 text-[14px] font-bold text-blue-600 border-b-2 border-blue-600">Reference Images <span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-[11px] ml-1">2</span></button>
        <button class="pb-3 text-[14px] font-medium text-slate-500 hover:text-slate-800 transition-colors">Audio Tracks <span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-[11px] ml-1">0</span></button>
        <button class="pb-3 text-[14px] font-medium text-slate-500 hover:text-slate-800 transition-colors">Custom Models <span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-[11px] ml-1">0</span></button>
      </div>

      <!-- Asset Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        <div class="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-sm hover:shadow-md transition-shadow">
           <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2532&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
           <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
              <div class="flex justify-end"><button class="w-7 h-7 bg-white/20 hover:bg-red-500 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div>
              <p class="text-[11px] text-white font-medium truncate">reference_01.jpg</p>
           </div>
        </div>
        <div class="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-sm hover:shadow-md transition-shadow">
           <img src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2670&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
           <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
              <div class="flex justify-end"><button class="w-7 h-7 bg-white/20 hover:bg-red-500 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div>
              <p class="text-[11px] text-white font-medium truncate">character_face.png</p>
           </div>
        </div>
      </div>
    </div>
`;
const tabAssetsRegex = /<div class="flex-1 overflow-y-auto p-8 hidden" id="tab-assets">[\s\S]*?(?=<div class="flex-1 overflow-y-auto p-8 hidden" id="tab-billing">)/;
html = html.replace(tabAssetsRegex, assetsHtml + '\n    ');

fs.writeFileSync('user_dashboard_draft.html', html, 'utf-8');

// Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  pages['User_Dashboard.html'] = Buffer.from(html, 'utf-8').toString('base64');
  indexHtml = indexHtml.replace(match[1], JSON.stringify(pages));
  fs.writeFileSync('index.html', indexHtml, 'utf-8');
  console.log('Updated Dashboard UI.');
}
