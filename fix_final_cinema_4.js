const fs = require('fs');
let code = fs.readFileSync('build_index.js', 'utf-8');

// The mutation observer in the index needs to literally nuke "Swastik AI LABS © 2026 —"
code = code.replace(
  /const killList = \[/s, 
  "const killList = [\n    \"Swastik AI LABS © 2026\",\n    \"Swastik AI LABS\","
);

fs.writeFileSync('build_index.js', code, 'utf-8');
console.log("Updated kill list");
