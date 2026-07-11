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
} from "../chunk-WOLWG2BX.js";
import "../chunk-YMJSFUP4.js";
import "../chunk-UIAZDXCG.js";
import "../chunk-OTEXJIAM.js";
import "../chunk-33BG5R3L.js";
import "../chunk-NBG4G27A.js";
import "../chunk-BVASVDU5.js";
import "../chunk-KVG42ACN.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-EVB6OACL.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-AJHVVUKO.js";
import "../chunk-ALEUB42U.js";
import "../chunk-LFJSTOLH.js";
import "../chunk-R5435PQK.js";
import "../chunk-4FTOGJN5.js";
import "../chunk-G4QIHRXJ.js";
import "../chunk-YTWLE3NR.js";
import "../chunk-KXX2LLIH.js";
import "../chunk-Z2M6SRNN.js";
import "../chunk-RKB7NJ3A.js";
import "../chunk-QPR2JIWB.js";
import "../chunk-R77W4MDC.js";
import "../chunk-E2Y6I635.js";
import "../chunk-WH3N236K.js";
import "../chunk-377MMPYX.js";
import "../chunk-VWBZXD5Y.js";
import "../chunk-7WCEEGBX.js";
import "../chunk-43PZQOHY.js";
import "../chunk-XNCOSDBH.js";
import "../chunk-PDZTBWGB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-CK3FUAKL.js";
import "../chunk-2JJBY63F.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-NBO4EZKG.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-3KBQ25RV.js";
import "../chunk-PMP2HLX2.js";
import {
  default_default,
  mergeLocales
} from "../chunk-V3G6INQY.js";
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
