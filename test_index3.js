const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const html = fs.readFileSync('index.html', 'utf-8');
const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("jsdomError", (err) => { 
  if(!err.message.includes('targetURL')) console.error("JSDOM Error:", err.message);
});
const dom = new JSDOM(html, { runScripts: 'dangerously', virtualConsole });
setTimeout(() => {
    console.log("Gate display:", dom.window.document.getElementById('gate').style.display);
    const srcdoc = dom.window.document.getElementById('frame').srcdoc;
    console.log("Frame srcdoc len:", srcdoc ? srcdoc.length : "no srcdoc");
}, 500);
