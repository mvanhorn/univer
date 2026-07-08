import {
  UniverActionRecorderPlugin
} from "./chunk-ROETA5NR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-ZQE2JJX5.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GZPSM4KM.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-RXLC24XB.js";
import {
  UniverDebuggerPlugin
} from "./chunk-SUCQ7YEM.js";
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
} from "./chunk-4DKTMAIA.js";
import "./chunk-OCKT6VP3.js";
import "./chunk-TAIJTAJC.js";
import "./chunk-CZ7R3C7B.js";
import "./chunk-XNGIZ6OA.js";
import "./chunk-53U2TG3A.js";
import "./chunk-2BSYJBER.js";
import "./chunk-74ZM3WUQ.js";
import "./chunk-HM6HUDFU.js";
import "./chunk-ZAPF6GCB.js";
import "./chunk-XDWEESGO.js";
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
