import {
  UniverActionRecorderPlugin
} from "./chunk-BYDRBA5G.js";
import {
  UniverUniscriptPlugin
} from "./chunk-W6H7HPHH.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-CRIJ4G6Y.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-UHIRBOBB.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-NSKPNCZV.js";
import {
  UniverDebuggerPlugin
} from "./chunk-7M67DX4E.js";
import {
  UniverWatermarkPlugin
} from "./chunk-FVYYILXI.js";
import "./chunk-2WELJEQT.js";
import {
  loadDebuggerLocale
} from "./chunk-FZZH7ZHU.js";
import "./chunk-B5Z3ULVJ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-OLGRVSSA.js";
import "./chunk-ZQ65Q5TK.js";
import "./chunk-5ONOSVY4.js";
import "./chunk-7NRS6IMW.js";
import "./chunk-WCMQYU5M.js";
import "./chunk-7BZAPDYT.js";
import "./chunk-URISZOSO.js";
import "./chunk-66F6IXH3.js";
import "./chunk-W2CQHLHX.js";
import "./chunk-AEYG3EZL.js";
import "./chunk-DHOPL66F.js";
import "./chunk-BG7SGHYA.js";
import "./chunk-II7REV6J.js";
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
