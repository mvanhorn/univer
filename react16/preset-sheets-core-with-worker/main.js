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
} from "../chunk-O77YYNJL.js";
import "../chunk-COMNKCM5.js";
import "../chunk-BGONFYQO.js";
import "../chunk-YVPSK7CP.js";
import "../chunk-6BOPPUTK.js";
import "../chunk-MCSIBMH7.js";
import "../chunk-53OUJBVA.js";
import "../chunk-L6HTN3ZL.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-TKMEA2M7.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-KSKDGKXI.js";
import "../chunk-WVWTPGC2.js";
import "../chunk-RMT34ZSK.js";
import "../chunk-O5K47HS2.js";
import "../chunk-RANDQPBH.js";
import "../chunk-VEQOVAJ7.js";
import "../chunk-SMCEBM5N.js";
import "../chunk-OEI6ACCV.js";
import "../chunk-7JXV5UTP.js";
import "../chunk-JUCMWRKI.js";
import "../chunk-REMPWZQO.js";
import "../chunk-TLJUJLVM.js";
import "../chunk-4A3GNYNZ.js";
import "../chunk-QOF4FZ33.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-COSTXAE7.js";
import "../chunk-GIZGHU2G.js";
import "../chunk-WLGWPWU5.js";
import "../chunk-RWMHLKJ6.js";
import "../chunk-DCGTG6OW.js";
import "../chunk-KARNHZ6C.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-5GF2JGIL.js";
import "../chunk-WKBB45GC.js";
import "../chunk-2FVEG47S.js";
import "../chunk-5TP7JBLX.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-5AX63AZ7.js";
import "../chunk-I5NKUZXR.js";
import {
  default_default,
  mergeLocales
} from "../chunk-EC2T6UUU.js";
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
