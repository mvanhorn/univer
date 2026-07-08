import {
  UniverActionRecorderPlugin
} from "./chunk-YKTM7BUF.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-Q5W6C6HV.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ATWG3AQD.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-CCGRIW7H.js";
import {
  UniverDebuggerPlugin
} from "./chunk-XDK6KGZD.js";
import {
  UniverWatermarkPlugin
} from "./chunk-NOLI233N.js";
import "./chunk-7TVU4DRM.js";
import {
  loadDebuggerLocale
} from "./chunk-3HQQUWO5.js";
import "./chunk-TYYXEEIS.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-GB4IG552.js";
import "./chunk-OCKT6VP3.js";
import "./chunk-BPNPGDLR.js";
import "./chunk-P6COYI6V.js";
import "./chunk-DJY45NF5.js";
import "./chunk-53U2TG3A.js";
import "./chunk-2BSYJBER.js";
import "./chunk-74ZM3WUQ.js";
import "./chunk-HM6HUDFU.js";
import "./chunk-ZAPF6GCB.js";
import "./chunk-XDWEESGO.js";
import "./chunk-BCDUMSPY.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-no-worker/very-lazy.ts
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
