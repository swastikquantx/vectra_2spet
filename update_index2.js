const fs = require('fs');

const home = fs.readFileSync('Home.html', 'utf-8');
const createStudio = fs.readFileSync('Create_Studio.html', 'utf-8');

let html = fs.readFileSync('index.html', 'utf-8');

const regexHome = /"Home\.html":"([^"]+)"/;
if (html.match(regexHome)) {
  const newBase64 = Buffer.from(home, 'utf-8').toString('base64');
  html = html.replace(regexHome, `"Home.html":"${newBase64}"`);
  console.log("Updated Home.html in index.html");
}

const regexCreate = /"Create_Studio\.html":"([^"]+)"/;
if (html.match(regexCreate)) {
  const newBase64 = Buffer.from(createStudio, 'utf-8').toString('base64');
  html = html.replace(regexCreate, `"Create_Studio.html":"${newBase64}"`);
  console.log("Updated Create_Studio.html in index.html");
}

fs.writeFileSync('index.html', html, 'utf-8');
