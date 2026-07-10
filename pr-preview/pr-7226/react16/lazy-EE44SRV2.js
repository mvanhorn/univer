import {
  UniverDocsMentionUIPlugin
} from "./chunk-SIJPJEXY.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-DEJUQN23.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-X2RYHBZG.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-N7EHH2XA.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-BL7L5KP7.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-JDHADAWT.js";
import "./chunk-MXJNUPM6.js";
import "./chunk-YJ6BOUR4.js";
import "./chunk-QNCILETD.js";
import "./chunk-FHZ6KYXS.js";
import "./chunk-ZVF2WUFH.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-YNY3RCMV.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-25HXKTL2.js";
import "./chunk-ZDAZIQSO.js";
import "./chunk-ZQLB4SOO.js";
import "./chunk-U456YIXR.js";
import "./chunk-DDRE5RJY.js";
import "./chunk-3BM76LJM.js";
import "./chunk-2OFXGP3A.js";
import "./chunk-MCZBJK6L.js";
import "./chunk-Q3HG77NM.js";
import "./chunk-M2MWB6U2.js";
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
