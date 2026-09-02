const fs = require('fs');
let code = fs.readFileSync('build_index.js', 'utf-8');

const styleScript = `
<style>
  footer:not(#global-footer) { display: none !important; }
</style>
`;

code = code.replace(
  /const globalFooterHtml = `(.*?<script>)/s, 
  "const globalFooterHtml = `" + styleScript + "$1"
);

fs.writeFileSync('build_index.js', code, 'utf-8');
console.log("Injected CSS into build_index.js");
