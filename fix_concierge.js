const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Concierge Studio - Vectra</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&family=Inter:wght@400..700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        .syne { font-family: 'Syne', sans-serif; }
        .inter { font-family: 'Inter', sans-serif; }
        .tab-active { background-color: #000; color: #fff; }
        .tab-inactive { background-color: #f1f5f9; color: #64748b; hover:bg-slate-200; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
    </style>
</head>
<body class="bg-white text-slate-900 inter antialiased h-full">
    <div class="max-w-[1400px] mx-auto p-6 lg:p-8 h-full flex flex-col">
        <!-- Header -->
        <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
            <div>
                <h1 class="syne text-3xl font-bold tracking-tight">Concierge Studio</h1>
                <p class="text-sm text-slate-500 mt-1">The complete multi-modal AI creative suite.</p>
            </div>
            <div class="flex gap-2 bg-slate-100 p-1 rounded-full text-sm font-medium overflow-x-auto hide-scrollbar shrink-0">
                <button onclick="switchTab('command')" id="tab-command" class="tab-active px-4 py-2 rounded-full transition-all flex items-center gap-2 whitespace-nowrap">
                    <i data-lucide="terminal" class="w-4 h-4"></i> Command Center
                </button>
                <button onclick="switchTab('app')" id="tab-app" class="tab-inactive px-4 py-2 rounded-full transition-all flex items-center gap-2 whitespace-nowrap">
                    <i data-lucide="box" class="w-4 h-4"></i> App Builder
                </button>
                <button onclick="switchTab('video')" id="tab-video" class="tab-inactive px-4 py-2 rounded-full transition-all flex items-center gap-2 whitespace-nowrap">
                    <i data-lucide="video" class="w-4 h-4"></i> Video Studio
                </button>
                <button onclick="switchTab('image')" id="tab-image" class="tab-inactive px-4 py-2 rounded-full transition-all flex items-center gap-2 whitespace-nowrap">
                    <i data-lucide="image" class="w-4 h-4"></i> Image Studio
                </button>
                <button onclick="switchTab('ad')" id="tab-ad" class="tab-inactive px-4 py-2 rounded-full transition-all flex items-center gap-2 whitespace-nowrap">
                    <i data-lucide="target" class="w-4 h-4"></i> Ad Copy
                </button>
            </div>
        </div>

        <!-- COMMAND CENTER -->
        <div id="panel-command" class="flex-1 flex flex-col max-w-4xl mx-auto w-full pt-10">
            <div class="text-center mb-10">
                <h1 class="syne text-4xl font-extrabold tracking-tight mb-4 text-slate-900">What do you want to create?</h1>
                <p class="text-slate-500">Describe a workflow, an app, or an ad campaign. Concierge AI handles the rest.</p>
            </div>
            <div class="relative w-full shadow-2xl rounded-2xl bg-white border border-slate-200 p-2">
                <textarea id="command-prompt" class="w-full bg-slate-50 border border-slate-200 rounded-xl resize-none p-4 outline-none text-lg min-h-[120px] placeholder:text-slate-400 focus:border-black transition-colors" placeholder="e.g. Create a 9:16 Hindi product ad, generate a cinematic video, add lip-sync and music..."></textarea>
                <div class="flex items-center justify-between px-2 pb-2 mt-2">
                    <button class="flex items-center gap-2 text-xs font-bold bg-white border border-slate-200 px-4 py-2 rounded-lg text-slate-600 transition-colors hover:bg-slate-50">
                        <i data-lucide="wand-2" class="w-4 h-4 text-violet-600"></i> Auto-Enhance
                    </button>
                    <button onclick="runCommand()" class="flex items-center gap-2 bg-black hover:bg-slate-800 px-8 py-3 rounded-xl text-white font-bold text-sm tracking-tight transition-all">
                        <i data-lucide="terminal" class="w-4 h-4"></i> ORCHESTRATE
                    </button>
                </div>
            </div>
            <div id="command-loader" class="hidden mt-10 mx-auto flex-col items-center gap-4 text-black">
                <i data-lucide="loader-2" class="w-8 h-8 animate-spin"></i>
                <p class="text-sm font-bold syne tracking-wide">Building your pipeline...</p>
            </div>
            <div id="command-result" class="hidden mt-10 w-full animate-fade-in">
                <h2 class="text-xl font-bold mb-4 syne">Generated Pipeline</h2>
                <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                    <div class="flex items-start gap-4">
                        <div class="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 mt-1 font-bold text-xs">1</div>
                        <div class="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-4">
                            <div class="flex items-center justify-between mb-2">
                                <h3 class="font-bold text-sm">Generate Script</h3>
                                <span class="text-[10px] font-bold px-2 py-1 bg-white border border-slate-200 rounded text-slate-500 uppercase">GEMINI</span>
                            </div>
                            <p class="text-sm text-slate-600">Drafting the 9:16 Hindi product ad narrative based on input.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4">
                        <div class="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 mt-1 font-bold text-xs">2</div>
                        <div class="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-4">
                            <div class="flex items-center justify-between mb-2">
                                <h3 class="font-bold text-sm">Video Synthesis</h3>
                                <span class="text-[10px] font-bold px-2 py-1 bg-white border border-slate-200 rounded text-slate-500 uppercase">VEO</span>
                            </div>
                            <p class="text-sm text-slate-600">Rendering cinematic visuals aligned with the script pacing.</p>
                        </div>
                    </div>
                    <div class="pt-4 border-t border-slate-200 flex justify-end">
                        <button class="flex items-center gap-2 bg-black text-white hover:bg-slate-800 px-6 py-2.5 rounded-xl font-bold text-sm transition-colors">
                            <i data-lucide="play" class="w-4 h-4"></i> Run Pipeline
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- APP BUILDER -->
        <div id="panel-app" class="flex-1 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 hidden">
            <div class="flex flex-col gap-6 h-full">
                <div class="bg-slate-50 p-6 rounded-[24px] border border-slate-200">
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Describe the App</label>
                    <textarea id="app-prompt" rows="5" class="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-black outline-none resize-none mb-4" placeholder="e.g. Build a dashboard for real estate agents with a property list..."></textarea>
                    <button onclick="buildApp()" class="w-full bg-black text-white py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-slate-800 transition">
                        <i data-lucide="box" class="w-4 h-4"></i> Generate Application
                    </button>
                </div>
                
                <div class="bg-white border border-slate-200 p-5 rounded-[24px] flex flex-col gap-4 shadow-sm">
                    <h3 class="font-bold text-xs text-slate-500 uppercase tracking-widest">Workflow Progress</h3>
                    <div class="flex items-center gap-3">
                        <div id="app-step-1-icon" class="w-5 h-5 rounded-full border-2 border-slate-300"></div>
                        <span id="app-step-1-text" class="text-sm text-slate-400 font-medium">Product Analyst: Planning Routes</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <div id="app-step-2-icon" class="w-5 h-5 rounded-full border-2 border-slate-300"></div>
                        <span id="app-step-2-text" class="text-sm text-slate-400 font-medium">Architect: Generating Code</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <div id="app-step-3-icon" class="w-5 h-5 rounded-full border-2 border-slate-300"></div>
                        <span id="app-step-3-text" class="text-sm text-slate-400 font-medium">Sandbox: Deploying</span>
                    </div>
                </div>
            </div>

            <div class="bg-[#1e1e1e] rounded-[24px] overflow-hidden flex flex-col border border-[#333] shadow-xl">
                <div class="h-14 bg-[#252526] border-b border-[#3c3c3c] flex items-center px-4 justify-between">
                    <div class="flex gap-2 text-[#cccccc] text-xs">
                        <span class="flex items-center gap-2 bg-[#1e1e1e] px-4 py-1.5 rounded border border-[#333] font-mono"><i data-lucide="code-2" class="w-3 h-3 text-[#4fc1ff]"></i> App.tsx</span>
                    </div>
                    <button id="app-preview-btn" class="hidden items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-colors">
                        <i data-lucide="play" class="w-3 h-3"></i> Preview App
                    </button>
                </div>
                <div class="flex-1 p-6 font-mono text-sm text-[#d4d4d4] overflow-y-auto whitespace-pre-wrap">
                    <div id="app-code-empty" class="h-full flex items-center justify-center opacity-30">
                        <i data-lucide="git-branch" class="w-16 h-16"></i>
                    </div>
                    <div id="app-code-content" class="hidden">
import React from 'react';

export default function RealEstateDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Generated Dashboard</h1>
      {/* Dynamic content injected here */}
    </div>
  );
}
                    </div>
                </div>
            </div>
        </div>

        <!-- VIDEO STUDIO -->
        <div id="panel-video" class="flex-1 grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 hidden">
            <div class="space-y-6 bg-slate-50 p-6 rounded-[24px] border border-slate-200">
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Prompt</label>
                    <textarea id="video-prompt" rows="4" class="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-black outline-none resize-none" placeholder="Describe your video..."></textarea>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Model</label>
                    <select class="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm outline-none">
                        <option>Veo (High Quality)</option>
                        <option>Lumiere (Fast)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Aspect Ratio</label>
                    <div class="grid grid-cols-3 gap-2">
                        <button class="py-2 border-2 border-black rounded-lg text-xs font-bold">16:9</button>
                        <button class="py-2 border border-slate-200 bg-white text-slate-500 rounded-lg text-xs font-bold">9:16</button>
                        <button class="py-2 border border-slate-200 bg-white text-slate-500 rounded-lg text-xs font-bold">1:1</button>
                    </div>
                </div>
                <button onclick="generateVideo()" class="w-full bg-black text-white py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-slate-800 transition">
                    <i data-lucide="film" class="w-4 h-4"></i> Generate Video
                </button>
            </div>
            <div class="bg-slate-100 rounded-[24px] border border-slate-200 flex flex-col items-center justify-center overflow-hidden relative">
                <div id="video-placeholder" class="text-slate-400 flex flex-col items-center gap-3">
                    <i data-lucide="video" class="w-12 h-12 opacity-50"></i>
                    <p class="text-sm font-medium">Your generated video will appear here</p>
                </div>
                <div id="video-loader" class="hidden flex-col items-center gap-4 text-black">
                    <i data-lucide="loader-2" class="w-8 h-8 animate-spin"></i>
                    <p class="text-sm font-bold syne tracking-wide" id="video-status">Initializing Veo engine...</p>
                </div>
            </div>
        </div>

        <!-- IMAGE STUDIO -->
        <div id="panel-image" class="flex-1 grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 hidden">
            <div class="space-y-6 bg-slate-50 p-6 rounded-[24px] border border-slate-200">
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Image Prompt</label>
                    <textarea id="image-prompt" rows="4" class="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-black outline-none resize-none" placeholder="Describe the image..."></textarea>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Model</label>
                    <select class="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm outline-none">
                        <option>Imagen 3</option>
                        <option>FLUX.1 Schnell</option>
                    </select>
                </div>
                <button onclick="generateImage()" class="w-full bg-black text-white py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-slate-800 transition">
                    <i data-lucide="image-plus" class="w-4 h-4"></i> Generate Image
                </button>
            </div>
            <div class="bg-slate-100 rounded-[24px] border border-slate-200 flex items-center justify-center relative overflow-hidden">
                <div id="image-placeholder" class="text-slate-400 flex flex-col items-center gap-3">
                    <i data-lucide="image" class="w-12 h-12 opacity-50"></i>
                    <p class="text-sm font-medium">Your generated image will appear here</p>
                </div>
                <div id="image-loader" class="hidden flex-col items-center gap-4 text-black">
                    <i data-lucide="refresh-cw" class="w-8 h-8 animate-spin"></i>
                    <p class="text-sm font-bold syne tracking-wide">Synthesizing pixels...</p>
                </div>
                <img id="image-result" src="" class="hidden w-full h-full object-cover">
            </div>
        </div>

        <!-- AD STUDIO -->
        <div id="panel-ad" class="flex-1 grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 hidden">
            <div class="space-y-6 bg-slate-50 p-6 rounded-[24px] border border-slate-200">
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Product/Campaign Details</label>
                    <textarea id="ad-prompt" rows="5" class="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-black outline-none resize-none" placeholder="E.g., A new line of eco-friendly running shoes..."></textarea>
                </div>
                <button onclick="generateAd()" class="w-full bg-black text-white py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-slate-800 transition">
                    <i data-lucide="pen-tool" class="w-4 h-4"></i> Draft Ad Copy
                </button>
            </div>
            <div class="bg-slate-50 rounded-[24px] border border-slate-200 p-8 flex flex-col h-full overflow-y-auto">
                <div id="ad-placeholder" class="m-auto text-slate-400 flex flex-col items-center gap-3">
                    <i data-lucide="mouse-pointer-click" class="w-12 h-12 opacity-50"></i>
                    <p class="text-sm font-medium">Generated copy variants will appear here</p>
                </div>
                <div id="ad-loader" class="hidden m-auto flex-col items-center gap-4 text-black">
                    <i data-lucide="loader" class="w-8 h-8 animate-spin"></i>
                    <p class="text-sm font-bold syne tracking-wide">Drafting variants...</p>
                </div>
                <div id="ad-results" class="hidden space-y-4">
                    <!-- Results injected here -->
                </div>
            </div>
        </div>

    </div>

    <script>
        lucide.createIcons();

        function switchTab(tab) {
            const tabs = ['command', 'app', 'video', 'image', 'ad'];
            tabs.forEach(t => {
                document.getElementById('panel-' + t).classList.add('hidden');
                document.getElementById('tab-' + t).className = 'tab-inactive px-4 py-2 rounded-full transition-all flex items-center gap-2 whitespace-nowrap';
            });
            document.getElementById('panel-' + tab).classList.remove('hidden');
            document.getElementById('tab-' + tab).className = 'tab-active px-4 py-2 rounded-full transition-all flex items-center gap-2 whitespace-nowrap shadow-md';
        }

        // Mock Command Center
        function runCommand() {
            const prompt = document.getElementById('command-prompt').value;
            if(!prompt) return;
            document.getElementById('command-result').classList.add('hidden');
            document.getElementById('command-loader').classList.remove('hidden');
            document.getElementById('command-loader').classList.add('flex');
            
            setTimeout(() => {
                document.getElementById('command-loader').classList.add('hidden');
                document.getElementById('command-loader').classList.remove('flex');
                document.getElementById('command-result').classList.remove('hidden');
                lucide.createIcons();
            }, 1500);
        }

        // Mock App Builder
        function buildApp() {
            const prompt = document.getElementById('app-prompt').value;
            if(!prompt) return;
            
            const step1i = document.getElementById('app-step-1-icon');
            const step1t = document.getElementById('app-step-1-text');
            const step2i = document.getElementById('app-step-2-icon');
            const step2t = document.getElementById('app-step-2-text');
            const step3i = document.getElementById('app-step-3-icon');
            const step3t = document.getElementById('app-step-3-text');

            // Reset
            step1i.className = 'w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin';
            step1t.className = 'text-sm text-black font-bold';
            
            setTimeout(() => {
                step1i.innerHTML = '<i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-500"></i>';
                step1i.className = '';
                step1t.className = 'text-sm text-slate-500 font-medium';
                
                step2i.className = 'w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin';
                step2t.className = 'text-sm text-black font-bold';
                
                document.getElementById('app-code-empty').classList.add('hidden');
                document.getElementById('app-code-content').classList.remove('hidden');
                lucide.createIcons();
            }, 1500);

            setTimeout(() => {
                step2i.innerHTML = '<i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-500"></i>';
                step2i.className = '';
                step2t.className = 'text-sm text-slate-500 font-medium';
                
                step3i.innerHTML = '<i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-500"></i>';
                step3i.className = '';
                step3t.className = 'text-sm text-emerald-600 font-bold';

                document.getElementById('app-preview-btn').classList.remove('hidden');
                document.getElementById('app-preview-btn').classList.add('flex');
                lucide.createIcons();
            }, 3000);
        }

        // Mock generation functions to keep UI responsive
        function generateVideo() {
            const prompt = document.getElementById('video-prompt').value;
            if(!prompt) return;
            document.getElementById('video-placeholder').classList.add('hidden');
            document.getElementById('video-loader').classList.remove('hidden');
            document.getElementById('video-loader').classList.add('flex');
            
            let statuses = ['Initializing Veo engine...', 'Generating frames...', 'Upscaling to 4K...', 'Finalizing...'];
            let i = 0;
            let int = setInterval(() => {
                i++;
                if (i < statuses.length) {
                    document.getElementById('video-status').innerText = statuses[i];
                } else {
                    clearInterval(int);
                    document.getElementById('video-loader').innerHTML = '<i data-lucide="check-circle" class="w-12 h-12 text-emerald-500"></i><p class="text-sm font-bold mt-2">Ready for download</p>';
                    lucide.createIcons();
                }
            }, 1500);
        }

        function generateImage() {
            const prompt = document.getElementById('image-prompt').value;
            if(!prompt) return;
            document.getElementById('image-placeholder').classList.add('hidden');
            document.getElementById('image-result').classList.add('hidden');
            document.getElementById('image-loader').classList.remove('hidden');
            document.getElementById('image-loader').classList.add('flex');
            
            setTimeout(() => {
                document.getElementById('image-loader').classList.add('hidden');
                document.getElementById('image-loader').classList.remove('flex');
                document.getElementById('image-result').classList.remove('hidden');
                document.getElementById('image-result').src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop';
            }, 2500);
        }

        function generateAd() {
            const prompt = document.getElementById('ad-prompt').value;
            if(!prompt) return;
            document.getElementById('ad-placeholder').classList.add('hidden');
            document.getElementById('ad-results').classList.add('hidden');
            document.getElementById('ad-loader').classList.remove('hidden');
            document.getElementById('ad-loader').classList.add('flex');
            
            setTimeout(() => {
                document.getElementById('ad-loader').classList.add('hidden');
                document.getElementById('ad-loader').classList.remove('flex');
                document.getElementById('ad-results').classList.remove('hidden');
                document.getElementById('ad-results').innerHTML = `
                    <div class="bg-white p-5 rounded-xl border border-slate-200 relative group">
                        <div class="absolute top-4 right-4 text-slate-400 hover:text-black cursor-pointer"><i data-lucide="copy" class="w-4 h-4"></i></div>
                        <h4 class="font-bold text-xs text-violet-600 mb-2 uppercase tracking-wide">Variant 1 - Direct & Punchy</h4>
                        <p class="text-sm text-slate-700">Ready to change how you move? Meet the future of eco-friendly footwear. Lightweight, sustainable, and built for speed. Step into tomorrow.</p>
                    </div>
                    <div class="bg-white p-5 rounded-xl border border-slate-200 relative group">
                        <div class="absolute top-4 right-4 text-slate-400 hover:text-black cursor-pointer"><i data-lucide="copy" class="w-4 h-4"></i></div>
                        <h4 class="font-bold text-xs text-violet-600 mb-2 uppercase tracking-wide">Variant 2 - Story Driven</h4>
                        <p class="text-sm text-slate-700">We didn't just design a new running shoe. We re-engineered the footprint we leave behind. 100% recycled materials. 0% compromise on performance.</p>
                    </div>
                `;
                lucide.createIcons();
            }, 2000);
        }
    </script>
</body>
</html>
`;

fs.writeFileSync('Concierge_Studio.html', html, 'utf8');
