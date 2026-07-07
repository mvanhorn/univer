import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CYTHS4AI.js";
import "./chunk-26KIYOJS.js";
import "./chunk-FT6PYCC3.js";
import "./chunk-QDEW4Y3M.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-I36OXUVZ.js";
import "./chunk-Q3UNBSFA.js";
import "./chunk-UWQ6I5HN.js";
import "./chunk-YAIB3M2F.js";
import "./chunk-DROW6W4O.js";
import "./chunk-LMU7UQMI.js";
import "./chunk-BXRAFU5X.js";
import "./chunk-C3ZHGZZI.js";
import "./chunk-4P6UE246.js";
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
