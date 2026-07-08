import {
  UniverDocsMentionUIPlugin
} from "./chunk-O72DOHKV.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-H6JNNZXD.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-4U3S3FU5.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-UAEKXRWZ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-WRR4XSCS.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-2C2CONQ7.js";
import "./chunk-ZVRW5FCM.js";
import "./chunk-TY6HTF2R.js";
import "./chunk-OCKT6VP3.js";
import "./chunk-JKD7D2KN.js";
import "./chunk-TBLYYLSX.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-BPNPGDLR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-P6COYI6V.js";
import "./chunk-DJY45NF5.js";
import "./chunk-UEXSOKOT.js";
import "./chunk-53U2TG3A.js";
import "./chunk-2BSYJBER.js";
import "./chunk-74ZM3WUQ.js";
import "./chunk-HM6HUDFU.js";
import "./chunk-ZAPF6GCB.js";
import "./chunk-XDWEESGO.js";
import "./chunk-BCDUMSPY.js";
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
