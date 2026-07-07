import {
  UniverActionRecorderPlugin
} from "./chunk-G7HITNH7.js";
import {
  UniverUniscriptPlugin
} from "./chunk-XEFL5IJT.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-LSZVA7LV.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-EYRZW6DB.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-64I25ZF7.js";
import {
  UniverDebuggerPlugin
} from "./chunk-LDOB2AKP.js";
import {
  UniverWatermarkPlugin
} from "./chunk-LZ3OGU7C.js";
import "./chunk-LHA7YSIJ.js";
import {
  loadDebuggerLocale
} from "./chunk-S4OW7LLV.js";
import "./chunk-SMCEBM5N.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-VL6QQMPR.js";
import "./chunk-HKCTEQSD.js";
import "./chunk-7NENCTLM.js";
import "./chunk-QWX66D3L.js";
import "./chunk-HUQ2LHR5.js";
import "./chunk-H2TWZIV4.js";
import "./chunk-46XK5B5B.js";
import "./chunk-5GF2JGIL.js";
import "./chunk-MBMXE6QE.js";
import "./chunk-5TP7JBLX.js";
import "./chunk-KANNQITD.js";
import "./chunk-PEJBSZI5.js";
import "./chunk-EC2T6UUU.js";
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
