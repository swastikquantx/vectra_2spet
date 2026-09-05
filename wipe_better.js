const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf-8');
  let original = content;
  
  // Replace the whole array wrapping the copyright.
  // Find " © ",new Date().getFullYear()
  
  while(content.includes('new Date().getFullYear()')) {
    let idx = content.indexOf('new Date().getFullYear()');
    // find the starting '[' before it
    let startIdx = content.lastIndexOf('[', idx);
    // find the ending ']' after it
    let endIdx = content.indexOf(']', idx);
    if (startIdx !== -1 && endIdx !== -1) {
      content = content.substring(0, startIdx) + '""' + content.substring(endIdx + 1);
    } else {
      break;
    }
  }
  
  while(content.includes('© 2026')) {
    let idx = content.indexOf('© 2026');
    let startIdx = content.lastIndexOf('[', idx);
    let endIdx = content.indexOf(']', idx);
    if (startIdx !== -1 && endIdx !== -1) {
      content = content.substring(0, startIdx) + '""' + content.substring(endIdx + 1);
    } else {
      break;
    }
  }

  if (content !== original) {
    fs.writeFileSync(f, content);
    console.log("Wiped from", f);
  }
});
