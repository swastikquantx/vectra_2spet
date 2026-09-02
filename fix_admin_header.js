const fs = require('fs');
let code = fs.readFileSync('build_index.js', 'utf-8');

// Add IDs to header and main
code = code.replace('<header class="h-[72px]', '<header id="main-header" class="h-[72px]');
code = code.replace('<main class="relative"', '<main id="main-content" class="relative"');

// Replace route() function
const oldRoute = `function route() {
    const frame = document.getElementById('frame');
    if (active === 'Admin_Panel.html') {
        document.getElementById('gate').style.display = 'grid';
        frame.style.display = 'none';
    } else {
        document.getElementById('gate').style.display = 'none';
        frame.style.display = 'block';
        if (frame && PAGES[active]) {
            frame.srcdoc = decode(PAGES[active]);
        }
    }
    history.replaceState(null, '', '#' + active);
}`;

const newRoute = `function route() {
    const frame = document.getElementById('frame');
    const header = document.getElementById('main-header');
    const mainContent = document.getElementById('main-content');
    
    if (active === 'Admin_Panel.html') {
        document.getElementById('gate').style.display = 'grid';
        frame.style.display = 'none';
        if(header) header.style.display = 'none';
        if(mainContent) mainContent.style.height = '100vh';
    } else {
        document.getElementById('gate').style.display = 'none';
        frame.style.display = 'block';
        if(header) header.style.display = 'flex';
        if(mainContent) mainContent.style.height = 'calc(100vh - 72px)';
        if (frame && PAGES[active]) {
            frame.srcdoc = decode(PAGES[active]);
        }
    }
    history.replaceState(null, '', '#' + active);
}`;

if (code.includes(oldRoute)) {
    code = code.replace(oldRoute, newRoute);
    fs.writeFileSync('build_index.js', code, 'utf-8');
    console.log("Successfully replaced route function");
} else {
    console.log("Could not find route function to replace. Let's do it with regex.");
    code = code.replace(/function route\(\) \{[\s\S]*?history\.replaceState\(null, '', '#' \+ active\);\n\}/, newRoute);
    fs.writeFileSync('build_index.js', code, 'utf-8');
    console.log("Replaced using regex.");
}
