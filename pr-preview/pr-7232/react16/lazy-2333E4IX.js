import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PNC6KY3O.js";
import "./chunk-3JGL4NJX.js";
import "./chunk-LEZBZMJJ.js";
import "./chunk-EX7R4ZKE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-BH6XLSYI.js";
import "./chunk-VQDLXLSI.js";
import "./chunk-UDWWJ4UR.js";
import "./chunk-DISKKJ3L.js";
import "./chunk-LU6RABWA.js";
import "./chunk-NVWDFLBS.js";
import "./chunk-TVR7VRV3.js";
import "./chunk-C25FSR6I.js";
import "./chunk-OG5AOJFS.js";
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
