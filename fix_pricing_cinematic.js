const fs = require('fs');

let c = fs.readFileSync('Cinematic-Arsenal-37-Engines.html', 'utf-8');

// Also the user wanted the pricing removed from Cinematic Arsenal
// Since it's in React code, I need to be VERY careful.
// Let's hide the section using CSS instead to avoid breaking React syntax again.
c = c.replace('</head>', '<style>section:last-of-type { display: none !important; }</style></head>');

fs.writeFileSync('Cinematic-Arsenal-37-Engines.html', c, 'utf-8');
console.log('Hidden pricing section via CSS');
