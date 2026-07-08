import {
  UniverDocsMentionUIPlugin
} from "./chunk-JTKZO6VC.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-X25QHUWE.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-EZIQBMEQ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-RUXGM7HW.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-BNNF3MF2.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-EK4GYVW7.js";
import "./chunk-DAKLSUZA.js";
import "./chunk-4J2CUQKG.js";
import "./chunk-YWGDXRF4.js";
import "./chunk-N6HHJIDQ.js";
import "./chunk-A4XLFTGD.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-PXHEYUZI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-D6S25ICN.js";
import "./chunk-L34W64TJ.js";
import "./chunk-C2UHYSJI.js";
import "./chunk-5S3HQMRW.js";
import "./chunk-EOJFKGSG.js";
import "./chunk-KFGQZUNF.js";
import "./chunk-LCSV262J.js";
import "./chunk-RYMJJPT5.js";
import "./chunk-Q5U6PPRA.js";
import "./chunk-IIGGSGNH.js";
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
