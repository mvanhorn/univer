import {
  UniverDocsMentionUIPlugin
} from "./chunk-T26QUPKJ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-4KT2CLLP.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-WNRPZFIU.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OFR6WI3T.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-3LH4ELOK.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-L6LNU3CU.js";
import "./chunk-WPH7MSAJ.js";
import "./chunk-IKYRH57R.js";
import "./chunk-5RDHIJMY.js";
import "./chunk-L7FJZGIP.js";
import "./chunk-NTBTAPWX.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-FM3R5T2V.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-NEZ3UZUO.js";
import "./chunk-7EZLBUFS.js";
import "./chunk-AKLDEHKU.js";
import "./chunk-ZR7X3MZN.js";
import "./chunk-534XAPJZ.js";
import "./chunk-SBOM7SOI.js";
import "./chunk-QNDLTLR6.js";
import "./chunk-MESKVJUQ.js";
import "./chunk-JZ2LFV55.js";
import "./chunk-YAGO4HXX.js";
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
