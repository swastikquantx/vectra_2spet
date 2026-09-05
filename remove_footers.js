const fs = require('fs');
const files = fs.readdirSync('.');

files.forEach(file => {
  if (file.endsWith('.html')) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove standard HTML <footer>...</footer> tags
    // Using regex to match <footer> up to </footer> across multiple lines
    let originalLength = content.length;
    content = content.replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, '');
    
    // Also try to catch the React/Preact compiled footer forms if they exist as hardcoded strings like:
    // p("footer",{...}) or S("footer",{...})
    content = content.replace(/p\("footer",\s*\{[\s\S]*?\}\)(?=,\s*p\("style"|\]\)\})/gi, '');
    
    if (content.length !== originalLength) {
      console.log('Removed footer from:', file);
      fs.writeFileSync(file, content);
    }
  }
});
