const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDirs = [
  path.join(__dirname, '..', 'public', 'assets'),
  path.join(__dirname, '..', 'public', 'images')
];

function getFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

async function optimizeAll() {
  console.log('Scanning directories for images...');
  let allFiles = [];
  for (const d of targetDirs) {
    getFiles(d, allFiles);
  }
  console.log('Total images found:', allFiles.length);

  let totalBefore = 0;
  let totalAfter = 0;
  let optimizedCount = 0;

  for (const file of allFiles) {
    const stat = fs.statSync(file);
    const size = stat.size;
    totalBefore += size;
    const ext = path.extname(file).toLowerCase();

    // Skip small icons (< 30KB)
    if (size < 30 * 1024) {
      totalAfter += size;
      continue;
    }

    try {
      let pipeline = sharp(file);
      const metadata = await pipeline.metadata();

      // For web illustrations and photos, limit excessive dimensions to 1600px width
      if (metadata.width && metadata.width > 1600) {
        pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
      }

      let buffer;
      if (ext === '.png') {
        buffer = await pipeline
          .png({ compressionLevel: 9, quality: 88, effort: 7 })
          .toBuffer();
      } else {
        buffer = await pipeline
          .jpeg({ quality: 84, mozjpeg: true })
          .toBuffer();
      }

      if (buffer.length < size) {
        fs.writeFileSync(file, buffer);
        totalAfter += buffer.length;
        optimizedCount++;
        const savedPercent = Math.round((1 - buffer.length / size) * 100);
        console.log(`[${savedPercent}% saved] ${path.basename(file)}: ${Math.round(size / 1024)}KB -> ${Math.round(buffer.length / 1024)}KB`);
      } else {
        totalAfter += size;
      }
    } catch (err) {
      console.error(`Error on ${path.basename(file)}:`, err.message);
      totalAfter += size;
    }
  }

  const savedMB = ((totalBefore - totalAfter) / (1024 * 1024)).toFixed(2);
  const percentTotal = Math.round((1 - totalAfter / totalBefore) * 100);
  console.log('\n========================================');
  console.log('       OPTIMIZATION COMPLETE            ');
  console.log('========================================');
  console.log(`Total images scanned: ${allFiles.length}`);
  console.log(`Images compressed:    ${optimizedCount}`);
  console.log(`Initial size:         ${(totalBefore / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Final size:           ${(totalAfter / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Payload saved:        ${savedMB} MB (-${percentTotal}%)`);
  console.log('========================================\n');
}

optimizeAll();
