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
} from "../chunk-4KJDIQZ2.js";
import "../chunk-NRC2PUM2.js";
import "../chunk-OIYQBTCA.js";
import "../chunk-VOVEUCID.js";
import "../chunk-PINZFKE3.js";
import "../chunk-TC5H6IT2.js";
import "../chunk-BIVEHIMW.js";
import "../chunk-URHRAOJQ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-DGFQBGD3.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-UQXM6FPC.js";
import "../chunk-PY3AVXLU.js";
import "../chunk-M4ZZFKRP.js";
import "../chunk-4FNIV7BS.js";
import "../chunk-NXCLSAHA.js";
import "../chunk-XIHRBNQQ.js";
import "../chunk-IREWMXI6.js";
import "../chunk-RFUNPL62.js";
import "../chunk-TCR64DCC.js";
import "../chunk-SGROMBZI.js";
import "../chunk-3HFUVSES.js";
import "../chunk-F6GNDHRF.js";
import "../chunk-CAQP7JLO.js";
import "../chunk-Z237YT5B.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-JMCS7XBA.js";
import "../chunk-IG2C2ZCW.js";
import "../chunk-CP2NEFCZ.js";
import "../chunk-FG7AAHC7.js";
import "../chunk-KDG6ZP5S.js";
import "../chunk-YZCSCC5F.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-AE2SMQJX.js";
import "../chunk-NHGWN3SD.js";
import "../chunk-2FVEG47S.js";
import "../chunk-WMVBWFQG.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-XOHMQ3ID.js";
import "../chunk-RN2D33K3.js";
import {
  default_default,
  mergeLocales
} from "../chunk-LT6FETEP.js";
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
