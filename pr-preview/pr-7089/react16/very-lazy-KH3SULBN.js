import {
  UniverActionRecorderPlugin
} from "./chunk-527MVUWF.js";
import {
  UniverUniscriptPlugin
} from "./chunk-X2SGEZWD.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-JQ4OBF6O.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-5VMK5H6Y.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-2W6YVTSW.js";
import {
  UniverDebuggerPlugin
} from "./chunk-GOQOZXVX.js";
import {
  UniverWatermarkPlugin
} from "./chunk-AIOK3JUI.js";
import "./chunk-JB55TVRC.js";
import {
  loadDebuggerLocale
} from "./chunk-ZSXD76HM.js";
import "./chunk-FJNOFSXO.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-MIU5JYT4.js";
import "./chunk-HLCVIGJV.js";
import "./chunk-XYS6OW4C.js";
import "./chunk-4YQLAMP3.js";
import "./chunk-TAOLRQUZ.js";
import "./chunk-JAPOFLK5.js";
import "./chunk-5XJJ3A2O.js";
import "./chunk-ZQSMBML7.js";
import "./chunk-JJRCNODX.js";
import "./chunk-6UDHLTCS.js";
import "./chunk-66AJFP3O.js";
import "./chunk-GO2XKGCC.js";
import "./chunk-6GPVK25F.js";
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
