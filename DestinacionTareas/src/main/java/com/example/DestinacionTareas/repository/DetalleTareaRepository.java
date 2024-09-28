package com.example.DestinacionTareas.repository;

import com.example.DestinacionTareas.model.DetalleTarea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetalleTareaRepository extends JpaRepository<DetalleTarea, Long> {
}
