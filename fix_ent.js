const fs = require('fs');
let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  let html = Buffer.from(pages['Enterprise.html'], 'base64').toString('utf-8');
  
  const target = '<!-- Header removed as requested -->';
  const newHeader = '<nav class="flex items-center justify-center gap-5 text-[13.5px] font-medium text-zinc-600 mb-6 flex-wrap"><a href="#" class="hover:text-zinc-900 transition">Home</a><a href="#" class="hover:text-zinc-900 transition">About Swastik</a><a href="#" class="hover:text-zinc-900 transition">Cinematic Arsenal</a><a href="#" class="hover:text-zinc-900 transition">How it works</a><a href="#" class="hover:text-zinc-900 transition">Solutions</a><a href="#" class="hover:text-zinc-900 transition font-bold text-zinc-900">Enterprise</a><a href="#" class="hover:text-zinc-900 transition">Pricing</a></nav><div class="flex justify-center gap-3 mb-8"><a href="#create" class="h-10 px-6 rounded-full bg-black text-white text-[13px] font-semibold inline-flex items-center justify-center hover:bg-zinc-800 transition">Create Studio</a><a href="#login" class="h-10 px-6 rounded-full border border-zinc-200 bg-white text-zinc-800 text-[13px] font-semibold inline-flex items-center justify-center hover:bg-zinc-50 transition">Login/Create Account</a></div>';
  
  if (html.includes(target)) {
    html = html.replace(target, newHeader);
    pages['Enterprise.html'] = Buffer.from(html, 'utf-8').toString('base64');
    console.log('Enterprise nav updated');
  } else {
    console.log('Enterprise target not found');
  }

  const newPagesStr = JSON.stringify(pages);
  const newIndexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', newIndexHtml, 'utf-8');
}
