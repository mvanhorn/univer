import {
  UniverDocsMentionUIPlugin
} from "./chunk-HAZZ4WBY.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-VBRANAEV.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-X7FDWWLC.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-THEL2L63.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-7I4WAAO5.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ANSCH7RJ.js";
import "./chunk-DEMYK4Y7.js";
import "./chunk-SYNKTRH7.js";
import "./chunk-LWA22SRD.js";
import "./chunk-5SLZ5VWA.js";
import "./chunk-2JO6UJAJ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-GDOLXXZY.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-GJXP5S4Q.js";
import "./chunk-DIILEY7K.js";
import "./chunk-4QKKA4K3.js";
import "./chunk-JCLKBUN7.js";
import "./chunk-2NOALENK.js";
import "./chunk-KGQPEUSI.js";
import "./chunk-J4SJ2JVM.js";
import "./chunk-HWBBMCPW.js";
import "./chunk-2ZHNGVC5.js";
import "./chunk-6Z6YV3AU.js";
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
