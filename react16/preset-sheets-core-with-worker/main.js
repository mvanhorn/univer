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
} from "../chunk-UGY32PNG.js";
import "../chunk-DCC2YB77.js";
import "../chunk-TC7YML7R.js";
import "../chunk-FKB5LPTK.js";
import "../chunk-QBONKOAQ.js";
import "../chunk-LALB53C2.js";
import "../chunk-L7UZJZ4L.js";
import "../chunk-CD746YTC.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-UJDVOB3P.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-R4CZNNLB.js";
import "../chunk-IN6MCIMX.js";
import "../chunk-AY6TB5YH.js";
import "../chunk-SOUYETY7.js";
import "../chunk-NZPEHNZC.js";
import "../chunk-Z7VCNMEN.js";
import "../chunk-26HZVDNR.js";
import "../chunk-3QJ5466L.js";
import "../chunk-JCAPPKCA.js";
import "../chunk-LTDDRVGK.js";
import "../chunk-AQHIUS3Q.js";
import "../chunk-CDKEXSXQ.js";
import "../chunk-FEQDP2G7.js";
import "../chunk-DB56H76C.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-2LP3XYX7.js";
import "../chunk-SXTGP2SD.js";
import "../chunk-DNDN7H66.js";
import "../chunk-ZJFLUO7O.js";
import "../chunk-7XZ7DHNP.js";
import "../chunk-3WOZTQYO.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-4GOOIQ6L.js";
import "../chunk-QCUG2TSB.js";
import "../chunk-2FVEG47S.js";
import "../chunk-HGXCW6X5.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-KY3OPPOE.js";
import "../chunk-6VU3U6PO.js";
import {
  default_default,
  mergeLocales
} from "../chunk-BZ7UQADZ.js";
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
