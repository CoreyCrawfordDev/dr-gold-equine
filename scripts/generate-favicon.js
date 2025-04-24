const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure the public directory exists
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Path to your source image
const sourceImage = path.join(process.cwd(), 'public', 'horse-logo.png');

// Generate favicon
sharp(sourceImage)
  .resize(32, 32, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  })
  .toFile(path.join(publicDir, 'favicon.png'))
  .then(() => console.log('Favicon generated successfully!'))
  .catch(err => console.error('Error generating favicon:', err)); 