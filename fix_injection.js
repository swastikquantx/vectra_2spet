const fs = require('fs');

const home = fs.readFileSync('Home.html', 'utf-8');
const createStudio = fs.readFileSync('Create_Studio.html', 'utf-8');
const admin = fs.readFileSync('Admin_Panel.html', 'utf-8');

function encodeForSPA(content) {
    return Buffer.from(encodeURIComponent(content).replace(/%([0-9A-F]{2})/g, (match, p1) => {
        return String.fromCharCode('0x' + p1);
    }), 'binary').toString('base64');
}

let html = fs.readFileSync('index.html', 'utf-8');

const regexHome = /"Home\.html":"([^"]+)"/;
if (html.match(regexHome)) {
  html = html.replace(regexHome, `"Home.html":"${encodeForSPA(home)}"`);
  console.log("Updated Home.html in index.html");
}

const regexCreate = /"Create_Studio\.html":"([^"]+)"/;
if (html.match(regexCreate)) {
  html = html.replace(regexCreate, `"Create_Studio.html":"${encodeForSPA(createStudio)}"`);
  console.log("Updated Create_Studio.html in index.html");
}

const regexAdmin = /"Admin_Panel\.html":"([^"]+)"/;
if (html.match(regexAdmin)) {
  html = html.replace(regexAdmin, `"Admin_Panel.html":"${encodeForSPA(admin)}"`);
  console.log("Updated Admin_Panel.html in index.html");
}

fs.writeFileSync('index.html', html, 'utf-8');
