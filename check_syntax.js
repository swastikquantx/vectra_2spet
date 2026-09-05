const fs = require('fs');
const acorn = require('acorn');
const acornJsx = require('acorn-jsx');
const Parser = acorn.Parser.extend(acornJsx());

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const file of files) {
    if (file === 'index.html' || file === 'index_fixed.html' || file === 'test_index.html') continue;
    const content = fs.readFileSync(file, 'utf8');
    const match = content.match(/<script>([\s\S]*?)<\/script>/);
    if (match) {
        try {
            Parser.parse(match[1], {ecmaVersion: 2020});
        } catch (e) {
            console.log(file, "has syntax error:", e.message);
        }
    }
}
