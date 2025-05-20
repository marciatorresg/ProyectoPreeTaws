import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';

import { addIcons } from 'ionicons';
import { stopOutline } from 'ionicons/icons';

import { FireDetectionService } from '../services/fire-detection.service';

addIcons({ 'stop-outline': stopOutline });

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.page.html',
  styleUrls: ['./cameras.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class CamerasPage implements AfterViewInit{
  @ViewChild('liveCamera', { static: false }) liveCamera!: ElementRef<HTMLVideoElement>;
  isDragging = false;
  offsetX = 0;
  offsetY = 0;

  constructor(private router: Router) {}

  // Estructura jerárquica del menú
  menuData = [
    {
      name: 'Backyard',
      years: [
        {
          year: 2025,
          expanded: false,
          months: [
            { name: 'January', expanded: false },
            { name: 'February', expanded: false }
          ]
        }
      ],
      expanded: false
    },
    {
      name: 'Living Room',
      years: [
        {
          year: 2025,
          expanded: false,
          months: [
            { name: 'January', expanded: false},
            { name: 'February', expanded: false }
          ]
        }
      ],
      expanded: false
    },
    {
      name: 'Main Room',
      years: [
        {
          year: 2025,
          expanded: false,
          months: [
            { name: 'January', expanded: false },
            { name: 'February', expanded: false}
          ]
        }
      ],
      expanded: false
    }
  ];

  // Métodos para expandir/colapsar
  toggleCamera(camera: any) {
    camera.expanded = !camera.expanded;
  }

  toggleYear(year: any) {
    year.expanded = !year.expanded;
  }

  toggleMonth(month: any) {
    month.expanded = !month.expanded;
  }

  // Navegar a detalle
  openDetail(camera: string, year: string, month: string) {
  this.router.navigate([`/detalle/${camera}/${year}/${month}`]);
}

  // Botón flotante
  startDrag(event: MouseEvent) {
    const floatingBtn = event.currentTarget as HTMLElement;
    this.isDragging = true;
    this.offsetX = event.clientX - floatingBtn.getBoundingClientRect().left;
    this.offsetY = event.clientY - floatingBtn.getBoundingClientRect().top;

    document.addEventListener('mousemove', this.drag.bind(this));
    document.addEventListener('mouseup', this.stopDrag.bind(this));
  }

  drag(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;

    let clientX, clientY;
    if (event instanceof MouseEvent) {
      clientX = event.clientX;
      clientY = event.clientY;
    } else {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    }

    const floatingBtn = document.getElementById('floating-btn');
    if (floatingBtn) {
      let x = clientX - this.offsetX;
      let y = clientY - this.offsetY;
      floatingBtn.style.left = `${x}px`;
      floatingBtn.style.top = `${y}px`;
    }
  }

  stopDrag() {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.drag.bind(this));
    document.removeEventListener('mouseup', this.stopDrag.bind(this));
    document.removeEventListener('touchmove', this.drag.bind(this));
    document.removeEventListener('touchend', this.stopDrag.bind(this));
  }

  ngAfterViewInit(): void {
      this.startLiveCamera();
    }

    startLiveCamera() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
            if (this.liveCamera && this.liveCamera.nativeElement) {
              this.liveCamera.nativeElement.srcObject = stream;
            }
          })
          .catch((error) => {
            console.error('No se pudo acceder a la cámara:', error);
          });
      } else {
        console.warn('La API de medios no está disponible en este navegador.');
      }
    }

}
