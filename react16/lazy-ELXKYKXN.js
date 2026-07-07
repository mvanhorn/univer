import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6BOPPUTK.js";
import "./chunk-JUCMWRKI.js";
import "./chunk-REMPWZQO.js";
import "./chunk-TLJUJLVM.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4A3GNYNZ.js";
import "./chunk-QOF4FZ33.js";
import "./chunk-DCGTG6OW.js";
import "./chunk-KARNHZ6C.js";
import "./chunk-5GF2JGIL.js";
import "./chunk-WKBB45GC.js";
import "./chunk-5AX63AZ7.js";
import "./chunk-I5NKUZXR.js";
import "./chunk-EC2T6UUU.js";
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
