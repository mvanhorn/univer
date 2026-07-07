import {
  UniverActionRecorderPlugin
} from "./chunk-ZGGFRRUG.js";
import {
  UniverUniscriptPlugin
} from "./chunk-RWTS2O35.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-XGAHCBKM.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-F2KJCR6M.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-IAAFD4M3.js";
import {
  UniverDebuggerPlugin
} from "./chunk-XYJ453LM.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JIDABVSX.js";
import "./chunk-FEQGLBD7.js";
import {
  loadDebuggerLocale
} from "./chunk-EKMR54NI.js";
import "./chunk-ZS7KXRW4.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-FTZDEJZQ.js";
import "./chunk-5AHFJDRZ.js";
import "./chunk-GF7VFGIL.js";
import "./chunk-PBYFXKWV.js";
import "./chunk-2L3MB7NR.js";
import "./chunk-HOWFZZY3.js";
import "./chunk-DV6J5ZIJ.js";
import "./chunk-V532XFUH.js";
import "./chunk-PAB77PEQ.js";
import "./chunk-FAVXEKSH.js";
import "./chunk-AHI4XB5F.js";
import "./chunk-LFCAT4GF.js";
import "./chunk-CBGIOZGI.js";
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
