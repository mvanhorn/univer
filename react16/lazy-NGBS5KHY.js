import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QBONKOAQ.js";
import "./chunk-LTDDRVGK.js";
import "./chunk-AQHIUS3Q.js";
import "./chunk-CDKEXSXQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FEQDP2G7.js";
import "./chunk-DB56H76C.js";
import "./chunk-7XZ7DHNP.js";
import "./chunk-3WOZTQYO.js";
import "./chunk-4GOOIQ6L.js";
import "./chunk-QCUG2TSB.js";
import "./chunk-KY3OPPOE.js";
import "./chunk-6VU3U6PO.js";
import "./chunk-BZ7UQADZ.js";
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
