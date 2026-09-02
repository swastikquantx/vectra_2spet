const fs = require('fs');

// 1. Stop build_index.js from injecting footers
let build = fs.readFileSync('build_index.js', 'utf-8');
build = build.replace(/const globalFooterHtml = `[\s\S]*?`;/, 'const globalFooterHtml = ``;');
fs.writeFileSync('build_index.js', build, 'utf-8');

// 2. Strip footers out of all HTML files
const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');
for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Physically delete footer tags from the DOM
  content = content.replace(/<footer[\s\S]*?<\/footer>/gi, '');
  
  fs.writeFileSync(file, content, 'utf-8');
}

console.log("Deleted footers from all pages");
