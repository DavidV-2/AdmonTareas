$(document).ready(function (e) {
    $('.search-panel .dropdown-menu').find('a').click(function (e) {
        var value = $(this).attr('data-filter');

        if (value === "Completadas" || value === "Pendientes") {
            $("tbody tr").hide(); // Ocultar todas las filas
            $("tbody tr." + value).show(); // Mostrar solo las filas que coinciden con el filtro
        } else {
            $("tbody tr").show(); // Mostrar todas las filas si no hay un filtro específico
        }
    })
    // Inicialización de tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Agregar nueva fila
    $(".add-new").click(function () {
        $(this).attr("disabled", "disabled");
        var actions = $("table td:last-child").html();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="NombreTarea"></td>' +
            '<td><input type="text" class="form-control" name="FechaLimite"></td>' +
            '<td><input type="text" class="form-control" name="PersonaAsociadaTarea"></td>' +
            '<td><input type="text" class="form-control" name="Edad"></td>' +
            '<td><input type="text" class="form-control" name="Habilidades"></td>' +
            '<td><input type="text" class="form-control" name="EstadoTarea"></td>' +
            '<td>' + actions + '</td>' +
            '</tr>';
        $("table").append(row);
        $('[data-toggle="tooltip"]').tooltip();
    });

    // Agregar tarea
    $(document).on("click", ".add", function () {
        var empty = false;
        var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function () {
            var name = $(this).attr('name');
            if (!$(this).val()) {
                $(this).addClass("error");
                empty = true;
            } else if (name === "Edad" && isNaN($(this).val())) {
                $(this).addClass("error");
                empty = true;
                alert("La edad debe ser un número.");
            } else {
                $(this).removeClass("error");
            }
        });
        if (!empty) {
            input.each(function () {
                $(this).parent("td").html($(this).val());
            });
            $(this).parents("tr").find(".add, .edit").toggle();
            $(".add-new").removeAttr("disabled");
        }
    });

    // Editar tarea
    $(document).on("click", ".edit", function () {
        $(this).parents("tr").find("td:not(:last-child)").each(function () {
            $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
        });
        $(this).parents("tr").find(".add, .edit").toggle();
        $(".add-new").attr("disabled", "disabled");
    });

    // Eliminar tarea
    $(document).on("click", ".delete", function () {
        $(this).parents("tr").remove();
        $(".add-new").removeAttr("disabled");
    });
});
