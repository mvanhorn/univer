import {
  UniverDocsMentionUIPlugin
} from "./chunk-EPJTFSBC.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ODKNNGOK.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-VOAJEF26.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PKHWQBCO.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-MCCIRYH7.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-S5BZHCIC.js";
import "./chunk-YNGE7UPD.js";
import "./chunk-Q5U42U52.js";
import "./chunk-OYEWOMRQ.js";
import "./chunk-6VDPEYPY.js";
import "./chunk-B6YPZOFU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-25ADJ2WF.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-S4AU5EMV.js";
import "./chunk-IAQGIPVO.js";
import "./chunk-VTWMNL5O.js";
import "./chunk-SM6KKLF3.js";
import "./chunk-ODU4NA3P.js";
import "./chunk-GUOIEUQL.js";
import "./chunk-ORYNE4VV.js";
import "./chunk-NC5A3MKJ.js";
import "./chunk-KN5XN4TJ.js";
import "./chunk-WTTGPGQK.js";
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
