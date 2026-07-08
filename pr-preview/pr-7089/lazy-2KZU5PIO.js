import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5PZY4SY4.js";
import "./chunk-4D32OKJR.js";
import "./chunk-XYS6OW4C.js";
import "./chunk-GFA6PV6N.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4YQLAMP3.js";
import "./chunk-TAOLRQUZ.js";
import "./chunk-JAPOFLK5.js";
import "./chunk-5XJJ3A2O.js";
import "./chunk-ZQSMBML7.js";
import "./chunk-JJRCNODX.js";
import "./chunk-66AJFP3O.js";
import "./chunk-GO2XKGCC.js";
import "./chunk-6GPVK25F.js";
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
