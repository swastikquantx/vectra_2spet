const fs = require('fs');
const acorn = require('acorn');
const html = fs.readFileSync('index.html', 'utf-8');
const scriptMatches = [...html.matchAll(/<script.*?>([\s\S]*?)<\/script>/g)];
let ok = true;
scriptMatches.forEach((m, i) => {
  if (m[1].trim()) {
    try {
      acorn.parse(m[1], { ecmaVersion: 2022 });
    } catch(e) {
      console.log('Script', i, 'error:', e.message);
      ok = false;
    }
  }
});
if(ok) console.log('Syntax OK');
