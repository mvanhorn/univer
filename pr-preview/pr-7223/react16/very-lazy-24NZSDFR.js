import {
  UniverActionRecorderPlugin
} from "./chunk-LQTPZK55.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-VX5A423N.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ZJ2KA2QF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-7TNSCVMX.js";
import {
  UniverDebuggerPlugin
} from "./chunk-HTPS63OF.js";
import {
  UniverWatermarkPlugin
} from "./chunk-OVCFMYMG.js";
import "./chunk-QLMTVGFS.js";
import {
  loadDebuggerLocale
} from "./chunk-OCAI7AGA.js";
import "./chunk-BU2IDZJI.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-PJLBKBHI.js";
import "./chunk-IML2UZU3.js";
import "./chunk-R47IWCWR.js";
import "./chunk-UBWGWF3E.js";
import "./chunk-JNXRWLXT.js";
import "./chunk-35YA4EBZ.js";
import "./chunk-HQL7V2WW.js";
import "./chunk-RR54J243.js";
import "./chunk-DQIYATOD.js";
import "./chunk-ZAFX2KIK.js";
import "./chunk-OP5GA72W.js";
import "./chunk-CQ7Q36VO.js";
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
