const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  let html = Buffer.from(pages['Auth-Genz-Registration.html'], 'base64').toString('utf-8');
  
  html = html.replace(/fr you gotta be 13\+ no cap \\uD83E\\uDD72/g, 'You must be 13 or older to register.');
  html = html.replace(/passwords not matching bestie/g, 'Passwords do not match.');
  html = html.replace(/Login — welcome back bestie/g, 'Login to your account');
  html = html.replace(/This is what slay looks like after you join — fr ✨/g, 'Welcome to your creator dashboard.');
  html = html.replace(/ — no cap, we keep your data slay-safe\./g, ' — we keep your data safe and secure.');
  html = html.replace(/one more time, no cap/g, 'Confirm password');
  
  pages['Auth-Genz-Registration.html'] = Buffer.from(html, 'utf-8').toString('base64');
  
  const newPagesStr = JSON.stringify(pages);
  const newIndexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', newIndexHtml, 'utf-8');
  console.log('Fixed GenZ copy 5');
}
