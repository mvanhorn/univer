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
} from "../chunk-X5HRK3N5.js";
import "../chunk-HOKBXQSI.js";
import "../chunk-BEKKKVWD.js";
import "../chunk-2YOHSSUK.js";
import "../chunk-IS42NVYK.js";
import "../chunk-IJIQAVNC.js";
import "../chunk-IFZVTAA2.js";
import "../chunk-I7RETDXY.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-YC3TGSHH.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-XU5KUE6F.js";
import "../chunk-DEGVS4GT.js";
import "../chunk-TPK4ZJOE.js";
import "../chunk-NMGUC72L.js";
import "../chunk-FMV4Q4OF.js";
import "../chunk-FYAPI7HE.js";
import "../chunk-VH3R7LRG.js";
import "../chunk-JVAUMZNN.js";
import "../chunk-FHILK56I.js";
import "../chunk-ZEBE2X4F.js";
import "../chunk-ACMDF5UP.js";
import "../chunk-ANDUAXDW.js";
import "../chunk-HUOYGETC.js";
import "../chunk-DBA2T5R4.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-QJ434JVZ.js";
import "../chunk-BFGREO26.js";
import "../chunk-R2OWJHN6.js";
import "../chunk-WLO4MEHH.js";
import "../chunk-7P6YQMKU.js";
import "../chunk-NOH7ZSVD.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-AWSF72S7.js";
import "../chunk-JL33YX5S.js";
import "../chunk-2FVEG47S.js";
import "../chunk-A6NJHS2C.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-MTF6YIZF.js";
import "../chunk-JIF4X2EQ.js";
import {
  default_default,
  mergeLocales
} from "../chunk-YCXVR2BL.js";
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
