import {
  UniverActionRecorderPlugin
} from "./chunk-B6IQSPLE.js";
import {
  UniverUniscriptPlugin
} from "./chunk-AU7CSYB4.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-QSL2FDW3.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-QCB76XRN.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SLRPDIFT.js";
import {
  UniverDebuggerPlugin
} from "./chunk-R5H6WSWA.js";
import {
  UniverWatermarkPlugin
} from "./chunk-AIOK3JUI.js";
import "./chunk-Y7U24LMW.js";
import {
  loadDebuggerLocale
} from "./chunk-EG7Z3EN7.js";
import "./chunk-FJNOFSXO.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-JJ57X34P.js";
import "./chunk-HLCVIGJV.js";
import "./chunk-L2SWNQJB.js";
import "./chunk-JSCXODGS.js";
import "./chunk-TK4RYGIJ.js";
import "./chunk-CK5UGHQW.js";
import "./chunk-NX2652CH.js";
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
