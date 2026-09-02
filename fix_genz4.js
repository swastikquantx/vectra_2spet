const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  let html = Buffer.from(pages['Auth-Genz-Registration.html'], 'base64').toString('utf-8');
  
  html = html.replace(/Invite bestie get /g, 'Invite friends and get ');
  html = html.replace(/ no cap fr/g, '');
  html = html.replace(/VECTRA-BESTIE-100/g, 'VECTRA-REF-100');
  
  html = html.replace(/You created 5 days straight.*?bestie/g, 'You have been active for 5 consecutive days. Keep up the great work.');
  html = html.replace(/Gen Z way/g, 'Communication');
  html = html.replace(/main character energy/g, 'cutting-edge technology');
  
  html = html.replace(/mins, invoices, renewals\. no cap\./g, 'minutes, invoices, and renewals securely.');
  
  pages['Auth-Genz-Registration.html'] = Buffer.from(html, 'utf-8').toString('base64');
  
  const newPagesStr = JSON.stringify(pages);
  const newIndexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', newIndexHtml, 'utf-8');
  console.log('Fixed GenZ copy 4');
}
