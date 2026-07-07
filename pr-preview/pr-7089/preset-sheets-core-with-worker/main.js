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
} from "../chunk-IOZT6OK2.js";
import "../chunk-KZ3CUWBV.js";
import "../chunk-7BRAOEJC.js";
import "../chunk-AJIJDZ35.js";
import "../chunk-GVZJDTF4.js";
import "../chunk-XYOE7FAJ.js";
import "../chunk-XBRY7ZTX.js";
import "../chunk-ECHS454V.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-2W2MWSKJ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-25GOHVTU.js";
import "../chunk-HBITQORU.js";
import "../chunk-XEFHMHQE.js";
import "../chunk-2EARCX7P.js";
import "../chunk-56QVFO3W.js";
import "../chunk-6MK34523.js";
import "../chunk-ZS7KXRW4.js";
import "../chunk-27DWEFVU.js";
import "../chunk-CR44Z4ZY.js";
import "../chunk-55STDDTS.js";
import "../chunk-TLAJNLCW.js";
import "../chunk-Y6O7JXL5.js";
import "../chunk-T7RLS6AH.js";
import "../chunk-4QQMIHR2.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-H4NCNWBT.js";
import "../chunk-7JU2SOQE.js";
import "../chunk-WABSFYY7.js";
import "../chunk-DA75FTEE.js";
import "../chunk-6T3DNBPR.js";
import "../chunk-663NML57.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-V532XFUH.js";
import "../chunk-4UG6W7EV.js";
import "../chunk-2FVEG47S.js";
import "../chunk-FAVXEKSH.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-AAAEP34O.js";
import "../chunk-UYNZVVVW.js";
import {
  default_default,
  mergeLocales
} from "../chunk-CBGIOZGI.js";
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
