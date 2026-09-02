const fs = require('fs');
const acorn = require('acorn');
let html = fs.readFileSync('Create_Studio.html', 'utf-8');
const scriptMatches = [...html.matchAll(/<script.*?>([\s\S]*?)<\/script>/g)];
const prefix = scriptMatches[0][1].split('."])])])])])}')[0];
const suffix = ',xc=tm;kc.createRoot(document.getElementById("root")).render(m(Sc.default.StrictMode,{children:m(xc,{})}));';

try {
  acorn.parse(prefix + '."])])])])]}' + suffix, { ecmaVersion: 2022 });
} catch (e) {
  console.log(e);
}
