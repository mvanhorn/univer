import {
  UniverSheetsConditionalFormattingPreset,
  UniverSheetsCorePreset,
  UniverSheetsDataValidationPreset,
  UniverSheetsDrawingPreset,
  UniverSheetsFilterPreset,
  UniverSheetsFindReplacePreset,
  UniverSheetsHyperLinkPreset,
  UniverSheetsNotePreset,
  UniverSheetsSortPreset,
  UniverSheetsTablePreset,
  UniverSheetsThreadCommentPreset,
  zh_CN_default,
  zh_CN_default2 as zh_CN_default3,
  zh_CN_default3 as zh_CN_default4,
  zh_CN_default4 as zh_CN_default6,
  zh_CN_default5 as zh_CN_default7,
  zh_CN_default6 as zh_CN_default8,
  zh_CN_default7 as zh_CN_default9,
  zh_CN_default8 as zh_CN_default10,
  zh_CN_default9 as zh_CN_default11
} from "../chunk-DBPGAKOT.js";
import "../chunk-3CCSQJV3.js";
import "../chunk-X25QHUWE.js";
import "../chunk-EZIQBMEQ.js";
import "../chunk-W2YQHOTY.js";
import "../chunk-RUXGM7HW.js";
import "../chunk-BNNF3MF2.js";
import "../chunk-EK4GYVW7.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-A5W3WVL4.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-HOICH6OU.js";
import "../chunk-BAALEPJM.js";
import "../chunk-IIG4GMI6.js";
import "../chunk-5MDY6344.js";
import "../chunk-DAKLSUZA.js";
import "../chunk-WB4VO3II.js";
import "../chunk-4J2CUQKG.js";
import "../chunk-T6HZW544.js";
import "../chunk-YWGDXRF4.js";
import "../chunk-N6HHJIDQ.js";
import "../chunk-A4XLFTGD.js";
import "../chunk-PXHEYUZI.js";
import "../chunk-D6S25ICN.js";
import "../chunk-L34W64TJ.js";
import "../chunk-KWQQWIG5.js";
import "../chunk-W6PTO2ZA.js";
import "../chunk-TVZTRQXY.js";
import "../chunk-C2UHYSJI.js";
import "../chunk-5S3HQMRW.js";
import "../chunk-EOJFKGSG.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-KFGQZUNF.js";
import "../chunk-4NU5JWA7.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LCSV262J.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-RYMJJPT5.js";
import "../chunk-Q5U6PPRA.js";
import {
  default_default,
  mergeLocales
} from "../chunk-IIGGSGNH.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// src/preset-sheets-core-with-worker/main.ts
var { univer, univerAPI } = createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    zhCN: mergeLocales(
      zh_CN_default2,
      zh_CN_default4,
      zh_CN_default,
      zh_CN_default3,
      zh_CN_default5,
      zh_CN_default6,
      zh_CN_default7,
      zh_CN_default8,
      zh_CN_default9,
      zh_CN_default10,
      zh_CN_default11
    )
  },
  theme: default_default,
  presets: [
    UniverSheetsCorePreset({
      workerURL: new Worker(new URL("./worker.js", import.meta.url), { type: "module" })
    }),
    UniverSheetsDrawingPreset(),
    UniverSheetsConditionalFormattingPreset(),
    UniverSheetsFilterPreset(),
    UniverSheetsHyperLinkPreset(),
    UniverSheetsDataValidationPreset(),
    UniverSheetsFindReplacePreset(),
    UniverSheetsNotePreset(),
    UniverSheetsSortPreset(),
    UniverSheetsTablePreset(),
    UniverSheetsThreadCommentPreset()
  ]
});
univerAPI.createWorkbook(DEFAULT_WORKBOOK_DATA_DEMO);
window.univer = univer;
window.univerAPI = univerAPI;
