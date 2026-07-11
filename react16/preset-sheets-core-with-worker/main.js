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
} from "../chunk-67SVVJPB.js";
import "../chunk-EGPZFZRV.js";
import "../chunk-Z5NNVSKJ.js";
import "../chunk-7M5M25F3.js";
import "../chunk-2R72CJ7D.js";
import "../chunk-VT4R2GO6.js";
import "../chunk-UBJNAHYF.js";
import "../chunk-IUF5OOW5.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GSHR2COK.js";
import {
  createUniver
} from "../chunk-6WE2HZ4A.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-NNERHKKR.js";
import "../chunk-YFTWZB2C.js";
import "../chunk-YIIML3ER.js";
import "../chunk-BDHYIFCR.js";
import "../chunk-TSNXCNPS.js";
import "../chunk-SYRBEGPH.js";
import "../chunk-LSF4POHA.js";
import "../chunk-VJYSCAVD.js";
import "../chunk-YYQJ5QCL.js";
import "../chunk-7FHRUHDQ.js";
import "../chunk-242QEQV5.js";
import "../chunk-CHZU2KKU.js";
import "../chunk-YOTG35AP.js";
import "../chunk-7PFJPHHW.js";
import "../chunk-7T5UHT6A.js";
import "../chunk-UEMJT2OC.js";
import "../chunk-M7J7JVSU.js";
import "../chunk-JIZNSXQD.js";
import "../chunk-27A2WM6O.js";
import "../chunk-GZW6II4T.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-TMF55I3D.js";
import "../chunk-FR2PKJFC.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-3FKRKIME.js";
import "../chunk-MNMA3DIW.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-G7SXFZ34.js";
import "../chunk-7SRTVBCX.js";
import {
  default_default,
  mergeLocales
} from "../chunk-JKGF6EFW.js";
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
