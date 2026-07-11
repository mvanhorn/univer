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
} from "../chunk-2626DONC.js";
import "../chunk-KS3RMWQA.js";
import "../chunk-6DHEZLOE.js";
import "../chunk-AL77UEOE.js";
import "../chunk-HEUE5JRP.js";
import "../chunk-T2SDZDIQ.js";
import "../chunk-2F7OKZYX.js";
import "../chunk-3VNXDLQB.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GSHR2COK.js";
import {
  createUniver
} from "../chunk-H7QHKKUN.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-VTPGT6ON.js";
import "../chunk-M6HYR4D5.js";
import "../chunk-OTHYPGD2.js";
import "../chunk-2SDZK7L6.js";
import "../chunk-3H3VTDWE.js";
import "../chunk-V6NPHM7N.js";
import "../chunk-Z3EJXHDN.js";
import "../chunk-W4PWEWTG.js";
import "../chunk-WBF63BZZ.js";
import "../chunk-MD4PUTB3.js";
import "../chunk-7DZQ6MTX.js";
import "../chunk-45BU76HS.js";
import "../chunk-AQJDCYMY.js";
import "../chunk-OV75INE4.js";
import "../chunk-CFLPNLT4.js";
import "../chunk-ITWNK37V.js";
import "../chunk-ORHX4CPM.js";
import "../chunk-KKYZQQWV.js";
import "../chunk-PYZI7E3G.js";
import "../chunk-AUC5T5LR.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-EU7DAGSZ.js";
import "../chunk-TCQVNB3M.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-MRAU7DSD.js";
import "../chunk-MNMA3DIW.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-AJHNJVEY.js";
import "../chunk-PALYGNIK.js";
import {
  default_default,
  mergeLocales
} from "../chunk-SBUQW7IY.js";
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
