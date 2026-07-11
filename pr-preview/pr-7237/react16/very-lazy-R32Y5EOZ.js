import {
  UniverActionRecorderPlugin
} from "./chunk-7P7XO4BG.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-BDRIYP5J.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-Q7OVVCBA.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-PFSBMOP6.js";
import {
  UniverDebuggerPlugin
} from "./chunk-PGMR4AME.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3YVRHPH7.js";
import "./chunk-DLXG5P5P.js";
import {
  loadDebuggerLocale
} from "./chunk-Z43WFFXW.js";
import "./chunk-TAYDO4L5.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ZESBCSJS.js";
import "./chunk-VYOLSOVH.js";
import "./chunk-I5ESWOBN.js";
import "./chunk-Q6PZ7OPF.js";
import "./chunk-TPGEEZ6O.js";
import "./chunk-TA533AUM.js";
import "./chunk-QSGH4I64.js";
import "./chunk-UEB57LIN.js";
import "./chunk-GZDWINUC.js";
import "./chunk-CJ6CRLJA.js";
import "./chunk-UFHBHMJG.js";
import "./chunk-AE3R7DH2.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-multi-units/very-lazy.ts
var IS_E2E = false;
function getVeryLazyPlugins() {
  const plugins = [
    [UniverActionRecorderPlugin],
    [UniverSheetsHyperLinkUIPlugin],
    [UniverSheetsSortUIPlugin],
    [UniverSheetsCrosshairHighlightPlugin],
    [UniverSheetsFindReplacePlugin],
    [UniverWatermarkPlugin]
  ];
  if (!IS_E2E) {
    plugins.push([UniverDebuggerPlugin, {
      fabEntryUnitType: 2 /* UNIVER_SHEET */,
      localeLoader: loadDebuggerLocale
    }]);
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
