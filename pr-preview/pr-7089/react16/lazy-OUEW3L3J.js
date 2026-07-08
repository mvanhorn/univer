import {
  UniverDocsMentionUIPlugin
} from "./chunk-P75ITMG4.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-NL24R7CD.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-6TDWJANU.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TOXWMUTS.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-SVTR3SLR.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-XHVLBASI.js";
import "./chunk-D7DHF6GS.js";
import "./chunk-ZTQ7YG5O.js";
import "./chunk-XBJYBWPF.js";
import "./chunk-TTXYMXTZ.js";
import "./chunk-XVYHKR47.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-MK3Z44VU.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XLRYANKI.js";
import "./chunk-KL6PTX3B.js";
import "./chunk-UEXSOKOT.js";
import "./chunk-53U2TG3A.js";
import "./chunk-L5XWRKM6.js";
import "./chunk-74ZM3WUQ.js";
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
