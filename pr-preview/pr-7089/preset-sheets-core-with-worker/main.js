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
} from "../chunk-VHYZUY2G.js";
import "../chunk-QSL2FDW3.js";
import "../chunk-PWWKVICY.js";
import "../chunk-QCB76XRN.js";
import "../chunk-B5ZJ73HC.js";
import "../chunk-45VNPFRY.js";
import "../chunk-CJBO5N5N.js";
import "../chunk-ZZ2OHHZ2.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-BZ6ZAJBH.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-EG7Z3EN7.js";
import "../chunk-BWMAHAWV.js";
import "../chunk-J2BJLBO5.js";
import "../chunk-EPZRDFGQ.js";
import "../chunk-7A64NIAM.js";
import "../chunk-PPNZJ2FD.js";
import "../chunk-FJNOFSXO.js";
import "../chunk-JJ57X34P.js";
import "../chunk-HLCVIGJV.js";
import "../chunk-4D32OKJR.js";
import "../chunk-L2SWNQJB.js";
import "../chunk-GFA6PV6N.js";
import "../chunk-JSCXODGS.js";
import "../chunk-TK4RYGIJ.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-3TATA5GD.js";
import "../chunk-KLW3HFM6.js";
import "../chunk-SFJTM7RK.js";
import "../chunk-M4OUO3P4.js";
import "../chunk-CK5UGHQW.js";
import "../chunk-NX2652CH.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-ZQSMBML7.js";
import "../chunk-JJRCNODX.js";
import "../chunk-2FVEG47S.js";
import "../chunk-6UDHLTCS.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-66AJFP3O.js";
import "../chunk-GO2XKGCC.js";
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
