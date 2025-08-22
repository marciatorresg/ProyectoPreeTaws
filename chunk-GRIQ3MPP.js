import {
  DataService
} from "./chunk-6DXP34UG.js";
import {
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate
} from "./chunk-MWAOZ3JH.js";
import "./chunk-RPHWXCVC.js";

// src/app/photos/photos.component.ts
function PhotosComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const det_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", det_r1, \u0275\u0275sanitizeUrl);
  }
}
var _PhotosComponent = class _PhotosComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.imagenes = [];
  }
  ngOnInit() {
    this.dataService.detecciones$.subscribe((deteccion) => {
      this.imagenes = deteccion;
    });
  }
};
_PhotosComponent.\u0275fac = function PhotosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PhotosComponent)(\u0275\u0275directiveInject(DataService));
};
_PhotosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PhotosComponent, selectors: [["app-photos"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["alt", "Detecci\xF3n", "width", "100", 3, "src"]], template: function PhotosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PhotosComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngForOf", ctx.imagenes);
  }
}, encapsulation: 2 });
var PhotosComponent = _PhotosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PhotosComponent, { className: "PhotosComponent", filePath: "src/app/photos/photos.component.ts", lineNumber: 10 });
})();
export {
  PhotosComponent
};
