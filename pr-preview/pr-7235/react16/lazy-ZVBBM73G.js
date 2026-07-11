import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NBG4G27A.js";
import "./chunk-RKB7NJ3A.js";
import "./chunk-QPR2JIWB.js";
import "./chunk-R77W4MDC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-E2Y6I635.js";
import "./chunk-WH3N236K.js";
import "./chunk-XNCOSDBH.js";
import "./chunk-PDZTBWGB.js";
import "./chunk-CK3FUAKL.js";
import "./chunk-NBO4EZKG.js";
import "./chunk-3KBQ25RV.js";
import "./chunk-PMP2HLX2.js";
import "./chunk-V3G6INQY.js";
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
