import {
  UniverDocsMentionUIPlugin
} from "./chunk-BHGJEYZW.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-VNCMMUPC.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-WXDBASOJ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-C55REKPS.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-OAGJPBC3.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-4HCLTMZF.js";
import "./chunk-ZVRW5FCM.js";
import "./chunk-TY6HTF2R.js";
import "./chunk-OCKT6VP3.js";
import "./chunk-JKD7D2KN.js";
import "./chunk-TBLYYLSX.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-667TR7HX.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-YVSPUHNM.js";
import "./chunk-YBKXLEB3.js";
import "./chunk-UEXSOKOT.js";
import "./chunk-PQDTQSTX.js";
import "./chunk-MX7RLLSN.js";
import "./chunk-FIAB6JQW.js";
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
