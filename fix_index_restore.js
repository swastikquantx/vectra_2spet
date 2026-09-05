const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// Restore the typo if it was there
indexHtml = indexHtml.replace(/"About_Swastik\.html"/g, '"About_Swastilk.html"');

// Generate new PAGES object
const pages = {};
// Let's use the ORDER from before I started messing with it. But I also need to make sure all pages in ORDER exist.
const ORDER = ["Home.html", "About_Swastilk.html", "Cinematic-Arsenal-37-Engines.html", "How-It-Works.html", "Solutions.html", "Enterprise.html", "Pricing.html", "Create_Studio.html", "Concierge_Studio.html", "Auth-Genz-Registration.html"];

for (const file of ORDER) {
    if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        pages[file] = Buffer.from(content).toString('base64');
    }
}

const marker = 'const PAGES={';
const startIdx = indexHtml.indexOf(marker);
if (startIdx !== -1) {
    const endIdx = indexHtml.indexOf('};', startIdx);
    if (endIdx !== -1) {
        let pagesStr = marker;
        let first = true;
        for (const [file, b64] of Object.entries(pages)) {
            if (!first) pagesStr += ',';
            pagesStr += `"${file}":"${b64}"`;
            first = false;
        }
        pagesStr += '}';
        
        indexHtml = indexHtml.substring(0, startIdx) + pagesStr + indexHtml.substring(endIdx + 1);
        fs.writeFileSync('index.html', indexHtml);
        console.log('Successfully updated index.html with unzipped files!');
    }
}
