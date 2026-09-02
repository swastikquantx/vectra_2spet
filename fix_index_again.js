const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// 1. Remove the global footer
html = html.replace(/<footer class="bg-white border-t py-8 px-4 sm:px-6 mt-auto shrink-0">.*?<\/footer>/s, '');

// 2. Fix the main container height
html = html.replace(/<main class="relative flex-1 overflow-y-auto">/, '<main class="relative" style="height: calc(100vh - 72px)">');

// 3. Restore the original logo in the header
html = html.replace(/<svg class="h-\[44px\].*?<\/svg>/s, '<img src="https://storage.googleapis.com/a1aa/image/aC7Y63UeFhbiKxZzK81qD5qIftB9D3Rk8l23jA4UoPweQhLTA.jpg" class="h-[44px] w-auto" alt="VECTRA"/>');

fs.writeFileSync('index.html', html, 'utf-8');
console.log("Fixed index.html");
