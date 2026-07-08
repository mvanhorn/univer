import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DYJ7CS57.js";
import "./chunk-F3QBMCSR.js";
import "./chunk-ZY7GVFXV.js";
import "./chunk-N6OAQXFV.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-RLOKW6JK.js";
import "./chunk-WBOZWFG6.js";
import "./chunk-42WBGQPP.js";
import "./chunk-UHQZI7IK.js";
import "./chunk-ZGYKVTIJ.js";
import "./chunk-QEHPBOYW.js";
import "./chunk-U5HR3MOQ.js";
import "./chunk-ZGC4B4ZI.js";
import "./chunk-64NTBQQD.js";
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
