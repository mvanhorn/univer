import {
  UniverActionRecorderPlugin
} from "./chunk-5FOK7SRC.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-24PCO246.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-MBY6HJXJ.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-Z63XLXH5.js";
import {
  UniverDebuggerPlugin
} from "./chunk-XUYHBE6H.js";
import {
  UniverWatermarkPlugin
} from "./chunk-NOLI233N.js";
import "./chunk-EHQFGTRT.js";
import {
  loadDebuggerLocale
} from "./chunk-YWID4JRO.js";
import "./chunk-TYYXEEIS.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-FB4S2UDB.js";
import "./chunk-XBJYBWPF.js";
import "./chunk-MK3Z44VU.js";
import "./chunk-XLRYANKI.js";
import "./chunk-KL6PTX3B.js";
import "./chunk-53U2TG3A.js";
import "./chunk-L5XWRKM6.js";
import "./chunk-74ZM3WUQ.js";
import "./chunk-URSPW5KK.js";
import "./chunk-D56GOLKC.js";
import "./chunk-LPTHD3KJ.js";
import "./chunk-BCDUMSPY.js";
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
