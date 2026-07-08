import {
  UniverDocsMentionUIPlugin
} from "./chunk-O72DOHKV.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-3I26MWSV.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-476H7I5K.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NF2UGZAM.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-T3GDTYLL.js";
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
} from "./chunk-TAIJTAJC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CZ7R3C7B.js";
import "./chunk-XNGIZ6OA.js";
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

// src/sheets/lazy.ts
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
