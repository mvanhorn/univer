import {
  UniverActionRecorderPlugin
} from "./chunk-IFNNVR32.js";
import {
  UniverUniscriptPlugin
} from "./chunk-NFQF6NGI.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-BTNFF2JM.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-HAC6MP3M.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SMI7GAUT.js";
import {
  UniverDebuggerPlugin
} from "./chunk-4BPRSKDT.js";
import {
  UniverWatermarkPlugin
} from "./chunk-7CYFOT77.js";
import "./chunk-HABVI4DR.js";
import {
  loadDebuggerLocale
} from "./chunk-YQNLBBK5.js";
import "./chunk-3HFV7UEO.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-Z7MZXBHB.js";
import "./chunk-SCUEQJIF.js";
import "./chunk-FT6PYCC3.js";
import "./chunk-I36OXUVZ.js";
import "./chunk-Q3UNBSFA.js";
import "./chunk-UWQ6I5HN.js";
import "./chunk-YAIB3M2F.js";
import "./chunk-DROW6W4O.js";
import "./chunk-LMU7UQMI.js";
import "./chunk-QRFWOEYQ.js";
import "./chunk-BXRAFU5X.js";
import "./chunk-C3ZHGZZI.js";
import "./chunk-4P6UE246.js";
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
