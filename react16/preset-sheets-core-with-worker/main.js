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
} from "../chunk-MZ4OH7TN.js";
import "../chunk-J5LRETGO.js";
import "../chunk-4KT2CLLP.js";
import "../chunk-WNRPZFIU.js";
import "../chunk-I5BFA53K.js";
import "../chunk-OFR6WI3T.js";
import "../chunk-3LH4ELOK.js";
import "../chunk-L6LNU3CU.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-NBYYXNCB.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-U2E2OYAO.js";
import "../chunk-34Q54AO5.js";
import "../chunk-PFUOOTIS.js";
import "../chunk-E6NV4XUQ.js";
import "../chunk-WPH7MSAJ.js";
import "../chunk-3YA4CGZS.js";
import "../chunk-IKYRH57R.js";
import "../chunk-5UPYVDUG.js";
import "../chunk-5RDHIJMY.js";
import "../chunk-L7FJZGIP.js";
import "../chunk-NTBTAPWX.js";
import "../chunk-FM3R5T2V.js";
import "../chunk-NEZ3UZUO.js";
import "../chunk-7EZLBUFS.js";
import "../chunk-4COF32XS.js";
import "../chunk-QPFCOL32.js";
import "../chunk-LYBHQAHM.js";
import "../chunk-AKLDEHKU.js";
import "../chunk-ZR7X3MZN.js";
import "../chunk-534XAPJZ.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-SBOM7SOI.js";
import "../chunk-DYNNSAVU.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-QNDLTLR6.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-MESKVJUQ.js";
import "../chunk-JZ2LFV55.js";
import {
  default_default,
  mergeLocales
} from "../chunk-YAGO4HXX.js";
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
