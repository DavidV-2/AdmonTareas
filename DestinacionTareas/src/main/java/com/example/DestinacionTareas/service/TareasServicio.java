package com.example.DestinacionTareas.service;
import com.example.DestinacionTareas.repository.TareaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;


@Service
public class TareasServicio implements ITareasServicio {

    @Autowired
    private TareaRepository tareaRepository;

    @Override
    public void SP_RegistroTarea(String nombreTarea, LocalDate fechaLimite,  String personaAsociada, String edad,
                                 String habilidades, String estadoTarea, Integer[] id, String[] mensaje) {
        id[0] = 0;
        mensaje [0]= "";


        try {
            // Llama al método del repositorio
            tareaRepository.SP_RegistroTarea(nombreTarea, fechaLimite, personaAsociada, edad, habilidades, estadoTarea, id,mensaje);

            // Maneja el valor de salida
            if (id[0] == -1) {
                throw new RuntimeException(mensaje[0]);
            }
        } catch (Exception e) {
            throw new RuntimeException("Error al registrar Tarea: " + e.getMessage());
        }
    }
}
