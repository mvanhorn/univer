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
} from "../chunk-GI3TQKIY.js";
import "../chunk-CRIJ4G6Y.js";
import "../chunk-NPHVCGWD.js";
import "../chunk-UHIRBOBB.js";
import "../chunk-F4HKKAYZ.js";
import "../chunk-UNU7GAVI.js";
import "../chunk-S6EMLKLM.js";
import "../chunk-2SPMKJFH.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-TJKJOMMU.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-FZZH7ZHU.js";
import "../chunk-O57JTZSE.js";
import "../chunk-CPZ3XRFB.js";
import "../chunk-PFNLRKGH.js";
import "../chunk-RMCD36RX.js";
import "../chunk-IGX7TZUG.js";
import "../chunk-B5Z3ULVJ.js";
import "../chunk-OLGRVSSA.js";
import "../chunk-ZQ65Q5TK.js";
import "../chunk-VBEBBRGY.js";
import "../chunk-5ONOSVY4.js";
import "../chunk-NIA4YRMS.js";
import "../chunk-7NRS6IMW.js";
import "../chunk-WCMQYU5M.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-NY44FKU6.js";
import "../chunk-HDT3O5SL.js";
import "../chunk-EZEFQLSI.js";
import "../chunk-U2OJ46UV.js";
import "../chunk-7BZAPDYT.js";
import "../chunk-URISZOSO.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-66F6IXH3.js";
import "../chunk-W2CQHLHX.js";
import "../chunk-2FVEG47S.js";
import "../chunk-AEYG3EZL.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-DHOPL66F.js";
import "../chunk-BG7SGHYA.js";
import {
  default_default,
  mergeLocales
} from "../chunk-II7REV6J.js";
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
