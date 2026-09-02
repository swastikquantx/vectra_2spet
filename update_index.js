const fs = require('fs');

const createStudio = fs.readFileSync('Create_Studio.html', 'utf-8');
const adminPanel = fs.readFileSync('Admin_Panel.html', 'utf-8');
const home = fs.readFileSync('Home.html', 'utf-8'); // Let's not modify Home if not needed, wait.
// Let's just update Create_Studio.html in the PAGES of index.html

let html = fs.readFileSync('index.html', 'utf-8');

// The SPA has a huge const PAGES={"Home.html":"base64", ...};
// Let's parse it out or just replace the specific one.
const regex = /"Create_Studio\.html":"([^"]+)"/;
if (html.match(regex)) {
  const newBase64 = Buffer.from(createStudio, 'utf-8').toString('base64');
  html = html.replace(regex, `"Create_Studio.html":"${newBase64}"`);
  fs.writeFileSync('index.html', html, 'utf-8');
  console.log("Updated Create_Studio.html in index.html");
} else {
  console.log("Could not find Create_Studio.html in PAGES");
}

const adminRegex = /"Admin_Panel\.html":"([^"]+)"/;
if (html.match(adminRegex)) {
  const newAdmin = Buffer.from(adminPanel, 'utf-8').toString('base64');
  html = html.replace(adminRegex, `"Admin_Panel.html":"${newAdmin}"`);
  fs.writeFileSync('index.html', html, 'utf-8');
  console.log("Updated Admin_Panel.html in index.html");
} else {
  console.log("Could not find Admin_Panel.html in PAGES, adding it.");
  const newAdmin = Buffer.from(adminPanel, 'utf-8').toString('base64');
  // insert before the closing brace of PAGES
  const pagesEndRegex = /(const PAGES=\{.*?)\};/s;
  html = html.replace(pagesEndRegex, `$1, "Admin_Panel.html":"${newAdmin}"};`);
  fs.writeFileSync('index.html', html, 'utf-8');
}
