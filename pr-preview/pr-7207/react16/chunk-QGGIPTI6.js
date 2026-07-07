import {
  DisableCrosshairHighlightOperation,
  EnableCrosshairHighlightOperation,
  SheetsCrosshairHighlightService,
  ToggleCrosshairHighlightOperation
} from "./chunk-IB6JKKQX.js";
import {
  FEventName,
  FUniver
} from "./chunk-SXN7Z57E.js";
import {
  ICommandService
} from "./chunk-FA4FHKBV.js";

// ../packages/sheets-crosshair-highlight/src/facade/f-univer.ts
var FUniverSheetsCrosshairHighlightMixin = class extends FUniver {
  /**
   * @ignore
   */
  _initialize(injector) {
    const commandService = injector.get(ICommandService);
    this.disposeWithMe(
      this.registerEventHandler(
        this.Event.CrosshairHighlightEnabledChanged,
        () => commandService.onCommandExecuted((commandInfo) => {
          if (commandInfo.id === EnableCrosshairHighlightOperation.id || commandInfo.id === DisableCrosshairHighlightOperation.id || commandInfo.id === ToggleCrosshairHighlightOperation.id) {
            const activeSheet = this.getActiveSheet();
            if (!activeSheet) return;
            const eventParams = {
              enabled: this.getCrosshairHighlightEnabled(),
              ...activeSheet
            };
            this.fireEvent(this.Event.CrosshairHighlightEnabledChanged, eventParams);
          }
        })
      )
    );
  }
  setCrosshairHighlightEnabled(enabled) {
    if (enabled) {
      this._commandService.syncExecuteCommand(EnableCrosshairHighlightOperation.id);
    } else {
      this._commandService.syncExecuteCommand(DisableCrosshairHighlightOperation.id);
    }
    return this;
  }
  getCrosshairHighlightEnabled() {
    const crosshairHighlightService = this._injector.get(SheetsCrosshairHighlightService);
    return crosshairHighlightService.enabled;
  }
};
FUniver.extend(FUniverSheetsCrosshairHighlightMixin);

// ../packages/sheets-crosshair-highlight/src/facade/f-event.ts
var FSheetsCrosshairHighlightEventNameMixin = class extends FEventName {
  get CrosshairHighlightEnabledChanged() {
    return "CrosshairHighlightEnabledChanged";
  }
};
FEventName.extend(FSheetsCrosshairHighlightEventNameMixin);
