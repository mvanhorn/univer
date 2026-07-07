import {
  UniverActionRecorderPlugin
} from "./chunk-OQRXCMDA.js";
import {
  UniverUniscriptPlugin
} from "./chunk-WUXQ7TNY.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-YF7PY7QA.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-6J7P6FIQ.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-MKOUOXWZ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-3AI6BVXI.js";
import {
  UniverWatermarkPlugin
} from "./chunk-LZ3OGU7C.js";
import "./chunk-JS4SNZMJ.js";
import {
  loadDebuggerLocale
} from "./chunk-2QOHNZC7.js";
import "./chunk-SMCEBM5N.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-JHYNOZWS.js";
import "./chunk-HYHJRQQV.js";
import "./chunk-FICMBN4N.js";
import "./chunk-3Z4IJ6R7.js";
import "./chunk-BDTXUQC3.js";
import "./chunk-H2TWZIV4.js";
import "./chunk-A3CUNGEZ.js";
import "./chunk-5GF2JGIL.js";
import "./chunk-Q2P5XVZA.js";
import "./chunk-5TP7JBLX.js";
import "./chunk-XDUQOG4J.js";
import "./chunk-X4BP5GHF.js";
import "./chunk-EC2T6UUU.js";
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
