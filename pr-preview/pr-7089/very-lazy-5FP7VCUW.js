import {
  UniverActionRecorderPlugin
} from "./chunk-2XR2ZTBS.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-VODZTVEM.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-W4QGCDJP.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-P5MHTDS3.js";
import {
  UniverDebuggerPlugin
} from "./chunk-3PABR6G5.js";
import {
  UniverWatermarkPlugin
} from "./chunk-NOLI233N.js";
import "./chunk-FRRWTSAU.js";
import {
  loadDebuggerLocale
} from "./chunk-3N7OJVMX.js";
import "./chunk-WSX7O3ZT.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-LZL3HFV7.js";
import "./chunk-XBJYBWPF.js";
import "./chunk-K6ASHFWB.js";
import "./chunk-KQ5IQJ2A.js";
import "./chunk-NVP5G4LN.js";
import "./chunk-NCRWBYAR.js";
import "./chunk-RUOR6XOO.js";
import "./chunk-L4JFEF3H.js";
import "./chunk-URSPW5KK.js";
import "./chunk-D56GOLKC.js";
import "./chunk-LPTHD3KJ.js";
import "./chunk-BCDUMSPY.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets/very-lazy.ts
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
