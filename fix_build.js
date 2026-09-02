const fs = require('fs');
let code = fs.readFileSync('build_index.js', 'utf-8');

const observerScript = `
<script>
(function() {
  const killList = [
    "THE CINEMATIC ARSENAL",
    "Unlimited Cinema for Bharat",
    "QuantX Intelligence",
    "B-805, Eaton Square",
    "cutting-edge technology",
    "BUILT FOR CLOUDFLARE"
  ];
  const observer = new MutationObserver(() => {
    // 1. Remove all old footers
    document.querySelectorAll('footer').forEach(f => {
      if (f.id !== 'global-footer') f.remove();
    });
    
    // 2. Remove any text blocks containing the junk
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let n;
    const toRemove = [];
    while (n = walker.nextNode()) {
      for (const text of killList) {
        if (n.nodeValue && n.nodeValue.includes(text)) {
           // Find a good parent to nuke
           let target = n.parentElement;
           while(target && target.tagName !== 'SECTION' && target.tagName !== 'FOOTER' && !target.className.includes('mt-10') && !target.className.includes('mt-12') && target.parentElement !== document.body) {
              if (target.parentElement && target.parentElement.tagName === 'DIV' && target.parentElement.children.length > 3) {
                 break; // don't go too high if it's a big container
              }
              if (target.parentElement === document.body) break;
              target = target.parentElement;
           }
           if (target && target.id !== 'global-footer') toRemove.push(target);
        }
      }
    }
    toRemove.forEach(el => el.remove());
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
</script>
`;

code = code.replace(
  /const globalFooterHtml = `(.*?)`;/s, 
  "const globalFooterHtml = `" + observerScript + "$1`;"
);

fs.writeFileSync('build_index.js', code, 'utf-8');
console.log("Injected MutationObserver into build_index.js");
