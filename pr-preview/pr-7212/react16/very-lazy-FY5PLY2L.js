import {
  UniverActionRecorderPlugin
} from "./chunk-APEJSJ4M.js";
import {
  UniverUniscriptPlugin
} from "./chunk-HFNCADIS.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-YP7RFFII.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-WT2BKFUD.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-TO6OMSOZ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-LJAD2ZHB.js";
import {
  UniverWatermarkPlugin
} from "./chunk-LZ3OGU7C.js";
import "./chunk-ITO7XCYM.js";
import {
  loadDebuggerLocale
} from "./chunk-5UD4QETE.js";
import "./chunk-SMCEBM5N.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-IWE2L7TB.js";
import "./chunk-NENGVBR2.js";
import "./chunk-HL443C47.js";
import "./chunk-CYXRLQG5.js";
import "./chunk-3J34QIRL.js";
import "./chunk-H2TWZIV4.js";
import "./chunk-QX3Z5IJH.js";
import "./chunk-5GF2JGIL.js";
import "./chunk-H4C2RELO.js";
import "./chunk-5TP7JBLX.js";
import "./chunk-A7QASWR2.js";
import "./chunk-H4MURSTO.js";
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
