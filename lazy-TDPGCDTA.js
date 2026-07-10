import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PKHWQBCO.js";
import "./chunk-6VDPEYPY.js";
import "./chunk-B6YPZOFU.js";
import "./chunk-25ADJ2WF.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-S4AU5EMV.js";
import "./chunk-IAQGIPVO.js";
import "./chunk-SM6KKLF3.js";
import "./chunk-ODU4NA3P.js";
import "./chunk-GUOIEUQL.js";
import "./chunk-ORYNE4VV.js";
import "./chunk-NC5A3MKJ.js";
import "./chunk-KN5XN4TJ.js";
import "./chunk-WTTGPGQK.js";
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
