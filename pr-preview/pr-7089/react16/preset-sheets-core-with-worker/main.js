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
} from "../chunk-6NALW743.js";
import "../chunk-LVUC3C6Y.js";
import "../chunk-XDFJX3CU.js";
import "../chunk-PLSUAJ6K.js";
import "../chunk-ZUWU3CFY.js";
import "../chunk-WEWX5R5B.js";
import "../chunk-QCE4SY3I.js";
import "../chunk-EDVI5R6S.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-2W2MWSKJ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-T3BP7CKR.js";
import "../chunk-CR7DJTMR.js";
import "../chunk-HNHGZWHJ.js";
import "../chunk-IPBHHSIK.js";
import "../chunk-DJY2B4JL.js";
import "../chunk-PGVXIOH2.js";
import "../chunk-UKHWBWYO.js";
import "../chunk-AKNVC7DH.js";
import "../chunk-5AHFJDRZ.js";
import "../chunk-MH4F6PIU.js";
import "../chunk-O35NOWKW.js";
import "../chunk-L765PEWF.js";
import "../chunk-EQ3TOMMO.js";
import "../chunk-2KUXQJTA.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-H4NCNWBT.js";
import "../chunk-7JU2SOQE.js";
import "../chunk-LJ4255JC.js";
import "../chunk-DA75FTEE.js";
import "../chunk-D5H5P7PW.js";
import "../chunk-N4DOMT35.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-F7KMDBHX.js";
import "../chunk-PAB77PEQ.js";
import "../chunk-2FVEG47S.js";
import "../chunk-FAVXEKSH.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-AHI4XB5F.js";
import "../chunk-LFCAT4GF.js";
import {
  default_default,
  mergeLocales
} from "../chunk-CBGIOZGI.js";
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
