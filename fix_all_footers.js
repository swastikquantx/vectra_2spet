const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;

  // Let's make sure ALL footers are hidden via CSS just to be absolutely certain, 
  // since the user wants "absolutely nothing in footer".
  if (!content.includes('footer { display: none !important; }')) {
    content = content.replace('</head>', '<style>footer, #global-footer { display: none !important; }</style></head>');
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
  }
}
