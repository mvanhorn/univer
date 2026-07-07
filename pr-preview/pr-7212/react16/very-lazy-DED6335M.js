import {
  UniverActionRecorderPlugin
} from "./chunk-S4QBGUEA.js";
import {
  UniverUniscriptPlugin
} from "./chunk-UGB424BE.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-NRC2PUM2.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-VOVEUCID.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-EFIKPYQS.js";
import {
  UniverDebuggerPlugin
} from "./chunk-V5J5C5AB.js";
import {
  UniverWatermarkPlugin
} from "./chunk-4FBDVIOH.js";
import "./chunk-44PTMJJH.js";
import {
  loadDebuggerLocale
} from "./chunk-UQXM6FPC.js";
import "./chunk-IREWMXI6.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-RFUNPL62.js";
import "./chunk-TCR64DCC.js";
import "./chunk-3HFUVSES.js";
import "./chunk-CAQP7JLO.js";
import "./chunk-Z237YT5B.js";
import "./chunk-KDG6ZP5S.js";
import "./chunk-YZCSCC5F.js";
import "./chunk-AE2SMQJX.js";
import "./chunk-NHGWN3SD.js";
import "./chunk-WMVBWFQG.js";
import "./chunk-XOHMQ3ID.js";
import "./chunk-RN2D33K3.js";
import "./chunk-LT6FETEP.js";
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
