import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TKVZDMYB.js";
import "./chunk-BREN6BJU.js";
import "./chunk-VTBYMKVF.js";
import "./chunk-5AXNJPGC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3EQFQ3JI.js";
import "./chunk-JSJRMH5X.js";
import "./chunk-UFOXOQLG.js";
import "./chunk-YWXA6MZM.js";
import "./chunk-7RNWTYU5.js";
import "./chunk-2HDDCW6L.js";
import "./chunk-QQPYZICS.js";
import "./chunk-HNNRH47V.js";
import "./chunk-FA4FHKBV.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-multi-units/lazy.ts
function getLazyPlugins() {
  return [
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
