const fs = require('fs');

const manifest = JSON.parse(fs.readFileSync('public/user_named_manifest.json'));

let html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Revisión de Imágenes Nombradas por el Usuario</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #001837; color: #fff; padding: 20px; }
    h1 { color: #FFD203; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
    .card { background: #0a254a; border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); }
    img { width: 100%; height: 180px; object-fit: cover; border-radius: 8px; }
    .title { font-size: 13px; font-weight: bold; margin-top: 8px; color: #4DC2DA; word-break: break-all; }
    .size { font-size: 11px; color: #A3ABB8; }
  </style>
</head>
<body>
  <h1>Catálogo de Imágenes Nombradas (68 archivos)</h1>
  <div class="grid">
`;

manifest.forEach(item => {
  html += `
    <div class="card">
      <img src="${item.thumb}" loading="lazy" alt="${item.original}">
      <div class="title">${item.original}</div>
      <div class="size">${item.size}</div>
    </div>
  `;
});

html += `
  </div>
</body>
</html>
`;

fs.writeFileSync('public/review_named.html', html);
console.log('Created public/review_named.html');
