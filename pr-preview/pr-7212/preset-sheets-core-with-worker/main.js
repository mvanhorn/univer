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
} from "../chunk-TXIRDS2F.js";
import "../chunk-YP7RFFII.js";
import "../chunk-T54QCBXZ.js";
import "../chunk-WT2BKFUD.js";
import "../chunk-ZMQDZVC6.js";
import "../chunk-WTV77MYX.js";
import "../chunk-LV34ES7J.js";
import "../chunk-EVSHAZ35.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-TKMEA2M7.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-5UD4QETE.js";
import "../chunk-L3W6VPWO.js";
import "../chunk-RGICW7DU.js";
import "../chunk-VX4FPYU3.js";
import "../chunk-Q5KQ6RFC.js";
import "../chunk-UXWDDSRX.js";
import "../chunk-SMCEBM5N.js";
import "../chunk-IWE2L7TB.js";
import "../chunk-NENGVBR2.js";
import "../chunk-FW3VVWOE.js";
import "../chunk-HL443C47.js";
import "../chunk-RRCOSPGG.js";
import "../chunk-CYXRLQG5.js";
import "../chunk-3J34QIRL.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-COSTXAE7.js";
import "../chunk-GIZGHU2G.js";
import "../chunk-ZOXEE3QB.js";
import "../chunk-RWMHLKJ6.js";
import "../chunk-H2TWZIV4.js";
import "../chunk-QX3Z5IJH.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-5GF2JGIL.js";
import "../chunk-H4C2RELO.js";
import "../chunk-2FVEG47S.js";
import "../chunk-5TP7JBLX.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-A7QASWR2.js";
import "../chunk-H4MURSTO.js";
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
