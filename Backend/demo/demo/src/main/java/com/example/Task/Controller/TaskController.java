package com.example.Task.Controller;


import com.example.Task.Model.TaskModel;
import com.example.Task.Service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TaskController {
    TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/api/tasks")
    public List<TaskModel> obtenerTareas(){
        return taskService.obtenerTareas();
    }

    @GetMapping("/api/tasks{id}")
    public TaskModel obtenerTareaId(@PathVariable Long id){
        return taskService.obtenerTarea(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Tarea no encontrada"));
    }

    @PostMapping("/api/tasks")
    public TaskModel guardarTarea(@RequestBody TaskModel tarea){
        return taskService.guardarTarea(tarea);
    }

    @DeleteMapping("/api/tasks{id}")
    public void eliminarTarea(@PathVariable Long id){
        taskService.eliminarTarea(id);
    }
}
