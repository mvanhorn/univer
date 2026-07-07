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
} from "../chunk-JHVWE3QV.js";
import "../chunk-XGAHCBKM.js";
import "../chunk-3BXXBEZB.js";
import "../chunk-F2KJCR6M.js";
import "../chunk-XYV6NM3M.js";
import "../chunk-CUZU4G6D.js";
import "../chunk-KAILTCQM.js";
import "../chunk-XDRJR4R2.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-2W2MWSKJ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-EKMR54NI.js";
import "../chunk-VKTJTIDV.js";
import "../chunk-2KYPMNEC.js";
import "../chunk-IPBHHSIK.js";
import "../chunk-DJY2B4JL.js";
import "../chunk-PGVXIOH2.js";
import "../chunk-ZS7KXRW4.js";
import "../chunk-FTZDEJZQ.js";
import "../chunk-5AHFJDRZ.js";
import "../chunk-MH4F6PIU.js";
import "../chunk-GF7VFGIL.js";
import "../chunk-L765PEWF.js";
import "../chunk-PBYFXKWV.js";
import "../chunk-2L3MB7NR.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-H4NCNWBT.js";
import "../chunk-7JU2SOQE.js";
import "../chunk-H77Z4CWI.js";
import "../chunk-DA75FTEE.js";
import "../chunk-HOWFZZY3.js";
import "../chunk-DV6J5ZIJ.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-V532XFUH.js";
import "../chunk-PAB77PEQ.js";
import "../chunk-2FVEG47S.js";
import "../chunk-FAVXEKSH.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-AHI4XB5F.js";
import "../chunk-LFCAT4GF.js";
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
