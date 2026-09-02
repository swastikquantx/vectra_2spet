const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const match = html.match(/function render\(\)\s*\{([\s\S]*?)function route/);
if (match) {
    const renderBody = match[1];
    
    // Check if we already injected
    if (!renderBody.includes('authLink.style.display')) {
        // inject at the end of the last if(nav) block or just before function route()
        const newRender = `
function render() {
${renderBody}
      if (active === 'User_Dashboard.html' || active === 'Admin_Panel.html') {
          document.getElementById('badge').style.display = 'block';
      } else {
          document.getElementById('badge').style.display = 'none';
      }
      
      setTimeout(() => {
          const btns = document.querySelectorAll('#nav button');
          btns.forEach(btn => {
              if (btn.innerText.includes('Login/Create')) {
                  btn.style.display = (active === 'User_Dashboard.html' || active === 'Admin_Panel.html') ? 'none' : 'block';
              }
          });
      }, 50);
}
function route`;
        
        html = html.replace(/function render\(\)\s*\{([\s\S]*?)function route/, newRender);
        fs.writeFileSync('index.html', html, 'utf-8');
        console.log('Fixed render() logic.');
    }
}
