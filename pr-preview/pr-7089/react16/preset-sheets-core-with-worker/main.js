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
} from "../chunk-AH6MU7QZ.js";
import "../chunk-LOKP73CW.js";
import "../chunk-XZ56SGHT.js";
import "../chunk-GCUDECCE.js";
import "../chunk-Z7DQHOLO.js";
import "../chunk-XCUS53UL.js";
import "../chunk-VAPUSKDU.js";
import "../chunk-DTGXPK4D.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-44HZAXL7.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-SUQUNGCT.js";
import "../chunk-PCXTDLR5.js";
import "../chunk-7MSEJUEY.js";
import "../chunk-QTYE4MCD.js";
import "../chunk-AMR26LSK.js";
import "../chunk-JISPISRB.js";
import "../chunk-QTMTRRUA.js";
import "../chunk-SVPGXPSA.js";
import "../chunk-COOOUSWH.js";
import "../chunk-53VNDO6L.js";
import "../chunk-MXO2WY5X.js";
import "../chunk-TNPULS42.js";
import "../chunk-EA7FWG2H.js";
import "../chunk-ZJQNMU5F.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-4WMHMVXP.js";
import "../chunk-DJMIHHBC.js";
import "../chunk-OOGOLXVT.js";
import "../chunk-R2CHFGKU.js";
import "../chunk-AW6MVKEJ.js";
import "../chunk-233BGXLQ.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-ZVOMUIYQ.js";
import "../chunk-IAYOCKQB.js";
import "../chunk-2FVEG47S.js";
import "../chunk-KHIOYQPM.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-WJYUUTYJ.js";
import "../chunk-VCMSFB6X.js";
import {
  default_default,
  mergeLocales
} from "../chunk-IBIZ2ACU.js";
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
