const fs = require('fs');
const acorn = require('acorn');
let html = fs.readFileSync('Create_Studio.html', 'utf-8');
const scriptMatches = [...html.matchAll(/<script.*?>([\s\S]*?)<\/script>/g)];
const code = scriptMatches[0][1];

try {
  acorn.parse(code, { ecmaVersion: 2022 });
  console.log("Parsed successfully!");
} catch (e) {
  console.log(e.message);
  console.log("Error at pos:", e.pos);
  console.log("Context:", code.substring(Math.max(0, e.pos - 40), e.pos + 40));
}
