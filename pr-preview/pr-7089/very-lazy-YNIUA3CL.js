import {
  UniverActionRecorderPlugin
} from "./chunk-JVLEGIQB.js";
import {
  UniverUniscriptPlugin
} from "./chunk-QWNVWMKD.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-KFR3SUDT.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-CEJNL3IH.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-KWTYHFWV.js";
import {
  UniverDebuggerPlugin
} from "./chunk-7XPGREFZ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-AIOK3JUI.js";
import "./chunk-XA3QNWB6.js";
import {
  loadDebuggerLocale
} from "./chunk-CZVC54CD.js";
import "./chunk-FJNOFSXO.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-6O5PGWXS.js";
import "./chunk-EA43HBDU.js";
import "./chunk-N3GIUG2S.js";
import "./chunk-2EJUS4YB.js";
import "./chunk-YBBVZDW7.js";
import "./chunk-RPFYZG3Z.js";
import "./chunk-DQWTCUXD.js";
import "./chunk-ZQSMBML7.js";
import "./chunk-GFHK3ZAZ.js";
import "./chunk-6UDHLTCS.js";
import "./chunk-URQTML7U.js";
import "./chunk-TAI34DJM.js";
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
