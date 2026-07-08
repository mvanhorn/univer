import {
  UniverActionRecorderPlugin
} from "./chunk-H5T2VNY6.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-2D2ZQS2Z.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-IKS5VNR2.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-N2FH6UJR.js";
import {
  UniverDebuggerPlugin
} from "./chunk-7V5B5YB3.js";
import {
  UniverWatermarkPlugin
} from "./chunk-NZMO3XT4.js";
import "./chunk-JZLTBQAO.js";
import {
  loadDebuggerLocale
} from "./chunk-PDJAB46G.js";
import "./chunk-4PUE7TL5.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-QYVDTM45.js";
import "./chunk-RPE4X3DN.js";
import "./chunk-NOR6TWKC.js";
import "./chunk-7DTPPT6O.js";
import "./chunk-FKSEKT7V.js";
import "./chunk-IVTMXESQ.js";
import "./chunk-7SRQGU7L.js";
import "./chunk-CW4AY6N2.js";
import "./chunk-PZRZOMZL.js";
import "./chunk-EONZRXWG.js";
import "./chunk-EIBURWCE.js";
import "./chunk-DFUEVBKC.js";
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
