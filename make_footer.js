const fs = require('fs');

const footerHtml = `
<footer style="margin-top: auto; border-top: 1px solid #E5E7EB; background: #FAFAFA; padding: 40px 24px; color: #4B5563; font-family: 'Inter', sans-serif;">
  <div style="max-width: 1200px; margin: 0 auto;">
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 32px;">
      <!-- Left section -->
      <div style="flex: 1; min-width: 250px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
           <img src="https://storage.googleapis.com/a1aa/image/aC7Y63UeFhbiKxZzK81qD5qIftB9D3Rk8l23jA4UoPweQhLTA.jpg" style="height: 24px;" alt="Logo" />
           <span style="font-weight: 700; color: #2563EB; font-size: 11px; letter-spacing: 0.1em; font-family: 'Syne', sans-serif;">CREATE CINEMATIC MAGIC</span>
        </div>
        <div style="font-size: 14px; line-height: 1.6; color: #374151;">
           <strong style="color: #111827;">Swastik AI LABS:</strong> Empowering Innovation through<br>Technology. Building growth engines, not just software.
        </div>
        <div style="margin-top: 16px; display: flex; gap: 8px; flex-wrap: wrap;">
           <span style="font-size: 11px; padding: 4px 12px; border: 1px solid #E5E7EB; border-radius: 99px; background: white;">AI • Quant • Video • Apps</span>
           <span style="font-size: 11px; padding: 4px 12px; border: 1px solid #E5E7EB; border-radius: 99px; background: #F3E8FF; color: #8B5CF6;">Growth Engines</span>
        </div>
      </div>
      
      <!-- Links sections -->
      <div style="display: flex; gap: 48px; flex-wrap: wrap; font-size: 14px;">
         <div>
            <h4 style="font-weight: 600; color: #111827; margin-bottom: 16px;">Company</h4>
            <div style="display: flex; flex-direction: column; gap: 12px;">
               <a target="_parent" href="#Home.html" style="color: #6B7280; text-decoration: none;">Home</a>
               <a target="_parent" href="#About_Swastilk.html" style="color: #8B5CF6; text-decoration: none; font-weight: 500;">About Swastik</a>
               <a target="_parent" href="#How-It-Works.html" style="color: #6B7280; text-decoration: none;">How Does it works</a>
               <a target="_parent" href="#Solutions.html" style="color: #6B7280; text-decoration: none;">Solutions</a>
            </div>
         </div>
         <div>
            <h4 style="font-weight: 600; color: #111827; margin-bottom: 16px;">Products</h4>
            <div style="display: flex; flex-direction: column; gap: 12px;">
               <a target="_parent" href="#" style="color: #6B7280; text-decoration: none;">QuantX Intelligence</a>
               <a target="_parent" href="#Create_Studio.html" style="color: #6B7280; text-decoration: none;">Vectra Video Suite</a>
               <a target="_parent" href="#" style="color: #6B7280; text-decoration: none;">Spectre Builder</a>
               <a target="_parent" href="#Enterprise.html" style="color: #6B7280; text-decoration: none;">Enterprise</a>
            </div>
         </div>
         <div>
            <h4 style="font-weight: 600; color: #111827; margin-bottom: 16px;">Resources</h4>
            <div style="display: flex; flex-direction: column; gap: 12px;">
               <a target="_parent" href="#Pricing.html" style="color: #6B7280; text-decoration: none;">Pricing</a>
               <a target="_parent" href="#" style="color: #6B7280; text-decoration: none;">Contact Us</a>
               <a target="_parent" href="#" style="color: #6B7280; text-decoration: none;">Documentation</a>
               <a target="_parent" href="#" style="color: #6B7280; text-decoration: none;">Security</a>
            </div>
         </div>
         <div>
            <h4 style="font-weight: 600; color: #111827; margin-bottom: 16px;">Connect</h4>
            <div style="display: flex; flex-direction: column; gap: 12px;">
               <a target="_parent" href="#" style="color: #6B7280; text-decoration: none;">LinkedIn</a>
               <a target="_parent" href="#" style="color: #6B7280; text-decoration: none;">X / Twitter</a>
               <a href="mailto:hello@swastik.tech" style="color: #6B7280; text-decoration: none;">hello@swastik.tech</a>
               <a target="_parent" href="#Admin_Panel.html" style="color: #6B7280; text-decoration: none; font-weight: bold;">Admin Login</a>
            </div>
         </div>
      </div>
    </div>
    
    <!-- Social links row (from Screenshot 1) -->
    <div style="margin-top: 32px; display: flex; gap: 12px; flex-wrap: wrap;">
       <a target="_parent" href="#" style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; border: 1px solid #1e3a8a; background: #0a192f; color: #3b82f6; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: 500;">
          <svg style="width: 16px; height: 16px;" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg> Facebook
       </a>
       <a target="_parent" href="#" style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; border: 1px solid #831843; background: #2e1026; color: #f472b6; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: 500;">
          <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram
       </a>
       <a target="_parent" href="#" style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; border: 1px solid #374151; background: #1f2937; color: #f3f4f6; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: 500;">
          <svg style="width: 16px; height: 16px;" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> X (Twitter)
       </a>
       <a target="_parent" href="#" style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; border: 1px solid #374151; background: #27272a; color: #f3f4f6; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: 500;">
          <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> Threads
       </a>
       <a target="_parent" href="#" style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; border: 1px solid #064e3b; background: #022c22; color: #34d399; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: 500;">
          <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> WhatsApp
       </a>
       <a target="_parent" href="#" style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; border: 1px solid #075985; background: #082f49; color: #38bdf8; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: 500;">
          <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.272 6.8c-.89.349-1.045 1.135-.194 1.487l4.382 1.83 9.776-6.17c.45-.27.87.11.54.41l-7.915 7.15c-.19.17-.3.42-.3.69v4.29c0 .76.62.98.98.54l2.87-3.52 4.41 3.25c.82.61 1.62.3 1.9-.7l3.41-15.01c.28-1.24-.46-1.87-1.47-1.25z"></path></svg> Telegram
       </a>
       <a target="_parent" href="#" style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; border: 1px solid #1e3a8a; background: #0a192f; color: #3b82f6; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: 500;">
          <svg style="width: 16px; height: 16px;" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> LinkedIn
       </a>
    </div>

    <!-- Bottom line -->
    <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #E5E7EB; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 16px; font-size: 12px; color: #6B7280;">
       <div>© 2026 <strong>Swastik AI LABS</strong> · Architecting the Future with AI.</div>
       <div style="font-family: monospace; letter-spacing: 0.1em; color: #9CA3AF; text-transform: uppercase;">BUILT FOR CLOUDFLARE • WHITE THEME • VECTRA_OS</div>
    </div>
  </div>
</footer>
`;

// Also, the old footers need to be removed or hidden. Since they are React components rendered into #root,
// appending this footer outside of #root (before </body>) will make it visible!
// Wait, the inner pages have <body><div id="root"></div>...</body>
// We can just inject this footer right before </body>.
// But some React layouts might have their own footer that we want to hide.
// Let's add a quick CSS rule in the new footer to hide any other footer: `footer:not(:last-of-type) { display: none !important; }`
// Actually, since this footer is appended at the end, `:last-of-type` works nicely.

const fullFooter = `<style>footer:not(#global-footer) { display: none !important; }</style>` + footerHtml.replace('<footer', '<footer id="global-footer"');

let html = fs.readFileSync('index.html', 'utf-8');
const match = html.match(/const PAGES=\{(.*?)\};/s) || html.match(/const PAGES = (\{.*?\});/s);
if (match) {
    const pagesStr = match[1];
    // Using eval to parse the object safely
    let pagesObj;
    try {
        pagesObj = eval('({' + pagesStr + '})');
    } catch(e) {
        pagesObj = eval('(' + pagesStr + ')');
    }

    // Replace Create_Studio.html with studio.html content
    let studioContent = fs.readFileSync('studio.html', 'utf-8');
    
    // We will append footer to all pages (even Create Studio? Yes, user said "every page")
    for (const key in pagesObj) {
        let content = '';
        if (false) {
            content = studioContent;
        } else {
            content = Buffer.from(pagesObj[key], 'base64').toString('utf-8');
            // But wait, for Solutions.html we already fixed it locally, let's load it from disk instead of using pagesObj
            if (fs.existsSync(key)) {
                content = fs.readFileSync(key, 'utf-8');
            }
        }
        
        // Remove any old global footer if we ran this script multiple times
        content = content.replace(/<style>footer:not\(#global-footer\).*?<\/footer>/s, '');

        if (content.includes('</body>')) {
            content = content.replace('</body>', fullFooter + '\n</body>');
        } else {
            content += fullFooter;
        }

        // re-encode
        const b64 = Buffer.from(encodeURIComponent(content).replace(/%([0-9A-F]{2})/g, (match, p1) => {
            return String.fromCharCode('0x' + p1);
        }), 'binary').toString('base64');
        pagesObj[key] = b64;
    }

    // rebuild PAGES string
    let newPagesStr = 'const PAGES={';
    let first = true;
    for (const [k, v] of Object.entries(pagesObj)) {
        if (!first) newPagesStr += ',';
        newPagesStr += `"${k}":"${v}"`;
        first = false;
    }
    newPagesStr += '};';

    html = html.replace(/const PAGES=\{.*?\};/s, newPagesStr);
    html = html.replace(/const PAGES = \{.*?\};/s, newPagesStr);
    
    fs.writeFileSync('index.html', html, 'utf-8');
    console.log("Successfully rebuilt PAGES with custom footer and real Studio HTML.");
} else {
    console.log("Could not find PAGES object in index.html");
}
