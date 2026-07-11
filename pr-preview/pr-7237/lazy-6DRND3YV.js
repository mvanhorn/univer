import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-YLOLAYJK.js";
import "./chunk-7JIY2PC6.js";
import "./chunk-QRQF3CMM.js";
import "./chunk-I5ESWOBN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-Q6PZ7OPF.js";
import "./chunk-TPGEEZ6O.js";
import "./chunk-TA533AUM.js";
import "./chunk-QSGH4I64.js";
import "./chunk-UEB57LIN.js";
import "./chunk-GZDWINUC.js";
import "./chunk-CJ6CRLJA.js";
import "./chunk-UFHBHMJG.js";
import "./chunk-AE3R7DH2.js";
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
