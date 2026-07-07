import {
  UniverActionRecorderPlugin
} from "./chunk-UUQH5SNV.js";
import {
  UniverUniscriptPlugin
} from "./chunk-JPNPCERU.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-QLRACITE.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-6MXGFZD7.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-IB6JKKQX.js";
import {
  UniverDebuggerPlugin
} from "./chunk-6AFHJ5CX.js";
import {
  UniverWatermarkPlugin
} from "./chunk-NCWVC3RZ.js";
import "./chunk-OG2V5YXV.js";
import {
  loadDebuggerLocale
} from "./chunk-TDL7ZWNE.js";
import "./chunk-UR4ECR32.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ZYPWZYN4.js";
import "./chunk-3RTNB5UK.js";
import "./chunk-VTBYMKVF.js";
import "./chunk-3EQFQ3JI.js";
import "./chunk-JSJRMH5X.js";
import "./chunk-UFOXOQLG.js";
import "./chunk-YWXA6MZM.js";
import "./chunk-7RNWTYU5.js";
import "./chunk-2HDDCW6L.js";
import "./chunk-SXN7Z57E.js";
import "./chunk-QQPYZICS.js";
import "./chunk-HNNRH47V.js";
import "./chunk-FA4FHKBV.js";
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
    plugins.push([UniverUniscriptPlugin, {
      getWorkerUrl(_, label) {
        if (label === "json") {
          return "/vs/language/json/json.worker.js";
        }
        if (label === "css" || label === "scss" || label === "less") {
          return "/vs/language/css/css.worker.js";
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return "/vs/language/html/html.worker.js";
        }
        if (label === "typescript" || label === "javascript") {
          return "/vs/language/typescript/ts.worker.js";
        }
        return "/vs/editor/editor.worker.js";
      }
    }]);
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
