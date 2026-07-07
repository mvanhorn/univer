import {
  UniverActionRecorderPlugin
} from "./chunk-GD2L5WNK.js";
import {
  UniverUniscriptPlugin
} from "./chunk-WF2JV2MI.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-KZ3CUWBV.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-AJIJDZ35.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-GIZMSFTE.js";
import {
  UniverDebuggerPlugin
} from "./chunk-5B5MTN7S.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JIDABVSX.js";
import "./chunk-4JMVO2BT.js";
import {
  loadDebuggerLocale
} from "./chunk-25GOHVTU.js";
import "./chunk-ZS7KXRW4.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-27DWEFVU.js";
import "./chunk-CR44Z4ZY.js";
import "./chunk-TLAJNLCW.js";
import "./chunk-T7RLS6AH.js";
import "./chunk-4QQMIHR2.js";
import "./chunk-6T3DNBPR.js";
import "./chunk-663NML57.js";
import "./chunk-V532XFUH.js";
import "./chunk-4UG6W7EV.js";
import "./chunk-FAVXEKSH.js";
import "./chunk-AAAEP34O.js";
import "./chunk-UYNZVVVW.js";
import "./chunk-CBGIOZGI.js";
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
