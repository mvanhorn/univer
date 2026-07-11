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
} from "../chunk-L6J4MFI3.js";
import "../chunk-DHU5MZP6.js";
import "../chunk-YVHDU7TA.js";
import "../chunk-GXHNBZXN.js";
import "../chunk-PNC6KY3O.js";
import "../chunk-PUJRXLIO.js";
import "../chunk-PI24WVAN.js";
import "../chunk-3NWP3OWI.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-7YTR55FX.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-P2HBZPXE.js";
import "../chunk-MW6TPIUI.js";
import "../chunk-EXRG3S6A.js";
import "../chunk-MYP25DXI.js";
import "../chunk-T3RNP524.js";
import "../chunk-FOSRTIXN.js";
import "../chunk-PURJMG72.js";
import "../chunk-ODI2DMGR.js";
import "../chunk-CUAC4OUN.js";
import "../chunk-3JGL4NJX.js";
import "../chunk-LEZBZMJJ.js";
import "../chunk-EX7R4ZKE.js";
import "../chunk-BH6XLSYI.js";
import "../chunk-VQDLXLSI.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-7D5JCVPC.js";
import "../chunk-FPXSRZHX.js";
import "../chunk-JGO7LSC3.js";
import "../chunk-7JCYGBW4.js";
import "../chunk-UDWWJ4UR.js";
import "../chunk-DISKKJ3L.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-LU6RABWA.js";
import "../chunk-NVWDFLBS.js";
import "../chunk-2FVEG47S.js";
import "../chunk-VGXED5QL.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-TVR7VRV3.js";
import "../chunk-C25FSR6I.js";
import {
  default_default,
  mergeLocales
} from "../chunk-OG5AOJFS.js";
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
