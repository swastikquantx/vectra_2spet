const fs = require('fs');
let file = fs.readFileSync('Create_Studio.html', 'utf-8');

const scriptBlock = `<script>
  document.addEventListener('DOMContentLoaded', () => {
     // Wait for react to render
     setTimeout(() => {
        const buttons = document.querySelectorAll('button');
        
        for (const btn of buttons) {
           if (btn.innerText.includes('Music')) {
              btn.addEventListener('click', () => {
                 window.parent.location.hash = 'Music_Studio.html';
              });
           }
           if (btn.innerText.includes('Analytics Brain')) {
              btn.addEventListener('click', () => {
                 window.parent.location.hash = 'Analytics.html';
              });
           }
           if (btn.innerText.includes('Distribution Gateway')) {
              btn.addEventListener('click', () => {
                 window.parent.location.hash = 'Distribution.html';
              });
           }
           if (btn.innerText.includes('Advanced Voice Lab')) {
              btn.addEventListener('click', () => {
                 window.parent.location.hash = 'Advanced_Voice_Lab.html';
              });
           }
           if (btn.innerText.includes('Export Studio')) {
              btn.addEventListener('click', () => {
                 window.parent.location.hash = 'Export_Studio.html';
              });
           }
           if (btn.innerText.includes('Localization')) {
              btn.addEventListener('click', () => {
                 window.parent.location.hash = 'Language_Studio.html';
              });
           }
           if (btn.innerText.includes('Auto Assemble')) {
              btn.addEventListener('click', () => {
                 window.parent.location.hash = 'Auto_Assemble.html';
              });
           }
           if (btn.innerText.includes('Audio')) {
              btn.addEventListener('click', () => {
                 window.parent.location.hash = 'Voice_Studio.html';
              });
           }
           if (btn.innerText.includes('Video')) {
              btn.addEventListener('click', () => {
                 window.parent.location.hash = 'Video_Studio.html';
              });
           }
           if (btn.innerText.includes('Image Studio')) {
              btn.addEventListener('click', () => {
                 window.parent.location.hash = 'Image_Studio.html';
              });
           }
        }
     }, 1000);
  });
</script>`;

if (!file.includes("btn.innerText.includes('Advanced Voice Lab')")) {
  file = file.replace('</body>', scriptBlock + '\n</body>');
  fs.writeFileSync('Create_Studio.html', file);
  console.log("Patched Create_Studio.html");
} else {
  console.log("Already patched.");
}
