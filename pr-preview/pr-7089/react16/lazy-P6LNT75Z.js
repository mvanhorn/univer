import {
  UniverDocsMentionUIPlugin
} from "./chunk-UAQBC6D2.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-PWWKVICY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-B5ZJ73HC.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-45VNPFRY.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-CJBO5N5N.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ZZ2OHHZ2.js";
import "./chunk-EPZRDFGQ.js";
import "./chunk-PPNZJ2FD.js";
import "./chunk-HLCVIGJV.js";
import "./chunk-4D32OKJR.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-L2SWNQJB.js";
import "./chunk-GFA6PV6N.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JSCXODGS.js";
import "./chunk-TK4RYGIJ.js";
import "./chunk-M4OUO3P4.js";
import "./chunk-CK5UGHQW.js";
import "./chunk-NX2652CH.js";
import "./chunk-ZQSMBML7.js";
import "./chunk-JJRCNODX.js";
import "./chunk-66AJFP3O.js";
import "./chunk-GO2XKGCC.js";
import "./chunk-6GPVK25F.js";
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
