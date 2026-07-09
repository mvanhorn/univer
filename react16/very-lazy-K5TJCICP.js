import {
  UniverActionRecorderPlugin
} from "./chunk-IRZKDBIX.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-J5LRETGO.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-I5BFA53K.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-QXZGDEUP.js";
import {
  UniverDebuggerPlugin
} from "./chunk-W3Q7TTKU.js";
import {
  UniverWatermarkPlugin
} from "./chunk-K6REBI5O.js";
import "./chunk-2UOXGDSW.js";
import {
  loadDebuggerLocale
} from "./chunk-U2E2OYAO.js";
import "./chunk-3YA4CGZS.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5UPYVDUG.js";
import "./chunk-5RDHIJMY.js";
import "./chunk-FM3R5T2V.js";
import "./chunk-NEZ3UZUO.js";
import "./chunk-7EZLBUFS.js";
import "./chunk-ZR7X3MZN.js";
import "./chunk-534XAPJZ.js";
import "./chunk-SBOM7SOI.js";
import "./chunk-QNDLTLR6.js";
import "./chunk-MESKVJUQ.js";
import "./chunk-JZ2LFV55.js";
import "./chunk-YAGO4HXX.js";
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
