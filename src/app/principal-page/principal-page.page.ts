import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { addIcons } from 'ionicons';
import { stopOutline } from 'ionicons/icons';

//servicio de comunacion de datos
import { DataService } from '../data.service';

addIcons({ 'stop-outline': stopOutline });

interface Deteccion{
  id:number;
  tipo: string;
  fecha: string;
  imagenBase64: string;
}

class DeteccionClass implements Deteccion {
  id: number;
  tipo: string;
  fecha: string;
  imagenBase64: string;

  constructor(id: number, tipo: string, fecha: string,imagenBase64: string) {
    this.id = id;
    this.tipo = tipo;
    this.fecha = fecha;
    this.imagenBase64 = imagenBase64;
  }
}

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.page.html',
  styleUrls: ['./principal-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class PrincipalPagePage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('video', { static: false }) videoElement!: ElementRef;
  videoStream: MediaStream | null = null;
  intervalId: any;

  backendUrl = 'http://127.0.0.1:5000/detect-fire';

  public detecciones: DeteccionClass[]=[];
  public nextId = 1;

  constructor(private http: HttpClient, private toastController: ToastController, private dataService: DataService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.startCamera();
  }

  ngOnDestroy() {
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
    }
    clearInterval(this.intervalId);
  }

  async startCamera() {
    try {
      this.videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (this.videoElement?.nativeElement) {
        this.videoElement.nativeElement.srcObject = this.videoStream;
      }

      // Comenzar a capturar fotogramas cada 2 segundos
      this.intervalId = setInterval(() => this.captureFrameAndSend(), 2000);

    } catch (err) {
      console.error('No se pudo acceder a la cámara:', err);
    }
  }

  captureFrameAndSend() {
    const video = this.videoElement?.nativeElement as HTMLVideoElement;
    if (!video) return;

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(blob => {
      if (blob) {
        const formData = new FormData();
        formData.append('file', blob, 'frame.jpg');

        this.http.post<any>(this.backendUrl, formData).subscribe({
          next: async res => {
            if (res.fire_detected || res.smoke_detected) {
              console.log('🔥 Detección:', res);
              this.showToast(`Alerta: ${res.fire_detected ? 'Fuego' : ''} ${res.smoke_detected ? 'Humo' : ''}`);

               const reader = new FileReader();
               reader.onloadend = () => {
                const base64data = reader.result as string;

                  let tipo = [
                  res.fire_detected ? 'FUEGO' : '',
                  res.smoke_detected ? 'HUMO' : ''
                  ].filter(Boolean).join(' y ');

                  let deteccion : DeteccionClass = new DeteccionClass(this.nextId++,tipo,new Date().toLocaleString(),base64data);
                  this.detecciones.push(deteccion)
                  console.log(this.detecciones);
               };
               reader.readAsDataURL(blob);  
              
              }
              
          },
          error: err => {
            console.error('Error al enviar el fotograma:', err);
          }
        });
      }
    }, 'image/jpeg');
  }



  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color: 'danger',
      position: 'top'
    });
    toast.present();
  }

  sendDetecciones(){
    const imagenes : string[] = this.detecciones.map(x => x.imagenBase64);
    this.dataService.setDetecciones(imagenes);
  }
}
