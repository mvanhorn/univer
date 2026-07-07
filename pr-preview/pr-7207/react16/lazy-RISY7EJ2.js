import {
  UniverDocsMentionUIPlugin
} from "./chunk-HI3W3QAE.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-2KHDW7XJ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CYTHS4AI.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-BALWFCPJ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-K5MLKHQN.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-N7SJXIYP.js";
import "./chunk-MIKXI23M.js";
import "./chunk-PJPPNG2N.js";
import "./chunk-SCUEQJIF.js";
import "./chunk-26KIYOJS.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-FT6PYCC3.js";
import "./chunk-QDEW4Y3M.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-I36OXUVZ.js";
import "./chunk-Q3UNBSFA.js";
import "./chunk-4BBJ7T2L.js";
import "./chunk-UWQ6I5HN.js";
import "./chunk-YAIB3M2F.js";
import "./chunk-DROW6W4O.js";
import "./chunk-LMU7UQMI.js";
import "./chunk-BXRAFU5X.js";
import "./chunk-C3ZHGZZI.js";
import "./chunk-4P6UE246.js";
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
