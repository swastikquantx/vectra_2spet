const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf-8');
  let changed = false;
  
  const toRemove = [
    `@2026 copyright Swastik AI Labs , Mumbai`,
    `2026 copyright Swastik AI Labs , Mumbai`,
    `© 2026 copyright Swastik AI Labs`,
    `<div style="color: #71717a; font-size: 13px; font-weight: 700; text-align: center; font-family: Syne, Inter, sans-serif; letter-spacing: 0.025em;">        @2026 copyright Swastik AI Labs , Mumbai    </div>`
  ];
  
  toRemove.forEach(str => {
    if (content.includes(str)) {
      content = content.replaceAll(str, '');
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(f, content);
    console.log("Wiped stray copyright from " + f);
  }
});
