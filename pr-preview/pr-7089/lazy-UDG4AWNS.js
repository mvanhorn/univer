import {
  UniverDocsMentionUIPlugin
} from "./chunk-JWZ3AUTW.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ZRHIJIAR.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-YZ3V2ODS.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LILUVPN4.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-SVQMD7FS.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-2SY2PGIX.js";
import "./chunk-D7DHF6GS.js";
import "./chunk-ZTQ7YG5O.js";
import "./chunk-XBJYBWPF.js";
import "./chunk-TTXYMXTZ.js";
import "./chunk-XVYHKR47.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-K6ASHFWB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KQ5IQJ2A.js";
import "./chunk-NVP5G4LN.js";
import "./chunk-UEXSOKOT.js";
import "./chunk-NCRWBYAR.js";
import "./chunk-RUOR6XOO.js";
import "./chunk-L4JFEF3H.js";
import "./chunk-URSPW5KK.js";
import "./chunk-D56GOLKC.js";
import "./chunk-LPTHD3KJ.js";
import "./chunk-BCDUMSPY.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets/lazy.ts
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
