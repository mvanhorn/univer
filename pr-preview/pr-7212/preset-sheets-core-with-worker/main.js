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
} from "../chunk-RA7YBAHG.js";
import "../chunk-LSZVA7LV.js";
import "../chunk-WA6QEMN2.js";
import "../chunk-EYRZW6DB.js";
import "../chunk-HAC6VBBP.js";
import "../chunk-KS2CKLDZ.js";
import "../chunk-5XOMPREM.js";
import "../chunk-2UAIW4IC.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-TKMEA2M7.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-S4OW7LLV.js";
import "../chunk-3MEEBECY.js";
import "../chunk-A3I62N5K.js";
import "../chunk-R3QQ67HN.js";
import "../chunk-BCJ5JXEF.js";
import "../chunk-IVJBV3BH.js";
import "../chunk-SMCEBM5N.js";
import "../chunk-VL6QQMPR.js";
import "../chunk-HKCTEQSD.js";
import "../chunk-2LYBLOZC.js";
import "../chunk-7NENCTLM.js";
import "../chunk-UIQTNV3S.js";
import "../chunk-QWX66D3L.js";
import "../chunk-HUQ2LHR5.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-COSTXAE7.js";
import "../chunk-GIZGHU2G.js";
import "../chunk-HNJZQ5G4.js";
import "../chunk-RWMHLKJ6.js";
import "../chunk-H2TWZIV4.js";
import "../chunk-46XK5B5B.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-5GF2JGIL.js";
import "../chunk-MBMXE6QE.js";
import "../chunk-2FVEG47S.js";
import "../chunk-5TP7JBLX.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-KANNQITD.js";
import "../chunk-PEJBSZI5.js";
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
