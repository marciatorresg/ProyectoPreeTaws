import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fire-detector',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './fire-detector.component.html',
  styleUrls: ['./fire-detector.component.scss']
})
export class FireDetectorComponent {
  selectedVideo: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  result: string = '';
  loading = false;

  // ⚠️ Asegúrate de que tu backend pueda procesar videos
  backendUrl = 'http://127.0.0.1:5000/detect-fire'; // Nuevo endpoint para videos

  constructor(private http: HttpClient) {}

  onVideoSelected(event: any): void {
    this.selectedVideo = event.target.files[0];

    if (!this.selectedVideo) return;

    const reader = new FileReader();
    reader.onload = () => this.previewUrl = reader.result;
    reader.readAsDataURL(this.selectedVideo);
  }

  uploadVideo(): void {
    if (!this.selectedVideo) return;

    this.loading = true;
    const formData = new FormData();
    formData.append('file', this.selectedVideo);

    console.log(this.selectedVideo); // Verifica que el archivo se ha seleccionado correctamente

    this.http.post<{
      fire_detected: boolean;
      smoke_detected: boolean;
      detections: Array<{
        class: string;
        confidence: number;
        bbox: number[];
      }>;
    }>(this.backendUrl, formData)
      .subscribe({
        next: (res) => {
          this.result = `Fire Detected: ${res.fire_detected}, Smoke Detected: ${res.smoke_detected}`;
          console.log('Detecciones del video:', res.detections);
          this.loading = false;
        },
        error: (err) => {
          console.error('Error al enviar video:', err);
          this.result = 'Error al enviar video.';
          this.loading = false;
        }
      });
  }
}