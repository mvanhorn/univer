import {
  UniverDocsMentionUIPlugin
} from "./chunk-H5NZGBOA.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-UYDG3MMY.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-6BBSP4XH.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-YLOLAYJK.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-E2IT6VAL.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-XPPYCE2G.js";
import "./chunk-NAA3SL6G.js";
import "./chunk-GA2VRODF.js";
import "./chunk-VYOLSOVH.js";
import "./chunk-7JIY2PC6.js";
import "./chunk-QRQF3CMM.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-I5ESWOBN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-Q6PZ7OPF.js";
import "./chunk-TPGEEZ6O.js";
import "./chunk-EK36UWLA.js";
import "./chunk-TA533AUM.js";
import "./chunk-QSGH4I64.js";
import "./chunk-UEB57LIN.js";
import "./chunk-GZDWINUC.js";
import "./chunk-CJ6CRLJA.js";
import "./chunk-UFHBHMJG.js";
import "./chunk-AE3R7DH2.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-no-worker/lazy.ts
function getLazyPlugins() {
  return [
    [UniverDocsMentionUIPlugin],
    [UniverSheetsNumfmtUIPlugin],
    [UniverThreadCommentUIPlugin],
    [UniverSheetsThreadCommentUIPlugin],
    [UniverSheetsNoteUIPlugin],
    [UniverSheetsTableUIPlugin],
    [UniverSheetsFormulaUIPlugin],
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
