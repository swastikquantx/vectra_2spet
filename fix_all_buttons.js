const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const targetStr = `<div style="position:fixed; bottom:20px; right:20px; z-index:9999; display:flex; gap:10px;">
  <button onclick="window.parent.location.hash = 'Operations_Center.html'" style="background: #3b82f6; color: white; border: none; padding: 10px 15px; border-radius: 8px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">Operations Center</button>
  <button onclick="window.parent.location.hash = 'Factory_Library.html'" style="background: #f59e0b; color: white; border: none; padding: 10px 15px; border-radius: 8px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">Factory Library</button>
  <button onclick="window.parent.location.hash = 'Quality_Studio.html'" style="background: #8b5cf6; color: white; border: none; padding: 10px 15px; border-radius: 8px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">Quality Engine</button>
  <button onclick="window.parent.location.hash = 'Factory_Gateway.html'" style="background: #06b6d4; color: white; border: none; padding: 10px 15px; border-radius: 8px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">Factory Gateway</button>
  <button onclick="window.parent.location.hash = 'Deploy_Studio.html'" style="background: #ef4444; color: white; border: none; padding: 10px 15px; border-radius: 8px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">Deploy Engine</button>
  <button onclick="window.parent.location.hash = 'Workflow_Studio.html'" style="background: #a855f7; color: white; border: none; padding: 10px 15px; border-radius: 8px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">Workflow Studio</button>
  <button onclick="window.parent.location.hash = 'Security_Center.html'" style="background: #10b981; color: white; border: none; padding: 10px 15px; border-radius: 8px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">Security Center</button>
  <button onclick="window.parent.location.hash = 'V1_Readiness.html'" style="background: #10b981; color: white; border: none; padding: 10px 15px; border-radius: 8px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">V1 Readiness</button>
</div>`;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf-8');
  if (content.includes(targetStr)) {
    content = content.replace(targetStr, '');
    fs.writeFileSync(f, content);
    console.log("Removed from " + f);
  }
});
