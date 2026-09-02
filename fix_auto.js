const fs = require('fs');
const acorn = require('acorn');
let html = fs.readFileSync('Create_Studio.html', 'utf-8');
const scriptMatches = [...html.matchAll(/<script.*?>([\s\S]*?)<\/script>/g)];
const prefix = scriptMatches[0][1].split('."])])])])])}')[0];
const suffix = ',xc=tm;kc.createRoot(document.getElementById("root")).render(m(Sc.default.StrictMode,{children:m(xc,{})}));';

let found = false;
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 15; j++) {
      let brackets = '."';
      for (let k = 0; k < i; k++) brackets += '])';
      for (let k = 0; k < j; k++) brackets += '}';
      let code = prefix + brackets + suffix;
      try {
        acorn.parse(code, { ecmaVersion: 2022 });
        console.log("Success with:", brackets);
        // Let's do the HTML replacement
        const newHtml = html.replace(scriptMatches[0][1], code);
        fs.writeFileSync('Create_Studio_fixed.html', newHtml);
        found = true;
        break;
      } catch (e) {}
  }
  if (found) break;
}
