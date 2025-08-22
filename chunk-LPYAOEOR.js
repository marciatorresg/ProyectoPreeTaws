import {
  DataService
} from "./chunk-6DXP34UG.js";
import {
  addIcons,
  stopOutline
} from "./chunk-HZ2JK4VC.js";
import {
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
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
  Router,
  RouterModule
} from "./chunk-R52OUTEQ.js";
import {
  CommonModule,
  FormsModule,
  NgForOf,
  NgIf
} from "./chunk-P2WTEVB6.js";
import {
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
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

// src/app/cameras/cameras.page.ts
var _c0 = ["liveCamera"];
function CamerasPage_ng_container_10_ng_container_4_ng_container_2_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item", 12);
    \u0275\u0275listener("click", function CamerasPage_ng_container_10_ng_container_4_ng_container_2_ng_container_4_ng_container_2_Template_ion_item_click_1_listener() {
      const month_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const year_r5 = \u0275\u0275nextContext(2).$implicit;
      const camera_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDetail(camera_r2.name, year_r5.year.toString(), month_r7.name));
    });
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const month_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(month_r7.name);
  }
}
function CamerasPage_ng_container_10_ng_container_4_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-list");
    \u0275\u0275template(2, CamerasPage_ng_container_10_ng_container_4_ng_container_2_ng_container_4_ng_container_2_Template, 4, 1, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const year_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", year_r5.months);
  }
}
function CamerasPage_ng_container_10_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item", 12);
    \u0275\u0275listener("click", function CamerasPage_ng_container_10_ng_container_4_ng_container_2_Template_ion_item_click_1_listener() {
      const year_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleYear(year_r5));
    });
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CamerasPage_ng_container_10_ng_container_4_ng_container_2_ng_container_4_Template, 3, 1, "ng-container", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const year_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(year_r5.year);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", year_r5.expanded);
  }
}
function CamerasPage_ng_container_10_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-list");
    \u0275\u0275template(2, CamerasPage_ng_container_10_ng_container_4_ng_container_2_Template, 5, 2, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const camera_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", camera_r2.years);
  }
}
function CamerasPage_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item", 12);
    \u0275\u0275listener("click", function CamerasPage_ng_container_10_Template_ion_item_click_1_listener() {
      const camera_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleCamera(camera_r2));
    });
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CamerasPage_ng_container_10_ng_container_4_Template, 3, 1, "ng-container", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const camera_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(camera_r2.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", camera_r2.expanded);
  }
}
function CamerasPage_ion_col_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 14)(1, "ion-card", 15);
    \u0275\u0275element(2, "img", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const det_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", det_r8, \u0275\u0275sanitizeUrl);
  }
}
addIcons({ "stop-outline": stopOutline });
var _CamerasPage = class _CamerasPage {
  constructor(router, dataService) {
    this.router = router;
    this.dataService = dataService;
    this.isDragging = false;
    this.offsetX = 0;
    this.offsetY = 0;
    this.imagenes = [];
    this.menuData = [
      {
        name: "Backyard",
        years: [
          {
            year: 2025,
            expanded: false,
            months: [
              { name: "January", expanded: false },
              { name: "February", expanded: false }
            ]
          }
        ],
        expanded: false
      },
      {
        name: "Living Room",
        years: [
          {
            year: 2025,
            expanded: false,
            months: [
              { name: "January", expanded: false },
              { name: "February", expanded: false }
            ]
          }
        ],
        expanded: false
      },
      {
        name: "Main Room",
        years: [
          {
            year: 2025,
            expanded: false,
            months: [
              { name: "January", expanded: false },
              { name: "February", expanded: false }
            ]
          }
        ],
        expanded: false
      }
    ];
  }
  ngOnInit() {
    this.dataService.detecciones$.subscribe((deteccion) => {
      this.imagenes = deteccion;
    });
  }
  // Métodos para expandir/colapsar
  toggleCamera(camera) {
    camera.expanded = !camera.expanded;
  }
  toggleYear(year) {
    year.expanded = !year.expanded;
  }
  toggleMonth(month) {
    month.expanded = !month.expanded;
  }
  // Navegar a detalle
  openDetail(camera, year, month) {
    this.router.navigate([`/detalle/${camera}/${year}/${month}`]);
  }
  // Botón flotante
  startDrag(event) {
    const floatingBtn = event.currentTarget;
    this.isDragging = true;
    this.offsetX = event.clientX - floatingBtn.getBoundingClientRect().left;
    this.offsetY = event.clientY - floatingBtn.getBoundingClientRect().top;
    document.addEventListener("mousemove", this.drag.bind(this));
    document.addEventListener("mouseup", this.stopDrag.bind(this));
  }
  drag(event) {
    if (!this.isDragging)
      return;
    let clientX, clientY;
    if (event instanceof MouseEvent) {
      clientX = event.clientX;
      clientY = event.clientY;
    } else {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    }
    const floatingBtn = document.getElementById("floating-btn");
    if (floatingBtn) {
      let x = clientX - this.offsetX;
      let y = clientY - this.offsetY;
      floatingBtn.style.left = `${x}px`;
      floatingBtn.style.top = `${y}px`;
    }
  }
  stopDrag() {
    this.isDragging = false;
    document.removeEventListener("mousemove", this.drag.bind(this));
    document.removeEventListener("mouseup", this.stopDrag.bind(this));
    document.removeEventListener("touchmove", this.drag.bind(this));
    document.removeEventListener("touchend", this.stopDrag.bind(this));
  }
  ngAfterViewInit() {
    this.startLiveCamera();
  }
  startLiveCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        if (this.liveCamera && this.liveCamera.nativeElement) {
          this.liveCamera.nativeElement.srcObject = stream;
        }
      }).catch((error) => {
        console.error("No se pudo acceder a la c\xE1mara:", error);
      });
    } else {
      console.warn("La API de medios no est\xE1 disponible en este navegador.");
    }
  }
};
_CamerasPage.\u0275fac = function CamerasPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CamerasPage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService));
};
_CamerasPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CamerasPage, selectors: [["app-cameras"]], viewQuery: function CamerasPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.liveCamera = _t.first);
  }
}, decls: 24, vars: 2, consts: [["contentId", "main-content"], ["color", "dark"], [1, "header-title", 2, "display", "flex", "align-items", "center", "justify-content", "center"], ["src", "assets/images/Logo.png", "alt", "Logo", "height", "80", "width", "80", 2, "margin-top", "25px", "margin-bottom", "16px"], [1, "ion-padding"], [1, "text-white"], [4, "ngFor", "ngForOf"], ["id", "main-content", 1, "ion-page"], ["slot", "start"], [1, "header-title"], [1, "center", "text-white"], ["size", "12", "size-md", "4", "size-lg", "3", "class", "imagen-col", 4, "ngFor", "ngForOf"], ["button", "", 3, "click"], [4, "ngIf"], ["size", "12", "size-md", "4", "size-lg", "3", 1, "imagen-col"], [1, "imagen-card"], ["alt", "Detecci\xF3n", 3, "src"]], template: function CamerasPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-menu", 0)(1, "ion-header")(2, "ion-toolbar", 1)(3, "ion-title", 2);
    \u0275\u0275element(4, "img", 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "ion-content", 4)(6, "ion-card-header")(7, "ion-card-title", 5);
    \u0275\u0275text(8, "Registers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "ion-list");
    \u0275\u0275template(10, CamerasPage_ng_container_10_Template, 5, 2, "ng-container", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 7)(12, "ion-header")(13, "ion-toolbar", 1)(14, "ion-buttons", 8);
    \u0275\u0275element(15, "ion-menu-button");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ion-title", 9);
    \u0275\u0275element(17, "img", 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "ion-card-title", 10);
    \u0275\u0275text(19, "Registros con camara");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-content", 1)(21, "ion-grid")(22, "ion-row");
    \u0275\u0275template(23, CamerasPage_ion_col_23_Template, 3, 1, "ion-col", 11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx.menuData);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx.imagenes);
  }
}, dependencies: [IonicModule, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonRow, IonTitle, IonToolbar, CommonModule, NgForOf, NgIf, FormsModule, RouterModule], styles: ["\n\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.menu-content[_ngcontent-%COMP%] {\n  background-color: #121212;\n  color: white;\n  padding: 0 0 16px 0;\n}\n.menu-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  padding: 16px;\n}\n.menu-list[_ngcontent-%COMP%] {\n  --background: #121212;\n  --ion-item-background: #121212;\n  --color: white;\n  --border-color: #2a2a2a;\n}\nion-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --inner-padding-end: 16px;\n  --min-height: 44px;\n  font-size: 16px;\n}\n.camera-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 10px;\n}\n#floating-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 30px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  padding: 0;\n}\n#floating-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.no-signal-box[_ngcontent-%COMP%] {\n  background-color: #444;\n  color: white;\n  width: 80%;\n  height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  border-radius: 10px;\n  border: 2px solid white;\n  margin-top: 10px;\n}\n.camera-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 10px;\n}\n.live-video[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 150px;\n  border: 4px solid white;\n  border-radius: 10px;\n  object-fit: cover;\n}"] });
var CamerasPage = _CamerasPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CamerasPage, { className: "CamerasPage", filePath: "src/app/cameras/cameras.page.ts", lineNumber: 21 });
})();
export {
  CamerasPage
};
