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
  selectedImage: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  result: string = '';
  loading = false;

  // ⚠️ Cambia esta URL por la de tu backend en Render
  backendUrl = ' http://127.0.0.1:5000/detect-fire';

  constructor(private http: HttpClient) {}

  onImageSelected(event: any): void {
  this.selectedImage = event.target.files[0];

  if (!this.selectedImage) return;  // ← validación clave

  const reader = new FileReader();
  reader.onload = () => this.previewUrl = reader.result;
  reader.readAsDataURL(this.selectedImage); // ahora seguro
}

  uploadImage(): void {
    if (!this.selectedImage) return;

    this.loading = true;
    const formData = new FormData();
    formData.append('file', this.selectedImage);

    console.log(this.selectedImage);  // Verifica que el archivo se ha seleccionado correctamente


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
      // Aquí puedes manejar las propiedades que vienen del backend
      this.result = `Fire Detected: ${res.fire_detected}, Smoke Detected: ${res.smoke_detected}`;
      console.log('Detecciones:', res.detections);  // Para ver las detecciones en la consola
      this.loading = false;
    },
    error: (err) => {
      console.error('Error:', err);
      this.result = 'Error al enviar imagen.';
      this.loading = false;
    }
  });
  }
}
