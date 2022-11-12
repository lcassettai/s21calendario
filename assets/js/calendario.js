document.addEventListener('DOMContentLoaded', function() {
    var calendarDOM = document.getElementById('calendar');

    var calendario = new FullCalendar.Calendar(calendarDOM, {
        eventClick: function(info) {
            const inicio = new Date(info.event.start);
            const fin = new Date(info.event.end);
            console.log(  `${transformarMenorDiez(inicio.getHours())}:${transformarMenorDiez(inicio.getMinutes())}`);
            document.getElementById('form-id').value = info.event.id;
            document.getElementById('form-descripcion').value = info.event.title;
            document.getElementById('form-fechaDesde').value = inicio.toISOString().split('T')[0];
            document.getElementById('form-fechaHasta').value = fin.toISOString().split('T')[0];
            document.getElementById('form-horaDesde').value = `${transformarMenorDiez(inicio.getHours())}:${transformarMenorDiez(inicio.getMinutes())}`;
            document.getElementById('form-horaHasta').value = `${transformarMenorDiez(fin.getHours())}:${transformarMenorDiez(fin.getMinutes())}`;
            document.getElementById('form-color').value = info.event.backgroundColor;
           
            document.getElementById('btnEliminar').style.display = "inline-block";
            document.getElementById('btnActualizar').style.display = "inline-block";
            document.getElementById('btnNuevoEvento').style.display = "none";


        },
        headerToolbar: {
            left: 'today',
            center: 'title',
            right: 'dayGridMonth,listWeek'
        },
        footerToolbar:{
            center: 'prev,next',
        },
        buttonText: {
            today: 'Hoy',
            day: 'Dia',
            week: 'Semana',
            month: 'Mes',
        },
        locale: 'es',
        eventTimeFormat: {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        },
        editable: true,
        navLinks: true, 
        dayMaxEvents: true, 
        nextDayThreshold: '09:00:00',
        events: JSON.parse(localStorage.getItem('eventos')) ?? '',
        loading: function(bool) {
            document.getElementById('loading').style.display =
                bool ? 'block' : 'none';
        }
    });

    calendario.render();
});

const transformarMenorDiez = (numero) => {
    if(numero < 10){
        return "0"+numero;
    }

    return numero;
}