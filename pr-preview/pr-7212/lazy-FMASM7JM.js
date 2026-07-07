import {
  UniverDocsMentionUIPlugin
} from "./chunk-635CMJZP.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NXCVMHZT.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NEUFURNT.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-XC7XG5CM.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-P3GRW4QB.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-EKSLLZNV.js";
import "./chunk-VAIIGWEC.js";
import "./chunk-B3JYUQNK.js";
import "./chunk-HYHJRQQV.js";
import "./chunk-WVAXXXZT.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-FICMBN4N.js";
import "./chunk-NTCHJJNM.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3Z4IJ6R7.js";
import "./chunk-BDTXUQC3.js";
import "./chunk-RWMHLKJ6.js";
import "./chunk-H2TWZIV4.js";
import "./chunk-A3CUNGEZ.js";
import "./chunk-5GF2JGIL.js";
import "./chunk-Q2P5XVZA.js";
import "./chunk-XDUQOG4J.js";
import "./chunk-X4BP5GHF.js";
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
