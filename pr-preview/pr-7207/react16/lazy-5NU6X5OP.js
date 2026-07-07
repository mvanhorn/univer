import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-UCURR4HA.js";
import "./chunk-KR45BOXH.js";
import "./chunk-NRV2SHYO.js";
import "./chunk-AC2KRZLJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PGF46Q7E.js";
import "./chunk-RLUIXECX.js";
import "./chunk-KCTUXWPE.js";
import "./chunk-ZD74E4RE.js";
import "./chunk-VSLW7ZRN.js";
import "./chunk-AVWMQQYI.js";
import "./chunk-RMWK5QLU.js";
import "./chunk-3XZ73M6W.js";
import "./chunk-53ZUKXTZ.js";
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
