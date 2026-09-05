const fs = require('fs');

const files = fs.readdirSync('.');
let modifiedAny = false;

for (const file of files) {
  if (file.endsWith('.html') && file !== 'index.html' && file !== 'index_fixed.html' && file !== 'test_index.html') {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Remove standard HTML <footer>
    content = content.replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, '');
    
    // Remove react compiled footer forms c("footer",{...}) or m("footer",{...}) or p("footer",{...}) or S("footer",{...})
    // Finding the matching bracket is tricky with regex, but we can just regex it as long as we know what follows it.
    // Usually it's followed by c("style", or m("style", or pd.createRoot
    
    // We can just wipe out everything from /["']footer["']/ to the end of that block if we are careful, 
    // or just use regex for typical patterns.
    content = content.replace(/[a-zA-Z]\("footer",\s*\{[\s\S]*?\}\)(?=,\s*[a-zA-Z]\("style"|\]\)\}|\]\)\}\)\]\}\))/gi, '');
    
    // For User_Dashboard.html specifically:
    // c("footer",{className:"mt-6 border-t border-[#EEEEEE] bg-[#FAFAFA]",children:m("div",{ ... })})]})}pd.createRoot
    content = content.replace(/c\("footer",\{className:"[^"]*",children:m\("div",\{[\s\S]*?\}\)\}\)\}\]\)\}\)/gi, '');
    
    if (content !== original) {
      console.log('Removed footer from:', file);
      fs.writeFileSync(file, content);
      modifiedAny = true;
    }
  }
}
if (modifiedAny) console.log('Some files modified.');
