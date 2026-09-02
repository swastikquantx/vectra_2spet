const fs = require('fs');

// Fix About Swastilk
let about = fs.readFileSync('About_Swastilk.html', 'utf-8');
about = about.replace('</head>', '<style>footer { display: none !important; }</style></head>');
fs.writeFileSync('About_Swastilk.html', about, 'utf-8');

// Fix Auth
let auth = fs.readFileSync('Auth-Genz-Registration.html', 'utf-8');
auth = auth.replace('</head>', '<style>.mt-6.max-w-\\[520px\\].flex.items-center.gap-2.text-\\[11px\\].text-\\[\\#9CA3AF\\] { display: none !important; } .flex.items-center.gap-3.text-\\[11px\\].text-\\[\\#8A8A8E\\] { display: none !important; }</style></head>');
fs.writeFileSync('Auth-Genz-Registration.html', auth, 'utf-8');

