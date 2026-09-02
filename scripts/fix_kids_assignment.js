const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/dieto/OneDrive/Documentos/yycl material/imagenes web yycl';
const files = fs.readdirSync(srcDir);

// Find exact filename matching "kids.png" and "hub en"
const kidsEsFile = files.find(f => f.toLowerCase().includes('imagen principal') && f.toLowerCase().includes('kids'));
const kidsEnFile = files.find(f => f.toLowerCase().includes('spanish classes') && f.toLowerCase().includes('hub en') && !f.toLowerCase().includes('adultos'));

console.log('Kids ES File:', kidsEsFile);
console.log('Kids EN File:', kidsEnFile);

if (kidsEsFile) {
  const src = path.join(srcDir, kidsEsFile);
  fs.copyFileSync(src, 'public/assets/07_KIDS/YYCL_15_KIDS_JUEGO.png');
  fs.copyFileSync(src, 'C:/Users/dieto/OneDrive/Documentos/yycl material/YYCL_ASSETS/07_KIDS/YYCL_15_KIDS_JUEGO.png');
  console.log('Successfully set Kids ES Image -> /assets/07_KIDS/YYCL_15_KIDS_JUEGO.png');
}

if (kidsEnFile) {
  const src = path.join(srcDir, kidsEnFile);
  fs.copyFileSync(src, 'public/assets/11_ENGLISH_VERSION/YYCL_EN_03_SPANISH_CLASSES_KIDS.png');
  fs.copyFileSync(src, 'C:/Users/dieto/OneDrive/Documentos/yycl material/YYCL_ASSETS/11_ENGLISH_VERSION/YYCL_EN_03_SPANISH_CLASSES_KIDS.png');
  console.log('Successfully set Kids EN Image -> /assets/11_ENGLISH_VERSION/YYCL_EN_03_SPANISH_CLASSES_KIDS.png');
}
