// DECLARACION DE OBJETOS.

class ClienteObject {
    constructor(nombre, apellido, dni, telefono){
        this.nombre = nombre,
        this.apellido = apellido,
        this.dni = dni
        this.telefono = telefono
    }
}

class ActividadObject{
    constructor(id, nombre, horarios){
        this.id = id,
        this.nombre = nombre,
        this.horarios = horarios
    }
}

class TurnoObject{
    constructor(nombreCliente, dniCliente, telefonoCliente, actividadSeleccionada, horarioSeleccionado){
        this.nombreCliente = nombreCliente,
        this.dniCliente = dniCliente,
        this.telefonoCliente = telefonoCliente
        this.actividadSeleccionada = actividadSeleccionada,
        this.horarioSeleccionado = horarioSeleccionado
    }
}

// Inicializamos una constante 'cliente' como Objeto de ClienteObject.
const _cliente = new ClienteObject;

// Inicializamos una constante de que es un array de Actividades de tipo ActividadObject.
const _actividades = [
    new ActividadObject(
        1, 
        'funcional', 
        [
            '17:00',
            '19:00',
            '20:00',
        ],
    ),
    new ActividadObject(
        2, 
        'yoga', 
        [
            '17:00',
        ],
    ),
    new ActividadObject(
        3, 
        'tela', 
        [
            '17:00',
        ],
    ),
    new ActividadObject(
        4, 
        'crossfit', 
        [
            '17:00',
            '20:00',
        ],
    ),
    new ActividadObject(
        5, 
        'aerobox', 
        [
            '18:00',
            '19:00',
        ],
    ),
    new ActividadObject(
        6, 
        'zumba', 
        [
            '18:00',
            '19:00',
            '20:00',
            '22:00',
        ],
    ),
    new ActividadObject(
        7, 
        'taekwondo', 
        [
            '18:00',
            '19:00',
            '20:00',
        ],
    ),
    new ActividadObject(
        8, 
        'karate', 
        [
            '19:00',
            '20:00',
            '21:00',
        ],
    ),
    new ActividadObject(
        9, 
        'mma', 
        [
            '21:00',
            '22:00',
        ],
    ),
    new ActividadObject(
        10, 
        'boxeo', 
        [
            '20:00',
            '21:00',
        ],
    ),
];

// Almacenamos una constante de tipo TurnObject
const _turnoGuardar = new TurnoObject;

// Almacenamos en una variable la actividad seleccionada
let _actividadSeleccionada = new ActividadObject;

// Almacenamos en una variable el turno seleccionado por el cliente.
let _horarioSeleccionado;


// PASO 1: Seleccionar Actividad.
const seleccionarActividad = (_isCorrecto = true) => {
    const mostrarActividades = _actividades.map( a => ` \n • ${a.nombre}`);

    const mjeInicial = `Tenemos las siguientes actividades disponibles:
                                  ${mostrarActividades.sort()}
                                Por favor, seleccione una:`

    const mjeError = `La actividad seleccionada es incorrecta, por favor vuelva a seleccionar:
                                  ${mostrarActividades.sort()}`

    let mensaje = _isCorrecto ? mjeInicial : mjeError
    
    let actividadElegida = prompt(mensaje);
    
    verificarActividad(actividadElegida);
}


// PASO 2: Verificar que la actividad ingresada exista.
const verificarActividad = (actividadElegida) => {
    let actividadEsCorrecta = false;

    while(!actividadEsCorrecta){
        _actividades.forEach(a => {
            if(a.nombre === actividadElegida.toLowerCase()) {
                actividadEsCorrecta = true;
                _actividadSeleccionada = a;
            }
        });

        if(actividadEsCorrecta) return elegirHorario();

        return seleccionarActividad(actividadEsCorrecta);
    }
}

// PASO 3: Visualizar los horarios de la actividad elegida, y seleccionar uno.
const elegirHorario = (_isCorrecto = true) => {
    const mostrarHorarios = _actividadSeleccionada.horarios.map( h => ` \n • ${h}`);

    const mjeInicial = `${_actividadSeleccionada.nombre} tiene los siguientes horarios disponibles:
                                    ${mostrarHorarios}
                                Por favor, seleccione uno:`

    const mjeError = `el horario seleccionado es incorrecto, por favor vuelva a seleccionar:
                                    ${mostrarHorarios}`

    let mensaje = _isCorrecto ? mjeInicial : mjeError

    let horarioElegido = prompt(mensaje);

    verificarHorario(horarioElegido);
}

// PASO 4: Verificamos que el horario ingresado sea válido.
const  verificarHorario = (horarioElegido) => {
    let horarioEsCorrecto = false;

    while(!horarioEsCorrecto){
        _actividadSeleccionada.horarios.forEach(h => {
            if(h === horarioElegido) {
                horarioEsCorrecto = true;
                _horarioSeleccionado = h;
            }
        });

        if(horarioEsCorrecto) return cargarDatosCliente();

        return elegirHorario(horarioEsCorrecto);
    }
}

// PASO 5: Pedimos los datos personales del cliente.
const cargarDatosCliente = () => {
    _cliente.nombre = prompt('Ingrese su nombre: ').toLowerCase();
    while(!_cliente.nombre.match(/[a-zA-Z]/)){
        _cliente.nombre = prompt('El nombre ingresado no es válido, ingrese nuevamente: ').toLowerCase();
    }

    _cliente.apellido = prompt('Ingrese su apellido: ').toLowerCase();
    while(!_cliente.apellido.match(/[a-zA-Z]/)){
        _cliente.apellido = prompt('El apellido ingresado no es válido, ingrese nuevamente: ').toLowerCase();
    }

    _cliente.dni = parseInt(prompt('Ingrese su Número de Documento: '));
    while(isNaN(_cliente.dni)){
        _cliente.dni = parseInt(prompt('El documento ingresado no es válido, ingrese nuevamente: '));
    }

    _cliente.telefono = parseInt(prompt('Ingrese su Número de Telefono: '));
    while(isNaN(_cliente.telefono)){
        _cliente.telefono = parseInt(prompt('El telefono ingresado no es válido, ingrese nuevamente: '));
    }

    preprararReserva();
}

// PASO 6: Validamos que tengamos todos los datos y preparamos para almacenar el el objeto de turno.
const preprararReserva = () => {
    _turnoGuardar.nombreCliente = `${_cliente.nombre} ${_cliente.apellido}`;
    _turnoGuardar.dniCliente = _cliente.dni;
    _turnoGuardar.telefonoCliente = _cliente.telefono;
    _turnoGuardar.actividadSeleccionada = _actividadSeleccionada.nombre[0].toUpperCase() + _actividadSeleccionada.nombre.slice(1);
    _turnoGuardar.horarioSeleccionado = _horarioSeleccionado;
    
    confirmarReserva();
}

const confirmarReserva = () => {
    let lugaresTotales = 10;
    let lugaresDisponibles = lugaresTotales - 1;

    alert(`
            ***********************************************************
            LA RESERVA SE REALIZÓ CON ÉXITO, CON LOS SIGUIENTES DATOS:
                        NOMBRE: ${_turnoGuardar.nombreCliente},
                        DNI: ${_turnoGuardar.dniCliente},
                        TELEFONO: ${_turnoGuardar.telefonoCliente},
                        ACTIVIDAD: ${_turnoGuardar.actividadSeleccionada}.
                        TURNO: ${_turnoGuardar.horarioSeleccionado},
            ___________________________________________________________
                    cupos disponibles: ${lugaresDisponibles}
                       ¡GRACIAS POR CONFIAR EN NOSOTROS!
            `
    )
}


// Inicializamos como funcion de arranque
seleccionarActividad();
