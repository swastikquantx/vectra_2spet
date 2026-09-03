const fs = require('fs');
let content = fs.readFileSync('build_index.js', 'utf8');

// Update ORDER
content = content.replace(
    /const ORDER=\["Home.html",([^\]]+)\];/,
    'const ORDER=["Home.html",$1,"Concierge_Studio.html"];'
);

// Update LABELS
content = content.replace(
    /const LABELS=\{([^}]+)\};/,
    'const LABELS={$1, "Concierge_Studio.html": "Concierge Studio"};'
);

// Update htmlFiles
content = content.replace(
    /const htmlFiles = \[([^\]]+)\];/,
    'const htmlFiles = [$1, "Concierge_Studio.html"];'
);

fs.writeFileSync('build_index.js', content, 'utf8');
console.log("Patched build_index.js");
