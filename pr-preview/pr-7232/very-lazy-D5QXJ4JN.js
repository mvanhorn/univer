import {
  UniverActionRecorderPlugin
} from "./chunk-2AZRORXZ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-JNMQJIFC.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-DHU5MZP6.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GXHNBZXN.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-Y2SPZDCC.js";
import {
  UniverDebuggerPlugin
} from "./chunk-J6NEEI3K.js";
import {
  UniverWatermarkPlugin
} from "./chunk-I3NJPLBF.js";
import "./chunk-5TUZC4HQ.js";
import {
  loadDebuggerLocale
} from "./chunk-P2HBZPXE.js";
import "./chunk-PURJMG72.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ODI2DMGR.js";
import "./chunk-CUAC4OUN.js";
import "./chunk-LEZBZMJJ.js";
import "./chunk-BH6XLSYI.js";
import "./chunk-VQDLXLSI.js";
import "./chunk-UDWWJ4UR.js";
import "./chunk-DISKKJ3L.js";
import "./chunk-LU6RABWA.js";
import "./chunk-NVWDFLBS.js";
import "./chunk-VGXED5QL.js";
import "./chunk-TVR7VRV3.js";
import "./chunk-C25FSR6I.js";
import "./chunk-OG5AOJFS.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-multi-units/very-lazy.ts
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
