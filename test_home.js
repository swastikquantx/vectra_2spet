const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const html = fs.readFileSync('Home.html', 'utf-8');
const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("log", (...args) => { console.log("LOG:", ...args); });
virtualConsole.on("error", (...args) => { console.log("ERROR:", ...args); });
virtualConsole.on("warn", (...args) => { console.log("WARN:", ...args); });
virtualConsole.on("jsdomError", (err) => { 
  console.error("JSDOM Error:", err.message);
});
const dom = new JSDOM(html, { runScripts: 'dangerously', virtualConsole });
