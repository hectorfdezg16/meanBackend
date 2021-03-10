/*tener codigo solo del servidor o aplicación index.js archivo que se encargará de arrancar toda la aplicación 
en esta parte del codigo solo tendré modulos de app, toda logica servidor aquí*/

//imprimir hello world en pantalla
console.log("hello world");

//ahora configuramos modulo Morgan y para eso lo requerimos y lo guardamos en una constante
const morgan = require('morgan');

//modulo express, este nos permite crear todas las rutas del servidor o empezar a manipular codigo
const express = require('express');

const app = express();

//ENVIRONMENT VARIABLES???

/*bien queremos que acepte cualquier tipo de puerto, de esta manera port siempre será 4000
esto es igual a cuando definimos variable

función del process.env.PORT= si existe un puerto definido para esta aplicación cogelo
o sino existe coge 4000*/
app.set('port', process.env.PORT || 4000);

/*middleware = función que permite procesar algo antes de que termine
utiliza Morgan, escuchamos peticiones y las vamos mostrando por pantalla*/
app.use(morgan('dev'));

/*vamos a implementar en express para que entienda json / utilizamos desde express metodo json
para que pueda entender lenguaje JSON*/
app.use(express.json());
//este segundo caso es para que pueda entender datos que provienen de formulario HTML
app.use(express.urlencoded({ extended: false }));

/*después de que morgan registre peticiones, requerimos por si nos pide cualquier ruta del fichero
de esta manera si le incluimos /api/users/ lo tomará siempre para esta ruta*/

//como añadir prefijo? Aquí la solución
app.use("/api/users", require('./routes/users.routes'))

//finalmente exportamos / CUANDO EXPORTAMOS SIEMPRE ACABAR SENTENCIA ;
module.exports = app;