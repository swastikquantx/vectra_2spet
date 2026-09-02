const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  let html = Buffer.from(pages['Auth-Genz-Registration.html'], 'base64').toString('utf-8');
  
  html = html.replace('You created 5 days straight  keep the streak alive.', 'You have been active for 5 consecutive days. Keep it up!');
  
  pages['Auth-Genz-Registration.html'] = Buffer.from(html, 'utf-8').toString('base64');
  
  const newPagesStr = JSON.stringify(pages);
  const newIndexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', newIndexHtml, 'utf-8');
  console.log('Fixed GenZ copy 6');
}
