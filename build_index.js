const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace About_Swastilk.html with About_Swastik.html
indexHtml = indexHtml.replace(/"About_Swastilk\.html"/g, '"About_Swastik.html"');

// Generate new PAGES object
const pages = {};
const ORDER = ["Home.html", "About_Swastik.html", "Cinematic-Arsenal-37-Engines.html", "How-It-Works.html", "Solutions.html", "Enterprise.html", "Pricing.html", "Create_Studio.html", "Concierge_Studio.html", "Auth-Genz-Registration.html"];

for (const file of ORDER) {
    if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        pages[file] = Buffer.from(content).toString('base64');
    }
}

// Replace the existing PAGES={...} in index.html
// We need to match 'const PAGES={' to the end of the object. Since it could be huge, regex might struggle.
// Let's use string manipulation.
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
        console.log('Successfully updated index.html');
    } else {
        console.log('Could not find end of PAGES');
    }
} else {
    console.log('Could not find const PAGES');
}
