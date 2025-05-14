import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { addIcons } from 'ionicons';
import { stopOutline } from 'ionicons/icons';

addIcons({ 'stop-outline': stopOutline });


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetallePage implements OnInit {
  cameraName!: string;
  year!: string;
  month!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.cameraName = this.route.snapshot.paramMap.get('camera') || '';
    this.year = this.route.snapshot.paramMap.get('year') || '';
    this.month = this.route.snapshot.paramMap.get('month') || '';

    console.log('Cámara:', this.cameraName);
    console.log('Año:', this.year);
    console.log('Mes:', this.month);
  }
}
