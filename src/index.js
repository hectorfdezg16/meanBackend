/*en la estructura del archivo podemos ver que primero requeriremos la conexión a la base de datos
y luego haremos la conexión con el servidor o la app*/

//nos falta requerir la base de datos en este archivo principal
require('./database')

//aquí requeriré toda la parte del server
const app = require('./server')

/*quiero que constante que hemos creado de modulo express se escuche en un determinado puerto
creamos servidor en puerto 3000*/

/*ya no utilizaremos la variable 3000 utilizaremos la variable port proveniente del server.js
objeto app tiene acceso a toda la aplicación*/
app.listen(app.get('port'));


//mensaje de verificación del servidor
console.log('Server on port',app.get('port'));