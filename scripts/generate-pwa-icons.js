const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Create a basic square image with text
const size = 512;
const text = "L";
const svg = `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#000000"/>
  <text x="50%" y="50%" font-family="Arial" font-size="${
    size / 2
  }px" fill="white" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>
`;

const outputDir = path.join(__dirname, "../public/icons");

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate base image from SVG
const baseImage = sharp(Buffer.from(svg));

// Generate different sizes
sizes.forEach((size) => {
  baseImage
    .resize(size, size)
    .toFile(path.join(outputDir, `icon-${size}x${size}.png`))
    .then((info) => console.log(`Generated ${size}x${size} icon`))
    .catch((err) =>
      console.error(`Error generating ${size}x${size} icon:`, err),
    );
});
