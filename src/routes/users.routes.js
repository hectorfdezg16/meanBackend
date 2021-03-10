/*requiero desde express algunas cosas
el enrutador o Router no es más que un objeto que nos permite guardar dentro de él rutas = urls*/
const { Router } = require('express') 

/*para poder utilizarlo tenemos que ejecutarlo, le hacemos una función que devuelva un objeto, el objeto
que me devuelva es el que estaré utilizando*/
const router = Router()

//utilizaremos siempre un CRUD
//CREATE - READ - UPDATE - DELETE

/*importo desde la carpeta controllers y lo guardo en una constante
hacemos este proceso para liberar de espacio archivo de routes*/
const usersCtrl = require('../controllers/users.controller.js')

/*declaración de rutas, cuando pidan obtener la ruta /hello, le responderemos con texto hello, de esa 
misma manera ahora par utilizar función hello me aprovecho de la cosntante que he importado*/

//seguimos creando todas las rutas posibles ahora con objeto usersCtrl

//estás en /api/users
router.get('/', usersCtrl.getAllUsers);
router.post('/', usersCtrl.createUser);
router.delete('/:id', usersCtrl.deleteUser);
router.put('/:id', usersCtrl.updateUser);
/*a la de obtener Usuario le pasamos el identificador para que sepa cual queremos
los dos puntos los utilizamos para especificar que estamos creando
un parámetro*/
router.get('/:id', usersCtrl.getUser);

//Exporto
module.exports = router;