import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IonCol, IonRow } from "@ionic/angular/standalone";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent  implements OnInit {
  imagenes : string[] = [];
  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.detecciones$.subscribe(deteccion =>{
      this.imagenes = deteccion;
    })
  }

}
