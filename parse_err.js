const fs = require('fs');
const code = fs.readFileSync(process.argv[2], 'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
try {
    new Function(code);
} catch (e) {
    console.log("Error:", e.message);
}
