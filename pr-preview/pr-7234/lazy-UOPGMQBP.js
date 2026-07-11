import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-T2SDZDIQ.js";
import "./chunk-MD4PUTB3.js";
import "./chunk-7DZQ6MTX.js";
import "./chunk-45BU76HS.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-AQJDCYMY.js";
import "./chunk-OV75INE4.js";
import "./chunk-PYZI7E3G.js";
import "./chunk-AUC5T5LR.js";
import "./chunk-EU7DAGSZ.js";
import "./chunk-MRAU7DSD.js";
import "./chunk-AJHNJVEY.js";
import "./chunk-PALYGNIK.js";
import "./chunk-SBUQW7IY.js";
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
