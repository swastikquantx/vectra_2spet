const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// 1. Replace Logo image in header and footer
const svgLogoHeader = `<svg class="h-[32px] w-auto" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="32" font-family="'Syne', sans-serif" font-size="32" font-weight="900" letter-spacing="-0.05em" fill="black">VECTRA</text><circle cx="132" cy="24" r="5" fill="#7c3aed"/></svg>`;
const svgLogoFooter = `<svg class="h-[24px] w-auto" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="32" font-family="'Syne', sans-serif" font-size="32" font-weight="900" letter-spacing="-0.05em" fill="black">VECTRA</text><circle cx="132" cy="24" r="5" fill="#7c3aed"/></svg>`;

html = html.replace(/<img src="https:\/\/storage\.googleapis\.com\/a1aa[^>]+class="h-\[44px\][^>]+>/, svgLogoHeader);
html = html.replace(/<img src="https:\/\/storage\.googleapis\.com\/a1aa[^>]+class="h-6[^>]+>/, svgLogoFooter);

// 2. Inject iframe link interceptor in the route() function
const interceptor = `
        let content = decode(PAGES[active]);
        const scriptInjector = \`<script>
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
        <\\/script>\`;
        if (content.includes('</body>')) {
            content = content.replace('</body>', scriptInjector + '</body>');
        } else {
            content += scriptInjector;
        }
        frame.srcdoc = content;
`;

html = html.replace(/if \(frame && PAGES\[active\]\) \{[\s\S]*?frame\.srcdoc = decode\(PAGES\[active\]\);[\s\S]*?\}/g, `if (frame && PAGES[active]) {${interceptor}}`);

fs.writeFileSync('index.html', html, 'utf-8');
console.log("Fixed logos and iframe links");
