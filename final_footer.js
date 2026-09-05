const fs = require('fs');
let about = fs.readFileSync('About_Swastilk.html', 'utf-8');

// The footer currently ends with: </div>  </div></footer>
const copyrightStr = '<div style="color: #71717a; font-size: 13px; font-weight: 700; text-align: center; font-family: Syne, Inter, sans-serif; letter-spacing: 0.025em; padding-bottom: 20px;">@2026 copyright Swastik AI Labs , Mumbai</div>';

if (!about.includes('Swastik AI Labs')) {
  about = about.replace('</footer>', copyrightStr + '\n</footer>');
  fs.writeFileSync('About_Swastilk.html', about);
  console.log("Added copyright to About_Swastilk");
}
