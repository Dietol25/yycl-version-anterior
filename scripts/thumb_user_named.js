const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = 'C:/Users/dieto/OneDrive/Documentos/yycl material/imagenes web yycl';
const outDir = 'public/assets/user_named_thumbs';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function generate() {
  const files = fs.readdirSync(dir);
  const manifest = [];

  for (const f of files) {
    if (!f.endsWith('.png') && !f.endsWith('.jpg')) continue;
    const srcPath = path.join(dir, f);
    const safeName = f.replace(/[^a-zA-Z0-9_\-\.]/g, '_').toLowerCase();
    const thumbName = safeName.replace('.png', '.webp');
    const thumbPath = path.join(outDir, thumbName);

    await sharp(srcPath)
      .resize(400, 260, { fit: 'cover' })
      .webp({ quality: 80 })
      .toFile(thumbPath);

    manifest.push({
      original: f,
      thumb: '/assets/user_named_thumbs/' + thumbName,
      size: (fs.statSync(srcPath).size / 1024).toFixed(0) + 'KB'
    });
  }

  fs.writeFileSync('public/user_named_manifest.json', JSON.stringify(manifest, null, 2));
  console.log(`Generated ${manifest.length} thumbnails in ${outDir}`);
}

generate();
