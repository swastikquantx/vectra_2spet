// Create Studio Interactivity
document.addEventListener('DOMContentLoaded', () => {
  // Navigation Tabs Logic
  const views = ['builder', 'requests', 'tasks', 'messages', 'projects', 'assets', 'brand', 'history'];
  const buttons = document.querySelectorAll('[data-view]');
  const genericView = document.getElementById('genericView');
  const genericTitle = document.getElementById('genericTitle');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active states
      buttons.forEach(b => {
        b.classList.remove('bg-zinc-800', 'text-white');
        b.classList.add('text-zinc-400');
      });
      // Add active state to clicked
      btn.classList.add('bg-zinc-800', 'text-white');
      btn.classList.remove('text-zinc-400');
      
      const target = btn.getAttribute('data-view');
      
      // Hide all standard views
      document.getElementById('builderView').classList.add('hidden');
      document.getElementById('requestsView').classList.add('hidden');
      document.getElementById('tasksView').classList.add('hidden');
      document.getElementById('messagesView').classList.add('hidden');
      genericView.classList.add('hidden');
      
      // Show targeted view
      if (['builder', 'requests', 'tasks', 'messages'].includes(target)) {
        document.getElementById(target + 'View').classList.remove('hidden');
        if(target === 'builder') {
           document.getElementById(target + 'View').classList.add('flex');
        }
      } else {
        genericView.classList.remove('hidden');
        genericTitle.textContent = target.charAt(0).toUpperCase() + target.slice(1);
      }
    });
  });

  // Mode selection logic (Video, Image, Audio, etc)
  const modeBtns = document.querySelectorAll('[data-mode]');
  const providerStatus = document.getElementById('providerStatus');
  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modeBtns.forEach(b => {
        b.classList.remove('bg-white', 'text-black');
        b.classList.add('text-zinc-400');
      });
      btn.classList.add('bg-white', 'text-black');
      btn.classList.remove('text-zinc-400');
      
      const mode = btn.getAttribute('data-mode').toUpperCase();
      providerStatus.textContent = \`Provider: VECTRA_\${mode} (Idle)\`;
    });
  });

  // Copilot Chat Simulation
  const chatSend = document.getElementById('chatSend');
  const chatInput = document.getElementById('chatInput');
  const chatLog = document.getElementById('chatLog');

  if(chatSend && chatInput) {
    const sendMessage = () => {
      const text = chatInput.value.trim();
      if(!text) return;
      
      chatLog.innerHTML += \`<div class="bg-violet-600 p-3 rounded-lg text-white self-end ml-8 text-sm shadow-lg border border-violet-500">\${text}</div>\`;
      chatInput.value = '';
      chatLog.scrollTop = chatLog.scrollHeight;
      
      setTimeout(() => {
         chatLog.innerHTML += \`<div class="bg-zinc-800/80 p-3 rounded-lg text-zinc-300 mr-8 text-sm shadow border border-zinc-700/50">I'm processing that request. The generation jobs panel will update shortly.</div>\`;
         chatLog.scrollTop = chatLog.scrollHeight;
      }, 800);
    };

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }

  // Basic Property Selection
  const addButtons = document.querySelectorAll('[data-add]');
  const propText = document.getElementById('propText');
  addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      propText.value = \`New \${btn.getAttribute('data-add')} Layer\`;
    });
  });
});
