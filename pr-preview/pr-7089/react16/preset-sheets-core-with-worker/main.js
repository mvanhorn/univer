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
} from "../chunk-2XFL5WSD.js";
import "../chunk-2D2ZQS2Z.js";
import "../chunk-WLFRCJW4.js";
import "../chunk-NV5U2V6Q.js";
import "../chunk-IKS5VNR2.js";
import "../chunk-KCLSSUZV.js";
import "../chunk-5D2NLCVB.js";
import "../chunk-CGXRS33M.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-H7EFHUFY.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-PDJAB46G.js";
import "../chunk-23RPLXMN.js";
import "../chunk-5M76MF6M.js";
import "../chunk-3WMO5GSA.js";
import "../chunk-SBZUSFKC.js";
import "../chunk-4PUE7TL5.js";
import "../chunk-U4VN6O7Q.js";
import "../chunk-QYVDTM45.js";
import "../chunk-RPE4X3DN.js";
import "../chunk-NRDNCV5S.js";
import "../chunk-7BNLLALV.js";
import "../chunk-NOR6TWKC.js";
import "../chunk-7DTPPT6O.js";
import "../chunk-FKSEKT7V.js";
import "../chunk-QQYGLDQN.js";
import "../chunk-6644LDNG.js";
import "../chunk-TEALC2GH.js";
import "../chunk-4P35HAWR.js";
import "../chunk-IVTMXESQ.js";
import "../chunk-7SRQGU7L.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-CW4AY6N2.js";
import "../chunk-2ZCX6ZX2.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-PZRZOMZL.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-EONZRXWG.js";
import "../chunk-EIBURWCE.js";
import {
  default_default,
  mergeLocales
} from "../chunk-DFUEVBKC.js";
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
