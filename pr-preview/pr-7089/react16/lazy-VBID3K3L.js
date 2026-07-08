import {
  UniverDocsMentionUIPlugin
} from "./chunk-HXZEI55D.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-J7ZTAHT6.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DYJ7CS57.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-HRDRRRZQ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-UULQ74UP.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-E2NEHSRB.js";
import "./chunk-SAXMNMD6.js";
import "./chunk-DPTLTY4H.js";
import "./chunk-IQGZ5TGW.js";
import "./chunk-F3QBMCSR.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-ZY7GVFXV.js";
import "./chunk-N6OAQXFV.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-RLOKW6JK.js";
import "./chunk-WBOZWFG6.js";
import "./chunk-P3M6ROB4.js";
import "./chunk-42WBGQPP.js";
import "./chunk-UHQZI7IK.js";
import "./chunk-ZGYKVTIJ.js";
import "./chunk-QEHPBOYW.js";
import "./chunk-U5HR3MOQ.js";
import "./chunk-ZGC4B4ZI.js";
import "./chunk-64NTBQQD.js";
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
