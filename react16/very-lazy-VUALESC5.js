import {
  UniverActionRecorderPlugin
} from "./chunk-3F4MSZ5B.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-GYM5VIH3.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-2GYTWCNN.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ATMZHSJH.js";
import {
  UniverDebuggerPlugin
} from "./chunk-HVSBS52X.js";
import {
  UniverWatermarkPlugin
} from "./chunk-QSXIRI2D.js";
import "./chunk-HIYBJ7T3.js";
import {
  loadDebuggerLocale
} from "./chunk-LLDDVNDS.js";
import "./chunk-JMSSIM5F.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-VOLAZ7QS.js";
import "./chunk-OYEWOMRQ.js";
import "./chunk-25ADJ2WF.js";
import "./chunk-S4AU5EMV.js";
import "./chunk-IAQGIPVO.js";
import "./chunk-SM6KKLF3.js";
import "./chunk-ODU4NA3P.js";
import "./chunk-GUOIEUQL.js";
import "./chunk-ORYNE4VV.js";
import "./chunk-NC5A3MKJ.js";
import "./chunk-KN5XN4TJ.js";
import "./chunk-WTTGPGQK.js";
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
