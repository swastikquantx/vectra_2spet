const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// The scriptInjector is defined as: const scriptInjector = `<script> ... <\/script>`;
// Let's add login button intercept logic to the scriptInjector

const addition = `
            const btn = e.target.closest('button');
            if (btn && parent && parent.active) {
                const text = btn.textContent;
                if (text === 'Continue' || text === 'Log In' || text === 'Login' || text.includes('Continue with')) {
                    e.preventDefault();
                    console.log('Intercepted login button click');
                    parent.active = 'User_Dashboard.html';
                    parent.route();
                    parent.render();
                }
            }
`;

html = html.replace("console.log(\"Intercepted click:\", href);\n              }\n            }", "console.log(\"Intercepted click:\", href);\n              }\n            }\n" + addition);

// Also we need to make sure User_Dashboard.html has the logout button visible or hide the login button.
// Actually, index.html has a badge div with a logout button:
// <div id="badge" class="hidden ml-2"><button id="logout"...>

// Let's modify index.html route() function to show/hide badge based on active page
const routeAddition = `
        if (active === 'User_Dashboard.html' || active === 'Admin_Panel.html') {
             document.getElementById('badge').style.display = 'block';
             const authLink = document.querySelector('a[href="Auth-Genz-Registration.html"]');
             if (authLink) authLink.style.display = 'none';
        } else {
             document.getElementById('badge').style.display = 'none';
             const authLink = document.querySelector('a[href="Auth-Genz-Registration.html"]');
             if (authLink) authLink.style.display = 'block';
        }
`;

// Find where route() ends.
// `function route() { ... }` is in index.html? No, `const route = () => { ... }` or similar.
// Wait, index.html is completely minified except what prettier did.
