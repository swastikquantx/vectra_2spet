const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const html = fs.readFileSync('Create_Studio2.html', 'utf-8');
const dom = new JSDOM(html, { runScripts: 'dangerously' });
setTimeout(() => {
    console.log(dom.window.document.body.innerHTML.substring(0, 500));
    console.log("Root content length:", dom.window.document.getElementById('root').innerHTML.length);
}, 1000);
