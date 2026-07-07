import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GVZJDTF4.js";
import "./chunk-55STDDTS.js";
import "./chunk-TLAJNLCW.js";
import "./chunk-Y6O7JXL5.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-T7RLS6AH.js";
import "./chunk-4QQMIHR2.js";
import "./chunk-6T3DNBPR.js";
import "./chunk-663NML57.js";
import "./chunk-V532XFUH.js";
import "./chunk-4UG6W7EV.js";
import "./chunk-AAAEP34O.js";
import "./chunk-UYNZVVVW.js";
import "./chunk-CBGIOZGI.js";
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
