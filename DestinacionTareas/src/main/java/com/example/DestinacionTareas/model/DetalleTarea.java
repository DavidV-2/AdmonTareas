package com.example.DestinacionTareas.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "DETALLE_TAREA")
public class DetalleTarea {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;
    private String nombre_tarea;
    private LocalDate fecha_limite;
    private String persona_asociada;
    private String edad;
    private String habilidades;
    private String estado_tarea;

    private DetalleTarea(){}

    public DetalleTarea(Integer id, String nombreTarea, LocalDate fechalimite, String personaAsociada, String edad, String habilidades, String estadotarea) {
        Id = id;
        nombre_tarea = nombreTarea;
        fecha_limite = fechalimite;
        persona_asociada = personaAsociada;
        this.edad = edad;
        this.habilidades = habilidades;
        estado_tarea = estadotarea;
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getNombre_tarea() {
        return nombre_tarea;
    }

    public void setNombre_tarea(String nombre_tarea) {
        this.nombre_tarea = this.nombre_tarea;
    }

    public LocalDate getFecha_limite() {
        return fecha_limite;
    }

    public void setFecha_limite(LocalDate fecha_limite) {
        this.fecha_limite = fecha_limite;
    }

    public String getPersona_asociada() {
        return persona_asociada;
    }

    public void setPersona_asociada(String persona_asociada) {
        this.persona_asociada = this.persona_asociada;
    }

    public String getedad() {
        return edad;
    }

    public void setedad(String edad) {
        this.edad = edad;
    }

    public String getHabilidades() {
        return habilidades;
    }

    public void setHabilidades(String habilidades) {
        this.habilidades = habilidades;
    }

    public String getEstado_tarea() {
        return estado_tarea;
    }

    public void setEstado_tarea(String estado_tarea) {
        this.estado_tarea = estado_tarea;
    }
}
