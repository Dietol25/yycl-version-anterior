const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/dieto/OneDrive/Documentos/yycl material/imagenes web yycl';
const files = fs.readdirSync(srcDir);

// 1. Beneficio Confianza kids
const confianzaFile = files.find(f => f.toLowerCase().includes('confianza') && f.toLowerCase().includes('kids'));
if (confianzaFile) {
  const src = path.join(srcDir, confianzaFile);
  fs.copyFileSync(src, 'public/assets/07_KIDS/YYCL_16_KIDS_CONFIANZA.png');
  fs.copyFileSync(src, 'C:/Users/dieto/OneDrive/Documentos/yycl material/YYCL_ASSETS/07_KIDS/YYCL_16_KIDS_CONFIANZA.png');
  console.log(`Updated Confianza Kids image with: ${confianzaFile}`);
}

// 2. “Quiénes somos” sobre yycl
const quienesSomosFile = files.find(f => f.startsWith('“Quiénes somos” sobre yycl.png') || f.startsWith('“Quiénes somos” sobre yycl (1).png'));
if (quienesSomosFile) {
  const src = path.join(srcDir, quienesSomosFile);
  fs.copyFileSync(src, 'public/assets/10_SOBRE_YYCL/YYCL_25_SOBRE_YYCL_NUESTRA_HISTORIA.png');
  fs.copyFileSync(src, 'C:/Users/dieto/OneDrive/Documentos/yycl material/YYCL_ASSETS/10_SOBRE_YYCL/YYCL_25_SOBRE_YYCL_NUESTRA_HISTORIA.png');
  console.log(`Updated Quiénes Somos Sobre YYCL image with: ${quienesSomosFile}`);
}
