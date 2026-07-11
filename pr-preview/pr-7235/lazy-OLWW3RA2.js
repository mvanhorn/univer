import {
  UniverDocsMentionUIPlugin
} from "./chunk-KW6XNZVJ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-UIAZDXCG.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-OTEXJIAM.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NBG4G27A.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-BVASVDU5.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-KVG42ACN.js";
import "./chunk-4FTOGJN5.js";
import "./chunk-YTWLE3NR.js";
import "./chunk-Z2M6SRNN.js";
import "./chunk-RKB7NJ3A.js";
import "./chunk-QPR2JIWB.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-R77W4MDC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-E2Y6I635.js";
import "./chunk-WH3N236K.js";
import "./chunk-43PZQOHY.js";
import "./chunk-XNCOSDBH.js";
import "./chunk-PDZTBWGB.js";
import "./chunk-CK3FUAKL.js";
import "./chunk-NBO4EZKG.js";
import "./chunk-3KBQ25RV.js";
import "./chunk-PMP2HLX2.js";
import "./chunk-V3G6INQY.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-no-worker/lazy.ts
function getLazyPlugins() {
  return [
    [UniverDocsMentionUIPlugin],
    [UniverSheetsNumfmtUIPlugin],
    [UniverThreadCommentUIPlugin],
    [UniverSheetsThreadCommentUIPlugin],
    [UniverSheetsNoteUIPlugin],
    [UniverSheetsTableUIPlugin],
    [UniverSheetsFormulaUIPlugin],
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
