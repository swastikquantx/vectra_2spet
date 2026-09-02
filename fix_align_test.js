const fs = require('fs');
const htmlFiles = [
  'Home.html',
  'About_Swastilk.html',
  'Cinematic-Arsenal-37-Engines.html',
  'How-It-Works.html',
  'Solutions.html',
  'Enterprise.html',
  'Pricing.html',
  'Create_Studio.html',
  'Auth-Genz-Registration.html',
  'User_Dashboard.html',
  'Studio_Editor.html',
  'Admin_Panel.html'
];

for (const file of htmlFiles) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    // We want the span to just be standard text, no flex.
    // The image is inside it. 
    // Currently: c("span", {className:"inline-flex items-baseline mx-1", children:[c("img",{src:"/742938a6-977c-4327-b1a1-983e4a7c9687.png",className:"h-[1em] w-auto mr-1.5 object-contain",alt:""}), "Swastik AI LABS"]})
    
    // Replace the span class
    content = content.replace(/className:"inline-flex items-baseline mx-1"/g, 'className:"whitespace-nowrap mx-1"');
    
    // The img has className:"h-[1em] w-auto mr-1.5 object-contain"
    // Let's add inline-block and align-text-bottom to the img
    content = content.replace(/className:"h-\[1em\] w-auto mr-1\.5 object-contain"/g, 'className:"inline-block align-text-bottom h-[1em] w-auto mr-1.5 object-contain"');
    
    fs.writeFileSync(file, content, 'utf-8');
  }
}
console.log("Fixed alignment in all files");
