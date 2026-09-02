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
            btn.className = `px-3 py-1.5 text-[11px] font-bold rounded-full whitespace-nowrap transition-colors ${active === page ? 'bg-black text-white' : 'text-zinc-500 hover:text-black hover:bg-zinc-100'}`;
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
    if (frame && PAGES[active]) {
        frame.srcdoc = decode(PAGES[active]);
    }
    history.replaceState(null, '', '#' + active);
}

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
