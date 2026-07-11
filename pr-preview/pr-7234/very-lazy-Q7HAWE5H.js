import {
  UniverActionRecorderPlugin
} from "./chunk-TSEHSTF2.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-KS3RMWQA.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-HEUE5JRP.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-JAJLZQMX.js";
import {
  UniverDebuggerPlugin
} from "./chunk-YAA5RTXV.js";
import {
  UniverWatermarkPlugin
} from "./chunk-FUD5S5QA.js";
import "./chunk-KOYCS57Y.js";
import {
  loadDebuggerLocale
} from "./chunk-VTPGT6ON.js";
import "./chunk-V6NPHM7N.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-W4PWEWTG.js";
import "./chunk-WBF63BZZ.js";
import "./chunk-45BU76HS.js";
import "./chunk-AQJDCYMY.js";
import "./chunk-OV75INE4.js";
import "./chunk-PYZI7E3G.js";
import "./chunk-AUC5T5LR.js";
import "./chunk-EU7DAGSZ.js";
import "./chunk-MRAU7DSD.js";
import "./chunk-AJHNJVEY.js";
import "./chunk-PALYGNIK.js";
import "./chunk-SBUQW7IY.js";
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
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
