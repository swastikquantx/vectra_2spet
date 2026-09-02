const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf-8');
const match = html.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  let decoded = Buffer.from(pages['Home.html'], 'base64').toString('utf-8');

  const injection = `
<script>
setTimeout(() => {
  const trendingHTML = \`
    <div style="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 mt-10" class="max-w-[1440px] mx-auto px-6 lg:px-10 py-10">
      <h2 class="text-3xl font-bold text-black mb-8 syne">Trending on VECTRA 🚀</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Trending Item 1 -->
        <div class="rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition group cursor-pointer bg-white">
          <div class="aspect-video bg-zinc-100 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Trending 1" />
            <div class="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded-md font-mono">00:15</div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div class="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-black">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
            </div>
          </div>
          <div class="p-5">
            <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] uppercase tracking-wider font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">Wan-2.2 Video</span>
                <span class="text-[12px] text-zinc-500">1.2M views</span>
            </div>
            <h3 class="font-bold text-lg leading-tight mb-1">Cyberpunk Neo-Tokyo Chase</h3>
            <p class="text-[13px] text-zinc-500">Directed by @AI_Visionary • Lip-Sync by SadTalker</p>
          </div>
        </div>
        
        <!-- Trending Item 2 -->
        <div class="rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition group cursor-pointer bg-white">
          <div class="aspect-video bg-zinc-100 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Trending 2" />
            <div class="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded-md font-mono">03:42</div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div class="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-black">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
            </div>
          </div>
          <div class="p-5">
             <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] uppercase tracking-wider font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">MusicVideo Engine</span>
                <span class="text-[12px] text-zinc-500">850K views</span>
            </div>
            <h3 class="font-bold text-lg leading-tight mb-1">Ethereal Symphony (Official AI Music Video)</h3>
            <p class="text-[13px] text-zinc-500">Music by MusicGen • Vocals by Kokoro</p>
          </div>
        </div>

        <!-- Trending Item 3 -->
        <div class="rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition group cursor-pointer bg-white">
          <div class="aspect-video bg-zinc-100 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Trending 3" />
            <div class="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded-md font-mono">00:45</div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div class="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-black">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
            </div>
          </div>
          <div class="p-5">
             <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] uppercase tracking-wider font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-full">MiniMax H3</span>
                <span class="text-[12px] text-zinc-500">2.1M views</span>
            </div>
            <h3 class="font-bold text-lg leading-tight mb-1">The Martian Colony 2050</h3>
            <p class="text-[13px] text-zinc-500">Script by Gemini 1.5 • Composited in VECTRA Studio</p>
          </div>
        </div>
      </div>
    </div>
  \`;

  // Find a good place to insert this.
  // The home page has a footer. We can insert this right before the footer.
  const footer = document.querySelector('footer');
  if (footer && footer.parentNode) {
      const container = document.createElement('div');
      container.innerHTML = trendingHTML;
      footer.parentNode.insertBefore(container, footer);
  } else {
      // fallback
      const root = document.getElementById('root');
      if (root) {
         const container = document.createElement('div');
         container.innerHTML = trendingHTML;
         root.appendChild(container);
      }
  }
}, 1000);
</script>
</body>
  `;

  decoded = decoded.replace('</body>', injection);
  pages['Home.html'] = Buffer.from(decoded, 'utf-8').toString('base64');
  
  const newPagesStr = JSON.stringify(pages);
  const newHtml = html.replace(match[1], newPagesStr);
  
  fs.writeFileSync('index.html', newHtml, 'utf-8');
  console.log('Trending section injected successfully!');
} else {
  console.log('Failed to find PAGES match');
}
