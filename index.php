<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='lib/main.min.css' rel='stylesheet' />
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/boostrap/css/bootstrap.css">
    <script src="assets/boostrap/js\bootstrap.js"></script>
    <script src='lib/main.min.js'></script>
    <script src='lib/locales.js'></script>
    <style>
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
        font-size: 14px;
    }

    #script-warning {
        display: none;
        background: #eee;
        border-bottom: 1px solid #ddd;
        padding: 0 10px;
        line-height: 40px;
        text-align: center;
        font-weight: bold;
        font-size: 12px;
        color: red;
    }

    #loading {
        display: none;
        position: absolute;
        top: 10px;
        right: 10px;
    }

    #calendar {
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 10px;
    }
    </style>
</head>

<body>

    <div id='script-warning'>
        <code>php/get-events.php</code> must be running.
    </div>
    <div id='loading'>loading...</div>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-xs-12 col-lg-4">
                <div class="d-flex justify-content-center align-items-center">
                    <div class="mt-4 panel">
                        <div class="div text-center">
                            <h3>Nuevo evento</h3>
                        </div>
                        <form id="formulario">
                            <input type="hidden" id="form-id">
                            <div class="mb-3">
                                <label for="descripcion" class="form-label">Descripcion</label>
                                <input type="text" class="form-control" id="form-descripcion"
                                    aria-describedby="descripcion" name="descripcion" required>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <label for="fecha-desde" class="form-label">Fecha desde</label>
                                    <input type="date" class="form-control" id="form-fechaDesde"
                                        aria-describedby="fecha-desde" name="fecha-desde" required>                                    
                                </div>
                                <div class="col">
                                    <label for="fecha-desde" class="form-label">Hora</label>
                                    <input type="time" id="form-horaDesde" class="form-control" name="hora-desde" required>                                    
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <label for="fecha-hasta" class="form-label">Fecha Hasta</label>
                                    <input type="date" class="form-control" id="form-fechaHasta"
                                        aria-describedby="fecha-hasta" name="fecha-hasta" required>
                                </div>
                                <div class="col">
                                    <label for="fecha-desde" class="form-label">Hora</label>
                                    <input type="time" id="form-horaHasta" class="form-control" name="hora-hasta" required>                                    
                                </div> 
                            </div>                                                  
                            <div class="mb-3">
                                <label for="exampleColorInput" class="form-label">Color</label>
                                <input type="color" class="form-control form-control-color" id="form-color"
                                    value="#563d7c" title="Choose your color">
                            </div>
                            <div class="d-flex justify-content-between">
                                <button type="submit" class="btn btn-success" name="btnRegistrarEvento" id="btnNuevoEvento" >Guardar</button>
                                <button class="btn btn-danger" name="btnEliminar" id="btnEliminar">Eliminar</button>
                                <button class="btn btn-primary" name="btnActualizar" id="btnActualizar">Actualizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="  col-xs-12 col-xs-12  col-lg-8         ">
                <div class="panel mt-4">
                    <div id='calendar'></div>
                </div>
            </div>
        </div>
    </div>
    <script src='assets/js/calendario.js'></script>
    <script src='assets/js/procesarEvento.js'></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>
</html>