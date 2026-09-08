(function(){
  const footer = document.querySelector('[data-global-footer]');
  if(!footer) return;
  footer.innerHTML = `
    <footer class="border-t border-zinc-900 bg-zinc-950 py-12 px-6 lg:px-12 mt-auto text-sm text-zinc-500 font-sans">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-2">
          <strong class="text-white font-display text-lg tracking-tight">Vectra</strong> 
          <span class="opacity-50">|</span> 
          <span>AI Creative Engine</span>
        </div>
        <div class="flex flex-wrap items-center gap-6 font-medium">
          <a href="index.html" class="hover:text-white transition-colors">Home</a>
          <a href="create-studio.html" class="hover:text-white transition-colors">Create Studio</a>
          <a href="templates.html" class="hover:text-white transition-colors">Templates</a>
          <a href="pricing.html" class="hover:text-white transition-colors">Pricing</a>
          <a href="login.html" class="hover:text-white transition-colors">Login</a>
          <a href="Admin_Panel.html" class="hover:text-white transition-colors">Admin Panel</a>
        </div>
        <div>© <span id="year"></span> Vectra. A Swastik AI Labs product.</div>
      </div>
    </footer>`;
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
