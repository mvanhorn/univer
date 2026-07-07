import {
  UniverDocsMentionUIPlugin
} from "./chunk-TPZJTVEX.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-T54QCBXZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ZMQDZVC6.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-WTV77MYX.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-LV34ES7J.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-EVSHAZ35.js";
import "./chunk-VX4FPYU3.js";
import "./chunk-UXWDDSRX.js";
import "./chunk-NENGVBR2.js";
import "./chunk-FW3VVWOE.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-HL443C47.js";
import "./chunk-RRCOSPGG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CYXRLQG5.js";
import "./chunk-3J34QIRL.js";
import "./chunk-RWMHLKJ6.js";
import "./chunk-H2TWZIV4.js";
import "./chunk-QX3Z5IJH.js";
import "./chunk-5GF2JGIL.js";
import "./chunk-H4C2RELO.js";
import "./chunk-A7QASWR2.js";
import "./chunk-H4MURSTO.js";
import "./chunk-EC2T6UUU.js";
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
