import {
  UniverActionRecorderPlugin
} from "./chunk-LB3W23B5.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-3CCSQJV3.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-W2YQHOTY.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-7UXGPOWP.js";
import {
  UniverDebuggerPlugin
} from "./chunk-SMVSEFKO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-TW7BXRPG.js";
import "./chunk-QFRQGAT3.js";
import {
  loadDebuggerLocale
} from "./chunk-HOICH6OU.js";
import "./chunk-WB4VO3II.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-T6HZW544.js";
import "./chunk-YWGDXRF4.js";
import "./chunk-PXHEYUZI.js";
import "./chunk-D6S25ICN.js";
import "./chunk-L34W64TJ.js";
import "./chunk-5S3HQMRW.js";
import "./chunk-EOJFKGSG.js";
import "./chunk-KFGQZUNF.js";
import "./chunk-LCSV262J.js";
import "./chunk-RYMJJPT5.js";
import "./chunk-Q5U6PPRA.js";
import "./chunk-IIGGSGNH.js";
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
