import {
  UniverUniscriptPlugin
} from "../chunk-WUXQ7TNY.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-P3GRW4QB.js";
import {
  UniverDebuggerPlugin
} from "../chunk-TZL3JPCS.js";
import "../chunk-LZ3OGU7C.js";
import {
  zh_CN_default
} from "../chunk-J7LYHFI6.js";
import "../chunk-JS4SNZMJ.js";
import "../chunk-DBRQB4K6.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-2QOHNZC7.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-NTCHJJNM.js";
import "../chunk-3Z4IJ6R7.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-BDTXUQC3.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-H2TWZIV4.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-A3CUNGEZ.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-5GF2JGIL.js";
import "../chunk-2FVEG47S.js";
import "../chunk-5TP7JBLX.js";
import "../chunk-GNAKMJK7.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-XDUQOG4J.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-X4BP5GHF.js";
import {
  Univer,
  UniverRenderEnginePlugin
} from "../chunk-EC2T6UUU.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// src/sheets-uniscript/main.ts
var IS_E2E = false;
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
  ribbonType: "classic"
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(UniverSheetsNumfmtUIPlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);
univer.registerPlugin(UniverUniscriptPlugin, {
  getWorkerUrl(_, label) {
    if (label === "typescript" || label === "javascript") {
      return "/vs/language/typescript/ts.worker.js";
    }
    return "/vs/editor/editor.worker.js";
  }
});
if (IS_E2E) {
  univer.registerPlugin(UniverDebuggerPlugin, {
    fab: false,
    fabEntryUnitType: 2 /* UNIVER_SHEET */,
    localeLoader: loadDebuggerLocale,
    performanceMonitor: {
      enabled: false
    }
  });
}
univer.createUnit(2 /* UNIVER_SHEET */, UNISCRIT_WORKBOOK_DATA_DEMO);
window.univer = univer;
