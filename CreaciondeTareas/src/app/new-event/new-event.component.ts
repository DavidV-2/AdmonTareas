import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-new-event',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.css'
})
export class NewEventComponent {
  
  NombreTarea: string = '';
  FechaLimite: string = '';
  nombreCompleto: string = '';
  edad: number | null = null;
  nuevaHabilidad: string = '';
  habilidades: string[] = [];
  estadoTarea: string = '';

  añadirHabilidad() {
    if (this.nuevaHabilidad.trim() === '') {
      alert('Por favor, ingrese una habilidad.');
      return;
    }
    this.habilidades.push(this.nuevaHabilidad);
    this.nuevaHabilidad = ''; // Limpiar el input
  }

  eliminarHabilidad(habilidad: string) {
    this.habilidades = this.habilidades.filter(h => h !== habilidad);
  }

  agregarTarea() {
    // Lógica para agregar tarea
    console.log({
      nombreTarea: this.NombreTarea,
      fechaLimite: this.FechaLimite,
      nombreCompleto: this.nombreCompleto,
      edad: this.edad,
      habilidades: this.habilidades,
      estadoTarea: this.estadoTarea,
    });
  }
}
