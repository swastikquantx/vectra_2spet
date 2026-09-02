const fs = require('fs');
const acorn = require('acorn');
const code = fs.readFileSync('Create_Studio_script.js', 'utf-8');
try {
  acorn.parse(code, { ecmaVersion: 2022 });
  console.log("Parsed successfully!");
} catch (e) {
  console.log(e.message);
  console.log("Error at pos:", e.pos);
  console.log("Context:", code.substring(Math.max(0, e.pos - 40), e.pos + 40));
}
