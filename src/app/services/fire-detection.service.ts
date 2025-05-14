import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FireDetectionService {

  private apiUrl = 'http://127.0.0.1:5000/detect-fire'; // Ajusta el puerto si es necesario

  constructor(private http: HttpClient) {}

  detectFire(image: File) {
    const formData = new FormData();
    formData.append('file', image);

    return this.http.post<{ result: string }>(this.apiUrl, formData);
  }
}
