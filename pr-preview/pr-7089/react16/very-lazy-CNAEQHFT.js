import {
  UniverActionRecorderPlugin
} from "./chunk-MWEV3AIQ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-AQYIYDU7.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-7DZLDB23.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-RCA2H3H2.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-DEXVO25G.js";
import {
  UniverDebuggerPlugin
} from "./chunk-4QVN3XIA.js";
import {
  UniverWatermarkPlugin
} from "./chunk-6E6TTBZV.js";
import "./chunk-TKOFCP7V.js";
import {
  loadDebuggerLocale
} from "./chunk-U4RVHO6W.js";
import "./chunk-YMNYVHHR.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-CW7FOWFD.js";
import "./chunk-IQGZ5TGW.js";
import "./chunk-ZY7GVFXV.js";
import "./chunk-RLOKW6JK.js";
import "./chunk-WBOZWFG6.js";
import "./chunk-42WBGQPP.js";
import "./chunk-UHQZI7IK.js";
import "./chunk-ZGYKVTIJ.js";
import "./chunk-QEHPBOYW.js";
import "./chunk-7OF42WTX.js";
import "./chunk-U5HR3MOQ.js";
import "./chunk-ZGC4B4ZI.js";
import "./chunk-64NTBQQD.js";
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
