import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WEPHOKIK.js";
import "./chunk-ECSJDPYB.js";
import "./chunk-Z6UPV4VM.js";
import "./chunk-GSJ5CZDS.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-QHFKOUYH.js";
import "./chunk-NKZHNRBU.js";
import "./chunk-WKLFBBOO.js";
import "./chunk-OLWLRXHV.js";
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
