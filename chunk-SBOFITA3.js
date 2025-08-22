import {
  DataService
} from "./chunk-6DXP34UG.js";
import {
  addIcons,
  stopOutline
} from "./chunk-HZ2JK4VC.js";
import {
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
  IonicModule,
  ToastController
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
import "./chunk-R52OUTEQ.js";
import {
  CommonModule,
  FormsModule,
  HttpClient,
  HttpClientModule,
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
import {
  __async
} from "./chunk-RPHWXCVC.js";

// src/app/principal-page/principal-page.page.ts
var _c0 = ["video"];
function PrincipalPagePage_div_21_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-row")(2, "ion-col");
    \u0275\u0275element(3, "img", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-col");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-col");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-col");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const det_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", det_r2.imagenBase64, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(det_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(det_r2.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(det_r2.fecha);
  }
}
function PrincipalPagePage_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "ion-card", 1)(2, "ion-card-header")(3, "ion-card-title", 15);
    \u0275\u0275text(4, "Registers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-card-content")(6, "ion-grid", 16)(7, "ion-row", 17)(8, "ion-col")(9, "strong");
    \u0275\u0275text(10, "Id");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-col")(12, "strong");
    \u0275\u0275text(13, "Register");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ion-col")(15, "strong");
    \u0275\u0275text(16, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, PrincipalPagePage_div_21_ng_container_17_Template, 10, 4, "ng-container", 18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r2.detecciones);
  }
}
addIcons({ "stop-outline": stopOutline });
var DeteccionClass = class {
  constructor(id, tipo, fecha, imagenBase64) {
    this.id = id;
    this.tipo = tipo;
    this.fecha = fecha;
    this.imagenBase64 = imagenBase64;
  }
};
var _PrincipalPagePage = class _PrincipalPagePage {
  constructor(http, toastController, dataService) {
    this.http = http;
    this.toastController = toastController;
    this.dataService = dataService;
    this.videoStream = null;
    this.backendUrl = "http://127.0.0.1:5000/detect-fire";
    this.detecciones = [];
    this.nextId = 1;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.startCamera();
  }
  ngOnDestroy() {
    if (this.videoStream) {
      this.videoStream.getTracks().forEach((track) => track.stop());
    }
    clearInterval(this.intervalId);
  }
  startCamera() {
    return __async(this, null, function* () {
      var _a;
      try {
        this.videoStream = yield navigator.mediaDevices.getUserMedia({ video: true });
        if ((_a = this.videoElement) == null ? void 0 : _a.nativeElement) {
          this.videoElement.nativeElement.srcObject = this.videoStream;
        }
        this.intervalId = setInterval(() => this.captureFrameAndSend(), 2e3);
      } catch (err) {
        console.error("No se pudo acceder a la c\xE1mara:", err);
      }
    });
  }
  captureFrameAndSend() {
    var _a;
    const video = (_a = this.videoElement) == null ? void 0 : _a.nativeElement;
    if (!video)
      return;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const context = canvas.getContext("2d");
    if (!context)
      return;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      if (blob) {
        const formData = new FormData();
        formData.append("file", blob, "frame.jpg");
        this.http.post(this.backendUrl, formData).subscribe({
          next: (res) => __async(this, null, function* () {
            if (res.fire_detected || res.smoke_detected) {
              console.log("\u{1F525} Detecci\xF3n:", res);
              this.showToast(`Alerta: ${res.fire_detected ? "Fuego" : ""} ${res.smoke_detected ? "Humo" : ""}`);
              const reader = new FileReader();
              reader.onloadend = () => {
                const base64data = reader.result;
                let tipo = [
                  res.fire_detected ? "FUEGO" : "",
                  res.smoke_detected ? "HUMO" : ""
                ].filter(Boolean).join(" y ");
                let deteccion = new DeteccionClass(this.nextId++, tipo, (/* @__PURE__ */ new Date()).toLocaleString(), base64data);
                this.detecciones.push(deteccion);
                console.log(this.detecciones);
              };
              reader.readAsDataURL(blob);
            }
          }),
          error: (err) => {
            console.error("Error al enviar el fotograma:", err);
          }
        });
      }
    }, "image/jpeg");
  }
  showToast(message) {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({
        message,
        duration: 3e3,
        color: "danger",
        position: "top"
      });
      toast.present();
    });
  }
  sendDetecciones() {
    const imagenes = this.detecciones.map((x) => x.imagenBase64);
    this.dataService.setDetecciones(imagenes);
  }
};
_PrincipalPagePage.\u0275fac = function PrincipalPagePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PrincipalPagePage)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(DataService));
};
_PrincipalPagePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrincipalPagePage, selectors: [["app-principal-page"]], viewQuery: function PrincipalPagePage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.videoElement = _t.first);
  }
}, decls: 27, vars: 1, consts: [["video", ""], ["color", "dark"], [1, "header-title", 2, "display", "flex", "align-items", "center", "justify-content", "center"], ["src", "assets/images/Logo.png", "alt", "Logo", "height", "80", "width", "80", 2, "margin-top", "25px", "margin-bottom", "16px"], [1, "text-white", "center"], [1, "camera-container"], [1, "camera-box"], ["autoplay", "", "muted", "", "playsinline", ""], [1, "camera-grid"], [1, "no-signal-box"], [3, "click"], [4, "ngIf"], ["slot", "middle"], ["role", "button"], ["name", "stop-outline", "size", "large"], [1, "center", "text-white"], [1, "custom-grid"], [1, "header-row"], [4, "ngFor", "ngForOf"], ["alt", "Detecci\xF3n", "width", "100", 3, "src"]], template: function PrincipalPagePage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 1)(2, "ion-title", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content", 1)(5, "ion-card", 1)(6, "ion-card-header")(7, "ion-card-title", 4);
    \u0275\u0275text(8, "Main Cameras");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "ion-card-content")(10, "div", 5)(11, "div", 6);
    \u0275\u0275element(12, "video", 7, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 8)(15, "div", 9);
    \u0275\u0275text(16, "Sin se\xF1al");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 9);
    \u0275\u0275text(18, "Sin se\xF1al");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(19, "button", 10);
    \u0275\u0275listener("click", function PrincipalPagePage_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.sendDetecciones());
    });
    \u0275\u0275text(20, "Enviar Frutas");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, PrincipalPagePage_div_21_Template, 18, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ion-footer")(23, "ion-toolbar", 1)(24, "ion-buttons", 12)(25, "ion-button", 13);
    \u0275\u0275element(26, "ion-icon", 14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(21);
    \u0275\u0275property("ngIf", ctx.detecciones.length > 0);
  }
}, dependencies: [IonicModule, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonRow, IonTitle, IonToolbar, CommonModule, NgForOf, NgIf, FormsModule, HttpClientModule], styles: ['\n\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 16px;\n}\n.camera-icon[_ngcontent-%COMP%] {\n  font-size: 100px;\n  color: white;\n}\n.text-white[_ngcontent-%COMP%] {\n  color: white;\n}\n.camera-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.camera-box[_ngcontent-%COMP%] {\n  background-color: #444;\n  width: 100%;\n  height: 180px;\n  border: 2px solid white;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.camera-box[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.camera-grid[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  gap: 10px;\n}\n.custom-grid[_ngcontent-%COMP%] {\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 0.95rem;\n}\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.header-row[_ngcontent-%COMP%] {\n  background-color: #1e1e1e;\n  color: white;\n  font-weight: bold;\n  padding: 8px 0;\n  border-bottom: 1px solid #444;\n}\n.no-signal-box[_ngcontent-%COMP%] {\n  background-color: #444;\n  color: white;\n  width: 48%;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  border-radius: 10px;\n  border: 2px solid white;\n}'] });
var PrincipalPagePage = _PrincipalPagePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrincipalPagePage, { className: "PrincipalPagePage", filePath: "src/app/principal-page/principal-page.page.ts", lineNumber: 50 });
})();
export {
  PrincipalPagePage
};
