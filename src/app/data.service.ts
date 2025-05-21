import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private deteccionesRuta = new BehaviorSubject<string[]>([]);

  detecciones$ = this.deteccionesRuta.asObservable();
  
  constructor() { }

  setDetecciones(detecciones: string[]){
    this.deteccionesRuta.next(detecciones);
  }
}
