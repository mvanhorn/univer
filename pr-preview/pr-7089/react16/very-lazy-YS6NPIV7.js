import {
  UniverActionRecorderPlugin
} from "./chunk-N4B753ZJ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-XS2XJ4J4.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-LOKP73CW.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GCUDECCE.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-HMDNU2ZQ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-JAKT7VGV.js";
import {
  UniverWatermarkPlugin
} from "./chunk-J2RK4P5U.js";
import "./chunk-OSOQAH3B.js";
import {
  loadDebuggerLocale
} from "./chunk-SUQUNGCT.js";
import "./chunk-QTMTRRUA.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-SVPGXPSA.js";
import "./chunk-COOOUSWH.js";
import "./chunk-MXO2WY5X.js";
import "./chunk-EA7FWG2H.js";
import "./chunk-ZJQNMU5F.js";
import "./chunk-AW6MVKEJ.js";
import "./chunk-233BGXLQ.js";
import "./chunk-ZVOMUIYQ.js";
import "./chunk-IAYOCKQB.js";
import "./chunk-KHIOYQPM.js";
import "./chunk-WJYUUTYJ.js";
import "./chunk-VCMSFB6X.js";
import "./chunk-IBIZ2ACU.js";
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
