import {
  UniverDocsMentionUIPlugin
} from "./chunk-R2YQ36WO.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-OIYQBTCA.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PINZFKE3.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TC5H6IT2.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-BIVEHIMW.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-URHRAOJQ.js";
import "./chunk-4FNIV7BS.js";
import "./chunk-XIHRBNQQ.js";
import "./chunk-TCR64DCC.js";
import "./chunk-SGROMBZI.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-3HFUVSES.js";
import "./chunk-F6GNDHRF.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CAQP7JLO.js";
import "./chunk-Z237YT5B.js";
import "./chunk-FG7AAHC7.js";
import "./chunk-KDG6ZP5S.js";
import "./chunk-YZCSCC5F.js";
import "./chunk-AE2SMQJX.js";
import "./chunk-NHGWN3SD.js";
import "./chunk-XOHMQ3ID.js";
import "./chunk-RN2D33K3.js";
import "./chunk-LT6FETEP.js";
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
