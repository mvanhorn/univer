import {
  UniverActionRecorderPlugin
} from "./chunk-GLXTTW4A.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-YMJSFUP4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-33BG5R3L.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-VHUNQYWV.js";
import {
  UniverDebuggerPlugin
} from "./chunk-6OWOV4NA.js";
import {
  UniverWatermarkPlugin
} from "./chunk-LQCBYPEY.js";
import "./chunk-IHPVQOJB.js";
import {
  loadDebuggerLocale
} from "./chunk-AJHVVUKO.js";
import "./chunk-G4QIHRXJ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-KXX2LLIH.js";
import "./chunk-Z2M6SRNN.js";
import "./chunk-R77W4MDC.js";
import "./chunk-E2Y6I635.js";
import "./chunk-WH3N236K.js";
import "./chunk-XNCOSDBH.js";
import "./chunk-PDZTBWGB.js";
import "./chunk-CK3FUAKL.js";
import "./chunk-NBO4EZKG.js";
import "./chunk-3KBQ25RV.js";
import "./chunk-PMP2HLX2.js";
import "./chunk-V3G6INQY.js";
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
