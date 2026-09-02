const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  let html = Buffer.from(pages['Auth-Genz-Registration.html'], 'base64').toString('utf-8');
  
  html = html.replace('No boring forms. Just pure creator energy. fr ✨', 'Sign in to access your projects and settings.');
  html = html.replace('Log in and keep cooking. Your timeline misses you.', 'Sign in to access your projects and settings.');
  
  html = html.replace('Invite bestie get ', 'Invite friends and get ');
  html = html.replace(' no cap fr', '');
  html = html.replace('VECTRA-BESTIE-100', 'VECTRA-REF-100');
  
  html = html.replace('You created 5 days straight  keep the streak alive bestie', 'You have been active for 5 consecutive days. Keep up the great work.');
  html = html.replace('Gen Z way', 'Communication');
  html = html.replace('main character energy 🔥', 'cutting-edge technology.');
  html = html.replace('demo preview only ✨', 'Demo preview only');
  
  pages['Auth-Genz-Registration.html'] = Buffer.from(html, 'utf-8').toString('base64');
  
  const newPagesStr = JSON.stringify(pages);
  const newIndexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', newIndexHtml, 'utf-8');
  console.log('Fixed GenZ copy');
}
