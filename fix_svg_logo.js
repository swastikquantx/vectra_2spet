const fs = require('fs');

const svgLogoHeader = `<svg class="h-[44px] w-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="leftArm" x1="50" y1="20" x2="100" y2="120" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0557fa" />
      <stop offset="100%" stop-color="#021447" />
    </linearGradient>
    <linearGradient id="rightArm" x1="150" y1="20" x2="100" y2="120" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#03c4a1" />
      <stop offset="100%" stop-color="#021447" />
    </linearGradient>
  </defs>
  
  <!-- Left arm -->
  <polygon points="50,40 75,40 100,120 75,120" fill="url(#leftArm)" />
  
  <!-- Right arm -->
  <polygon points="150,40 125,40 100,120 125,120" fill="url(#rightArm)" />
  
  <!-- Circuit lines -->
  <g stroke="white" stroke-width="3" fill="none">
    <path d="M125,55 L105,95 L95,95" />
    <circle cx="125" cy="55" r="4" fill="white" />
    
    <path d="M135,70 L115,110 L105,110" />
    <circle cx="135" cy="70" r="4" fill="white" />
    
    <path d="M145,85 L125,125 L115,125" />
    <circle cx="145" cy="85" r="4" fill="white" />
  </g>
  
  <!-- VECTRA Text -->
  <text x="100" y="150" font-family="'Syne', sans-serif" font-size="28" font-weight="900" letter-spacing="0.25em" fill="#021447" text-anchor="middle">VECTRA</text>
  
  <!-- AI BASED Text -->
  <line x1="40" y1="170" x2="70" y2="170" stroke="#0557fa" stroke-width="1.5" />
  <text x="100" y="174" font-family="'Syne', sans-serif" font-size="12" font-weight="700" letter-spacing="0.3em" fill="#03c4a1" text-anchor="middle">AI BASED</text>
  <line x1="130" y1="170" x2="160" y2="170" stroke="#0557fa" stroke-width="1.5" />
</svg>`;

let html = fs.readFileSync('index.html', 'utf-8');

// Replace the previous SVG in header and footer
html = html.replace(/<svg class="h-\[32px\].*?<\/svg>/, svgLogoHeader);
html = html.replace(/<svg class="h-\[24px\].*?<\/svg>/, svgLogoHeader.replace('h-[44px]', 'h-6'));

fs.writeFileSync('index.html', html, 'utf-8');
console.log("Updated to custom SVG logo");
