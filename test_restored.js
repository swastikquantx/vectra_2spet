const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const html = fs.readFileSync('Create_Studio_restored.html', 'utf-8');
const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("error", () => { console.log("ERROR:", ...arguments); });
virtualConsole.on("warn", () => { console.log("WARN:", ...arguments); });
virtualConsole.on("jsdomError", (err) => {
  console.error("JSDOM Error:", err.message);
});
const dom = new JSDOM(html, { runScripts: 'dangerously', virtualConsole });
setTimeout(() => {
    console.log("Root length:", dom.window.document.getElementById('root').innerHTML.length);
}, 1000);
