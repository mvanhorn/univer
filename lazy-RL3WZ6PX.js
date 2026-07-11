import {
  UniverDocsMentionUIPlugin
} from "./chunk-6AJARQDJ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-Z5NNVSKJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-7M5M25F3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VT4R2GO6.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-UBJNAHYF.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-IUF5OOW5.js";
import "./chunk-TSNXCNPS.js";
import "./chunk-LSF4POHA.js";
import "./chunk-YYQJ5QCL.js";
import "./chunk-7FHRUHDQ.js";
import "./chunk-242QEQV5.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-CHZU2KKU.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-YOTG35AP.js";
import "./chunk-7PFJPHHW.js";
import "./chunk-JIZNSXQD.js";
import "./chunk-27A2WM6O.js";
import "./chunk-GZW6II4T.js";
import "./chunk-TMF55I3D.js";
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
