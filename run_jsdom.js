const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('Create_Studio.html', 'utf-8');

const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("error", () => { console.log("ERROR:", ...arguments); });
virtualConsole.on("warn", () => { console.log("WARN:", ...arguments); });
virtualConsole.on("info", () => { console.log("INFO:", ...arguments); });
virtualConsole.on("dir", () => { console.log("DIR:", ...arguments); });
virtualConsole.on("log", () => { console.log("LOG:", ...arguments); });

virtualConsole.on("jsdomError", (err) => {
  console.error("JSDOM Error:", err.message);
  console.error(err.detail);
});

const dom = new JSDOM(html, { runScripts: 'dangerously', virtualConsole });
