import {
  UniverActionRecorderPlugin
} from "./chunk-UXHY3PDP.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-QIL5OPCL.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-U5AQJSVG.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-DGUPJCQT.js";
import {
  UniverDebuggerPlugin
} from "./chunk-3F2G6AGT.js";
import {
  UniverWatermarkPlugin
} from "./chunk-NOLI233N.js";
import "./chunk-I456V7X6.js";
import {
  loadDebuggerLocale
} from "./chunk-X6VTNY5O.js";
import "./chunk-NRJEXK42.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-25JYNDHJ.js";
import "./chunk-OCKT6VP3.js";
import "./chunk-667TR7HX.js";
import "./chunk-YVSPUHNM.js";
import "./chunk-YBKXLEB3.js";
import "./chunk-PQDTQSTX.js";
import "./chunk-MX7RLLSN.js";
import "./chunk-FIAB6JQW.js";
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
