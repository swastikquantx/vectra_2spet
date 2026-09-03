const fs = require('fs');

let index = fs.readFileSync('index.html', 'utf8');
const content = fs.readFileSync('Concierge_Studio.html', 'utf8');

// use btoa(unescape(encodeURIComponent())) equivalent
const b64 = Buffer.from(encodeURIComponent(content).replace(/%([0-9A-F]{2})/g, (match, p1) => {
    return String.fromCharCode('0x' + p1);
}), 'binary').toString('base64');

const match = index.match(/const PAGES=({.*?});/s) || index.match(/PAGES=({.*?});/s);
if (match) {
    const pagesObj = eval('(' + match[1] + ')');
    pagesObj['Concierge_Studio.html'] = b64;
    
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
    fs.writeFileSync('index.html', newIndex, 'utf8');
    console.log("Repacked Concierge_Studio.html into index.html");
}
