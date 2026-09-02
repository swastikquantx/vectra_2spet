const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

if (!html.includes("document.getElementById('logout').onclick =")) {
    const logoutTarget = `document.getElementById("loginBtn").onclick = () => {`;
    const logoutReplace = `
      document.getElementById('logout').onclick = () => {
          active = 'Home.html';
          route();
          render();
      };
      
      document.getElementById("loginBtn").onclick = () => {`;
      
    html = html.replace(logoutTarget, logoutReplace);
    fs.writeFileSync('index.html', html, 'utf-8');
    console.log("Fixed logout");
}
