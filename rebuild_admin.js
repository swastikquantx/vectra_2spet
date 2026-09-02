const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf-8');
const adminHtml = fs.readFileSync('Admin_Panel.html', 'utf-8');

const match = indexHtml.match(/const PAGES=\{(.*?)\};/s) || indexHtml.match(/const PAGES = (\{.*?\});/s);
if (match) {
    const pagesStr = match[1];
    let pagesObj;
    try {
        pagesObj = eval('({' + pagesStr + '})');
    } catch(e) {
        pagesObj = eval('(' + pagesStr + ')');
    }

    // Re-encode Admin_Panel.html
    const b64 = Buffer.from(encodeURIComponent(adminHtml).replace(/%([0-9A-F]{2})/g, (m, p1) => {
        return String.fromCharCode('0x' + p1);
    }), 'binary').toString('base64');
    
    pagesObj['Admin_Panel.html'] = b64;

    let newPagesStr = 'const PAGES={';
    let first = true;
    for (const [k, v] of Object.entries(pagesObj)) {
        if (!first) newPagesStr += ',';
        newPagesStr += `"${k}":"${v}"`;
        first = false;
    }
    newPagesStr += '};';

    indexHtml = indexHtml.replace(/const PAGES=\{.*?\};/s, newPagesStr);
    indexHtml = indexHtml.replace(/const PAGES = \{.*?\};/s, newPagesStr);
    
    fs.writeFileSync('index.html', indexHtml, 'utf-8');
    console.log("Successfully rebuilt PAGES with updated Admin_Panel.html");
} else {
    console.log("Could not find PAGES object in index.html");
}
