import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-U2LUBBBQ.js";
import "./chunk-ECSJDPYB.js";
import "./chunk-Z6UPV4VM.js";
import "./chunk-R47IWCWR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-UBWGWF3E.js";
import "./chunk-JNXRWLXT.js";
import "./chunk-35YA4EBZ.js";
import "./chunk-HQL7V2WW.js";
import "./chunk-RR54J243.js";
import "./chunk-DQIYATOD.js";
import "./chunk-ZAFX2KIK.js";
import "./chunk-OP5GA72W.js";
import "./chunk-CQ7Q36VO.js";
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
