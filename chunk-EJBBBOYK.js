import {
  CommonModule,
  FormsModule,
  HttpClient,
  HttpClientModule,
  NgIf
} from "./chunk-P2WTEVB6.js";
import {
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MWAOZ3JH.js";
import "./chunk-RPHWXCVC.js";

// src/app/fire-detector/fire-detector.component.ts
function FireDetectorComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h3");
    \u0275\u0275text(2, "Vista previa:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "video", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.previewUrl, \u0275\u0275sanitizeUrl);
  }
}
function FireDetectorComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3");
    \u0275\u0275text(2, "Resultado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.result);
  }
}
var _FireDetectorComponent = class _FireDetectorComponent {
  constructor(http) {
    this.http = http;
    this.selectedVideo = null;
    this.previewUrl = null;
    this.result = "";
    this.loading = false;
    this.backendUrl = "http://127.0.0.1:5000/detect-fire";
  }
  onVideoSelected(event) {
    this.selectedVideo = event.target.files[0];
    if (!this.selectedVideo)
      return;
    const reader = new FileReader();
    reader.onload = () => this.previewUrl = reader.result;
    reader.readAsDataURL(this.selectedVideo);
  }
  uploadVideo() {
    if (!this.selectedVideo)
      return;
    this.loading = true;
    const formData = new FormData();
    formData.append("file", this.selectedVideo);
    console.log(this.selectedVideo);
    this.http.post(this.backendUrl, formData).subscribe({
      next: (res) => {
        this.result = `Fire Detected: ${res.fire_detected}, Smoke Detected: ${res.smoke_detected}`;
        console.log("Detecciones del video:", res.detections);
        this.loading = false;
      },
      error: (err) => {
        console.error("Error al enviar video:", err);
        this.result = "Error al enviar video.";
        this.loading = false;
      }
    });
  }
};
_FireDetectorComponent.\u0275fac = function FireDetectorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FireDetectorComponent)(\u0275\u0275directiveInject(HttpClient));
};
_FireDetectorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FireDetectorComponent, selectors: [["app-fire-detector"]], decls: 8, vars: 4, consts: [[1, "container"], ["type", "file", "accept", "video/*", 3, "change"], ["class", "preview", 4, "ngIf"], [3, "click", "disabled"], ["class", "resultado", 4, "ngIf"], [1, "preview"], ["controls", "", 1, "preview-video", 3, "src"], [1, "resultado"]], template: function FireDetectorComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2");
    \u0275\u0275text(2, "Detector de Fuego/Humo con Video Pregrabado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 1);
    \u0275\u0275listener("change", function FireDetectorComponent_Template_input_change_3_listener($event) {
      return ctx.onVideoSelected($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FireDetectorComponent_div_4_Template, 4, 1, "div", 2);
    \u0275\u0275elementStart(5, "button", 3);
    \u0275\u0275listener("click", function FireDetectorComponent_Template_button_click_5_listener() {
      return ctx.uploadVideo();
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, FireDetectorComponent_div_7_Template, 5, 1, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.previewUrl);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx.selectedVideo || ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.loading ? "Analizando..." : "Detectar en Video", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.result);
  }
}, dependencies: [CommonModule, NgIf, HttpClientModule, FormsModule], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  padding: 1rem;\n  color: white;\n  text-align: center;\n}\n.preview[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.preview-img[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin-top: 10px;\n  border-radius: 8px;\n  box-shadow: 0 0 10px #aaa;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.5rem 1rem;\n  font-weight: bold;\n  background-color: #ff6600;\n  border: none;\n  color: white;\n  border-radius: 5px;\n  cursor: pointer;\n}"] });
var FireDetectorComponent = _FireDetectorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FireDetectorComponent, { className: "FireDetectorComponent", filePath: "src/app/fire-detector/fire-detector.component.ts", lineNumber: 13 });
})();
export {
  FireDetectorComponent
};
