package com.example.DestinacionTareas.service;

import com.example.DestinacionTareas.model.DetalleTarea;
import com.example.DestinacionTareas.repository.DetalleTareaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DetalleTareaServicio implements IDetalleTareaServicio{

    @Autowired
    private DetalleTareaRepository detalleTareaRepository;

    @Override
    @Transactional(readOnly = true)
    public List<DetalleTarea> listar() {
        return detalleTareaRepository.findAll();
    }
}
