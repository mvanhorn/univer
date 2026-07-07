import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-F4HKKAYZ.js";
import "./chunk-VBEBBRGY.js";
import "./chunk-5ONOSVY4.js";
import "./chunk-NIA4YRMS.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7NRS6IMW.js";
import "./chunk-WCMQYU5M.js";
import "./chunk-7BZAPDYT.js";
import "./chunk-URISZOSO.js";
import "./chunk-66F6IXH3.js";
import "./chunk-W2CQHLHX.js";
import "./chunk-DHOPL66F.js";
import "./chunk-BG7SGHYA.js";
import "./chunk-II7REV6J.js";
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
