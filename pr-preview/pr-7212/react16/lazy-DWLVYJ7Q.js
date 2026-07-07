import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HAC6VBBP.js";
import "./chunk-2LYBLOZC.js";
import "./chunk-7NENCTLM.js";
import "./chunk-UIQTNV3S.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-QWX66D3L.js";
import "./chunk-HUQ2LHR5.js";
import "./chunk-H2TWZIV4.js";
import "./chunk-46XK5B5B.js";
import "./chunk-5GF2JGIL.js";
import "./chunk-MBMXE6QE.js";
import "./chunk-KANNQITD.js";
import "./chunk-PEJBSZI5.js";
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
