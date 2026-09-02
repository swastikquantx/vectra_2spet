const fs = require('fs');

// 1. Remove the entire <footer ...></footer> block from About_Swastilk.html
let about = fs.readFileSync('About_Swastilk.html', 'utf-8');
about = about.replace(/c\("footer",\{className:"bg-white border-t border-slate-200",children:.*?\}\)\}\)\}\)/, ''); // Remove the React footer object
// Since regex on minified React can be brittle, let's use a simpler approach: finding the string index
const aboutFooterStart = about.indexOf('c("footer",{className:"bg-white border-t border-slate-200",children:V("div",{className:"mx-auto max-w-[1280px] px-6 lg:px-8 py-12"');
if (aboutFooterStart !== -1) {
    const aboutFooterEnd = about.indexOf(']})})]})', aboutFooterStart) + 8;
    if (aboutFooterEnd !== -1) {
        about = about.substring(0, aboutFooterStart) + 'null' + about.substring(aboutFooterEnd);
        fs.writeFileSync('About_Swastilk.html', about, 'utf-8');
        console.log("Removed footer object from About_Swastilk.html");
    }
} else {
    console.log("Could not find footer object in About_Swastilk.html");
    // Fallback: hide it with CSS just in case
    about = about.replace('</head>', '<style>footer { display: none !important; }</style></head>');
    fs.writeFileSync('About_Swastilk.html', about, 'utf-8');
}


// 2. Remove the hardcoded footer elements from Auth-Genz-Registration.html
let auth = fs.readFileSync('Auth-Genz-Registration.html', 'utf-8');
const authFooterStart = auth.indexOf('k("div",{className:"mt-10 pt-6 border-t border-slate-100');
if (authFooterStart !== -1) {
    // Find the end of this div block
    const authFooterEnd = auth.indexOf(']})})', authFooterStart) + 5;
    if (authFooterEnd > authFooterStart) {
        auth = auth.substring(0, authFooterStart) + 'null' + auth.substring(authFooterEnd);
        fs.writeFileSync('Auth-Genz-Registration.html', auth, 'utf-8');
        console.log("Removed footer text from Auth-Genz-Registration.html");
    }
} else {
     console.log("Could not find footer text in Auth-Genz-Registration.html");
}

