import {
  UniverActionRecorderPlugin
} from "./chunk-P5SFDO5J.js";
import {
  UniverUniscriptPlugin
} from "./chunk-23JTWNQY.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-I2LJVIKX.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-QISSIXUE.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-BWE4CLFO.js";
import {
  UniverDebuggerPlugin
} from "./chunk-RKXFKCPY.js";
import {
  UniverWatermarkPlugin
} from "./chunk-TWPJTPTQ.js";
import "./chunk-6ISYQ5VJ.js";
import {
  loadDebuggerLocale
} from "./chunk-WOOEGOFT.js";
import "./chunk-KPHSLQLG.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-J42J6B3D.js";
import "./chunk-PPPGR76N.js";
import "./chunk-NRV2SHYO.js";
import "./chunk-PGF46Q7E.js";
import "./chunk-RLUIXECX.js";
import "./chunk-KCTUXWPE.js";
import "./chunk-ZD74E4RE.js";
import "./chunk-VSLW7ZRN.js";
import "./chunk-AVWMQQYI.js";
import "./chunk-YXX6FPCM.js";
import "./chunk-RMWK5QLU.js";
import "./chunk-3XZ73M6W.js";
import "./chunk-53ZUKXTZ.js";
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
