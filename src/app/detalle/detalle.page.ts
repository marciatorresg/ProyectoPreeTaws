import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetallePage implements OnInit {

  constructor(private route: ActivatedRoute) {}

ngOnInit() {
  const camera = this.route.snapshot.paramMap.get('camera');
  const year = this.route.snapshot.paramMap.get('year');
  const month = this.route.snapshot.paramMap.get('month');
  const day = this.route.snapshot.paramMap.get('day');

  console.log(camera, year, month, day); // aquí puedes cargar los datos
}

}
