import {
  UniverDocsMentionUIPlugin
} from "./chunk-FHUTGPWI.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-PVNU7644.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TKVZDMYB.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-BWFURKSK.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-FPDZYQYH.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-TNOLBHB5.js";
import "./chunk-4HURIW2C.js";
import "./chunk-26ZZA3V4.js";
import "./chunk-3RTNB5UK.js";
import "./chunk-BREN6BJU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-VTBYMKVF.js";
import "./chunk-5AXNJPGC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3EQFQ3JI.js";
import "./chunk-JSJRMH5X.js";
import "./chunk-ZKOA252P.js";
import "./chunk-UFOXOQLG.js";
import "./chunk-YWXA6MZM.js";
import "./chunk-7RNWTYU5.js";
import "./chunk-2HDDCW6L.js";
import "./chunk-QQPYZICS.js";
import "./chunk-HNNRH47V.js";
import "./chunk-FA4FHKBV.js";
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
