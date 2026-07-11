import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VT4R2GO6.js";
import "./chunk-7FHRUHDQ.js";
import "./chunk-242QEQV5.js";
import "./chunk-CHZU2KKU.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-YOTG35AP.js";
import "./chunk-7PFJPHHW.js";
import "./chunk-27A2WM6O.js";
import "./chunk-GZW6II4T.js";
import "./chunk-TMF55I3D.js";
import "./chunk-3FKRKIME.js";
import "./chunk-G7SXFZ34.js";
import "./chunk-7SRTVBCX.js";
import "./chunk-JKGF6EFW.js";
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
