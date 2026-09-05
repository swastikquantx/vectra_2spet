const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf-8');
  let changed = false;

  // Regex to match the React copyright pattern across various files.
  // It usually looks like "© ",new Date().getFullYear() ...
  // or "© 2026"
  
  // Pattern 1:
  // "© ",new Date().getFullYear(), " ", S("span", {className:"whitespace-nowrap mx-1", children:[S("img",{src:"/742938a6-977c-4327-b1a1-983e4a7c9687.png",className:"inline-block align-text-bottom h-[1em] w-auto mr-1.5 object-contain",alt:""}), ""]}), " • "
  
  const p1 = `["© ",new Date().getFullYear(), " ", S("span", {className:"whitespace-nowrap mx-1", children:[S("img",{src:"/742938a6-977c-4327-b1a1-983e4a7c9687.png",className:"inline-block align-text-bottom h-[1em] w-auto mr-1.5 object-contain",alt:""}), ""]}), " • "]`;
  
  // Pattern 2:
  // "© ",new Date().getFullYear()," — THE CINEMATIC ARSENAL"
  
  // Let's just remove anything with `new Date().getFullYear()` or `© 2026` inside the react strings if possible, or just the specific chunks.
  
  if (content.includes('new Date().getFullYear()')) {
      content = content.replace(/\["© ",new Date\(\)\.getFullYear\(\).*?\]\}\)/g, '""');
      content = content.replace(/"© ",new Date\(\)\.getFullYear\(\).*?"/g, '""');
      content = content.replace(/\["© ",new Date\(\)\.getFullYear\(\).*?\]/g, '""');
      changed = true;
  }
  
  if (content.includes('© 2026')) {
      content = content.replace(/"© 2026.*?"/g, '""');
      content = content.replace(/\["© 2026.*?\]/g, '""');
      changed = true;
  }

  if (changed) {
    fs.writeFileSync(f, content);
    console.log("Wiped React copyright from", f);
  }
});
