const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const targetStr = `              else if (href && (href.startsWith('/') || href.endsWith('.html'))) {
                 // Try mapping standard hrefs to our internal pages if possible
                 e.preventDefault();
                 console.log("Intercepted click:", href);
              }`;

const replacement = `              else if (href && (href.startsWith('#') || href.endsWith('.html') || href.startsWith('/'))) {
                 e.preventDefault();
                 let page = href;
                 if (page.startsWith('#') || page.startsWith('/')) page = page.substring(1);
                 if (!page.endsWith('.html')) page = page + '.html';
                 
                 // Handle specific case for home
                 if (page === '.html') page = 'Home.html';
                 
                 if (parent && parent.active) {
                     parent.active = page;
                     parent.route();
                     parent.render();
                 }
              }`;

if (html.includes(targetStr)) {
    html = html.replace(targetStr, replacement);
    fs.writeFileSync('index.html', html, 'utf-8');
    console.log("Successfully updated scriptInjector.");
} else {
    console.log("Could not find target string.");
}
