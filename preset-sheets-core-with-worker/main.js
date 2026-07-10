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
} from "../chunk-QRZ55RPG.js";
import "../chunk-QUD6UUKQ.js";
import "../chunk-MEKRZWJK.js";
import "../chunk-JBL5HZPO.js";
import "../chunk-RXJRTUN3.js";
import "../chunk-WEPHOKIK.js";
import "../chunk-S6BGXHIG.js";
import "../chunk-4BMZXSYU.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-5WXVHDOC.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-IQNCGZA2.js";
import "../chunk-J4QNBPDR.js";
import "../chunk-AKZUIWFV.js";
import "../chunk-2EPJDBWR.js";
import "../chunk-FHQOY7MO.js";
import "../chunk-ZPXWPBHJ.js";
import "../chunk-K6DGCA62.js";
import "../chunk-AGWZSVHQ.js";
import "../chunk-IML2UZU3.js";
import "../chunk-ECSJDPYB.js";
import "../chunk-Z6UPV4VM.js";
import "../chunk-GSJ5CZDS.js";
import "../chunk-QHFKOUYH.js";
import "../chunk-NKZHNRBU.js";
import "../chunk-O46NJXT2.js";
import "../chunk-RKTDY6M2.js";
import "../chunk-M6RBA7UY.js";
import "../chunk-3SHPL3YQ.js";
import "../chunk-WKLFBBOO.js";
import "../chunk-OLWLRXHV.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-RR54J243.js";
import "../chunk-MQDJBJYY.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-DQIYATOD.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-ZAFX2KIK.js";
import "../chunk-OP5GA72W.js";
import {
  default_default,
  mergeLocales
} from "../chunk-CQ7Q36VO.js";
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
