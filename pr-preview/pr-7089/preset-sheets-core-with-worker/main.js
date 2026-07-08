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
} from "../chunk-YSM3EMMN.js";
import "../chunk-24PCO246.js";
import "../chunk-NL24R7CD.js";
import "../chunk-6TDWJANU.js";
import "../chunk-MBY6HJXJ.js";
import "../chunk-TOXWMUTS.js";
import "../chunk-SVTR3SLR.js";
import "../chunk-XHVLBASI.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-65I5ZPFH.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-YWID4JRO.js";
import "../chunk-TGGJUBVK.js";
import "../chunk-4IRXMLIZ.js";
import "../chunk-3EVVFLJG.js";
import "../chunk-D7DHF6GS.js";
import "../chunk-TYYXEEIS.js";
import "../chunk-ZTQ7YG5O.js";
import "../chunk-FB4S2UDB.js";
import "../chunk-XBJYBWPF.js";
import "../chunk-TTXYMXTZ.js";
import "../chunk-XVYHKR47.js";
import "../chunk-MK3Z44VU.js";
import "../chunk-XLRYANKI.js";
import "../chunk-KL6PTX3B.js";
import "../chunk-52LPCDHP.js";
import "../chunk-6HMJ7NYI.js";
import "../chunk-PJ226WWH.js";
import "../chunk-UEXSOKOT.js";
import "../chunk-53U2TG3A.js";
import "../chunk-L5XWRKM6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-74ZM3WUQ.js";
import "../chunk-A3U6N6EB.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-URSPW5KK.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-D56GOLKC.js";
import "../chunk-LPTHD3KJ.js";
import {
  default_default,
  mergeLocales
} from "../chunk-BCDUMSPY.js";
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
