const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const targetStr = `console.log("Intercepted click:", href);
              }
            }
          });`;

const replacement = `console.log("Intercepted click:", href);
              }
            }
            
            const btn = e.target.closest('button');
            if (btn && parent && parent.active) {
                const text = btn.textContent;
                if (text === 'Continue' || text === 'Log In' || text === 'Login' || text.includes('Continue with') || text === 'Login to your account' || text.includes('Create your')) {
                    e.preventDefault();
                    console.log('Intercepted login button click');
                    parent.active = 'User_Dashboard.html';
                    parent.route();
                    parent.render();
                }
            }
          });`;

html = html.replace(targetStr, replacement);
fs.writeFileSync('index.html', html, 'utf-8');
console.log('Fixed iframe logic:', html.includes('Intercepted login button click'));
