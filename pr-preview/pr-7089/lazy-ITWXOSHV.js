import {
  UniverDocsMentionUIPlugin
} from "./chunk-COJGDUPX.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-EWZFKGPX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-L5ESFZSO.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-CPIHLSLI.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-7XXZKKDP.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-VTLZCYSS.js";
import "./chunk-EPZRDFGQ.js";
import "./chunk-PPNZJ2FD.js";
import "./chunk-HLCVIGJV.js";
import "./chunk-4D32OKJR.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-RQPC5WTE.js";
import "./chunk-GFA6PV6N.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-I3QA6ZHN.js";
import "./chunk-HUU5PDOY.js";
import "./chunk-M4OUO3P4.js";
import "./chunk-JAPOFLK5.js";
import "./chunk-5XJJ3A2O.js";
import "./chunk-ZQSMBML7.js";
import "./chunk-JJRCNODX.js";
import "./chunk-66AJFP3O.js";
import "./chunk-GO2XKGCC.js";
import "./chunk-6GPVK25F.js";
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
