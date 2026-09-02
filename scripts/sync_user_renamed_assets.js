const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/dieto/OneDrive/Documentos/yycl material/imagenes web yycl';
const targetAssetRoot = 'C:/Users/dieto/OneDrive/Documentos/yycl material/YYCL_ASSETS';
const projectPublicRoot = 'public/assets';

const fileMap = [
  // 01 INICIO
  { folder: '01_INICIO', targetName: 'YYCL_01_HOME_INGLES_CONVERSACION.png', userFile: 'hero home.png' },
  { folder: '01_INICIO', targetName: 'YYCL_02_HOME_HABLAS_DESDE_MINUTO_UNO_VIDEO_THUMB.png', userFile: '1.png' },

  // 02 COMO FUNCIONA
  { folder: '02_COMO_FUNCIONA', targetName: 'YYCL_03_MODALIDAD_GRUPAL.png', userFile: 'Modalidad — Grupal como funciona.png' },
  { folder: '02_COMO_FUNCIONA', targetName: 'YYCL_04_MODALIDAD_PERSONALIZADA.png', userFile: 'Modalidad — Personalizada como funciona.png' },
  { folder: '02_COMO_FUNCIONA', targetName: 'YYCL_05_MODALIDAD_DUO.png', userFile: 'Modalidad — Dúo como funciona.png' },
  { folder: '02_COMO_FUNCIONA', targetName: 'YYCL_06_NIVEL_PRINCIPIANTE.png', userFile: 'Nivel — Principiante , como funciona.png' },
  { folder: '02_COMO_FUNCIONA', targetName: 'YYCL_07_NIVEL_INTERMEDIO.png', userFile: 'Nivel — Intermedio.png' },
  { folder: '02_COMO_FUNCIONA', targetName: 'YYCL_08_PLATAFORMA_VIDEO_THUMB.png', userFile: 'usar si encaja en algun lado.png' },

  // 03 RESULTADOS (Ahora lleva video con thumbnail + Play)
  { folder: '03_RESULTADOS', targetName: 'YYCL_09_RESULTADOS_LOGRO.png', userFile: 'resutados Imagen principal de la página.png' },
  { folder: '03_RESULTADOS', targetName: 'YYCL_09_RESULTADOS_VIDEO_THUMB.png', userFile: 'resutados Imagen principal de la página (2).png' },

  // 04 PLANES
  { folder: '04_PLANES', targetName: 'YYCL_10_PLANES_MODALIDADES.png', userFile: 'Imagen principal de la página- planes.png' },

  // 05 SERVICIOS ESPECIALES
  { folder: '05_SERVICIOS_ESPECIALES', targetName: 'YYCL_11_SERVICIOS_ESTUDIO_ENFOCADO.png', userFile: 'Imagen principal de la página servicios especiales.png' },
  { folder: '05_SERVICIOS_ESPECIALES', targetName: 'YYCL_12_SERVICIOS_LOGRO_INTERNACIONAL.png', userFile: 'Segunda imagen (posición exacta a confirmar en el diseño) servicios especiales.png' },

  // 06 IDIOMAS
  { folder: '06_IDIOMAS', targetName: 'YYCL_13_IDIOMAS_FRANCES_PORTUGUES_REVISION_BANDERA.png', userFile: 'Imagen principal de la página idiomas.png' },
  { folder: '06_IDIOMAS', targetName: 'YYCL_14_IDIOMAS_ESPANOL_ADULTOS.png', userFile: 'Spanish Classes (adultos) hub en.png' },

  // 07 KIDS
  { folder: '07_KIDS', targetName: 'YYCL_15_KIDS_JUEGO.png', userFile: 'Imagen principal de la página kids.png' },
  { folder: '07_KIDS', targetName: 'YYCL_16_KIDS_CONFIANZA.png', userFile: 'Beneficio — Confianza kids.png' },
  { folder: '07_KIDS', targetName: 'YYCL_17_KIDS_CONTENIDO.png', userFile: 'Beneficio Contenido kids.png' },
  { folder: '07_KIDS', targetName: 'YYCL_18_KIDS_SEGUIMIENTO_FAMILIAR.png', userFile: 'Beneficio Seguimiento kids.png' },

  // 08 EMPRESAS
  { folder: '08_EMPRESAS', targetName: 'YYCL_19_EMPRESAS_EQUIPO_COLABORACION.png', userFile: 'Imagen principal de la página empresas.png' },
  { folder: '08_EMPRESAS', targetName: 'YYCL_20_EMPRESAS_DIAGNOSTICO.png', userFile: 'Proceso — Diagnóstico empresas.png' },
  { folder: '08_EMPRESAS', targetName: 'YYCL_21_EMPRESAS_PLAN_A_MEDIDA.png', userFile: 'Proceso — Plan a medida empresas.png' },
  { folder: '08_EMPRESAS', targetName: 'YYCL_22_EMPRESAS_SEGUIMIENTO_REPORTES.png', userFile: 'Proceso — Implementación con seguimiento empresas.png' },

  // 10 SOBRE YYCL
  { folder: '10_SOBRE_YYCL', targetName: 'YYCL_24_SOBRE_YYCL_CONVERSACION_HUMANA.png', userFile: '“Quiénes somos” sobre yycl.png' },
  { folder: '10_SOBRE_YYCL', targetName: 'YYCL_25_SOBRE_YYCL_NUESTRA_HISTORIA.png', userFile: '“Quiénes somos” sobre yycl (3).png' },
  { folder: '10_SOBRE_YYCL', targetName: 'YYCL_26_SOBRE_YYCL_QUE_ENSENAMOS.png', userFile: '“Quiénes somos” sobre yycl (2).png' },
  { folder: '10_SOBRE_YYCL', targetName: 'YYCL_27_SOBRE_YYCL_FILOSOFIA_VIDEO_THUMB.png', userFile: '“Quiénes somos” sobre yycl.png' },

  // 11 ENGLISH VERSION
  { folder: '11_ENGLISH_VERSION', targetName: 'YYCL_EN_01_ENGLISH_CLASSES_MODALIDADES.png', userFile: 'hero home.png' },
  { folder: '11_ENGLISH_VERSION', targetName: 'YYCL_EN_02_SPANISH_CLASSES_ADULTS.png', userFile: 'Spanish Classes (adultos) hub en.png' },
  { folder: '11_ENGLISH_VERSION', targetName: 'YYCL_EN_03_SPANISH_CLASSES_KIDS.png', userFile: 'Spanish Classes (niños) hub en.png' },
  { folder: '11_ENGLISH_VERSION', targetName: 'YYCL_EN_04_ABOUT_US_IDIOMAS_REVISION_BANDERA.png', userFile: 'About Us hub en.png' }
];

function syncAll() {
  let count = 0;
  for (const item of fileMap) {
    const src = path.join(srcDir, item.userFile);
    if (!fs.existsSync(src)) {
      console.warn(`File not found: ${item.userFile}`);
      continue;
    }

    // 1. Copy to YYCL_ASSETS
    const targetFolder = path.join(targetAssetRoot, item.folder);
    if (!fs.existsSync(targetFolder)) fs.mkdirSync(targetFolder, { recursive: true });
    const targetPath = path.join(targetFolder, item.targetName);
    fs.copyFileSync(src, targetPath);

    // 2. Copy to project public/assets
    const pubFolder = path.join(projectPublicRoot, item.folder);
    if (!fs.existsSync(pubFolder)) fs.mkdirSync(pubFolder, { recursive: true });
    const pubPath = path.join(pubFolder, item.targetName);
    fs.copyFileSync(src, pubPath);

    console.log(`Synced: [${item.folder}] ${item.userFile} -> ${item.targetName}`);
    count++;
  }
  console.log(`\nSuccessfully synchronized ${count} assets!`);
}

syncAll();
