const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

const newFooter = `
<footer class="bg-white border-t py-8 px-4 sm:px-6 mt-auto shrink-0">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    <div class="space-y-4">
      <div class="flex items-center gap-2">
        <img src="https://storage.googleapis.com/a1aa/image/aC7Y63UeFhbiKxZzK81qD5qIftB9D3Rk8l23jA4UoPweQhLTA.jpg" class="h-6 w-auto" alt="VECTRA"/>
        <span class="syne font-black text-[12px] tracking-widest">VECTRA STUDIO</span>
      </div>
      <p class="text-[11px] text-zinc-500 leading-relaxed">The cinematic arsenal with 37 AI engines. Create magic without limits.</p>
    </div>
    
    <div>
      <h3 class="text-[11px] font-bold tracking-widest uppercase mb-4 text-black">Product</h3>
      <ul class="space-y-2 text-[12px] text-zinc-500">
        <li><button onclick="active='Cinematic-Arsenal-37-Engines.html'; route(); render();" class="hover:text-black transition">37 Engines</button></li>
        <li><button onclick="active='How-It-Works.html'; route(); render();" class="hover:text-black transition">How It Works</button></li>
        <li><button onclick="active='Solutions.html'; route(); render();" class="hover:text-black transition">Solutions</button></li>
        <li><button onclick="active='Create_Studio.html'; route(); render();" class="hover:text-black transition">Studio Editor</button></li>
      </ul>
    </div>

    <div>
      <h3 class="text-[11px] font-bold tracking-widest uppercase mb-4 text-black">Company</h3>
      <ul class="space-y-2 text-[12px] text-zinc-500">
        <li><button onclick="active='About_Swastilk.html'; route(); render();" class="hover:text-black transition">About Swastik</button></li>
        <li><button onclick="active='Enterprise.html'; route(); render();" class="hover:text-black transition">Enterprise</button></li>
        <li><button onclick="active='Pricing.html'; route(); render();" class="hover:text-black transition">Pricing</button></li>
      </ul>
    </div>

    <div>
      <h3 class="text-[11px] font-bold tracking-widest uppercase mb-4 text-black">Portal Access</h3>
      <ul class="space-y-2 text-[12px] text-zinc-500">
        <li><button onclick="active='Auth-Genz-Registration.html'; route(); render();" class="hover:text-black transition">User Login</button></li>
        <li><button onclick="active='User_Dashboard.html'; route(); render();" class="hover:text-black transition">Dashboard</button></li>
        <li><button onclick="active='Admin_Panel.html'; route(); render();" class="hover:text-black transition text-red-600 font-medium">Admin Panel</button></li>
      </ul>
    </div>
  </div>
  <div class="max-w-7xl mx-auto mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between">
    <div class="text-[10px] text-zinc-400">&copy; ${new Date().getFullYear()} Swastik AI Labs. All rights reserved.</div>
  </div>
</footer>
`;

html = html.replace(/<footer.*?<\/footer>/s, newFooter);
html = html.replace(/<main class="relative" style="height: calc\(100vh - 102px\)">/, '<main class="relative flex-1 overflow-y-auto">');

fs.writeFileSync('index.html', html, 'utf-8');
console.log("Updated footer in index.html");
