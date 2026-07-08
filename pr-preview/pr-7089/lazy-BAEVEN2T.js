import {
  UniverDocsMentionUIPlugin
} from "./chunk-YTEQ7KEX.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-6HXZSCS5.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BCSNXAST.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-AFZLH4TM.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-Q64T25F3.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-O4F5N4WK.js";
import "./chunk-MPIRSQAR.js";
import "./chunk-OQXIOCEH.js";
import "./chunk-EA43HBDU.js";
import "./chunk-UCJHFYPH.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-N3GIUG2S.js";
import "./chunk-OJGJJ5GP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-2EJUS4YB.js";
import "./chunk-YBBVZDW7.js";
import "./chunk-M4OUO3P4.js";
import "./chunk-RPFYZG3Z.js";
import "./chunk-DQWTCUXD.js";
import "./chunk-ZQSMBML7.js";
import "./chunk-GFHK3ZAZ.js";
import "./chunk-URQTML7U.js";
import "./chunk-TAI34DJM.js";
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
