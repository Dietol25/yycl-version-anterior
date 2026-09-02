const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/dieto/OneDrive/Documentos/yycl material/YYCL_ASSETS/00_ORIGINALS';
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.png'));

let html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 24px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
.card { background: #1e293b; padding: 14px; border-radius: 12px; border: 1px solid #334155; }
.card h3 { font-size: 13px; margin: 0 0 10px 0; color: #38bdf8; word-break: break-all; }
img { width: 100%; height: 220px; object-fit: cover; border-radius: 8px; background: #0f172a; }
</style>
</head>
<body>
<h1>YYCL 57 Assets Catalog</h1>
<p>Total files: ${files.length}</p>
<div class="grid">
`;

files.forEach((f, idx) => {
  const filePath = path.join(srcDir, f).replace(/\\/g, '/');
  html += `  <div class="card">
    <h3>#${idx + 1} - ${f}</h3>
    <img src="file:///${filePath}" loading="lazy">
  </div>\n`;
});

html += `</div></body></html>`;

fs.writeFileSync('C:/Users/dieto/OneDrive/Documentos/yycl material/YYCL_ASSETS/DOCUMENTACION/gallery.html', html);
console.log('Gallery created successfully with', files.length, 'images.');
