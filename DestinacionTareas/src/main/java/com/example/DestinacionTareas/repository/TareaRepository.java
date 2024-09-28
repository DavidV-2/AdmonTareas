package com.example.DestinacionTareas.repository;

import com.example.DestinacionTareas.model.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;


@Repository
public interface TareaRepository extends JpaRepository<Tarea,Integer> {

    @Query(value = "{call SP_RegistroTarea(?, ?, ?, ?, ?, ?, ?)}", nativeQuery = true)
    void SP_RegistroTarea(String nombreTarea,
                          LocalDate fechaLimite,
                          String personaAsociada,
                          String edad,
                          String habilidades,
                          String estadoTarea,
                          Integer[] id,
                          String[] mensaje);
}
