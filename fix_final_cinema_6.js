const fs = require('fs');
let code = fs.readFileSync('Cinematic-Arsenal-37-Engines.html', 'utf-8');

// The offending component is at the very end of the file.
// We are going to strictly overwrite the file to chop off the last 400 characters, closing the React component tree manually.
// First, find the very end.
const endOfFileStr = ']})]})})]})}Xc.createRoot(document.getElementById("root")).render(h(Dc.default.StrictMode,{children:h(Yu,{})}));</script>  <script>(function(){function m(a){var h=a.getAttribute("href");if(!h)return;try{var u=new URL(h,document.baseURI);if((u.protocol==="http:"||u.protocol==="https:")&&u.host!==location.host){a.target="_blank";a.rel="noopener noreferrer";}}catch(e){}}function s(){document.querySelectorAll("a[href]").forEach(m);}if(document.readyState!=="loading"){s();}else{document.addEventListener("DOMContentLoaded",s);}document.addEventListener("click",function(e){var a=e.target&&e.target.closest&&e.target.closest("a[href]");if(a){m(a);}},true);})();</script>';

// I'm just going to chop the string starting from "h("section",{className:"bg-slate-50 border-y border-slate-200"" up to the end if I can find a way to gracefully end it, but since it's a huge minified react block, let's just do a string replacement for the word "Swastik" since the previous one clearly failed.

code = code.split('Swastik').join('');
code = code.split('Swastik AI LABS').join('');
code = code.split('Swastik AI LABS © 2026 —').join('');
code = code.split('© 2026').join('');

fs.writeFileSync('Cinematic-Arsenal-37-Engines.html', code, 'utf-8');
console.log("Forcibly wiped Swastik from file.");
