
/***------CREAR BD------------**/
CREATE DATABASE GestionTareas

GO

/***------USAR BD CREADA ------------**/
USE GestionTareas

GO

/***------CREAR TABLAS------------**/

CREATE TABLE TAREA (
Id int primary key identity,
NombreTarea varchar(100),
FechaLimite date,
PersonaAsociadaTarea varchar(100),
Edad varchar (2),
Habilidades varchar (100),
EstadoTarea varchar (100)
)

GO 
CREATE TABLE DETALLE_TAREA (
Id int primary key identity,
NombreTarea varchar(100),
FechaLimite date,
PersonaAsociada varchar(100),
Edad varchar (2),
Habilidades varchar (100),
EstadoTarea varchar (100)
)

GO 

/***------CREAR TYPE------------**/
CREATE TYPE [dbo].[EDetalle_Tarea] AS TABLE (				
	[NombreTarea] varchar(100) NULL,
    [FechaLimite] date NULL,
    [PersonaAsociada] varchar(100) NULL,
    [Edad] varchar(2) NULL,
    [Habilidades] varchar(100) NULL,
    [EstadoTarea] varchar(100) NULL
)

GO
/***------CREAR PROCEDURES------------**/

CREATE PROCEDURE [dbo].[SP_RegistroTarea] (
    @nombre_tarea VARCHAR(100),
    @fecha_limite DATE,
    @persona_asociada VARCHAR(100),
    @edad INT, -- Cambiado a INT para edad
    @habilidades VARCHAR(100),
    @estado_tarea VARCHAR(100),
    @DETALLE_TAREA [EDetalle_Tarea] READONLY,
    @mensaje VARCHAR(500) OUTPUT
)
AS
BEGIN
    BEGIN TRY
        SET @mensaje = '';

        DECLARE @Id INT;

        BEGIN TRANSACTION registro;

        -- Verifica si no existe una tarea para la persona asociada
        IF NOT EXISTS (SELECT * FROM TAREA WHERE persona_asociada = @persona_asociada)
        BEGIN
            -- Inserción de la tarea
            INSERT INTO TAREA (
                nombre_tarea, fecha_limite, persona_asociada, edad, 
                habilidades, estado_tarea
            ) VALUES (
                @nombre_tarea, @fecha_limite, @persona_asociada, @edad, 
                @habilidades, @estado_tarea
            );

            -- Obtener el ID de la tarea insertada
            SET @Id = SCOPE_IDENTITY();

            -- Inserción en la tabla DETALLE_TAREA usando la tabla pasada como parámetro
            INSERT INTO DETALLE_TAREA (
                id, nombre_tarea, fecha_limite, persona_asociada, edad, 
                habilidades, estado_tarea
            )
            SELECT 
                @Id, nombre_tarea, fecha_limite, persona_asociada, edad, habilidades, estado_tarea 
            FROM @DETALLE_TAREA;

            -- Mensaje de éxito
            SET @mensaje = 'Tarea registrada exitosamente.';
        END
        ELSE
        BEGIN
            -- Mensaje si la tarea ya existe
            SET @mensaje = 'Error: La persona asociada ya tiene una tarea registrada.';
        END

        -- Confirmar la transacción
        COMMIT TRANSACTION registro;
    END TRY
    BEGIN CATCH
        -- En caso de error, deshacer la transacción
        ROLLBACK TRANSACTION registro;

        -- Asignar mensaje de error
        SET @mensaje = ERROR_MESSAGE();
    END CATCH;
END;

GO


CREATE PROC SP_Listar (
    @referencia INT,
    @FechaLimite DATE,
    @EstadoTarea VARCHAR(100)
)
AS
BEGIN
  
    IF @referencia = 1
    BEGIN
        SELECT * FROM DETALLE_TAREA
        WHERE FechaLimite = @FechaLimite;
    END
    ELSE IF @referencia = 2
    BEGIN
        SELECT * FROM DETALLE_TAREA
        WHERE EstadoTarea = @EstadoTarea;
    END
    ELSE
    BEGIN
        SELECT * FROM DETALLE_TAREA;
    END
END