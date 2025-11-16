import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Tareas {


  tareas: any[] = [{
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
  }
  ];


  getTareas() {
    return this.tareas;
  }

  crearTarea(tarea: any) {
    this.tareas.push({ ...tarea });
    alert("Tarea creada con éxito")
  }

  eliminarTarea(tarea: any) {
    this.tareas = this.tareas.filter(t => t !== tarea);
  }
}
