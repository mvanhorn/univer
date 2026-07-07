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
} from "../chunk-QSHEPANR.js";
import "../chunk-I2LJVIKX.js";
import "../chunk-ICRZHUGE.js";
import "../chunk-QISSIXUE.js";
import "../chunk-UCURR4HA.js";
import "../chunk-3ZV42BUR.js";
import "../chunk-WKX447SN.js";
import "../chunk-RPNWE7YO.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-VOAGSNWT.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-WOOEGOFT.js";
import "../chunk-SHBL2LSQ.js";
import "../chunk-R6LLESPH.js";
import "../chunk-PWPKYS5W.js";
import "../chunk-PKVOR53N.js";
import "../chunk-ABNNQRDD.js";
import "../chunk-KPHSLQLG.js";
import "../chunk-J42J6B3D.js";
import "../chunk-PPPGR76N.js";
import "../chunk-KR45BOXH.js";
import "../chunk-NRV2SHYO.js";
import "../chunk-AC2KRZLJ.js";
import "../chunk-PGF46Q7E.js";
import "../chunk-RLUIXECX.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-OHXKEUR6.js";
import "../chunk-ILXV7YAG.js";
import "../chunk-2ZCK4K5W.js";
import "../chunk-33QZWON4.js";
import "../chunk-KCTUXWPE.js";
import "../chunk-ZD74E4RE.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-VSLW7ZRN.js";
import "../chunk-AVWMQQYI.js";
import "../chunk-2FVEG47S.js";
import "../chunk-YXX6FPCM.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-RMWK5QLU.js";
import "../chunk-3XZ73M6W.js";
import {
  default_default,
  mergeLocales
} from "../chunk-53ZUKXTZ.js";
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
