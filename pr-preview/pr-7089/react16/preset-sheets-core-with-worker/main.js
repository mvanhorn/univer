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
} from "../chunk-C5ADH3RS.js";
import "../chunk-KFR3SUDT.js";
import "../chunk-6HXZSCS5.js";
import "../chunk-CEJNL3IH.js";
import "../chunk-BCSNXAST.js";
import "../chunk-AFZLH4TM.js";
import "../chunk-Q64T25F3.js";
import "../chunk-O4F5N4WK.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-BZ6ZAJBH.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-CZVC54CD.js";
import "../chunk-EZBO2UEE.js";
import "../chunk-UCD4TEPE.js";
import "../chunk-MPIRSQAR.js";
import "../chunk-LMEIILW2.js";
import "../chunk-OQXIOCEH.js";
import "../chunk-FJNOFSXO.js";
import "../chunk-6O5PGWXS.js";
import "../chunk-EA43HBDU.js";
import "../chunk-UCJHFYPH.js";
import "../chunk-N3GIUG2S.js";
import "../chunk-OJGJJ5GP.js";
import "../chunk-2EJUS4YB.js";
import "../chunk-YBBVZDW7.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-3TATA5GD.js";
import "../chunk-KLW3HFM6.js";
import "../chunk-WQONVB7L.js";
import "../chunk-M4OUO3P4.js";
import "../chunk-RPFYZG3Z.js";
import "../chunk-DQWTCUXD.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-ZQSMBML7.js";
import "../chunk-GFHK3ZAZ.js";
import "../chunk-2FVEG47S.js";
import "../chunk-6UDHLTCS.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-URQTML7U.js";
import "../chunk-TAI34DJM.js";
import {
  default_default,
  mergeLocales
} from "../chunk-6GPVK25F.js";
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
