//ESTO ES EL CONTROLADOR DE USUARIO.


//Importamos tanto el modelo de tabla(Schema) de usuario como también importamos mongoose.

const UserModel=require('../models/User');
const mongoose =require('mongoose');


//A continuación tenemos las funciones del controlador.

const addUser = (req,res) => {
    
    //guardamos en la constante rBok el body que no hemos traido por parámetro (rB)
    //const rBok = rB;

    //Lo que haremos en este caso ya que no tenemos el frontend aun..será crear el body artificialmente

    const rBok = {
        username: "Hans",
        email: "hans@hans.com",
        phone: 965554121,
        billcard: 45001234654798,
        password: "asd1234"
    }
    //aqui instanciamos el modelo, para que nos haga un usuario nuevo
    new UserModel ({
        
        username: rBok.username,
        email: rBok.email,
        phone: rBok.phone,
        billcard: rBok.billcard,
        password: rBok.password
        
    }).save() //.save() es el comando de mongoose que guardará en la base de datos.
    //aqui viene la promesa
    .then(users=>{         //then en castellano es "entonces", y hace referencia a que la promesa se cumple
        //res.send(users);
        return res.send({
            name: rBok.username
        });
        
    })
    .catch(error=>console.log(error))
}



//Al final del documento, tenemos module.exports, que va a exportar todas las funciones del controlador 
//para que desde index.js en el enrutado los endpoints puedan acceder a ellas.s
module.exports = {
    addUser
}

