//guardar función mostrar hello en una constante
//const hello = (req, res) => res.send('hello');


//exporto mi constante creada
//module.exports = { hello }

//


/*mejor opción crear un objeto controller que englobe todas las funciones que queramos
en este caso cogeremos y crearemos objeto user con: obtener users, create user, etc. CRUD*/
const userCtrl = {}

//creamos constante para importar datos del modelo usuario
const User = require('../models/User')

/*estas funciones van a recibir un request y un response, todas funciones del CRUD
debido a que find es un metodo síncrono necesitaremos el await y el async*/
userCtrl.getAllUsers = async (req, res) => {

    //de momento enviamos mensajes como respuestas a las diferentes consultas
    //res.send('Get All Users!')

    /*depués de utilizar mongoose y por lo tanto mongodb podemos interactuar con las funciones base datos
    creamos constante para guardar array de usuarios y la enviamos a fontend con json*/
    const users = await User.find()
    res.json(users)
}
userCtrl.createUser = async (req, res) => {
    //primero recibimos datos por parte del cliente / esto nos da info cliente
    console.log(req.body)

    /*creamos nuevo usuario a través de info que nos pasa en el body
    guardamos en una constante para después guardarlo en la DB*/
    const newUser = new User(req.body)
    console.log(newUser);

    //para guardarlo utilizaré metodo save que es síncrono
    await newUser.save()

    /*enviamos respuesta por consola que ya se nos ha creado nuevo usuario
    en vez de enviar mensaje por consola como hacíamos antes 
    ahora vamos a enviarle mensaje al cliente*/
    res.send({message: '¡Ya estás registrado en el sistema!'})
}

//nos falta para terminar eliminar un usuario y actualizar datos
userCtrl.deleteUser = async (req, res) => {
    
    //volvemos a coger parámetros que nos pasa el usuario
    console.log(req.params)

    //hay una función en mongodb que cumple perfectamente para nuestro proposito
    await User.findByIdAndDelete(req.params.id)

    //para acabar enviamos al cliente conforme el usuario se ha eliminado correctamente 
    res.json({status: 'Usuario eliminado correctamente'})
}

//terminamos API para luego trabajarla y desarrollarla con Angular
userCtrl.updateUser = async (req, res) => {

    //volvemos a coger id de la info que nos envia el usuario
    
    //no hace falta, es puramente informativo
    console.log(req.params)

    /*vuelve a haber otra función de mongo que nos encaja: findByIdAndUpdate
    le pasaremos dos datos:
    *requestBody= info que actualizará del usuario
    *requestParams= de ahí seleccionaremos el id del usuario deseado*/
    await User.findByIdAndUpdate(req.params.id,req.body)

    res.json({status: 'Usuario actualizado correctamente'})

}
userCtrl.getUser = async (req, res) => {
    //para extraer el usuario primero tenemos que extraer el id
    console.log(req.params)

    /*y buscamos a través función Mongodb / findOne o findById
    otra vez es metodo síncrono por lo tanto await y async*/
    const user = await User.findById(req.params.id)

    /*en vez de decirme que hemos encontrado al usuario según su id
    me vas a devolver al usuario al completo*/
    res.send(user)

}

//exportamos otra vez objeto creado en la constante
module.exports = userCtrl; 