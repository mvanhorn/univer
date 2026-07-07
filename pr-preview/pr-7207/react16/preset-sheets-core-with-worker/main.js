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
} from "../chunk-IUMJX7IV.js";
import "../chunk-BTNFF2JM.js";
import "../chunk-2KHDW7XJ.js";
import "../chunk-HAC6MP3M.js";
import "../chunk-CYTHS4AI.js";
import "../chunk-BALWFCPJ.js";
import "../chunk-K5MLKHQN.js";
import "../chunk-N7SJXIYP.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-XMZ42PYQ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-YQNLBBK5.js";
import "../chunk-2NP6WDC5.js";
import "../chunk-MJUB22QJ.js";
import "../chunk-MIKXI23M.js";
import "../chunk-PTYGGJJF.js";
import "../chunk-PJPPNG2N.js";
import "../chunk-3HFV7UEO.js";
import "../chunk-Z7MZXBHB.js";
import "../chunk-SCUEQJIF.js";
import "../chunk-26KIYOJS.js";
import "../chunk-FT6PYCC3.js";
import "../chunk-QDEW4Y3M.js";
import "../chunk-I36OXUVZ.js";
import "../chunk-Q3UNBSFA.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-MTD5P66V.js";
import "../chunk-DDYABCXG.js";
import "../chunk-VLMXHEFA.js";
import "../chunk-4BBJ7T2L.js";
import "../chunk-UWQ6I5HN.js";
import "../chunk-YAIB3M2F.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-DROW6W4O.js";
import "../chunk-LMU7UQMI.js";
import "../chunk-2FVEG47S.js";
import "../chunk-QRFWOEYQ.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-BXRAFU5X.js";
import "../chunk-C3ZHGZZI.js";
import {
  default_default,
  mergeLocales
} from "../chunk-4P6UE246.js";
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
