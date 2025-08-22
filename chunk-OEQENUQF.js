import {
  addIcons,
  stopOutline
} from "./chunk-HZ2JK4VC.js";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRow,
  IonTitle,
  IonToolbar,
  IonicModule
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
  ActivatedRoute
} from "./chunk-R52OUTEQ.js";
import {
  CommonModule,
  FormsModule
} from "./chunk-P2WTEVB6.js";
import {
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate1
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

// src/app/detalle/detalle.page.ts
addIcons({ "stop-outline": stopOutline });
var _DetallePage = class _DetallePage {
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    this.cameraName = this.route.snapshot.paramMap.get("camera") || "";
    this.year = this.route.snapshot.paramMap.get("year") || "";
    this.month = this.route.snapshot.paramMap.get("month") || "";
    console.log("C\xE1mara:", this.cameraName);
    console.log("A\xF1o:", this.year);
    console.log("Mes:", this.month);
  }
};
_DetallePage.\u0275fac = function DetallePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DetallePage)(\u0275\u0275directiveInject(ActivatedRoute));
};
_DetallePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetallePage, selectors: [["app-detalle"]], decls: 50, vars: 2, consts: [["color", "dark"], ["slot", "start"], ["default-href", "#"], [1, "header-title", 2, "display", "flex", "align-items", "center", "justify-content", "center"], ["src", "assets/images/Logo.png", "alt", "Logo", "height", "80", "width", "80", 2, "margin-top", "25px", "margin-bottom", "16px"], [1, "camera-container"], ["name", "stop-outline", "aria-hidden", "false", 1, "camera-icon"], [1, "camera-grid"], [1, "text-white"], ["slot", "middle"], ["role", "button"], ["name", "stop-outline", "size", "large"]], template: function DetallePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
    \u0275\u0275element(3, "ion-back-button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-title", 3);
    \u0275\u0275element(5, "img", 4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-content", 0)(7, "ion-card", 0);
    \u0275\u0275element(8, "ion-card-header");
    \u0275\u0275elementStart(9, "ion-card-content")(10, "div", 5);
    \u0275\u0275element(11, "ion-icon", 6);
    \u0275\u0275elementStart(12, "div", 7);
    \u0275\u0275element(13, "ion-icon", 6)(14, "ion-icon", 6);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "ion-card", 0)(16, "ion-card-header")(17, "ion-card-title", 8);
    \u0275\u0275text(18, "Registers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ion-card-content")(20, "ion-grid")(21, "ion-row")(22, "ion-col")(23, "strong");
    \u0275\u0275text(24, "ID");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "ion-col")(26, "strong");
    \u0275\u0275text(27, "Register");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "ion-col")(29, "strong");
    \u0275\u0275text(30, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "ion-row")(32, "ion-col");
    \u0275\u0275text(33, "12346");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ion-col");
    \u0275\u0275text(35, "Smooth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ion-col");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "ion-row")(39, "ion-col");
    \u0275\u0275text(40, "56746");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ion-col");
    \u0275\u0275text(42, "Fire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ion-col");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(45, "ion-footer")(46, "ion-toolbar", 0)(47, "ion-buttons", 9)(48, "ion-button", 10);
    \u0275\u0275element(49, "ion-icon", 11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(37);
    \u0275\u0275textInterpolate1("12/01/", ctx.year, "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("10/01/", ctx.year, "");
  }
}, dependencies: [IonicModule, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonRow, IonTitle, IonToolbar, IonBackButton, CommonModule, FormsModule], styles: ["\n\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 16px;\n}\n.camera-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.camera-grid[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.camera-icon[_ngcontent-%COMP%] {\n  font-size: 100px;\n  color: white;\n}\n.text-white[_ngcontent-%COMP%] {\n  color: white;\n}"] });
var DetallePage = _DetallePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetallePage, { className: "DetallePage", filePath: "src/app/detalle/detalle.page.ts", lineNumber: 20 });
})();
export {
  DetallePage
};
