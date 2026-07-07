import {
  UniverActionRecorderPlugin
} from "./chunk-W5FVUBKB.js";
import {
  UniverUniscriptPlugin
} from "./chunk-Z4ADWE4K.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-LVUC3C6Y.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-PLSUAJ6K.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-XCS5RKO4.js";
import {
  UniverDebuggerPlugin
} from "./chunk-HFSJEZB5.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JIDABVSX.js";
import "./chunk-AGRX6UOX.js";
import {
  loadDebuggerLocale
} from "./chunk-T3BP7CKR.js";
import "./chunk-UKHWBWYO.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-AKNVC7DH.js";
import "./chunk-5AHFJDRZ.js";
import "./chunk-O35NOWKW.js";
import "./chunk-EQ3TOMMO.js";
import "./chunk-2KUXQJTA.js";
import "./chunk-D5H5P7PW.js";
import "./chunk-N4DOMT35.js";
import "./chunk-F7KMDBHX.js";
import "./chunk-PAB77PEQ.js";
import "./chunk-FAVXEKSH.js";
import "./chunk-AHI4XB5F.js";
import "./chunk-LFCAT4GF.js";
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
