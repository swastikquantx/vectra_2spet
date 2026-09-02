const fs = require('fs');
const zlib = require('zlib');

const content = fs.readFileSync('index_fixed.html', 'utf-8');
let match = content.match(/const PAGES=({.*?});/);
if (!match) match = content.match(/PAGES=({.*?});/);
if (match) {
    const pages = eval('(' + match[1] + ')');
    for (const name in pages) {
        if (name === 'About_Swastilk.html' || name === 'Auth-Genz-Registration.html') {
            const b64 = pages[name];
            const buffer = Buffer.from(b64, 'base64');
            const decoded = zlib.inflateRawSync(buffer).toString('utf-8');
            fs.writeFileSync(name, decoded, 'utf-8');
            console.log(`Recovered ${name}`);
        }
    }
}
