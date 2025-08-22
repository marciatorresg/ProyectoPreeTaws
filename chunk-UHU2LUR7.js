import {
  safeCall
} from "./chunk-WLYU5JYH.js";
import "./chunk-IHK4FLNX.js";
import {
  getClassMap
} from "./chunk-MMS4BU4E.js";
import "./chunk-36T2BHYJ.js";
import "./chunk-KQRPAB76.js";
import "./chunk-2VHYZHLL.js";
import "./chunk-5YLLS5NO.js";
import "./chunk-MIOLVGSM.js";
import {
  getIonMode
} from "./chunk-YEJWSVBF.js";
import {
  Host,
  forceUpdate,
  getElement,
  h,
  registerInstance
} from "./chunk-X2BD5LDJ.js";
import "./chunk-RPHWXCVC.js";

// node_modules/@ionic/core/dist/esm/ion-select-modal.entry.js
var ionicSelectModalMdCss = ".sc-ion-select-modal-ionic-h{height:100%}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(container){display:none}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-ionic{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-ionic{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-ionic{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}";
var IonSelectModalIonicStyle0 = ionicSelectModalMdCss;
var selectModalIosCss = '.sc-ion-select-modal-ios-h{height:100%}ion-item.sc-ion-select-modal-ios{--inner-padding-end:0}ion-radio.sc-ion-select-modal-ios::after{bottom:0;position:absolute;width:calc(100% - 0.9375rem - 16px);border-width:0px 0px 0.55px 0px;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));content:""}ion-radio.sc-ion-select-modal-ios::after{inset-inline-start:calc(0.9375rem + 16px)}';
var IonSelectModalIosStyle0 = selectModalIosCss;
var selectModalMdCss = ".sc-ion-select-modal-md-h{height:100%}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(container){display:none}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-md{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}";
var IonSelectModalMdStyle0 = selectModalMdCss;
var SelectModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.header = void 0;
    this.multiple = void 0;
    this.options = [];
  }
  closeModal() {
    const modal = this.el.closest("ion-modal");
    if (modal) {
      modal.dismiss();
    }
  }
  findOptionFromEvent(ev) {
    const {
      options
    } = this;
    return options.find((o) => o.value === ev.target.value);
  }
  getValues(ev) {
    const {
      multiple,
      options
    } = this;
    if (multiple) {
      return options.filter((o) => o.checked).map((o) => o.value);
    }
    const option = ev ? this.findOptionFromEvent(ev) : null;
    return option ? option.value : void 0;
  }
  callOptionHandler(ev) {
    const option = this.findOptionFromEvent(ev);
    const values = this.getValues(ev);
    if (option === null || option === void 0 ? void 0 : option.handler) {
      safeCall(option.handler, values);
    }
  }
  setChecked(ev) {
    const {
      multiple
    } = this;
    const option = this.findOptionFromEvent(ev);
    if (multiple && option) {
      option.checked = ev.detail.checked;
    }
  }
  renderRadioOptions() {
    const checked = this.options.filter((o) => o.checked).map((o) => o.value)[0];
    return h("ion-radio-group", {
      value: checked,
      onIonChange: (ev) => this.callOptionHandler(ev)
    }, this.options.map((option) => h("ion-item", {
      lines: "none",
      class: Object.assign({
        // TODO FW-4784
        "item-radio-checked": option.value === checked
      }, getClassMap(option.cssClass))
    }, h("ion-radio", {
      value: option.value,
      disabled: option.disabled,
      justify: "start",
      labelPlacement: "end",
      onClick: () => this.closeModal(),
      onKeyUp: (ev) => {
        if (ev.key === " ") {
          this.closeModal();
        }
      }
    }, option.text))));
  }
  renderCheckboxOptions() {
    return this.options.map((option) => h("ion-item", {
      class: Object.assign({
        // TODO FW-4784
        "item-checkbox-checked": option.checked
      }, getClassMap(option.cssClass))
    }, h("ion-checkbox", {
      value: option.value,
      disabled: option.disabled,
      checked: option.checked,
      justify: "start",
      labelPlacement: "end",
      onIonChange: (ev) => {
        this.setChecked(ev);
        this.callOptionHandler(ev);
        forceUpdate(this);
      }
    }, option.text)));
  }
  render() {
    return h(Host, {
      key: "4df42c447b4026d09d9231f09dc4bdae9a8cfe4a",
      class: getIonMode(this)
    }, h("ion-header", {
      key: "211c4e869b858867f3d60637e570aeb01de41de7"
    }, h("ion-toolbar", {
      key: "dc4b151331aecbaaaafb460802ee9b689493601d"
    }, this.header !== void 0 && h("ion-title", {
      key: "ba1347a59ae0a5c6770c239b5ec02a536a445bd1"
    }, this.header), h("ion-buttons", {
      key: "43c98fd25d7e7f54b94b24e53535c6d5ba599892",
      slot: "end"
    }, h("ion-button", {
      key: "51b2b3f3eed42637b2cfc213c95d0bcf10e4b89d",
      onClick: () => this.closeModal()
    }, "Close")))), h("ion-content", {
      key: "fe721b09f80555856211f7e40dbfc31a533acae1"
    }, h("ion-list", {
      key: "d0b932d137136958d896408fb2fa571023775b92"
    }, this.multiple === true ? this.renderCheckboxOptions() : this.renderRadioOptions())));
  }
  get el() {
    return getElement(this);
  }
};
SelectModal.style = {
  ionic: IonSelectModalIonicStyle0,
  ios: IonSelectModalIosStyle0,
  md: IonSelectModalMdStyle0
};
export {
  SelectModal as ion_select_modal
};
