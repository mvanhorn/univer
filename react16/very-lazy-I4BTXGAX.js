import {
  UniverActionRecorderPlugin
} from "./chunk-4WSCPTAQ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-QUD6UUKQ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-RXJRTUN3.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-RT7GCIJY.js";
import {
  UniverDebuggerPlugin
} from "./chunk-6UQW2ZR6.js";
import {
  UniverWatermarkPlugin
} from "./chunk-OVCFMYMG.js";
import "./chunk-VZ4YWS2K.js";
import {
  loadDebuggerLocale
} from "./chunk-IQNCGZA2.js";
import "./chunk-ZPXWPBHJ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-AGWZSVHQ.js";
import "./chunk-IML2UZU3.js";
import "./chunk-GSJ5CZDS.js";
import "./chunk-QHFKOUYH.js";
import "./chunk-NKZHNRBU.js";
import "./chunk-WKLFBBOO.js";
import "./chunk-OLWLRXHV.js";
import "./chunk-RR54J243.js";
import "./chunk-DQIYATOD.js";
import "./chunk-ZAFX2KIK.js";
import "./chunk-OP5GA72W.js";
import "./chunk-CQ7Q36VO.js";
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
