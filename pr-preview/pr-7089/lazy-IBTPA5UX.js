import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-C55REKPS.js";
import "./chunk-JKD7D2KN.js";
import "./chunk-TBLYYLSX.js";
import "./chunk-667TR7HX.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-YVSPUHNM.js";
import "./chunk-YBKXLEB3.js";
import "./chunk-PQDTQSTX.js";
import "./chunk-MX7RLLSN.js";
import "./chunk-FIAB6JQW.js";
import "./chunk-HM6HUDFU.js";
import "./chunk-ZAPF6GCB.js";
import "./chunk-XDWEESGO.js";
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
