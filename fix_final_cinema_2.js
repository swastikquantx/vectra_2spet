const fs = require('fs');
let code = fs.readFileSync('Cinematic-Arsenal-37-Engines.html', 'utf-8');

// The exact trailing chunk we need to destroy
code = code.replace(/,"Swastik AI LABS"\]\}\), " © ",new Date\(\)\.getFullYear\(\)," — "\]\}\)/g, '""');

// If there's any remaining section block at the end, just chop it
const cutoff = code.lastIndexOf('h("section",{className:"bg-slate-50 border-t border-slate-200"');
if (cutoff !== -1) {
    const startPart = code.substring(0, cutoff);
    const endPart = ']})]})})]})}Xc.createRoot(document.getElementById("root")).render(h(Dc.default.StrictMode,{children:h(Yu,{})}));</script>  <script>(function(){function m(a){var h=a.getAttribute("href");if(!h)return;try{var u=new URL(h,document.baseURI);if((u.protocol==="http:"||u.protocol==="https:")&&u.host!==location.host){a.target="_blank";a.rel="noopener noreferrer";}}catch(e){}}function s(){document.querySelectorAll("a[href]").forEach(m);}if(document.readyState!=="loading"){s();}else{document.addEventListener("DOMContentLoaded",s);}document.addEventListener("click",function(e){var a=e.target&&e.target.closest&&e.target.closest("a[href]");if(a){m(a);}},true);})();</script>';
    code = startPart + endPart;
}

fs.writeFileSync('Cinematic-Arsenal-37-Engines.html', code, 'utf-8');
