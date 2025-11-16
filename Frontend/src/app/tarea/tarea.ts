import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { Tareas } from '../servicios/tareaService';


@Component({
  selector: 'app-tarea',
  imports: [RouterLink, FormsModule],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class Tarea {

  constructor(private tareaService: Tareas) { };

  tarea = {
    titulo: '',
    texto: '',
    estado: 'no-completada',
    editando: false
  };

  crearTarea() {
    this.tareaService.crearTarea(this.tarea);

    this.tarea = {
      titulo: '',
      texto: '',
      estado: 'no-completada',
      editando: false
    };
  }

}
