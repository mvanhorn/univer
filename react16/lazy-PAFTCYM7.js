import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OFR6WI3T.js";
import "./chunk-L7FJZGIP.js";
import "./chunk-NTBTAPWX.js";
import "./chunk-FM3R5T2V.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-NEZ3UZUO.js";
import "./chunk-7EZLBUFS.js";
import "./chunk-ZR7X3MZN.js";
import "./chunk-534XAPJZ.js";
import "./chunk-SBOM7SOI.js";
import "./chunk-QNDLTLR6.js";
import "./chunk-MESKVJUQ.js";
import "./chunk-JZ2LFV55.js";
import "./chunk-YAGO4HXX.js";
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
