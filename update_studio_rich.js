const fs = require('fs');
let html = fs.readFileSync('studio_editor_draft.html', 'utf-8');

// 1. Update text area for Enhance Prompt
html = html.replace(
  '<textarea class="w-full bg-[#18181b] border border-zinc-800 rounded-xl p-3"',
  '<textarea id="prompt-input" class="w-full bg-[#18181b] border border-zinc-800 rounded-xl p-3"'
);
// In case the above didn't match perfectly because of other classes:
if (!html.includes('id="prompt-input"')) {
   html = html.replace(
      '<textarea class="w-full bg-[#18181b]',
      '<textarea id="prompt-input" class="w-full bg-[#18181b]'
   );
}

// 2. Add onclick to Enhance button
html = html.replace(
  '<button class="text-violet-400 hover:text-violet-300 font-medium normal-case tracking-normal flex items-center gap-1">',
  '<button onclick="openEnhanceModal()" class="text-violet-400 hover:text-violet-300 font-medium normal-case tracking-normal flex items-center gap-1 transition-colors hover:bg-violet-500/10 px-2 py-1 rounded">'
);

// 3. Add ID to Preview Image
html = html.replace(
  '<img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" class="w-full h-full object-cover" />',
  '<img id="main-preview" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" class="w-full h-full object-cover transition-opacity duration-300" />'
);

// 4. Update the Generations Strip to have onclicks and ids
html = html.replace(
  '<div class="w-48 shrink-0 aspect-video bg-zinc-900 rounded-xl border-2 border-blue-500 overflow-hidden relative cursor-pointer shadow-lg shadow-blue-500/10 transition-transform hover:-translate-y-1">',
  '<div id="gen-v3" onclick="loadVersion(\'v3\')" class="w-48 shrink-0 aspect-video bg-zinc-900 rounded-xl border-2 border-blue-500 overflow-hidden relative cursor-pointer shadow-lg shadow-blue-500/10 transition-transform hover:-translate-y-1 gen-thumb">'
);
html = html.replace(
  '<div class="w-48 shrink-0 aspect-video bg-zinc-900 rounded-xl border border-zinc-700 overflow-hidden relative cursor-pointer hover:border-zinc-500 transition-all hover:-translate-y-1 group">',
  '<div id="gen-v2" onclick="loadVersion(\'v2\')" class="w-48 shrink-0 aspect-video bg-zinc-900 rounded-xl border border-zinc-700 overflow-hidden relative cursor-pointer hover:border-zinc-500 transition-all hover:-translate-y-1 group gen-thumb">'
);

// 5. Add Enhance Modal and JS
const modalAndJs = `
    <!-- Enhance Prompt Modal -->
    <div id="enhance-modal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden items-center justify-center transition-opacity">
       <div class="bg-[#18181b] border border-zinc-800 rounded-3xl p-10 max-w-md w-full flex flex-col items-center shadow-2xl relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent"></div>
          <div class="relative w-16 h-16 mb-6">
             <div class="absolute inset-0 border-4 border-zinc-800 rounded-full"></div>
             <div class="absolute inset-0 border-4 border-violet-500 rounded-full border-t-transparent animate-spin"></div>
             <svg class="w-6 h-6 text-violet-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
          </div>
          <h2 class="text-[18px] font-bold text-white mb-2 relative z-10">Enhancing Prompt...</h2>
          <p class="text-[13px] text-zinc-400 text-center relative z-10 leading-relaxed">Applying cinematic modifiers, camera logic, and lighting semantics via VECTRA LLM.</p>
       </div>
    </div>
    
    <script>
      // 1. Interactive History Logic
      const versions = {
        'v3': {
          img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
          prompt: 'A breathtaking aerial pan over a dense, neon-lit cyberpunk metropolis at midnight. Rain is pouring heavily, reflecting bright magenta and cyan holograms in the wet asphalt below. Hyper-realistic, 8k resolution, cinematic lighting.'
        },
        'v2': {
          img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2564&auto=format&fit=crop',
          prompt: 'A retro synthwave digital landscape loop. Glowing grid lines, neon pink sun on the horizon, driving through a digital mountain range. Low-poly aesthetic, vibrant colors, 80s outrun style.'
        }
      };
      
      function loadVersion(id) {
        const previewImg = document.getElementById('main-preview');
        // Fade out
        previewImg.style.opacity = '0';
        
        setTimeout(() => {
           // Change src
           previewImg.src = versions[id].img;
           // Fade back in
           previewImg.style.opacity = '1';
        }, 150);
        
        // Update prompt
        document.getElementById('prompt-input').value = versions[id].prompt;
        
        // Update styling on thumbs
        document.querySelectorAll('.gen-thumb').forEach(el => {
           el.classList.remove('border-blue-500', 'border-2');
           el.classList.add('border-zinc-700', 'border');
           
           // Handle internal image opacity
           const img = el.querySelector('img');
           if (img) {
               img.classList.remove('opacity-100');
               img.classList.add('opacity-60');
           }
        });
        
        // Highlight active
        const active = document.getElementById('gen-' + id);
        active.classList.remove('border-zinc-700', 'border');
        active.classList.add('border-blue-500', 'border-2');
        const activeImg = active.querySelector('img');
        if (activeImg) {
            activeImg.classList.remove('opacity-60');
            activeImg.classList.add('opacity-100');
        }
      }
      
      // 2. Enhance Prompt Modal Logic
      function openEnhanceModal() {
        const modal = document.getElementById('enhance-modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        setTimeout(() => {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          
          const currentPrompt = document.getElementById('prompt-input').value;
          document.getElementById('prompt-input').value = currentPrompt + " Shot on Arri Alexa 65, 50mm lens, f/1.8, deep depth of field, anamorphic lens flares, unreal engine 5 render, volumetric fog, god rays, masterpiece, highly detailed.";
          
          // Flash textarea to indicate change
          const ta = document.getElementById('prompt-input');
          ta.classList.add('ring-1', 'ring-violet-500', 'bg-violet-500/10');
          setTimeout(() => {
             ta.classList.remove('ring-1', 'ring-violet-500', 'bg-violet-500/10');
          }, 600);
        }, 1500);
      }
    </script>
    </body>`;
    
html = html.replace('</body>', modalAndJs);
fs.writeFileSync('studio_editor_draft.html', html, 'utf-8');

// Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  pages['Studio_Editor.html'] = Buffer.from(html, 'utf-8').toString('base64');
  indexHtml = indexHtml.replace(match[1], JSON.stringify(pages));
  fs.writeFileSync('index.html', indexHtml, 'utf-8');
  console.log('Updated Studio UI.');
}
