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
    constructor(id, img, nombre, horarios){
        this.id = id,
        this.img = img,
        this.nombre = nombre,
        this.horarios = horarios
    }
}

class TurnoObject{
    constructor(id, nombreCliente, dniCliente, telefonoCliente, actividadSeleccionada, horarioSeleccionado){
        this.id = id,
        this.nombreCliente = nombreCliente,
        this.dniCliente = dniCliente,
        this.telefonoCliente = telefonoCliente
        this.actividadSeleccionada = actividadSeleccionada,
        this.horarioSeleccionado = horarioSeleccionado
    }
}

class HorarioObject {
    constructor(id, hora){
        this.id = id,
        this.hora = hora
    }
}

// Inicializamos una constante de que es un array de Actividades de tipo ActividadObject.
const Actividades = [
    new ActividadObject(
        1, 
        'assets/img/funcional.svg',
        'funcional', 
        [
            new HorarioObject(3, '19:00'),
            new HorarioObject(4, '20:00'),
        ],
    ),
    new ActividadObject(
        2, 
        'assets/img/yoga.svg',
        'yoga', 
        [
            new HorarioObject(1, '17:00'),
        ],
    ),
    new ActividadObject(
        3, 
        'assets/img/tela.svg',
        'tela', 
        [
            new HorarioObject(1, '17:00'),
        ],
    ),
    new ActividadObject(
        4, 
        'assets/img/crossfit.svg',
        'crossfit', 
        [
            new HorarioObject(1, '17:00'),
            new HorarioObject(4, '20:00'),
        ],
    ),
    new ActividadObject(
        5, 
        'assets/img/aerobox.svg',
        'aerobox', 
        [
            new HorarioObject(2, '18:00'),
            new HorarioObject(3, '19:00'),
        ],
    ),
    new ActividadObject(
        6, 
        'assets/img/zumba.svg',
        'zumba', 
        [
            new HorarioObject(2, '18:00'),
            new HorarioObject(3, '19:00'),
            new HorarioObject(4, '20:00'),
            new HorarioObject(6, '22:00'),
        ],
    ),
    new ActividadObject(
        7, 
        'assets/img/taekwondo.svg',
        'taekwondo', 
        [
            new HorarioObject(2, '18:00'),
            new HorarioObject(3, '19:00'),
            new HorarioObject(4, '20:00'),
        ],
    ),
    new ActividadObject(
        8, 
        'assets/img/karate.svg',
        'karate', 
        [
            new HorarioObject(3, '19:00'),
            new HorarioObject(4, '20:00'),
            new HorarioObject(5, '21:00'),
        ],
    ),
    new ActividadObject(
        9, 
        'assets/img/mma.svg',
        'mma', 
        [
            new HorarioObject(5, '21:00'),
            new HorarioObject(6, '22:00'),
        ],
    ),
    new ActividadObject(
        10, 
        'assets/img/boxeo.svg',
        'boxeo', 
        [
            new HorarioObject(4, '20:00'),
            new HorarioObject(5, '21:00'),
        ],
    ),
];

AOS.init();

// DECLARACION DE VARIABLES.

// Inicializamos una variable donde almacenaremos los turnos guardados
const TurnoGuardadoDb = [];

// Inicializamos una constante 'cliente' como Objeto de ClienteObject.
const _cliente = new ClienteObject;

// Almacenamos una constante de tipo TurnObject
const _turnoGuardar = new TurnoObject;

// Almacenamos en una variable la actividad seleccionada
let _actividadSeleccionada = new ActividadObject;

// Almacenamos en una variable el turno seleccionado por el cliente.
let _horarioSeleccionado = new HorarioObject;


// PASO 1: OBTENGO MEDIANTE UNA LLAMADA AJAX, EL PARRAFO DE "SOBRE NOSOTROS" PARA MOSTRAR EN LA VISTA. 
const url = "https://jsonplaceholder.typicode.com/posts"
//Agregamos un bot??n con jQuery
const getAbout = () => {
    $.get(url, function (respuesta, estado) {
        if(estado === "success"){
            let misDatos = respuesta;
            console.log(misDatos)

            let dato = [];
            misDatos.forEach( r => dato.push(r.body));
            $("#parrafoContainer").prepend(
                `
                <p class="ssectionAbout__aboutContainer--parrafoContainer__parrafo" id="parrafoAbout"> ${dato[0]}</p>
                <p class="ssectionAbout__aboutContainer--parrafoContainer__parrafo" id="parrafoAbout"> ${dato[1]}</p>
                <p class="ssectionAbout__aboutContainer--parrafoContainer__parrafo" id="parrafoAbout"> ${dato[2]}</p>
                <p class="ssectionAbout__aboutContainer--parrafoContainer__parrafo" id="parrafoAbout"> ${dato[3]}</p>
                `
            );
        }
    })
}

// PASO 2: SELECCIONAMOS EL ELEMENTO DONDE GRAFICAREMOS EL LISTADO DE ACTIVIDADES EN EL HTML.
for (const _actividad of Actividades){
    $('#ulContenedor').append(
        `<li data-aos="flip-left" class="sectionListado__contenedor--ul__li">
            <div id="divActividad${_actividad.id}" class="sectionListado__contenedor--ul__li--divContainer">
                <a href="#modalForm" class="sectionListado__contenedor--ul__li--divContainer__a">
                    <img src="${_actividad.img}" alt="${_actividad.nombre}Img" class="sectionListado__contenedor--ul__li--divContainer__a--img"/>
                    <h3 class="sectionListado__contenedor--ul__li--divContainer__a--h3">${_actividad.nombre}</h3>
                </a>
            </div>
        </li>`
    );

    // CAPTURAMOS LA ACTIVIDAD A LA QUE SE LE HIZO CLICK.
    $(`#divActividad${_actividad.id}`).on('click', () => _seleccionarActividad(_actividad.nombre));

    
}

// PASO 3: CREAMOS UNA FUNCION PARA SELECCIONAR HORARIOS.
function _seleccionarActividad(_actividad) {

    $('#divHorarios').css('display', 'block');
    $('#tituloModal').css('display', 'block');

    // Obtenemos la actividad que se selecciono
    _actividadSeleccionada = Actividades.filter(a => a.nombre === _actividad)[0];

    // armamos el titulo del modal
    $('#subtitulo').append(`<p>Los horarios disponibles para ${_actividadSeleccionada.nombre} son:</p>`);
    
    // recorremos los horarios disponibles
    for(const horario of _actividadSeleccionada.horarios){

        // mostramos los horarios
        $('#ulModal').append(
            `<li class="modal__modalContenido--horarioContainer__ulHorarios--li">
                <p class="modal__modalContenido--horarioContainer__ulHorarios--li__p" id="horarioId${horario.id}");">${horario.hora}</p>
             </li>
            `
        );

        // CAPTURAMOS EL HORARIO AL QUE SE LE HIZO CLICK.
        $(`#horarioId${horario.id}`).on('click', () => _seleccionarHorario(horario));
    }
}

// PASO 4: Creamos una funcion, donde almacenamos el horario seleccionado.
function _seleccionarHorario(_horario){
    _horarioSeleccionado = _horario;

    if(_horarioSeleccionado){
        $('#divHorarios').css('display', 'none');
        $('#ulModal').css('display', 'none !important');

        _continuarReserva();
    }
}

// PASO 5: Mostramos el formulario para el ingreso de datos del cliente.
const _continuarReserva = () => {
    $('#formularioCliente').css('display', 'block');

    $('#formularioCliente').append(
        `<p class="modal__modalContenido--formCliente__subtitle">Ingrese sus datos: </p>
            
        <form id="formularioReserva" class="modal__modalContenido--formCliente__formularioReserva">
        

            
                <input  type="text" 
                        class="modal__modalContenido--formCliente__formularioReserva--input"
                        placeholder="Nombre" 
                        autocomplete="off"
                        required
                        id="nombre">
            

            
                <input  type="text" 
                        class="modal__modalContenido--formCliente__formularioReserva--input"
                        placeholder="Apellido" 
                        autocomplete="off"
                        required
                        id="apellido">
            

            
                <input  type="number" 
                        class="modal__modalContenido--formCliente__formularioReserva--input"
                        placeholder="DNI" 
                        autocomplete="off"
                        required
                        id="dni">
            

            
                <input  type="number" 
                        class="modal__modalContenido--formCliente__formularioReserva--input"
                        placeholder="Telfono" 
                        autocomplete="off"
                        required
                        id="telefono">
           

            <div class="modal__modalContenido--formCliente__formularioReserva--botones">
                <button class="modal__modalContenido--formCliente__formularioReserva--botones__button" type="submit">Confirmar</button>
            </div>
        
        </form>
    `);

    $("#formularioReserva").submit(function (e) {
        //Prevenimos el comportamiento de submit 
        e.preventDefault();
        //Obtenemos hijos del formulario
        
        let hijos = $(e.target).children();

        // Primero borramos el contenedor de posibles mensajes de errores, para no verlos duplicados
        $('#error').css('display', 'block');
        $('#error').empty()

        if(!hijos[0].value.match(/[a-zA-Z]/)) return $('#error').append(`<p class="modal__modalContenido--containerError__p">El nombre ingresado es inv??lido, por favor vuelva a ingresarlo.</p>`);
        if(!hijos[1].value.match(/[a-zA-Z]/)) return $('#error').append(`<p class="modal__modalContenido--containerError__p">El apellido ingresado es inv??lido, por favor vuelva a ingresarlo.</p>`);
        if(isNaN(hijos[2].value)) return $('#error').append(`<p class="modal__modalContenido--containerError__p">El n??mero de dni es inv??lido, por favor vuelva a ingresarlo.</p>`);
        if(isNaN(hijos[3].value)) return $('#error').append(`<p class="modal__modalContenido--containerError__p">El telefono es inv??lido, por favor vuelva a ingresarlo.</p>`);

        // PREPARAMOS EL OBJETO DEL CLIENTE
        _cliente.nombre = hijos[0].value;
        _cliente.apellido = hijos[1].value;
        _cliente.dni = hijos[2].value;
        _cliente.telefono = hijos[3].value;

        _prepararReserva();
    }); 
}

// PASO 6: preparamos para almacenar el objeto de turno.
function _prepararReserva() {
    if(_cliente.nombre && _cliente.apellido && _cliente.dni && _cliente.telefono){
        let nombre = _cliente.nombre[0].toUpperCase() + _cliente.nombre.slice(1).toLowerCase();
        let apellido = _cliente.apellido[0].toUpperCase() + _cliente.apellido.slice(1).toLowerCase();

        _turnoGuardar.id = Math.floor(Math.random()*2000);
        _turnoGuardar.nombreCliente = `${nombre} ${apellido}`;
        _turnoGuardar.dniCliente = _cliente.dni;
        _turnoGuardar.telefonoCliente = _cliente.telefono;
        _turnoGuardar.actividadSeleccionada = _actividadSeleccionada.nombre[0].toUpperCase() + _actividadSeleccionada.nombre.slice(1);
        _turnoGuardar.horarioSeleccionado = _horarioSeleccionado;

        TurnoGuardadoDb.push(_turnoGuardar)

        _confirmarReserva();
    }
}

function _confirmarReserva(){
    $('#tituloModal').css('display', 'none');
    $('#formularioCliente').css('display', 'none');
    $('#error').css('display', 'none');

    $('#confirmacion').append(` <h3 class="modal__modalContenido--containerConfirmacion__h3">????LA RESERVA SE REALIZ?? CON ??XITO!!</h3>
                                <p class="modal__modalContenido--containerConfirmacion__p">NOMBRE: ${_turnoGuardar.nombreCliente},</p>
                                <p class="modal__modalContenido--containerConfirmacion__p">DNI: ${_turnoGuardar.dniCliente},</p>
                                <p class="modal__modalContenido--containerConfirmacion__p">TELEFONO: ${_turnoGuardar.telefonoCliente},</p>
                                <p class="modal__modalContenido--containerConfirmacion__p">ACTIVIDAD: ${_turnoGuardar.actividadSeleccionada},</p>
                                <p class="modal__modalContenido--containerConfirmacion__p">TURNO: ${_turnoGuardar.horarioSeleccionado.hora}</p>

                                <p class="modal__modalContenido--containerConfirmacion__p">Su c??digo de confirmaci??n es: ${_turnoGuardar.id}</p>
                              `)
}

// ANIMACIONES

$(".sectionAbout").fadeIn("slow", function(){ 
        console.log("final de animaci??n");
    }
);

$(".sectionListado").fadeIn("slow", function(){ 
    console.log("final de animaci??n");
}
);




const setAnioFooter = () => {
    let anioActual = new Date().getFullYear();

    $('#footerStrong').append(
        `<a href="#home" class="footer__text--strong__nameTitle">FitAssist</a> &copy; ${anioActual}`
    );
}


setAnioFooter();
getAbout();