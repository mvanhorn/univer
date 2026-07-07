import {
  UniverDocsMentionUIPlugin
} from "./chunk-VMCO6CPA.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NPHVCGWD.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-F4HKKAYZ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-UNU7GAVI.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-S6EMLKLM.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-2SPMKJFH.js";
import "./chunk-PFNLRKGH.js";
import "./chunk-IGX7TZUG.js";
import "./chunk-ZQ65Q5TK.js";
import "./chunk-VBEBBRGY.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-5ONOSVY4.js";
import "./chunk-NIA4YRMS.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7NRS6IMW.js";
import "./chunk-WCMQYU5M.js";
import "./chunk-U2OJ46UV.js";
import "./chunk-7BZAPDYT.js";
import "./chunk-URISZOSO.js";
import "./chunk-66F6IXH3.js";
import "./chunk-W2CQHLHX.js";
import "./chunk-DHOPL66F.js";
import "./chunk-BG7SGHYA.js";
import "./chunk-II7REV6J.js";
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
