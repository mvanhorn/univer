import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-IS42NVYK.js";
import "./chunk-ZEBE2X4F.js";
import "./chunk-ACMDF5UP.js";
import "./chunk-ANDUAXDW.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HUOYGETC.js";
import "./chunk-DBA2T5R4.js";
import "./chunk-7P6YQMKU.js";
import "./chunk-NOH7ZSVD.js";
import "./chunk-AWSF72S7.js";
import "./chunk-JL33YX5S.js";
import "./chunk-MTF6YIZF.js";
import "./chunk-JIF4X2EQ.js";
import "./chunk-YCXVR2BL.js";
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
