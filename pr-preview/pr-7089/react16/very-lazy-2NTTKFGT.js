import {
  UniverActionRecorderPlugin
} from "./chunk-N6UK5746.js";
import {
  UniverUniscriptPlugin
} from "./chunk-UCASMRYS.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-PKUGV4ZE.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-T5QKL5IH.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-46ONMEI2.js";
import {
  UniverDebuggerPlugin
} from "./chunk-A7GJXXQE.js";
import {
  UniverWatermarkPlugin
} from "./chunk-AIOK3JUI.js";
import "./chunk-4WKZECRZ.js";
import {
  loadDebuggerLocale
} from "./chunk-GMMMTEPE.js";
import "./chunk-FJNOFSXO.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-RHEUQ43A.js";
import "./chunk-HLCVIGJV.js";
import "./chunk-4HDKF3BA.js";
import "./chunk-H5B3YQKX.js";
import "./chunk-62ISQU23.js";
import "./chunk-M6CFKAUN.js";
import "./chunk-YYY2VM6P.js";
import "./chunk-ZQSMBML7.js";
import "./chunk-JJRCNODX.js";
import "./chunk-6UDHLTCS.js";
import "./chunk-66AJFP3O.js";
import "./chunk-GO2XKGCC.js";
import "./chunk-6GPVK25F.js";
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
