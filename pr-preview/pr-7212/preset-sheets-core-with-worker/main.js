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
} from "../chunk-ABVJVZ4Z.js";
import "../chunk-YF7PY7QA.js";
import "../chunk-NXCVMHZT.js";
import "../chunk-6J7P6FIQ.js";
import "../chunk-NEUFURNT.js";
import "../chunk-XC7XG5CM.js";
import "../chunk-P3GRW4QB.js";
import "../chunk-EKSLLZNV.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-TKMEA2M7.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-2QOHNZC7.js";
import "../chunk-SLBWVB3B.js";
import "../chunk-7TDL7R5T.js";
import "../chunk-VAIIGWEC.js";
import "../chunk-MK73GG7D.js";
import "../chunk-B3JYUQNK.js";
import "../chunk-SMCEBM5N.js";
import "../chunk-JHYNOZWS.js";
import "../chunk-HYHJRQQV.js";
import "../chunk-WVAXXXZT.js";
import "../chunk-FICMBN4N.js";
import "../chunk-NTCHJJNM.js";
import "../chunk-3Z4IJ6R7.js";
import "../chunk-BDTXUQC3.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-COSTXAE7.js";
import "../chunk-GIZGHU2G.js";
import "../chunk-MPXZ77NN.js";
import "../chunk-RWMHLKJ6.js";
import "../chunk-H2TWZIV4.js";
import "../chunk-A3CUNGEZ.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-5GF2JGIL.js";
import "../chunk-Q2P5XVZA.js";
import "../chunk-2FVEG47S.js";
import "../chunk-5TP7JBLX.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-XDUQOG4J.js";
import "../chunk-X4BP5GHF.js";
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
