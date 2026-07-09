import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LILUVPN4.js";
import "./chunk-TTXYMXTZ.js";
import "./chunk-XVYHKR47.js";
import "./chunk-K6ASHFWB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KQ5IQJ2A.js";
import "./chunk-NVP5G4LN.js";
import "./chunk-NCRWBYAR.js";
import "./chunk-RUOR6XOO.js";
import "./chunk-L4JFEF3H.js";
import "./chunk-URSPW5KK.js";
import "./chunk-D56GOLKC.js";
import "./chunk-LPTHD3KJ.js";
import "./chunk-BCDUMSPY.js";
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
