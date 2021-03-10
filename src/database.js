/*archivo que nos permitirá tener conexión con la base de datos
en nuestro caso vamos a utilizar mongodb con su respectivo modulo que vamos a utilizar: mongoose*/

/*volvemos a lo primero que hemos hechor requerir el modulo mongoose, para ello creamos constante que nos
requiere todos los datos del modulo que venga mongoose*/
const mongoose = require('mongoose')

/*en mongoose tenemos una función que se llama connect, esta función nos permite conectarnos a una base
de datos, no importa que no este creada mongodb lo hará por mí 
después de cuando se conecte voy a mostrar por consola que ya estamos conectados
en caso de que no se conecte mostraré el error por consola*/

//eliminaremos también los mensaje innecesarios al principio conexión DB
mongoose
.connect("mongodb://localhost/mean-users", {
    //palabras que te pide mongoose para que deje de enviar advertencias
    useUnifiedTopology: true,
    useNewUrlParser: true,
    //añadimos otra propiedad más a false para que no se nos queje
    useFindAndModify: false
})
.then(db => console.log("DB is connected!"))
.catch(err => console.error(err));
