import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PINZFKE3.js";
import "./chunk-SGROMBZI.js";
import "./chunk-3HFUVSES.js";
import "./chunk-F6GNDHRF.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CAQP7JLO.js";
import "./chunk-Z237YT5B.js";
import "./chunk-KDG6ZP5S.js";
import "./chunk-YZCSCC5F.js";
import "./chunk-AE2SMQJX.js";
import "./chunk-NHGWN3SD.js";
import "./chunk-XOHMQ3ID.js";
import "./chunk-RN2D33K3.js";
import "./chunk-LT6FETEP.js";
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
