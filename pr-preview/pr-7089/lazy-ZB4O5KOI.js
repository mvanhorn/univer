import {
  UniverDocsMentionUIPlugin
} from "./chunk-JCJ2S3TY.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-WLFRCJW4.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NV5U2V6Q.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KCLSSUZV.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-5D2NLCVB.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-CGXRS33M.js";
import "./chunk-SBZUSFKC.js";
import "./chunk-U4VN6O7Q.js";
import "./chunk-RPE4X3DN.js";
import "./chunk-NRDNCV5S.js";
import "./chunk-7BNLLALV.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-NOR6TWKC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7DTPPT6O.js";
import "./chunk-FKSEKT7V.js";
import "./chunk-4P35HAWR.js";
import "./chunk-IVTMXESQ.js";
import "./chunk-7SRQGU7L.js";
import "./chunk-CW4AY6N2.js";
import "./chunk-PZRZOMZL.js";
import "./chunk-EONZRXWG.js";
import "./chunk-EIBURWCE.js";
import "./chunk-DFUEVBKC.js";
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
