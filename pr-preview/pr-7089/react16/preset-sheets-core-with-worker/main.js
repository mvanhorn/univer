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
} from "../chunk-6LC4LB4T.js";
import "../chunk-VODZTVEM.js";
import "../chunk-ZRHIJIAR.js";
import "../chunk-YZ3V2ODS.js";
import "../chunk-W4QGCDJP.js";
import "../chunk-LILUVPN4.js";
import "../chunk-SVQMD7FS.js";
import "../chunk-2SY2PGIX.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-65I5ZPFH.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-3N7OJVMX.js";
import "../chunk-N4MKVHHF.js";
import "../chunk-DW2A5G4Y.js";
import "../chunk-3EVVFLJG.js";
import "../chunk-D7DHF6GS.js";
import "../chunk-WSX7O3ZT.js";
import "../chunk-ZTQ7YG5O.js";
import "../chunk-LZL3HFV7.js";
import "../chunk-XBJYBWPF.js";
import "../chunk-TTXYMXTZ.js";
import "../chunk-XVYHKR47.js";
import "../chunk-K6ASHFWB.js";
import "../chunk-KQ5IQJ2A.js";
import "../chunk-NVP5G4LN.js";
import "../chunk-52LPCDHP.js";
import "../chunk-6HMJ7NYI.js";
import "../chunk-72UT6JI6.js";
import "../chunk-UEXSOKOT.js";
import "../chunk-NCRWBYAR.js";
import "../chunk-RUOR6XOO.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-L4JFEF3H.js";
import "../chunk-A3U6N6EB.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-URSPW5KK.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-D56GOLKC.js";
import "../chunk-LPTHD3KJ.js";
import {
  default_default,
  mergeLocales
} from "../chunk-BCDUMSPY.js";
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
