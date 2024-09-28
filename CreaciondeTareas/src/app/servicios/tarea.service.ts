import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetTarea } from '../tarea';// Asegúrate de que esta importación sea correcta

@Injectable({
  providedIn: 'root' // Asegura que el servicio esté disponible globalmente
})
export class TareaService {
  private apiUrl = 'http://localhost:8080/api/listar'; // Cambia esto a tu URL real

  constructor(private http: HttpClient) {}

  obtenerTareas(): Observable<DetTarea[]> {
    return this.http.get<DetTarea[]>(this.apiUrl);
  }
}
