const fs = require('fs');
const path = require('path');

const root = 'C:/Users/dieto/OneDrive/Documentos/yycl material/YYCL_ASSETS';
const dirs = [
  '01_INICIO',
  '02_COMO_FUNCIONA',
  '03_RESULTADOS',
  '04_PLANES',
  '05_SERVICIOS_ESPECIALES',
  '06_IDIOMAS',
  '07_KIDS',
  '08_EMPRESAS',
  '09_PROFESORES',
  '10_SOBRE_YYCL',
  '11_ENGLISH_VERSION',
  '99_NO_ASIGNADAS'
];

let html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>YYCL Assets Review & Guion Alignment</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0b132b; color: #f8fafc; padding: 30px; }
  h1 { color: #ffd203; margin-bottom: 8px; font-size: 28px; }
  h2 { color: #4dc2da; margin-top: 36px; border-bottom: 2px solid #1e293b; padding-bottom: 8px; font-size: 20px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 14px; }
  .card { background: #1c2541; border: 1px solid #3a506b; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; }
  .img-wrap { width: 100%; height: 220px; background: #0b132b; overflow: hidden; display: flex; align-items: center; justify-content: center; }
  img { width: 100%; height: 100%; object-fit: contain; }
  .info { padding: 12px; font-size: 13px; }
  .title { font-weight: bold; color: #ffd203; word-break: break-all; margin-bottom: 4px; }
  .desc { color: #94a3b8; font-size: 12px; line-height: 1.4; }
</style>
</head>
<body>
<h1>YYCL — Catálogo de Imágenes y Alineación con el Guion</h1>
<p style="color: #94a3b8;">Revisión completa de activos organizados por ventana según la propuesta del 17 de agosto de 2026.</p>
`;

dirs.forEach(d => {
  const dirPath = path.join(root, d);
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));
  
  html += `<h2>📂 ${d} (${files.length} imágenes)</h2>\n<div class="grid">\n`;
  
  files.forEach(f => {
    const fullPath = path.join(dirPath, f).replace(/\\/g, '/');
    html += `  <div class="card">
    <div class="img-wrap">
      <img src="file:///${fullPath}" loading="lazy" alt="${f}">
    </div>
    <div class="info">
      <div class="title">${f}</div>
    </div>
  </div>\n`;
  });
  
  html += `</div>\n`;
});

html += `</body></html>`;

fs.writeFileSync('C:/Users/dieto/OneDrive/Documentos/yycl material/YYCL_ASSETS/DOCUMENTACION/index.html', html);
console.log('HTML catalog generated at YYCL_ASSETS/DOCUMENTACION/index.html');
