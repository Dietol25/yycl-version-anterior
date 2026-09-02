const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetAssetRoot = 'C:/Users/dieto/OneDrive/Documentos/yycl material/YYCL_ASSETS';
const projectPublicRoot = 'public/assets';
const origDir = path.join(targetAssetRoot, '00_ORIGINALS');

const assignments = [
  // 01 INICIO
  { folder: '01_INICIO', name: 'YYCL_01_HOME_INGLES_CONVERSACION.png', src: 'SRC_001_Imagen de Codex 22 ago 2026, 10_05_51 p.m..png' },
  
  // 02 COMO FUNCIONA
  { folder: '02_COMO_FUNCIONA', name: 'YYCL_03_MODALIDAD_GRUPAL.png', src: 'SRC_003_Imagen de Codex 22 ago 2026, 10_06_22 p.m..png' },
  { folder: '02_COMO_FUNCIONA', name: 'YYCL_04_MODALIDAD_PERSONALIZADA.png', src: 'SRC_004_Imagen de Codex 22 ago 2026, 10_06_30 p.m..png' },
  { folder: '02_COMO_FUNCIONA', name: 'YYCL_05_MODALIDAD_DUO.png', src: 'SRC_005_Imagen de Codex 22 ago 2026, 10_06_35 p.m..png' },
  { folder: '02_COMO_FUNCIONA', name: 'YYCL_06_NIVEL_PRINCIPIANTE.png', src: 'SRC_006_Imagen de Codex 22 ago 2026, 10_06_48 p.m..png' },
  { folder: '02_COMO_FUNCIONA', name: 'YYCL_07_NIVEL_INTERMEDIO.png', src: 'SRC_011_Imagen de Codex 22 ago 2026, 10_07_39 p.m..png' },
  
  // 03 RESULTADOS
  { folder: '03_RESULTADOS', name: 'YYCL_09_RESULTADOS_LOGRO.png', src: 'SRC_020_Imagen de Codex 22 ago 2026, 10_10_56 p.m..png' },
  
  // 04 PLANES
  { folder: '04_PLANES', name: 'YYCL_10_PLANES_MODALIDADES.png', src: 'SRC_021_Imagen de Codex 22 ago 2026, 10_11_29 p.m..png' },
  
  // 05 SERVICIOS ESPECIALES
  { folder: '05_SERVICIOS_ESPECIALES', name: 'YYCL_11_SERVICIOS_ESTUDIO_ENFOCADO.png', src: 'SRC_023_Imagen de Codex 22 ago 2026, 10_11_41 p.m..png' },
  { folder: '05_SERVICIOS_ESPECIALES', name: 'YYCL_12_SERVICIOS_LOGRO_INTERNACIONAL.png', src: 'SRC_026_Imagen de Codex 23 ago 2026, 12_46_54 a.m..png' },
  
  // 06 IDIOMAS
  { folder: '06_IDIOMAS', name: 'YYCL_13_IDIOMAS_FRANCES_PORTUGUES_REVISION_BANDERA.png', src: 'SRC_028_Imagen de Codex 26 ago 2026, 07_05_06 p.m..png' },
  { folder: '06_IDIOMAS', name: 'YYCL_14_IDIOMAS_ESPANOL_ADULTOS.png', src: 'SRC_038_Imagen de Codex 26 ago 2026, 07_07_59 p.m..png' },
  
  // 07 KIDS
  { folder: '07_KIDS', name: 'YYCL_15_KIDS_JUEGO.png', src: 'SRC_040_Imagen de Codex 26 ago 2026, 07_08_43 p.m..png' },
  { folder: '07_KIDS', name: 'YYCL_16_KIDS_CONFIANZA.png', src: 'SRC_041_Imagen de Codex 26 ago 2026, 07_08_57 p.m..png' },
  { folder: '07_KIDS', name: 'YYCL_17_KIDS_CONTENIDO.png', src: 'SRC_045_Imagen de Codex 26 ago 2026, 07_10_03 p.m..png' },
  { folder: '07_KIDS', name: 'YYCL_18_KIDS_SEGUIMIENTO_FAMILIAR.png', src: 'SRC_046_Imagen de Codex 26 ago 2026, 07_10_11 p.m..png' },
  
  // 08 EMPRESAS
  { folder: '08_EMPRESAS', name: 'YYCL_19_EMPRESAS_EQUIPO_COLABORACION.png', src: 'SRC_047_Imagen de Codex 27 ago 2026, 12_44_39 p.m..png' },
  { folder: '08_EMPRESAS', name: 'YYCL_20_EMPRESAS_DIAGNOSTICO.png', src: 'SRC_048_Imagen de Codex 27 ago 2026, 12_44_45 p.m..png' },
  { folder: '08_EMPRESAS', name: 'YYCL_21_EMPRESAS_PLAN_A_MEDIDA.png', src: 'SRC_049_Imagen de Codex 27 ago 2026, 12_44_53 p.m..png' },
  { folder: '08_EMPRESAS', name: 'YYCL_22_EMPRESAS_SEGUIMIENTO_REPORTES.png', src: 'SRC_050_Imagen de Codex 27 ago 2026, 12_45_00 p.m..png' },
  
  // 10 SOBRE YYCL
  { folder: '10_SOBRE_YYCL', name: 'YYCL_24_SOBRE_YYCL_CONVERSACION_HUMANA.png', src: 'SRC_051_Imagen de Codex 27 ago 2026, 12_47_14 p.m..png' },
  { folder: '10_SOBRE_YYCL', name: 'YYCL_25_SOBRE_YYCL_NUESTRA_HISTORIA.png', src: 'SRC_053_Imagen de Codex 27 ago 2026, 12_47_27 p.m..png' },
  { folder: '10_SOBRE_YYCL', name: 'YYCL_26_SOBRE_YYCL_QUE_ENSENAMOS.png', src: 'SRC_054_Imagen de Codex 27 ago 2026, 12_47_40 p.m..png' },
  
  // 11 ENGLISH VERSION
  { folder: '11_ENGLISH_VERSION', name: 'YYCL_EN_01_ENGLISH_CLASSES_MODALIDADES.png', src: 'SRC_002_Imagen de Codex 22 ago 2026, 10_06_16 p.m..png' },
  { folder: '11_ENGLISH_VERSION', name: 'YYCL_EN_02_SPANISH_CLASSES_ADULTS.png', src: 'SRC_038_Imagen de Codex 26 ago 2026, 07_07_59 p.m..png' },
  { folder: '11_ENGLISH_VERSION', name: 'YYCL_EN_03_SPANISH_CLASSES_KIDS.png', src: 'SRC_040_Imagen de Codex 26 ago 2026, 07_08_43 p.m..png' },
  { folder: '11_ENGLISH_VERSION', name: 'YYCL_EN_04_ABOUT_US_IDIOMAS_REVISION_BANDERA.png', src: 'SRC_028_Imagen de Codex 26 ago 2026, 07_05_06 p.m..png' }
];

async function organizeAll() {
  for (const item of assignments) {
    const srcFile = path.join(origDir, item.src);
    if (!fs.existsSync(srcFile)) {
      console.warn('Source file not found:', item.src);
      continue;
    }

    // 1. Copy to Target YYCL_ASSETS folder
    const targetDir = path.join(targetAssetRoot, item.folder);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
    const targetPath = path.join(targetDir, item.name);
    fs.copyFileSync(srcFile, targetPath);

    // 2. Copy to Web Project public/assets
    const webDir = path.join(projectPublicRoot, item.folder);
    if (!fs.existsSync(webDir)) fs.mkdirSync(webDir, { recursive: true });
    const webPath = path.join(webDir, item.name);
    fs.copyFileSync(srcFile, webPath);

    console.log(`Organized: [${item.folder}] -> ${item.name}`);
  }
  console.log('\nAll assets organized successfully!');
}

organizeAll();
