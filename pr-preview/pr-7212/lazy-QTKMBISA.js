import {
  UniverDocsMentionUIPlugin
} from "./chunk-XTO4S3RT.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-WA6QEMN2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HAC6VBBP.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-KS2CKLDZ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-5XOMPREM.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-2UAIW4IC.js";
import "./chunk-R3QQ67HN.js";
import "./chunk-IVJBV3BH.js";
import "./chunk-HKCTEQSD.js";
import "./chunk-2LYBLOZC.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-7NENCTLM.js";
import "./chunk-UIQTNV3S.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-QWX66D3L.js";
import "./chunk-HUQ2LHR5.js";
import "./chunk-RWMHLKJ6.js";
import "./chunk-H2TWZIV4.js";
import "./chunk-46XK5B5B.js";
import "./chunk-5GF2JGIL.js";
import "./chunk-MBMXE6QE.js";
import "./chunk-KANNQITD.js";
import "./chunk-PEJBSZI5.js";
import "./chunk-EC2T6UUU.js";
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
