
import { Component, OnInit, AfterViewInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { addIcons } from 'ionicons';
import { stopOutline } from 'ionicons/icons';

addIcons({ 'stop-outline': stopOutline });

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.page.html',
  styleUrls: ['./principal-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PrincipalPagePage implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    // Verifica si el componente <app-log> tiene aria-hidden y lo corrige
    const appLog = document.querySelector('app-log');
    if (appLog) {
      appLog.removeAttribute('aria-hidden');
      appLog.setAttribute('inert', 'true'); // Evita interacción sin afectar accesibilidad
    }
  }
}
