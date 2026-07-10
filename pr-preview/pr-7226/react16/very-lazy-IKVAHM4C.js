import {
  UniverActionRecorderPlugin
} from "./chunk-6FBBFZXM.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-N3DURZLF.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-FPGA7QLP.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-7V6OQJYN.js";
import {
  UniverDebuggerPlugin
} from "./chunk-CJBESSOT.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2GZU5HIB.js";
import "./chunk-GAHEIALI.js";
import {
  loadDebuggerLocale
} from "./chunk-ITLA2DS7.js";
import "./chunk-PMI33N72.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-T6VJXWOI.js";
import "./chunk-QNCILETD.js";
import "./chunk-YNY3RCMV.js";
import "./chunk-25HXKTL2.js";
import "./chunk-ZDAZIQSO.js";
import "./chunk-U456YIXR.js";
import "./chunk-DDRE5RJY.js";
import "./chunk-3BM76LJM.js";
import "./chunk-2OFXGP3A.js";
import "./chunk-MCZBJK6L.js";
import "./chunk-Q3HG77NM.js";
import "./chunk-M2MWB6U2.js";
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
