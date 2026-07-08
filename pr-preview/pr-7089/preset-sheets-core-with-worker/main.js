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
} from "../chunk-OOFLPIKD.js";
import "../chunk-Q5W6C6HV.js";
import "../chunk-H6JNNZXD.js";
import "../chunk-4U3S3FU5.js";
import "../chunk-ATWG3AQD.js";
import "../chunk-UAEKXRWZ.js";
import "../chunk-WRR4XSCS.js";
import "../chunk-2C2CONQ7.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-65I5ZPFH.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-3HQQUWO5.js";
import "../chunk-TTPOYI3J.js";
import "../chunk-3QBMIK72.js";
import "../chunk-TNXPDJQT.js";
import "../chunk-ZVRW5FCM.js";
import "../chunk-TYYXEEIS.js";
import "../chunk-TY6HTF2R.js";
import "../chunk-GB4IG552.js";
import "../chunk-OCKT6VP3.js";
import "../chunk-JKD7D2KN.js";
import "../chunk-TBLYYLSX.js";
import "../chunk-BPNPGDLR.js";
import "../chunk-P6COYI6V.js";
import "../chunk-DJY45NF5.js";
import "../chunk-52LPCDHP.js";
import "../chunk-6HMJ7NYI.js";
import "../chunk-EXZB3VAR.js";
import "../chunk-UEXSOKOT.js";
import "../chunk-53U2TG3A.js";
import "../chunk-2BSYJBER.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-74ZM3WUQ.js";
import "../chunk-A3U6N6EB.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-HM6HUDFU.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-ZAPF6GCB.js";
import "../chunk-XDWEESGO.js";
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
