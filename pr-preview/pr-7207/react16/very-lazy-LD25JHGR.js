import {
  UniverActionRecorderPlugin
} from "./chunk-LZKQOUNQ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-4C7EI5ES.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-HOKBXQSI.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-2YOHSSUK.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-34XHLW2N.js";
import {
  UniverDebuggerPlugin
} from "./chunk-H3M6DPPH.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Q7VDCPLX.js";
import "./chunk-C4V6SOE5.js";
import {
  loadDebuggerLocale
} from "./chunk-XU5KUE6F.js";
import "./chunk-VH3R7LRG.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-JVAUMZNN.js";
import "./chunk-FHILK56I.js";
import "./chunk-ACMDF5UP.js";
import "./chunk-HUOYGETC.js";
import "./chunk-DBA2T5R4.js";
import "./chunk-7P6YQMKU.js";
import "./chunk-NOH7ZSVD.js";
import "./chunk-AWSF72S7.js";
import "./chunk-JL33YX5S.js";
import "./chunk-A6NJHS2C.js";
import "./chunk-MTF6YIZF.js";
import "./chunk-JIF4X2EQ.js";
import "./chunk-YCXVR2BL.js";
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
