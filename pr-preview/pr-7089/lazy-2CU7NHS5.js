import {
  UniverDocsMentionUIPlugin
} from "./chunk-CBVVRQJB.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-Q73KAHVT.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GMH43BEU.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-DGGCTI3B.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-G22653WV.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-G3YU57NJ.js";
import "./chunk-EPZRDFGQ.js";
import "./chunk-PPNZJ2FD.js";
import "./chunk-HLCVIGJV.js";
import "./chunk-4D32OKJR.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-JGJO7U7M.js";
import "./chunk-GFA6PV6N.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-H5B3YQKX.js";
import "./chunk-62ISQU23.js";
import "./chunk-M4OUO3P4.js";
import "./chunk-M6CFKAUN.js";
import "./chunk-YYY2VM6P.js";
import "./chunk-ZQSMBML7.js";
import "./chunk-JJRCNODX.js";
import "./chunk-66AJFP3O.js";
import "./chunk-GO2XKGCC.js";
import "./chunk-6GPVK25F.js";
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
