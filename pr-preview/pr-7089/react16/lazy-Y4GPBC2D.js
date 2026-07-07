import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ZUWU3CFY.js";
import "./chunk-MH4F6PIU.js";
import "./chunk-O35NOWKW.js";
import "./chunk-L765PEWF.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EQ3TOMMO.js";
import "./chunk-2KUXQJTA.js";
import "./chunk-D5H5P7PW.js";
import "./chunk-N4DOMT35.js";
import "./chunk-F7KMDBHX.js";
import "./chunk-PAB77PEQ.js";
import "./chunk-AHI4XB5F.js";
import "./chunk-LFCAT4GF.js";
import "./chunk-CBGIOZGI.js";
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
