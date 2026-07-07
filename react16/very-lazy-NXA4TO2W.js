import {
  UniverActionRecorderPlugin
} from "./chunk-4F3FCU2N.js";
import {
  UniverUniscriptPlugin
} from "./chunk-FL36XVUN.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-DCC2YB77.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-FKB5LPTK.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SMQ2DNGA.js";
import {
  UniverDebuggerPlugin
} from "./chunk-Z3RK5RWE.js";
import {
  UniverWatermarkPlugin
} from "./chunk-4ZWMBXIF.js";
import "./chunk-NRMUB4DP.js";
import {
  loadDebuggerLocale
} from "./chunk-R4CZNNLB.js";
import "./chunk-26HZVDNR.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-3QJ5466L.js";
import "./chunk-JCAPPKCA.js";
import "./chunk-AQHIUS3Q.js";
import "./chunk-FEQDP2G7.js";
import "./chunk-DB56H76C.js";
import "./chunk-7XZ7DHNP.js";
import "./chunk-3WOZTQYO.js";
import "./chunk-4GOOIQ6L.js";
import "./chunk-QCUG2TSB.js";
import "./chunk-HGXCW6X5.js";
import "./chunk-KY3OPPOE.js";
import "./chunk-6VU3U6PO.js";
import "./chunk-BZ7UQADZ.js";
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
