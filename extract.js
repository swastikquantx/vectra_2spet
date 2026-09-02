const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf-8');
const match = content.match(/const PAGES=({.*?});/s) || content.match(/PAGES=({.*?});/s);
if (match) {
    const pagesObj = eval('(' + match[1] + ')');
    for (const [name, b64] of Object.entries(pagesObj)) {
        try {
            let str = Buffer.from(b64, 'base64').toString('utf-8');
            fs.writeFileSync(name, str, 'utf-8');
            console.log("Decoded " + name);
        } catch(e) {
            console.log("Failed " + name, e.message);
        }
    }
}
