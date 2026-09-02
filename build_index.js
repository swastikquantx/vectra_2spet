const fs = require('fs');

const layout = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vectra Portal</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap" rel="stylesheet">
<style>  footer:not(#global-footer) { display: none !important; } .mt-10.text-center.text-\[11px\].text-slate-400 { display: none !important; }</style>
</head>
<body class="h-screen w-full bg-zinc-50 overflow-hidden flex flex-col">
<header id="main-header" class="h-[72px] bg-white border-b px-4 sm:px-6 flex items-center justify-between shrink-0">
<div class="flex items-center gap-3">
<img src="vectra_logo.jpg" class="h-[44px] w-auto object-contain" alt="VECTRA"/>
<div class="w-px h-10 bg-zinc-200 hidden sm:block"></div>
<div class="flex flex-col font-black leading-[0.82] tracking-[0.18em] text-[11px] syne"><span>CREATE</span><span>CINEMATIC</span><span>MAGIC</span></div>
</div>
<nav id="nav" class="flex gap-1.5 overflow-x-auto hide-scrollbar flex-1 justify-end ml-2"></nav>
<button onclick="active='Admin_Panel.html'; render(); route();" class="ml-2 text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200">Admin Login</button><div id="badge" class="hidden ml-2"><button id="logout" class="text-[11px] font-bold px-3 py-1 rounded-full bg-black text-white">Logout</button></div>
</header>
<main id="main-content" class="relative" style="height: calc(100vh - 72px)">
<div id="gate" style="display:none;position:absolute;inset:0;z-index:40;background:#fafafa;place-items:center;padding:16px;height:100%">
<div class="w-full max-w-[360px] bg-white rounded-[20px] border shadow-xl overflow-hidden">
<div class="bg-black text-white p-6"><h2 class="syne text-[18px] font-[800]">Admin Login</h2></div>
<div class="p-6 space-y-3">
<input id="u" placeholder="Login" class="w-full h-11 px-4 rounded-xl border bg-zinc-50 text-[13px]"/>
<input id="p" type="password" placeholder="Password" class="w-full h-11 px-4 rounded-xl border bg-zinc-50 text-[13px]"/>
<div id="err" class="hidden text-[12px] text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">Invalid credentials</div>
<button id="loginBtn" class="w-full h-11 rounded-xl bg-black text-white font-bold text-[13px]">Login</button>
</div></div></div>
<iframe id="frame" class="w-full border-0 block bg-white" style="height:100%" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>
</main>

<script>
const ORDER=["Home.html", "About_Swastilk.html", "Cinematic-Arsenal-37-Engines.html", "How-It-Works.html", "Solutions.html", "Enterprise.html", "Pricing.html", "Create_Studio.html", "Auth-Genz-Registration.html"];
const LABELS={"Home.html": "Home", "About_Swastilk.html": "About Swastik", "Cinematic-Arsenal-37-Engines.html": "Cinematic Arsenal", "How-It-Works.html": "How It Works", "Solutions.html": "Solutions", "Enterprise.html": "Enterprise", "Pricing.html": "Pricing", "Create_Studio.html": "Create Studio", "Auth-Genz-Registration.html": "Login/Create Account", "User_Dashboard.html": "User Dashboard", "Admin_Panel.html": "Admin Dashboard"};
`;

const htmlFiles = [
  'Home.html',
  'About_Swastilk.html',
  'Cinematic-Arsenal-37-Engines.html',
  'How-It-Works.html',
  'Solutions.html',
  'Enterprise.html',
  'Pricing.html',
  'Create_Studio.html',
  'Auth-Genz-Registration.html',
  'User_Dashboard.html',
  'Studio_Editor.html',
  'Admin_Panel.html'
];





const globalFooterHtml = "";

let pagesObj = {};
for (const file of htmlFiles) {
    try {
        let content = fs.readFileSync(file, 'utf-8');
        if (file !== 'Admin_Panel.html') {
            // Prevent duplicate footers
            content = content.replace(/<footer[\\s\\S]*?<\/footer>/gi, '');
            // Inject right before the last closing body tag
            const lastBodyIndex = content.lastIndexOf('</body>');
            if (lastBodyIndex !== -1) {
                content = content.substring(0, lastBodyIndex) + globalFooterHtml + '\n' + content.substring(lastBodyIndex);
            } else {
                content += globalFooterHtml;
            }
        }
        // use btoa(unescape(encodeURIComponent())) equivalent
        let b64 = Buffer.from(encodeURIComponent(content).replace(/%([0-9A-F]{2})/g, (match, p1) => {
            return String.fromCharCode('0x' + p1);
        }), 'binary').toString('base64');
        pagesObj[file] = b64;
    } catch(e) {
        console.log("Missing " + file);
    }
}

let newPagesStr = 'const PAGES={';
let first = true;
for (const [k, v] of Object.entries(pagesObj)) {
    if (!first) newPagesStr += ',';
    newPagesStr += `"${k}":"${v}"`;
    first = false;
}
newPagesStr += '};';

const routerScript = `
let active = location.hash ? location.hash.substring(1) : ORDER[0];
if (!ORDER.includes(active) && !LABELS[active]) active = ORDER[0];

function decode(s) {
    try {
        return decodeURIComponent(escape(atob(s)));
    } catch {
        return atob(s);
    }
}

function render() {
    const nav = document.getElementById('nav');
    if(nav) {
        nav.innerHTML = '';
        for (const page of ORDER) {
            const btn = document.createElement('button');
            btn.className = \`px-3 py-1.5 text-[11px] font-bold rounded-full whitespace-nowrap transition-colors \${active === page ? 'bg-black text-white' : 'text-zinc-500 hover:text-black hover:bg-zinc-100'}\`;
            btn.innerText = LABELS[page] || page;
            btn.onclick = () => {
                active = page;
                route();
                render();
            };
            nav.appendChild(btn);
        }
    }
}

function route() {
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
}

document.getElementById('loginBtn').onclick = () => {
    const u = document.getElementById('u').value;
    const p = document.getElementById('p').value;
    if (u === 'admin' && p === 'admin') { 
        document.getElementById('gate').style.display = 'none';
        const frame = document.getElementById('frame');
        frame.style.display = 'block';
        if (frame && PAGES[active]) {
            frame.srcdoc = decode(PAGES[active]);
        }
    } else {
        document.getElementById('err').style.display = 'block';
    }
};

window.onhashchange = () => {
    const h = location.hash.substring(1);
    if (h && (ORDER.includes(h) || LABELS[h])) {
        active = h;
        route();
        render();
    }
};

render();
route();
</script>
</body>
</html>
`;

fs.writeFileSync('index.html', layout + newPagesStr + routerScript, 'utf-8');
console.log("Rebuilt index.html");
