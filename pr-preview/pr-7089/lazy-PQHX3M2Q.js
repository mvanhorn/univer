import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BCSNXAST.js";
import "./chunk-UCJHFYPH.js";
import "./chunk-N3GIUG2S.js";
import "./chunk-OJGJJ5GP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-2EJUS4YB.js";
import "./chunk-YBBVZDW7.js";
import "./chunk-RPFYZG3Z.js";
import "./chunk-DQWTCUXD.js";
import "./chunk-ZQSMBML7.js";
import "./chunk-GFHK3ZAZ.js";
import "./chunk-URQTML7U.js";
import "./chunk-TAI34DJM.js";
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
