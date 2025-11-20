import { Injectable, signal, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Tarea {
  id?: number;
  titulo: string;
  texto: string;
  estado: string;
  editando: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class Tareas {
  private apiUrl = 'http://localhost:8080/api/tasks';
  private _tareas = signal<Tarea[]>([]);

  constructor(private http: HttpClient) {
    this.cargarTareas();
  }

  get tareas(): Signal<Tarea[]> {
    return this._tareas;
  }

  cargarTareas() {
    this.http.get<Tarea[]>(this.apiUrl)
      .subscribe(t => this._tareas.set(t));
  }

  crearTarea(tarea: Tarea) {
    this.http.post<Tarea>(this.apiUrl, tarea).subscribe(nuevaTarea => {
      this._tareas.update(tareas => [...tareas, nuevaTarea]);
    });
  }

  eliminarTarea(tarea: Tarea) {
    if (!tarea.id) return;
    this.http.delete(`${this.apiUrl}/${tarea.id}`).subscribe(() => {
      this._tareas.update(tareas => tareas.filter(t => t.id !== tarea.id));
    });
  }
}

