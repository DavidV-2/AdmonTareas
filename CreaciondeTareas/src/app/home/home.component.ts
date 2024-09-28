import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { EventListComponent } from "../event-list/event-list.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TareaService } from '../servicios/tarea.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EventListComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private tareaService: TareaService) { }
}
