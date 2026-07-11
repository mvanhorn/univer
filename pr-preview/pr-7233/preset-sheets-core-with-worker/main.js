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
} from "../chunk-WJK5Q35Q.js";
import "../chunk-G25ZH5TY.js";
import "../chunk-DES5LCKD.js";
import "../chunk-PS6QRIUD.js";
import "../chunk-R6QH4Q75.js";
import "../chunk-PB6DKGVI.js";
import "../chunk-EZQYSWZP.js";
import "../chunk-T7W7O6M6.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-6WE2HZ4A.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-XEDMF2YH.js";
import "../chunk-SNM2BG4N.js";
import "../chunk-J2I7VPGY.js";
import "../chunk-BDHYIFCR.js";
import "../chunk-TSNXCNPS.js";
import "../chunk-K4SM5Y37.js";
import "../chunk-LSF4POHA.js";
import "../chunk-O43U3FNJ.js";
import "../chunk-YYQJ5QCL.js";
import "../chunk-7FHRUHDQ.js";
import "../chunk-242QEQV5.js";
import "../chunk-ZIISRROI.js";
import "../chunk-OGNT4O6K.js";
import "../chunk-GHR4IE63.js";
import "../chunk-7T5UHT6A.js";
import "../chunk-UEMJT2OC.js";
import "../chunk-YXAWA2XY.js";
import "../chunk-JIZNSXQD.js";
import "../chunk-O5T7UNDA.js";
import "../chunk-L5VQTX6F.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-FOCWDXCV.js";
import "../chunk-FR2PKJFC.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-3FKRKIME.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-G7SXFZ34.js";
import "../chunk-7SRTVBCX.js";
import {
  default_default,
  mergeLocales
} from "../chunk-JKGF6EFW.js";
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
