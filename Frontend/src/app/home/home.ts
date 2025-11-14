import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [RouterLink, FormsModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  tareas: any[] = [
    {
      titulo: "Mi primera tarea",
      texto: "Texto de prueba primera tarea",
      estado: "no-completada",
      editando: false
    },
    {
      titulo: "Segunda tarea",
      texto: "Texto segunda tarea",
      estado: "no-completada",
      editando: false
    },
    {
      titulo: "Tercera tarea",
      texto: "Texto tercera tarea",
      estado: "completada",
      editando: false
    },
    {
      titulo: "Tercera tarea",
      texto: "Texto tercera tarea",
      estado: "no-completada",
      editando: false
    },
    {
      titulo: "Tercera tarea",
      texto: "Texto tercera tarea",
      estado: "completada",
      editando: false
    }
    ,
    {
      titulo: "Tercera tarea",
      texto: "Texto tercera tarea",
      estado: "eliminada",
      editando: false
    }
  ];


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


  eliminarTarea(tarea: any) {
    this.tareas = this.tareas.filter(t => t !== tarea);
  }


  editarTarea(tarea: any) {
    if (tarea.editando == false){
      tarea.editando = true;
    } else {
      tarea.editando = false;
    }
    
  }

}

