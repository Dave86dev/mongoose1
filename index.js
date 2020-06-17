//Sección de importacion básica

const express = require('express');
const app = express();

//Importamos los módulos (funciones del controlador)

const {addUser} = require('./dB/dbuser');

//Middleware
app.use(express.json());
// Configure headers & cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Aquí procederemos a conectar a la base de datos
// const dbconnect = require('./dbconnect');
// dbconnect();


//AHORA VIENEN LAS ACCIONES CON LOS ENDPOINTS

app.post('/user/crear', addUser);



//FINALMENTE LEVANTAMOS EL SERVIDOR

//port listen
app.listen(3000, ()=> console.log('>>>SERVER ONLINE'));