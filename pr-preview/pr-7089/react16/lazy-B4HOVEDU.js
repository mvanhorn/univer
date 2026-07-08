import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TOXWMUTS.js";
import "./chunk-TTXYMXTZ.js";
import "./chunk-XVYHKR47.js";
import "./chunk-MK3Z44VU.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XLRYANKI.js";
import "./chunk-KL6PTX3B.js";
import "./chunk-53U2TG3A.js";
import "./chunk-L5XWRKM6.js";
import "./chunk-74ZM3WUQ.js";
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
