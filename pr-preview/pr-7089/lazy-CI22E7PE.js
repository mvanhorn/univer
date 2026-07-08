import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KCLSSUZV.js";
import "./chunk-NRDNCV5S.js";
import "./chunk-7BNLLALV.js";
import "./chunk-NOR6TWKC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7DTPPT6O.js";
import "./chunk-FKSEKT7V.js";
import "./chunk-IVTMXESQ.js";
import "./chunk-7SRQGU7L.js";
import "./chunk-CW4AY6N2.js";
import "./chunk-PZRZOMZL.js";
import "./chunk-EONZRXWG.js";
import "./chunk-EIBURWCE.js";
import "./chunk-DFUEVBKC.js";
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
