import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-UAEKXRWZ.js";
import "./chunk-JKD7D2KN.js";
import "./chunk-TBLYYLSX.js";
import "./chunk-BPNPGDLR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-P6COYI6V.js";
import "./chunk-DJY45NF5.js";
import "./chunk-53U2TG3A.js";
import "./chunk-2BSYJBER.js";
import "./chunk-74ZM3WUQ.js";
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
