import {
  UniverDocsMentionUIPlugin
} from "./chunk-TCXLYKDS.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-3BXXBEZB.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-XYV6NM3M.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-CUZU4G6D.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-KAILTCQM.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-XDRJR4R2.js";
import "./chunk-IPBHHSIK.js";
import "./chunk-PGVXIOH2.js";
import "./chunk-5AHFJDRZ.js";
import "./chunk-MH4F6PIU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-GF7VFGIL.js";
import "./chunk-L765PEWF.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PBYFXKWV.js";
import "./chunk-2L3MB7NR.js";
import "./chunk-DA75FTEE.js";
import "./chunk-HOWFZZY3.js";
import "./chunk-DV6J5ZIJ.js";
import "./chunk-V532XFUH.js";
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
