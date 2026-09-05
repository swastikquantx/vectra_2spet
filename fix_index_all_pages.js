const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

const pages = {};
const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && !f.includes('index') && !f.includes('draft') && !f.includes('fixed') && !f.includes('test'));

for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    pages[file] = Buffer.from(content).toString('base64');
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
        console.log('Successfully injected ALL pages into index.html');
    }
}
