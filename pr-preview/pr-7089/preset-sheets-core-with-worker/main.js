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
} from "../chunk-NV25OZ2R.js";
import "../chunk-QIL5OPCL.js";
import "../chunk-VNCMMUPC.js";
import "../chunk-WXDBASOJ.js";
import "../chunk-U5AQJSVG.js";
import "../chunk-C55REKPS.js";
import "../chunk-OAGJPBC3.js";
import "../chunk-4HCLTMZF.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-65I5ZPFH.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-X6VTNY5O.js";
import "../chunk-KCKS7HIB.js";
import "../chunk-URSJNIGQ.js";
import "../chunk-TNXPDJQT.js";
import "../chunk-ZVRW5FCM.js";
import "../chunk-NRJEXK42.js";
import "../chunk-TY6HTF2R.js";
import "../chunk-25JYNDHJ.js";
import "../chunk-OCKT6VP3.js";
import "../chunk-JKD7D2KN.js";
import "../chunk-TBLYYLSX.js";
import "../chunk-667TR7HX.js";
import "../chunk-YVSPUHNM.js";
import "../chunk-YBKXLEB3.js";
import "../chunk-52LPCDHP.js";
import "../chunk-6HMJ7NYI.js";
import "../chunk-CHZTCWQ6.js";
import "../chunk-UEXSOKOT.js";
import "../chunk-PQDTQSTX.js";
import "../chunk-MX7RLLSN.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-FIAB6JQW.js";
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
