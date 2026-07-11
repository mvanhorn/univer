import {
  UniverActionRecorderPlugin
} from "./chunk-UNHIUFAB.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-EGPZFZRV.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-2R72CJ7D.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-RYSNAWGE.js";
import {
  UniverDebuggerPlugin
} from "./chunk-4ABEL7XK.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ZDEFGDLW.js";
import "./chunk-OYXN4XT4.js";
import {
  loadDebuggerLocale
} from "./chunk-NNERHKKR.js";
import "./chunk-SYRBEGPH.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-VJYSCAVD.js";
import "./chunk-YYQJ5QCL.js";
import "./chunk-CHZU2KKU.js";
import "./chunk-YOTG35AP.js";
import "./chunk-7PFJPHHW.js";
import "./chunk-27A2WM6O.js";
import "./chunk-GZW6II4T.js";
import "./chunk-TMF55I3D.js";
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
