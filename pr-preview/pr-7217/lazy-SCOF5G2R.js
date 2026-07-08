import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-RUXGM7HW.js";
import "./chunk-N6HHJIDQ.js";
import "./chunk-A4XLFTGD.js";
import "./chunk-PXHEYUZI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-D6S25ICN.js";
import "./chunk-L34W64TJ.js";
import "./chunk-5S3HQMRW.js";
import "./chunk-EOJFKGSG.js";
import "./chunk-KFGQZUNF.js";
import "./chunk-LCSV262J.js";
import "./chunk-RYMJJPT5.js";
import "./chunk-Q5U6PPRA.js";
import "./chunk-IIGGSGNH.js";
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
