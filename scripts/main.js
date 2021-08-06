// DECLARACION DE OBJETOS.

class ClientObject {
    constructor(name, lastName, dni){
        this.name = name,
        this.lastName = lastName,
        this.dni = dni
    }
}

class ActivtyObject{
    constructor(id, name){
        this.id = id,
        this.name = name
    }
}

class TurnObject{
    constructor(id, nameClient, dniClient, activity, shiftSelected){
        this.nameClient = nameClient,
        this.dniClient = dniClient,
        this.activity = activity,
        this.shiftSelected = shiftSelected
    }
}



const client = new ClientObject;

const _firstActivity = new ActivtyObject(1, 'funcional');
const _secondActivity  = new ActivtyObject(2, 'yoga');
const _thirdActivity = new ActivtyObject(3, 'tela');
const _fourthActivity = new ActivtyObject(4, 'crossfitt'); 
const _fifthActivity = new ActivtyObject(5, 'aerobox');
const _sixthActivity = new ActivtyObject(6, 'zumba');
const _seventhActivity = new ActivtyObject(7, 'taekwondo');
const _eighthActivty = new ActivtyObject(8, 'karate');
const _ninthActivity = new ActivtyObject(9, 'mma');
const _tenthActivity = new ActivtyObject(10, 'boxeo');

const turn = new TurnObject;

// Variables para realizar conteos de lugares disponibles.
let totalPlaces
let _availableSpace

// almacenamos el turno seleccionado
let selectedShift;

// almacenamos la actividad seleccionada;
let codeSelectedActivity;

// creamos una bandera para saber si el horario seleccionado es correcto, inicializamos en falsa.
let isCorrectSchedule = false;


// Creamos una funcion para cargar los datos del cliente
const loadData = () => {
    client.name = prompt('Ingrese su nombre: ').toLowerCase();
    while(!client.name.match(/[a-zA-Z]/)){
        client.name = prompt('El nombre ingresado no es válido, ingrese nuevamente: ').toLowerCase();
    }

    client.lastName = prompt('Ingrese su apellido: ').toLowerCase();
    while(!client.lastName.match(/[a-zA-Z]/)){
        client.lastName = prompt('El apellido ingresado no es válido, ingrese nuevamente: ').toLowerCase();
    }

    client.dni = parseInt(prompt('Ingrese su Número de Documento: '));
    while(isNaN(client.dni)){
        client.dni = parseInt(prompt('El documento ingresado no es válido, ingrese nuevamente: '));
    }

    loadSchedule('Ingrese el horario a asistir (17:00 | 18:00 | 19:00 | 20:00 | 21:00 | 22:00): ');
}

// Creamos una funcion para cargar el horario
const loadSchedule = (_message) => {
    selectedShift = prompt(`${_message}`);

    verifySchedule(selectedShift)
}

// Creamos una funcion para verificar el horario ingresado
const verifySchedule = (_schedule) => {
    while(isCorrectSchedule == false){
        if(_schedule === '17:00' || _schedule === '18:00' || _schedule === '19:00' || _schedule === '20:00' || _schedule === '21:00' || _schedule === '22:00'){
            isCorrectSchedule = true;
            loadActivity(selectedShift);
        }else{
            isCorrectSchedule = false;
            loadSchedule('El horario ingresado no es válido, ingrese nuevamente (17:00 | 18:00 | 19:00 | 20:00 | 21:00 | 22:00): ');
        }
    }

}

// creamos una funcion para cargar la actividad que queremos
const loadActivity = (_shift) => {
    switch(_shift){
        case '17:00':
            codeSelectedActivity = parseInt(prompt(`Las actividades disponibles para este horario son: 
                                                ${_firstActivity.id} - ${_firstActivity.name}
                                                ${_secondActivity.id} - ${_secondActivity.name}
                                                ${_thirdActivity.id} - ${_thirdActivity.name}
                                                ${_fourthActivity.id} - ${_fourthActivity.name}
                                       Ingrese el número correspondiente a la actividad que desea: `));

            verifyActivity(codeSelectedActivity);

            break;

        case '18:00':
            codeSelectedActivity = parseInt(prompt(`Las actividades disponibles para este horario son:
                                                ${_fifthActivity.id} - ${_fifthActivity.name}
                                                ${_sixthActivity.id} - ${_sixthActivity.name}
                                                ${_seventhActivity.id} - ${_seventhActivity.name}
                                       Ingrese el número correspondiente a la actividad que desea: `));
                                           
            verifyActivity(codeSelectedActivity);

            break;

        case '19:00':
            codeSelectedActivity = parseInt(prompt(`Las actividades disponibles para este horario son: 
                                                ${_sixthActivity.id} - ${_sixthActivity.name}
                                                ${_seventhActivity.id} - ${_seventhActivity.name}
                                                ${_eighthActivty.id} - ${_eighthActivty.name}
                                       Ingrese el número correspondiente a la actividad que desea: `));

            verifyActivity(codeSelectedActivity);

            break;

        case '20:00':
            codeSelectedActivity = parseInt(prompt(`Las actividades disponibles para este horario son: 
                                                ${_sixthActivity.id} - ${_sixthActivity.name}
                                                ${_eighthActivty.id} - ${_eighthActivty.name}
                                                ${_seventhActivity.id} - ${_seventhActivity.name}}
                                                ${_tenthActivity.id} - ${_tenthActivity.name}
                                       Ingrese el número correspondiente a la actividad que desea: `));

            verifyActivity(codeSelectedActivity);
            
            break;

        case '21:00':
            codeSelectedActivity = parseInt(prompt(`Las actividades disponibles para este horario son: 
                                                ${_ninthActivity.id} - ${_ninthActivity.name}
                                                ${_eighthActivty.id} - ${_eighthActivty.name}
                                                ${_tenthActivity.id} - ${_tenthActivity.name}
                                       Ingrese el número correspondiente a la actividad que desea: `));
                                           
            verifyActivity(codeSelectedActivity);
            
            break;

        case '22:00':
            codeSelectedActivity = parseInt(prompt(`Las actividades disponibles para este horario son: 
                                                ${_sixthActivity.id} - ${_sixthActivity.name}
                                                ${_ninthActivity.id} - ${_ninthActivity.name}
                                       Ingrese el número correspondiente a la actividad que desea: `));
            
            verifyActivity(codeSelectedActivity);

            break;
    }

}

// Creamos una funcion para que la verificar actividad sea valida
const verifyActivity = (_activity) => {
    if(isNaN(_activity)) return loadActivity(selectedShift);

    if(_activity === _firstActivity.id || _activity === _secondActivity.id || _activity === _thirdActivity.id || _activity === _fourthActivity.id || _activity === _fifthActivity.id || _activity === _sixthActivity.id || _activity === _seventhActivity.id || _activity === _eighthActivty.id || _activity === _ninthActivity.id || _activity === _tenthActivity.id){
        return formatData(_activity);
    }else{
        return loadActivity(selectedShift);
    }
}


const formatData = (activity) => {
    // Calculamos los luagres que quedan disponibles.
    totalPlaces = 10;
    _availableSpace = totalPlaces - 1;

    // formateamos los datos del cliente para que se vean en CamelCase.
    client.name = client.name[0].toUpperCase() + client.name.slice(1);
    client.lastName = client.lastName[0].toUpperCase() + client.lastName.slice(1);

    // buscamos la actividad que selecciono el cliente, formateamos a CamelCase y la guardamos en una variable.
    let _selectedActivity = null;
    while(!_selectedActivity){
        switch(activity){
            case _firstActivity.id:
                _selectedActivity = _firstActivity.name[0].toUpperCase() + _firstActivity.name.slice(1);
                break;

            case _secondActivity.id:
                _selectedActivity = _secondActivity.name[0].toUpperCase() + _secondActivity.name.slice(1);
                break;

            case _thirdActivity.id:
                _selectedActivity = _thirdActivity.name[0].toUpperCase() + _thirdActivity.name.slice(1);
                break;

            case _fourthActivity.id:
                _selectedActivity = _fourthActivity.name[0].toUpperCase() + _fourthActivity.name.slice(1);
                break;

            case _fifthActivity.id:
                _selectedActivity = _fifthActivity.name[0].toUpperCase() + _fifthActivity.name.slice(1);
                break;

            case _sixthActivity.id:
                _selectedActivity = _sixthActivity.name[0].toUpperCase() + _sixthActivity.name.slice(1);
                break;

            case _seventhActivity.id:
                _selectedActivity = _seventhActivity.name[0].toUpperCase() + _seventhActivity.name.slice(1);
                break;

            case _eighthActivty.id:
                _selectedActivity = _eighthActivty.name[0].toUpperCase() + _eighthActivty.name.slice(1);
                break;

            case _ninthActivity.id:
                _selectedActivity = _ninthActivity.name[0].toUpperCase() + _ninthActivity.name.slice(1);
                break;

            case _tenthActivity.id:
                _selectedActivity = _tenthActivity.name[0].toUpperCase() + _tenthActivity.name.slice(1);
                break;

            default:
                break;
        }
    }
    // Completamos el objeto que muestra el turno
    turn.nameClient = `${client.name} ${client.lastName}`,
    turn.dniClient = client.dni,
    turn.activity = _selectedActivity,
    turn.shiftSelected = selectedShift

    confirmShift()

}

const confirmShift = () => {
    alert(`
    ***********************************************************
    LA RESERVA SE REALIZÓ CON ÉXITO, CON LOS SIGUIENTES DATOS:
                NOMBRE: ${turn.nameClient},
                DNI: ${turn.dniClient},
                ACTIVIDAD: ${turn.activity}.
                TURNO: ${turn.shiftSelected},
    ___________________________________________________________
            cupos disponibles: ${_availableSpace}
               ¡GRACIAS POR CONFIAR EN NOSOTROS!
 
    `)
}   



loadData();
