import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-Z7DQHOLO.js";
import "./chunk-53VNDO6L.js";
import "./chunk-MXO2WY5X.js";
import "./chunk-TNPULS42.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EA7FWG2H.js";
import "./chunk-ZJQNMU5F.js";
import "./chunk-AW6MVKEJ.js";
import "./chunk-233BGXLQ.js";
import "./chunk-ZVOMUIYQ.js";
import "./chunk-IAYOCKQB.js";
import "./chunk-WJYUUTYJ.js";
import "./chunk-VCMSFB6X.js";
import "./chunk-IBIZ2ACU.js";
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
