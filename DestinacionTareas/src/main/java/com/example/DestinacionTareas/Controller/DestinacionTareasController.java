package com.example.DestinacionTareas.Controller;

import com.example.DestinacionTareas.model.DetalleTarea;
import com.example.DestinacionTareas.service.IDetalleTareaServicio;
import com.example.DestinacionTareas.service.ITareasServicio;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api")
public class DestinacionTareasController {

    @Autowired
    private IDetalleTareaServicio detalleTareaServicio;

    @Autowired
    private ITareasServicio tareasServicio;

    @GetMapping("/listar")
    public List<DetalleTarea> list() {
        return detalleTareaServicio.listar();
    }

//    @GetMapping("/registro")
//    public registro(@ModelAttribute("tarea") Tarea tarea, Model model, RedirectAttributes redirectAttributes) {
//        Integer[] id = new Integer[1];
//        String[] mensaje = new String[1];
//
//        try {
//            tareasServicio.SP_RegistroTarea(
//                    tarea.getNombre_tarea(),
//                    tarea.getFecha_limite(),
//                    tarea.getPersona_asociada(),
//                    tarea.getEdad(),
//                    tarea.getHabilidades(),
//                    tarea.getEstado_tarea(),
//                    id,
//                    mensaje
//            );
//        }
//    }
}
