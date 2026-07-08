import {
  UniverDocsMentionUIPlugin
} from "./chunk-4HVSEKBJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-C7UBLSRT.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GGAL572K.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-6ZGAZGIT.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-IHTINURD.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-Y4OIFDOR.js";
import "./chunk-MPIRSQAR.js";
import "./chunk-OQXIOCEH.js";
import "./chunk-EA43HBDU.js";
import "./chunk-UCJHFYPH.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-NIZFBC3O.js";
import "./chunk-OJGJJ5GP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-COEH5HEN.js";
import "./chunk-F2TW7DBW.js";
import "./chunk-M4OUO3P4.js";
import "./chunk-GCQ3PLVZ.js";
import "./chunk-HKUOQVUS.js";
import "./chunk-ZQSMBML7.js";
import "./chunk-GFHK3ZAZ.js";
import "./chunk-URQTML7U.js";
import "./chunk-TAI34DJM.js";
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
