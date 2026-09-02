
          document.addEventListener('click', e => {
            const a = e.target.closest('a');
            if (a) {
              const href = a.getAttribute('href');
              if (href === '/studio' || href === 'studio' || href === 'Create_Studio.html' || href === '#studio') { 
                e.preventDefault(); 
                if(parent.active) { parent.active = 'Create_Studio.html'; parent.route(); parent.render(); }
              }
              else if (href === '/pricing' || href === 'pricing' || href === 'Pricing.html' || href === '#pricing') { 
                e.preventDefault(); 
                if(parent.active) { parent.active = 'Pricing.html'; parent.route(); parent.render(); }
              }
              else if (href === '/login' || href === 'Auth-Genz-Registration.html') { 
                e.preventDefault(); 
                if(parent.active) { parent.active = 'Auth-Genz-Registration.html'; parent.route(); parent.render(); }
              }
              else if (href && (href.startsWith('/') || href.endsWith('.html'))) {
                 // Try mapping standard hrefs to our internal pages if possible
                 e.preventDefault();
                 console.log("Intercepted click:", href);
              }
            }
          });
        <\/script>`;
        if (content.includes('</body>')) {
            content = content.replace('</body>', scriptInjector + '</body>');
        } else {
            content += scriptInjector;
        }
        frame.srcdoc = content;
}
    } else {
        document.getElementById('err').style.display = 'block';
    }
};

window.onhashchange = () => {
    const h = location.hash.substring(1);
    if (h && (ORDER.includes(h) || LABELS[h])) {
        active = h;
        route();
        render();
    }
};

render();
route();

