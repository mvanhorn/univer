import {
  UniverDocsMentionUIPlugin
} from "./chunk-P3WABQB5.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ICRZHUGE.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-UCURR4HA.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-3ZV42BUR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-WKX447SN.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-RPNWE7YO.js";
import "./chunk-PWPKYS5W.js";
import "./chunk-ABNNQRDD.js";
import "./chunk-PPPGR76N.js";
import "./chunk-KR45BOXH.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-NRV2SHYO.js";
import "./chunk-AC2KRZLJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PGF46Q7E.js";
import "./chunk-RLUIXECX.js";
import "./chunk-33QZWON4.js";
import "./chunk-KCTUXWPE.js";
import "./chunk-ZD74E4RE.js";
import "./chunk-VSLW7ZRN.js";
import "./chunk-AVWMQQYI.js";
import "./chunk-RMWK5QLU.js";
import "./chunk-3XZ73M6W.js";
import "./chunk-53ZUKXTZ.js";
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
