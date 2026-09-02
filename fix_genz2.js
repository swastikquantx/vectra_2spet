const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  let html = Buffer.from(pages['Auth-Genz-Registration.html'], 'base64').toString('utf-8');
  
  html = html.replace('e==="register"?"Sign in to access your projects and settings.":"Sign in to access your projects and settings."', 'e==="register"?"Create an account to access the Vectra Studio platform.":"Sign in to access your projects and settings."');
  
  html = html.replace(' mins, invoices, renewals. no cap.', ' minutes, invoices, and renewals securely.');
  
  pages['Auth-Genz-Registration.html'] = Buffer.from(html, 'utf-8').toString('base64');
  
  const newPagesStr = JSON.stringify(pages);
  const newIndexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', newIndexHtml, 'utf-8');
  console.log('Fixed GenZ copy 2');
}
