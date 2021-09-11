## FitAssist

Proyecto final correspondiente al modulo de JavaScript, de la carrera de Desarrollo Full Stack, de CODER HOUESE.
Creado por Gonzales Liendo Facundo German.

Está compuesta por:
INDEX: Contiene la información de su trayectoria, y de todas las actividades disponibles.
Una ventana modal, que nos permitira seleccionar el horario de la actividad elegida, y luego ingresar nuestros
datos para realizar la reserva correspondiente.

En cuanto la organizacion de las carpetas, podremos encontrar la siguiente estructura:
-> Assest: contiene todos los recursos utilizados en la app.
-> Fonts: Contiene todas las fuentes utilizadas en la app.
-> Img: Contiene todas las imagenes utilizadas.

-> scripts: Contiene todos los archivos JS utilizados en el proyecto.
-> es5: Aquí podremos encontrar un único archivo JS, que contiene todo el codigo de nuestra app, esta desarrollada
siguiende el estandar ES5, permitiendo así, la compatibilidad con navegadores antiguos.

    -> es6: Aquí podremos encontrar varios archivos más, pensados en el desarrollo de modulos, implementados en el ES6, con imports/exports.
        -> constantes: Aquí dentro encontraremos las variables que son inmodificables en nuestra app.
        -> models: Aquí se encuentran nuestros objetos/modelos de datos que luego utilizaremos en la app.

        -> _main.js: Se encuentra todo el código modularizado.

-> styles: Contiene todos los estilos de la app.
-> css: Contiene todo los estilos compilados a css.
-> scss: Contiene los estilos de la aplicacion desarrollados en scss.
-> mixins: contiene codigo reutilizables, como por ejemplo fisplay grid y float, background, etc.
-> variables: contiene un archivo donde se declararon todos los colores usados.
-> \_fonts.scss: contiene toda la importacion de fuentes.
-> \_genereales.scss: contiene estilos globales.
-> main.scss: contiene todos los estilos por secciones.

-> index.html: Contiene el codigo html principal.

Este sitio esta diseñado de manera responsive, para dispositivos desktop/mobile: 480px / 760px / 1024px / +1024px.

Desarrollado utilizando las siguientes tecnologías:
`HTML5 | SASS | JAVASCRIPT | JQUERY | AJAX`.

## COMANDOS ÚTILES ANTES DE INICIAR EN EL EDITOR DE CÓDIGOS.

# Intalacion de SASS

`npm install -d node-sass nodemon`

# Compilacion de SASS (Una vez instalado sass, debemos compilar nuestro codigo sass a css, para ello lanzaremos el siguiente comando)

`npm run build-css`

# CSS ESCUCHANDO EN TODO MOMENTO LA COMPILACION (para evitar lanzar el comando anterior cada vez que realizamos cambios, podemos colcoar el siguiente comando)

`npm run watch-css`
