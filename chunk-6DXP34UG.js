import {
  BehaviorSubject,
  ɵɵdefineInjectable
} from "./chunk-MWAOZ3JH.js";

// src/app/data.service.ts
var _DataService = class _DataService {
  constructor() {
    this.deteccionesRuta = new BehaviorSubject([]);
    this.detecciones$ = this.deteccionesRuta.asObservable();
  }
  setDetecciones(detecciones) {
    this.deteccionesRuta.next(detecciones);
  }
};
_DataService.\u0275fac = function DataService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DataService)();
};
_DataService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
var DataService = _DataService;

export {
  DataService
};
