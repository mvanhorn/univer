import {
  UniverDocsMentionUIPlugin
} from "./chunk-GK7S2XTU.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-7BRAOEJC.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GVZJDTF4.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-XYOE7FAJ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-XBRY7ZTX.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ECHS454V.js";
import "./chunk-2EARCX7P.js";
import "./chunk-6MK34523.js";
import "./chunk-CR44Z4ZY.js";
import "./chunk-55STDDTS.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-TLAJNLCW.js";
import "./chunk-Y6O7JXL5.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-T7RLS6AH.js";
import "./chunk-4QQMIHR2.js";
import "./chunk-DA75FTEE.js";
import "./chunk-6T3DNBPR.js";
import "./chunk-663NML57.js";
import "./chunk-V532XFUH.js";
import "./chunk-4UG6W7EV.js";
import "./chunk-AAAEP34O.js";
import "./chunk-UYNZVVVW.js";
import "./chunk-CBGIOZGI.js";
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
