import {
  UniverActionRecorderPlugin
} from "./chunk-NMTSBWVJ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-4BY2OHIG.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-COMNKCM5.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-YVPSK7CP.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-H4FOLO57.js";
import {
  UniverDebuggerPlugin
} from "./chunk-UDO3UEYU.js";
import {
  UniverWatermarkPlugin
} from "./chunk-LZ3OGU7C.js";
import "./chunk-644STK6C.js";
import {
  loadDebuggerLocale
} from "./chunk-KSKDGKXI.js";
import "./chunk-SMCEBM5N.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-OEI6ACCV.js";
import "./chunk-7JXV5UTP.js";
import "./chunk-REMPWZQO.js";
import "./chunk-4A3GNYNZ.js";
import "./chunk-QOF4FZ33.js";
import "./chunk-DCGTG6OW.js";
import "./chunk-KARNHZ6C.js";
import "./chunk-5GF2JGIL.js";
import "./chunk-WKBB45GC.js";
import "./chunk-5TP7JBLX.js";
import "./chunk-5AX63AZ7.js";
import "./chunk-I5NKUZXR.js";
import "./chunk-EC2T6UUU.js";
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
