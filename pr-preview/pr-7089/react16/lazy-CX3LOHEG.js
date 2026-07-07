import {
  UniverDocsMentionUIPlugin
} from "./chunk-BSTCM2DO.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-XDFJX3CU.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ZUWU3CFY.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-WEWX5R5B.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-QCE4SY3I.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-EDVI5R6S.js";
import "./chunk-IPBHHSIK.js";
import "./chunk-PGVXIOH2.js";
import "./chunk-5AHFJDRZ.js";
import "./chunk-MH4F6PIU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-O35NOWKW.js";
import "./chunk-L765PEWF.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EQ3TOMMO.js";
import "./chunk-2KUXQJTA.js";
import "./chunk-DA75FTEE.js";
import "./chunk-D5H5P7PW.js";
import "./chunk-N4DOMT35.js";
import "./chunk-F7KMDBHX.js";
import "./chunk-PAB77PEQ.js";
import "./chunk-AHI4XB5F.js";
import "./chunk-LFCAT4GF.js";
import "./chunk-CBGIOZGI.js";
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
