import { Component, OnInit } from '@angular/core';  // Necesario para las solicitudes HTTP
import { NavbarComponent } from "../navbar/navbar.component";
import { DetTarea } from '../tarea'; 
import { TareaService } from '../servicios/tarea.service';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [NavbarComponent,CommonModule],  // Importa los módulos necesarios
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'] 
})
export class EventListComponent implements OnInit {

  tareas: DetTarea[] = [];

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.obtenerTareas();
  }

  private obtenerTareas() {
    this.tareaService.obtenerTareas().pipe(
      catchError(error => {
        console.error('Error al obtener tareas:', error);
        return of([]); // Retorna un arreglo vacío en caso de error
      })
    ).subscribe(dato => {
      this.tareas = dato;
    });
  }
}
