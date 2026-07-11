import {
  UniverActionRecorderPlugin
} from "./chunk-5NPBTBDG.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-G25ZH5TY.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-R6QH4Q75.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-5TTUOSMV.js";
import {
  UniverDebuggerPlugin
} from "./chunk-2SWJMQO2.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ZDEFGDLW.js";
import "./chunk-CZXO2EHL.js";
import {
  loadDebuggerLocale
} from "./chunk-XEDMF2YH.js";
import "./chunk-K4SM5Y37.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-O43U3FNJ.js";
import "./chunk-YYQJ5QCL.js";
import "./chunk-ZIISRROI.js";
import "./chunk-OGNT4O6K.js";
import "./chunk-GHR4IE63.js";
import "./chunk-O5T7UNDA.js";
import "./chunk-L5VQTX6F.js";
import "./chunk-FOCWDXCV.js";
import "./chunk-3FKRKIME.js";
import "./chunk-G7SXFZ34.js";
import "./chunk-7SRTVBCX.js";
import "./chunk-JKGF6EFW.js";
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
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
