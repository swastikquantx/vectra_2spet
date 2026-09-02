const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf-8');
const match = content.match(/<script>(.*?)<\/script>/s);
if (match) {
  try {
    require('esprima').parseScript(match[1]);
    console.log("Syntax OK");
  } catch(e) {
    console.log("Syntax Error:", e);
  }
} else {
  console.log("No script tag found");
}
