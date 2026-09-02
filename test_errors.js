const fs = require('fs');
let html = fs.readFileSync('Create_Studio.html', 'utf-8');
const errScript = `<script>
  window.onerror = function(msg, src, line, col, err) {
    document.body.innerHTML += '<div style="color:red;font-size:20px;z-index:9999;position:absolute;top:0;">' + msg + '</div>';
  };
</script>`;
html = html.replace('<head>', '<head>' + errScript);
fs.writeFileSync('Create_Studio_err.html', html, 'utf-8');
