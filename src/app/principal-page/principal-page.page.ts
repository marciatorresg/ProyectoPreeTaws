
import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core'; 
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
  @ViewChild('video', { static: false }) videoElement!: ElementRef;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.startCamera();
  }

  async startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (this.videoElement && this.videoElement.nativeElement) {
        this.videoElement.nativeElement.srcObject = stream;
      }
    } catch (err) {
      console.error('No se pudo acceder a la cámara:', err);
    }
  }
}
