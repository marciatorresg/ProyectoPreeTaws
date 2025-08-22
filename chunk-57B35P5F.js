import {
  IonContent
} from "./chunk-CMYGH4AF.js";
import {
  Router
} from "./chunk-R52OUTEQ.js";
import "./chunk-P2WTEVB6.js";
import {
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty
} from "./chunk-MWAOZ3JH.js";
import "./chunk-JWMG3DTA.js";
import "./chunk-LPMBLWVS.js";
import "./chunk-KHEJSYUF.js";
import "./chunk-PR5QCX32.js";
import "./chunk-FWP6LYQA.js";
import "./chunk-7LRYXUKF.js";
import "./chunk-TPAH2XG2.js";
import "./chunk-6GNX4PUI.js";
import "./chunk-MFQFSJGN.js";
import "./chunk-KFBF5L4X.js";
import "./chunk-BXJDQZJK.js";
import "./chunk-R6JLIESI.js";
import "./chunk-UG6K57PI.js";
import "./chunk-UR6VIRNL.js";
import "./chunk-OJO5RD3M.js";
import "./chunk-RPHWXCVC.js";

// src/app/home/home.page.ts
var _HomePage = class _HomePage {
  constructor(router) {
    this.router = router;
    setTimeout(() => {
      this.router.navigate(["/log"]);
    }, 3e3);
  }
};
_HomePage.\u0275fac = function HomePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePage)(\u0275\u0275directiveInject(Router));
};
_HomePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home"]], decls: 4, vars: 1, consts: [[3, "fullscreen"], ["id", "container"], ["src", "assets/images/Logo.png", "alt", "Logo"]], template: function HomePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2)(3, "img");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
  }
}, dependencies: [IonContent], styles: ["\n\n#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}"] });
var HomePage = _HomePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/home/home.page.ts", lineNumber: 11 });
})();
export {
  HomePage
};
