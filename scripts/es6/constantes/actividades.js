// Se crea constante donde almacenamos todas las actividades disponibles.

import { ActividadObject } from "../models/actividad-object.js";
import { HorarioObject } from "../models/horario-object.js";

export const Actividades = [
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
