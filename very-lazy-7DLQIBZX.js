import {
  UniverActionRecorderPlugin
} from "./chunk-I53DPVWE.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-UP3Y5QBJ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-CAVCCGZ5.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-FTFAJXH2.js";
import {
  UniverDebuggerPlugin
} from "./chunk-PNZOV76I.js";
import {
  UniverWatermarkPlugin
} from "./chunk-K6REBI5O.js";
import "./chunk-62X7QK42.js";
import {
  loadDebuggerLocale
} from "./chunk-II2AZQAX.js";
import "./chunk-QMEJ6ZKY.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-GU7QH57D.js";
import "./chunk-5RDHIJMY.js";
import "./chunk-PEAFN7ZQ.js";
import "./chunk-CJ6DHYMV.js";
import "./chunk-QZVDG6QU.js";
import "./chunk-2RXBLMEL.js";
import "./chunk-DJK32BKN.js";
import "./chunk-5WPUL4JN.js";
import "./chunk-QNDLTLR6.js";
import "./chunk-MESKVJUQ.js";
import "./chunk-JZ2LFV55.js";
import "./chunk-YAGO4HXX.js";
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
