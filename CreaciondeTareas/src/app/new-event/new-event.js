function añadirHabilidad() {
    var habilidadInput = document.getElementById('Habilidades');
    var habilidad = habilidadInput.value;

    if (habilidad.trim() === "") {
        alert("Por favor, ingrese una habilidad.");
        return;
    }


    var table = document.getElementById('data');

    if (table) {
        var row = table.insertRow();


        var cell1 = row.insertCell(0);
        cell1.innerText = habilidad;


        var cell2 = row.insertCell(1);
        cell2.innerHTML = `<button class="btn btn-danger" onclick="eliminarHabilidad(this)">Eliminar</button>`;
    }
    habilidadInput.value = "";
}

function eliminarHabilidad(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function agregarTarea() {
    const nombreTarea = document.getElementById('NombreTarea').value;
    const fechaLimite = document.getElementById('FechaLimite').value;
    const nombreCompleto = document.getElementById('NombreCompleto').value;
    const edad = document.getElementById('Edad').value;
    const estadoTarea = document.getElementById('EstadoTarea').value;

    if (nombreTarea && fechaLimite && nombreCompleto && edad && estadoTarea) {
        alert('Tarea agregada exitosamente.');
        // Aquí puedes agregar el código para enviar los datos al servidor o procesarlos según tus necesidades.
    } else {
        alert('Por favor, completa todos los campos.');
    }
}