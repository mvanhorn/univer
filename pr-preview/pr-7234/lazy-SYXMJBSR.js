import {
  UniverDocsMentionUIPlugin
} from "./chunk-5C3WCV5S.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-6DHEZLOE.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-AL77UEOE.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-T2SDZDIQ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-2F7OKZYX.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-3VNXDLQB.js";
import "./chunk-3H3VTDWE.js";
import "./chunk-Z3EJXHDN.js";
import "./chunk-WBF63BZZ.js";
import "./chunk-MD4PUTB3.js";
import "./chunk-7DZQ6MTX.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-45BU76HS.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-AQJDCYMY.js";
import "./chunk-OV75INE4.js";
import "./chunk-KKYZQQWV.js";
import "./chunk-PYZI7E3G.js";
import "./chunk-AUC5T5LR.js";
import "./chunk-EU7DAGSZ.js";
import "./chunk-MRAU7DSD.js";
import "./chunk-AJHNJVEY.js";
import "./chunk-PALYGNIK.js";
import "./chunk-SBUQW7IY.js";
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
