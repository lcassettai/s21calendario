const procesarFormulario = (e) => {
    e.preventDefault();
    let id = document.getElementById('form-id')

    if(id.value == "" || id.value == null || id.value == undefined){
        let descripcion = document.getElementById('form-descripcion');
        let fechaDesde = document.getElementById('form-fechaDesde');
        let fechaHasta = document.getElementById('form-fechaHasta');
        let horaDesde = document.getElementById('form-horaDesde');
        let horaHasta = document.getElementById('form-horaHasta');
        let color = document.getElementById('form-color');
    
    
        let eventos = JSON.parse(localStorage.getItem('eventos')) ?? '';
    
        if (eventos != '') {
            eventos.push({
                "id":Date.now(),
                "color": color.value,
                "title": descripcion.value,
                "start": fechaDesde.value+'T'+horaDesde.value,
                "end": fechaHasta.value+'T'+horaHasta.value
            });
        } else {
            eventos = [{
                "id":Date.now(),
                "color": color.value,
                "title": descripcion.value,
                "start": fechaDesde.value+'T'+horaDesde.value,
                "end": fechaHasta.value+'T'+horaHasta.value
            }];
        }
        
        localStorage.setItem('eventos', JSON.stringify(eventos));
        
        window.location.reload();
    } 
}

const eliminarEvento =  () => {
    let id = document.getElementById('form-id').value;
    let eventos = JSON.parse(localStorage.getItem('eventos')) ?? '';
    let indiceEvento = eventos.findIndex(evento => evento.id == id);
    if (indiceEvento > -1) { 
        eventos.splice(indiceEvento, 1); 
    }
    localStorage.setItem('eventos', JSON.stringify(eventos));
    window.location.reload();
}

const actualizarEvento =  () => {
    let id = document.getElementById('form-id').value;
    let descripcion = document.getElementById('form-descripcion');
    let fechaDesde = document.getElementById('form-fechaDesde');
    let fechaHasta = document.getElementById('form-fechaHasta');
    let horaDesde = document.getElementById('form-horaDesde');
    let horaHasta = document.getElementById('form-horaHasta');
    let color = document.getElementById('form-color');

    //Elimino el evento 
    let eventos = JSON.parse(localStorage.getItem('eventos')) ?? '';
    let indiceEvento = eventos.findIndex(evento => evento.id == id);
    if (indiceEvento > -1) { 
        eventos.splice(indiceEvento, 1); 
    }

    //Creo uno nuevo
    if (eventos != '') {
        eventos.push({
            "id":Date.now(),
            "color": color.value,
            "title": descripcion.value,
            "start": fechaDesde.value+'T'+horaDesde.value,
            "end": fechaHasta.value+'T'+horaHasta.value
        });
    } else {
        eventos = [{
            "id":Date.now(),
            "color": color.value,
            "title": descripcion.value,
            "start": fechaDesde.value+'T'+horaDesde.value,
            "end": fechaHasta.value+'T'+horaHasta.value
        }];
    }
    
    localStorage.setItem('eventos', JSON.stringify(eventos));
    window.location.reload();

}

addEventListener('DOMContentLoaded', (event) => {
    if(localStorage.getItem('esPrimerIngreso') == null){
        localStorage.setItem('eventos',JSON.stringify(datosSeminario));
        localStorage.setItem('esPrimerIngreso',false);
        window.location.reload();           
    }

    const formulario = document.getElementById('formulario');
    const botonEliminar = document.getElementById('btnEliminar');
    const botonActualizar = document.getElementById('btnActualizar');  
   
    formulario.addEventListener('submit', procesarFormulario);
    botonEliminar.addEventListener('click', eliminarEvento);
    botonActualizar.addEventListener('click', actualizarEvento);
});


let randomID = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

let datosSeminario = [
    {
      "id":randomID(),
      "title": "Cursada SEMINARIO DE ACTUALIZACIÓN EN SISTEMAS COLABORATIVOS",
      "color" : "#00806e",
      "start": "2022-08-08T00:00",
      "end": "2022-12-10T23:59"
    },
    {
      "id":randomID(),
      "color":"#d76b6b",
      "title": "1er Entrega seminario Colaborativos",
      "start": "2022-08-21T00:00",
      "end": "2022-08-21T23:59"
    },
    {
      "id":randomID(),
      "color":"#d76b6b",
      "title": "2da Entrega seminario Colaborativos",
      "start": "2022-09-11T00:00",
      "end": "2022-09-11T23:59"
    }
    ,
    {
      "id":randomID(),
      "color":"#d76b6b",  
      "title": "3er Entrega seminario Colaborativos",
      "start": "2022-10-16T00:00",
      "end": "2022-10-16T23:59"
    }
    ,
    {
      "id":randomID(),
      "color":"#d76b6b",
      "title": "4ta Entrega seminario Colaborativos",
      "start": "2022-11-13T00:00",
      "end": "2022-11-13T23:59"
    }
  ];

