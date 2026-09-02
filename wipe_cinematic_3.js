const fs = require('fs');
let code = fs.readFileSync('build_index.js', 'utf-8');

// I'm going to inject CSS that visually obliterates anything with text-center mt-10 text-slate-400
code = code.replace(
  /<style>[\s\S]*?<\/style>/s, 
  "<style>  footer:not(#global-footer) { display: none !important; } .mt-10.text-center.text-\\[11px\\].text-slate-400 { display: none !important; }</style>"
);

fs.writeFileSync('build_index.js', code, 'utf-8');
