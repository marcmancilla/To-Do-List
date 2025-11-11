package com.example.Task.Service;


import com.example.Task.Model.TaskModel;
import com.example.Task.Repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    private TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public List<TaskModel> obtenerTareas(){
        return repository.findAll();
    }

    public Optional<TaskModel> obtenerTarea(Long id){
        return repository.findById(id);
    }

    public TaskModel guardarTarea(TaskModel tarea){
        return repository.save(tarea);
    }

    public void eliminarTarea(Long id){
        repository.deleteById(id);
    }


}
