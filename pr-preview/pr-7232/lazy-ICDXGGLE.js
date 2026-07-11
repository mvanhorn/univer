import {
  UniverDocsMentionUIPlugin
} from "./chunk-G32WOPNU.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-YVHDU7TA.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PNC6KY3O.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-PUJRXLIO.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-PI24WVAN.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-3NWP3OWI.js";
import "./chunk-MYP25DXI.js";
import "./chunk-FOSRTIXN.js";
import "./chunk-CUAC4OUN.js";
import "./chunk-3JGL4NJX.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-LEZBZMJJ.js";
import "./chunk-EX7R4ZKE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-BH6XLSYI.js";
import "./chunk-VQDLXLSI.js";
import "./chunk-7JCYGBW4.js";
import "./chunk-UDWWJ4UR.js";
import "./chunk-DISKKJ3L.js";
import "./chunk-LU6RABWA.js";
import "./chunk-NVWDFLBS.js";
import "./chunk-TVR7VRV3.js";
import "./chunk-C25FSR6I.js";
import "./chunk-OG5AOJFS.js";
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
