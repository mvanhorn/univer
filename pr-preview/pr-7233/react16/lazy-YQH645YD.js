import {
  UniverDocsMentionUIPlugin
} from "./chunk-GCWSK7CE.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-DES5LCKD.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-PS6QRIUD.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PB6DKGVI.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-EZQYSWZP.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-T7W7O6M6.js";
import "./chunk-TSNXCNPS.js";
import "./chunk-LSF4POHA.js";
import "./chunk-YYQJ5QCL.js";
import "./chunk-7FHRUHDQ.js";
import "./chunk-242QEQV5.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-ZIISRROI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-OGNT4O6K.js";
import "./chunk-GHR4IE63.js";
import "./chunk-JIZNSXQD.js";
import "./chunk-O5T7UNDA.js";
import "./chunk-L5VQTX6F.js";
import "./chunk-FOCWDXCV.js";
import "./chunk-3FKRKIME.js";
import "./chunk-G7SXFZ34.js";
import "./chunk-7SRTVBCX.js";
import "./chunk-JKGF6EFW.js";
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
