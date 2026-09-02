const fs = require('fs');

// We now know exactly where it is coming from.
// It is physically in the globalFooterHtml in the build_index.js
let build = fs.readFileSync('build_index.js', 'utf-8');

// I am going to delete the entire globalFooterHtml injection completely. No footer at all.
build = build.replace(/const globalFooterHtml = [\s\S]*?<\/footer>.*?`;/s, 'const globalFooterHtml = ``;');

fs.writeFileSync('build_index.js', build, 'utf-8');
console.log("Annihilated the global footer from build script.");
