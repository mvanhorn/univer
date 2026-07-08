import {
  UniverDocsMentionUIPlugin
} from "./chunk-6M7FOZEA.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-XZ56SGHT.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-Z7DQHOLO.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-XCUS53UL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-VAPUSKDU.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-DTGXPK4D.js";
import "./chunk-QTYE4MCD.js";
import "./chunk-JISPISRB.js";
import "./chunk-COOOUSWH.js";
import "./chunk-53VNDO6L.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-MXO2WY5X.js";
import "./chunk-TNPULS42.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EA7FWG2H.js";
import "./chunk-ZJQNMU5F.js";
import "./chunk-R2CHFGKU.js";
import "./chunk-AW6MVKEJ.js";
import "./chunk-233BGXLQ.js";
import "./chunk-ZVOMUIYQ.js";
import "./chunk-IAYOCKQB.js";
import "./chunk-WJYUUTYJ.js";
import "./chunk-VCMSFB6X.js";
import "./chunk-IBIZ2ACU.js";
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
