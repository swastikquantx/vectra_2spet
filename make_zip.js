const AdmZip = require('adm-zip');
const fs = require('fs');
const path = require('path');

const zip = new AdmZip();
const dir = '.';

function addDir(dirPath) {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file.endsWith('.zip')) continue;
        
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            zip.addLocalFolder(fullPath, fullPath.replace(/^[./]+/, ''));
        } else {
            const destDir = path.dirname(fullPath).replace(/^[./]+/, '');
            zip.addLocalFile(fullPath, destDir === '.' ? '' : destDir);
        }
    }
}
addDir(dir);
zip.writeZip('vectra-cloudflare-ready.zip');
console.log('Zip created successfully!');
