package com.example.DestinacionTareas.service;

import com.example.DestinacionTareas.model.Tarea;

import java.time.LocalDate;
import java.util.List;

public interface ITareasServicio {

    void SP_RegistroTarea(String nombreTarea,
                          LocalDate fechaLimite,
                          String personaAsociada,
                          String edad,
                          String habilidades,
                          String estadoTarea,
                          Integer[] id,
                          String[] mensaje);
}
