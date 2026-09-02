const fs = require('fs');
let html = fs.readFileSync('about.html', 'utf-8');

const replacement = `c("span", {className:"text-red-600 font-bold inline-flex items-center align-middle mx-1", children:[c("img",{src:"/742938a6-977c-4327-b1a1-983e4a7c9687.png",className:"h-[1em] w-auto mr-1.5 object-contain",alt:""}), "Swastik AI LABS"]})`;

const bigReplacement = `c("span", {className:"text-red-600 font-bold inline-flex items-center", children:[c("img",{src:"/742938a6-977c-4327-b1a1-983e4a7c9687.png",className:"h-[0.8em] w-auto mr-3 object-contain",alt:""}), "Swastik AI LABS:"]})`;

// 1. children:"About Swastik Technologies • Est. Innovation Lab"
html = html.replace(
  'children:"About Swastik Technologies • Est. Innovation Lab"',
  `children:["About ", ${replacement}, " • Est. Innovation Lab"]`
);

// 2. children:["Swastik Technologies:",c("span"
html = html.replace(
  'children:["Swastik Technologies:",c("span"',
  `children:[${bigReplacement}, c("span"`
);

// 3. children:"Founder, Swastik Technologies"  (there might be multiple)
html = html.replace(
  /children:"Founder, Swastik Technologies"/g,
  `children:["Founder, ", ${replacement}]`
);

// 4. children:"At the helm of Swastik Technologies is Akhilesh Mishra, a dynamic leader with a deep-
html = html.replace(
  /children:"At the helm of Swastik Technologies is Akhilesh Mishra,([^"]*)"/g,
  `children:["At the helm of ", ${replacement}, " is Akhilesh Mishra,$1"]`
);

// 5. children:"Why Partner with Swastik Technologies?"
html = html.replace(
  'children:"Why Partner with Swastik Technologies?"',
  `children:["Why Partner with ", ${replacement}, "?"]`
);

// 6. children:"Swastik Technologies:"
html = html.replace(
  'children:"Swastik Technologies:"',
  `children:[${replacement}, ":"]`
);

// 7. children:["© ",new Date().getFullYear()," Swastik Technologies. Architecting the Future with AI."]
html = html.replace(
  'children:["© ",new Date().getFullYear()," Swastik Technologies. Architecting the Future with AI."]',
  `children:["© ",new Date().getFullYear(), " ", ${replacement}, ". Architecting the Future with AI."]`
);

fs.writeFileSync('about.html', html, 'utf-8');

// Now re-embed into index.html
const indexHtml = fs.readFileSync('index.html', 'utf-8');
const match = indexHtml.match(/const PAGES=({.*?});/);
if (match) {
  const pages = JSON.parse(match[1]);
  pages['About_Swastilk.html'] = Buffer.from(html, 'utf-8').toString('base64');
  const newPagesStr = JSON.stringify(pages);
  const newIndexHtml = indexHtml.replace(match[1], newPagesStr);
  fs.writeFileSync('index.html', newIndexHtml, 'utf-8');
  console.log('Successfully updated About page and embedded into index.html');
}

