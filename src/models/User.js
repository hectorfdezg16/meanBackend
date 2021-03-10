//este archivo nos permitirá lo es lo que guardaremos en la base de datos

/*vuelvo a requerir mongoose, también requeriré el esquema de mongoose
esquema = nosotros vamos a querer guardar
modelo = es lo que nosotros vamos a manipular para buscar, eliminar, etc. (interactua con la BASE DATOS)*/
const { Schema, model } = require('mongoose')


//el esquema de usuario lo guardamos en una variable que después exportaremos
const userSchema = new Schema({
    name: { type: String, required: true},
    lastname: { type: String, required: true},
    password: { type: String, required: true},
    coins: { type: Number, required: true}
}, /*aquí guardaremos otros parámetros*/{
    /*timestamps va a ser muy importante: nos va a crear dato de cuando fue creado y cuando fue actualizado
    por última vez*/
    timestamps: true,
    //versionKey: cuando creemos objeto no añade un subguion, no lo utilizaremos 
    versionKey: false

})


/*aquí utilizamos esquema, podemos crear modelo que después será el que interactuemos
exportaremos modulo del model para poderlo utilizar fuera*/

//lo utilizaremos en la vista controlador
module.exports = model('User', userSchema)