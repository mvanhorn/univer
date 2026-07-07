import {
  UniverDocsMentionUIPlugin
} from "./chunk-B67QQMTA.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-TC7YML7R.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QBONKOAQ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-LALB53C2.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-L7UZJZ4L.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-CD746YTC.js";
import "./chunk-SOUYETY7.js";
import "./chunk-Z7VCNMEN.js";
import "./chunk-JCAPPKCA.js";
import "./chunk-LTDDRVGK.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-AQHIUS3Q.js";
import "./chunk-CDKEXSXQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FEQDP2G7.js";
import "./chunk-DB56H76C.js";
import "./chunk-ZJFLUO7O.js";
import "./chunk-7XZ7DHNP.js";
import "./chunk-3WOZTQYO.js";
import "./chunk-4GOOIQ6L.js";
import "./chunk-QCUG2TSB.js";
import "./chunk-KY3OPPOE.js";
import "./chunk-6VU3U6PO.js";
import "./chunk-BZ7UQADZ.js";
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
