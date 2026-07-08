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
} from "../chunk-33TNOWO7.js";
import "../chunk-7DZLDB23.js";
import "../chunk-J7ZTAHT6.js";
import "../chunk-RCA2H3H2.js";
import "../chunk-DYJ7CS57.js";
import "../chunk-HRDRRRZQ.js";
import "../chunk-UULQ74UP.js";
import "../chunk-E2NEHSRB.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-ZET25OFL.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-U4RVHO6W.js";
import "../chunk-3OESLJAB.js";
import "../chunk-JGP2T3AG.js";
import "../chunk-SAXMNMD6.js";
import "../chunk-OPEGOFUZ.js";
import "../chunk-DPTLTY4H.js";
import "../chunk-YMNYVHHR.js";
import "../chunk-CW7FOWFD.js";
import "../chunk-IQGZ5TGW.js";
import "../chunk-F3QBMCSR.js";
import "../chunk-ZY7GVFXV.js";
import "../chunk-N6OAQXFV.js";
import "../chunk-RLOKW6JK.js";
import "../chunk-WBOZWFG6.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-OUEWG7J4.js";
import "../chunk-LHXVUBKC.js";
import "../chunk-NHTAIDYZ.js";
import "../chunk-P3M6ROB4.js";
import "../chunk-42WBGQPP.js";
import "../chunk-UHQZI7IK.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-ZGYKVTIJ.js";
import "../chunk-QEHPBOYW.js";
import "../chunk-2FVEG47S.js";
import "../chunk-7OF42WTX.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-U5HR3MOQ.js";
import "../chunk-ZGC4B4ZI.js";
import {
  default_default,
  mergeLocales
} from "../chunk-64NTBQQD.js";
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
