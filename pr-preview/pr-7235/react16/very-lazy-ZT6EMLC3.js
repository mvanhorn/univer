import {
  UniverActionRecorderPlugin
} from "./chunk-C3WFLA5W.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-HBNFOTVI.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-JPOBSVQH.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-5TDNHC6Q.js";
import {
  UniverDebuggerPlugin
} from "./chunk-WYCRZ4VE.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Z666CLDT.js";
import "./chunk-E52IRQ5F.js";
import {
  loadDebuggerLocale
} from "./chunk-C4ZBMQOC.js";
import "./chunk-RKJFB6P3.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-LHLCF7VD.js";
import "./chunk-LWA22SRD.js";
import "./chunk-GDOLXXZY.js";
import "./chunk-GJXP5S4Q.js";
import "./chunk-DIILEY7K.js";
import "./chunk-JCLKBUN7.js";
import "./chunk-2NOALENK.js";
import "./chunk-KGQPEUSI.js";
import "./chunk-J4SJ2JVM.js";
import "./chunk-HWBBMCPW.js";
import "./chunk-2ZHNGVC5.js";
import "./chunk-6Z6YV3AU.js";
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
