import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonicModule,
  RouterLinkDelegateDirective,
  TextValueAccessorDirective
} from "./chunk-PR2JRFNA.js";
import "./chunk-CPZISJIQ.js";
import "./chunk-NZMHXT3H.js";
import "./chunk-FSNG64YB.js";
import "./chunk-B5WYDVA2.js";
import "./chunk-2S57T3GS.js";
import "./chunk-R4QHACMO.js";
import "./chunk-WLYU5JYH.js";
import "./chunk-RIBVNXHQ.js";
import "./chunk-IHK4FLNX.js";
import "./chunk-MMS4BU4E.js";
import {
  RouterLink
} from "./chunk-R52OUTEQ.js";
import {
  CommonModule,
  FormsModule
} from "./chunk-P2WTEVB6.js";
import {
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-MWAOZ3JH.js";
import "./chunk-36T2BHYJ.js";
import "./chunk-KQRPAB76.js";
import "./chunk-T4GYAOTA.js";
import "./chunk-2VHYZHLL.js";
import "./chunk-5YLLS5NO.js";
import "./chunk-MIOLVGSM.js";
import "./chunk-YEJWSVBF.js";
import "./chunk-X2BD5LDJ.js";
import "./chunk-KHEJSYUF.js";
import "./chunk-PR5QCX32.js";
import "./chunk-FWP6LYQA.js";
import "./chunk-7LRYXUKF.js";
import "./chunk-TPAH2XG2.js";
import "./chunk-6GNX4PUI.js";
import "./chunk-MFQFSJGN.js";
import "./chunk-BXJDQZJK.js";
import "./chunk-R6JLIESI.js";
import "./chunk-OJO5RD3M.js";
import "./chunk-RPHWXCVC.js";

// src/app/log/log.page.ts
var _c0 = () => ["/principal-page"];
var _LogPage = class _LogPage {
  constructor() {
  }
  ngOnInit() {
  }
};
_LogPage.\u0275fac = function LogPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LogPage)();
};
_LogPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogPage, selectors: [["app-log"]], decls: 28, vars: 3, consts: [[1, "log-container", 3, "fullscreen"], [1, "logo-container"], ["src", "assets/images/Logo.png", "alt", "Logo"], [1, "page-content"], [1, "login-box"], ["type", "email", "placeholder", "Email address"], ["type", "password", "placeholder", "Password"], [1, "forgot-password"], ["href", "#"], ["expand", "block", "shape", "round", "color", "warning", 3, "routerLink"], [1, "login-with"], ["expand", "block", "shape", "round", "fill", "outline", "color", "light"], ["src", "assets/icon/logo-google.png", "alt", "logo-google", 1, "icon-img"], ["expand", "block", "shape", "round", "color", "primary"], ["src", "assets/icon/logo-facebook.jpeg", "alt", "logo-facebook", 1, "icon-img"], [1, "signup-text"]], template: function LogPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2");
    \u0275\u0275text(6, "Log in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-item");
    \u0275\u0275element(8, "ion-input", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-item");
    \u0275\u0275element(10, "ion-input", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 7)(12, "a", 8);
    \u0275\u0275text(13, "Forgot your password?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ion-button", 9);
    \u0275\u0275text(15, " Log in ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 10);
    \u0275\u0275text(17, "Login with");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-button", 11);
    \u0275\u0275element(19, "img", 12);
    \u0275\u0275text(20, " Sign in with Google ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ion-button", 13);
    \u0275\u0275element(22, "img", 14);
    \u0275\u0275text(23, " Sign in with Facebook ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 15);
    \u0275\u0275text(25, " Doesn't have an account? ");
    \u0275\u0275elementStart(26, "a");
    \u0275\u0275text(27, "Sign up");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(14);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0));
  }
}, dependencies: [CommonModule, FormsModule, RouterLink, IonicModule, IonButton, IonContent, IonInput, IonItem, TextValueAccessorDirective, RouterLinkDelegateDirective], styles: ["\n\n.log-container[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #1a1a1a;\n  color: white;\n  text-align: center;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.page-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  margin-top: 40px;\n}\n.login-box[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 350px;\n  padding: 20px;\n  background: #222;\n  border-radius: 10px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\nion-item[_ngcontent-%COMP%] {\n  --background: #333;\n  --color: white;\n  margin-bottom: 10px;\n}\n.forgot-password[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n.login-with[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  font-size: 14px;\n}\n.signup-text[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 14px;\n}\n.signup-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: orange;\n  text-decoration: none;\n  font-weight: bold;\n}\n.icon-img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n}"] });
var LogPage = _LogPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogPage, { className: "LogPage", filePath: "src/app/log/log.page.ts", lineNumber: 15 });
})();
export {
  LogPage
};
