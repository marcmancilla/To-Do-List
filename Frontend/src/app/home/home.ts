import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  tareas: any[] = [
    {
      titulo: "Mi primera tarea",
      texto: "Texto de prueba primera tarea"
    },
    {
      titulo: "Segunda tarea",
      texto: "Texto segunda tarea"
    }
  ];
}
