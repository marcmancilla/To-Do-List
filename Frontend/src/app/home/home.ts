import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { Tareas } from '../servicios/tareaService';


@Component({
  selector: 'app-home',
  imports: [RouterLink, FormsModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  constructor(private tareaService: Tareas){};

  get tareas(){
    return this.tareaService.getTareas();
  } 

  filtro: string = "todas";

  marcarCompletada(tarea: any) {
    if (tarea.estado === "completada") {
      tarea.estado = "no-completada";
    } else if (tarea.estado === "no-completada") {
      tarea.estado = "completada";
    }
  }


  get tareasFiltradas() {
    return this.tareas.filter(
      t => this.filtro === 'todas' || t.estado === this.filtro
    );
  }


  editarTarea(tarea: any) {
    if (tarea.editando == false) {
      tarea.editando = true;
    } else {
      tarea.editando = false;
    }

  }

  eliminarTarea(tarea: any){
    return this.tareaService.eliminarTarea(tarea);
  }

}

