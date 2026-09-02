const fs = require('fs');

let auth = fs.readFileSync('Auth-Genz-Registration.html', 'utf-8');

// The footer text is: c("span",{children:"© 2026 VECTRA • Create Cinematic Magic"}),c("span",{className:"w-1 h-1 bg-[#D1D5DB] rounded-full"}),m("span",{className:"flex items-center gap-1",children:["Built with ",c("strong",{className:"text-[#111827]",children:"cutting-edge technology"})," 🔥"]})
// We can just find this block and replace it with null.
// Let's find the parent container. It's likely a flex container at the very end.

// Simpler approach: find the entire string "© 2026 VECTRA • Create Cinematic Magic" and just replace it with ""
auth = auth.replace(/© 2026 VECTRA • Create Cinematic Magic/g, '');
// And the built with text
auth = auth.replace(/Built with.*?cutting-edge technology.*?🔥/g, '');


fs.writeFileSync('Auth-Genz-Registration.html', auth, 'utf-8');
console.log("Removed footer text from Auth-Genz-Registration.html");

