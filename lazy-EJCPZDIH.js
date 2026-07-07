import {
  UniverDocsMentionUIPlugin
} from "./chunk-JTIWC62V.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-BGONFYQO.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6BOPPUTK.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-MCSIBMH7.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-53OUJBVA.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-L6HTN3ZL.js";
import "./chunk-O5K47HS2.js";
import "./chunk-VEQOVAJ7.js";
import "./chunk-7JXV5UTP.js";
import "./chunk-JUCMWRKI.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-REMPWZQO.js";
import "./chunk-TLJUJLVM.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4A3GNYNZ.js";
import "./chunk-QOF4FZ33.js";
import "./chunk-RWMHLKJ6.js";
import "./chunk-DCGTG6OW.js";
import "./chunk-KARNHZ6C.js";
import "./chunk-5GF2JGIL.js";
import "./chunk-WKBB45GC.js";
import "./chunk-5AX63AZ7.js";
import "./chunk-I5NKUZXR.js";
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
