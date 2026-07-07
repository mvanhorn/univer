import {
  UniverDocsMentionUIPlugin
} from "./chunk-YSZUIXLI.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-BEKKKVWD.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-IS42NVYK.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-IJIQAVNC.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-IFZVTAA2.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-I7RETDXY.js";
import "./chunk-NMGUC72L.js";
import "./chunk-FYAPI7HE.js";
import "./chunk-FHILK56I.js";
import "./chunk-ZEBE2X4F.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-ACMDF5UP.js";
import "./chunk-ANDUAXDW.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HUOYGETC.js";
import "./chunk-DBA2T5R4.js";
import "./chunk-WLO4MEHH.js";
import "./chunk-7P6YQMKU.js";
import "./chunk-NOH7ZSVD.js";
import "./chunk-AWSF72S7.js";
import "./chunk-JL33YX5S.js";
import "./chunk-MTF6YIZF.js";
import "./chunk-JIF4X2EQ.js";
import "./chunk-YCXVR2BL.js";
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
