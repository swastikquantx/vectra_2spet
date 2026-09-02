const fs = require('fs');

const content = fs.readFileSync('User_Dashboard.html', 'utf-8');
const b64 = Buffer.from(content, 'utf-8').toString('base64');

let index = fs.readFileSync('index.html', 'utf-8');
const match = index.match(/const PAGES=({.*?});/s) || index.match(/PAGES=({.*?});/s);
if (match) {
    const pagesObj = eval('(' + match[1] + ')');
    pagesObj['User_Dashboard.html'] = b64;
    
    // Convert back to string
    let newPagesStr = 'const PAGES={';
    let first = true;
    for (const [k, v] of Object.entries(pagesObj)) {
        if (!first) newPagesStr += ',';
        newPagesStr += `"${k}":"${v}"`;
        first = false;
    }
    newPagesStr += '};';
    
    const newIndex = index.substring(0, match.index) + newPagesStr + index.substring(match.index + match[0].length);
    fs.writeFileSync('index.html', newIndex, 'utf-8');
    console.log("Repacked User_Dashboard.html into index.html");
}
