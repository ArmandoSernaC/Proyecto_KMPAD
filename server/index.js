'use strict'
 
const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const Mongoose = require("mongoose");
const {product_routes, sales_routes, users_routes} = require("./routes");
const {OAuth2Client} = require("google-auth-library");
const userModel = require('./models/users.model');

//Inicializaación del server y puerto a usar. 
const app = express();
const port = process.env.PORT || 3001;

// configuración variables de entorno
dotenv.config();

//Exposición del backend
app.use(cors());

// Capturamos el body de las peticiones
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//Conexión con la base de datos
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.uusug.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
const option = { useNewUrlParser: true, useUnifiedTopology: true };

Mongoose.connect(uri, option)
.then(() => {console.log("Base de datos conectada correctamente");})
.catch((e) => console.log("Error en la conexión a la base de datos:", e));


//Uso de las rutas
app.use("/api/products", product_routes);
app.use("/api/sales", sales_routes);
app.use("/api/users", users_routes);

 //Nuestro servidor debe estar escuchando
app.listen(port, ()=>{
    console.log(`API REST corriendo en puerto ${port}`);
});


// Autenticación ------------------------------------------------------------------------------
//conexión Auth0 
const CLIENT_ID = "533716128537-9stkfig6ldfclfa36kgrs08682ed81bk.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);
async function verify(token){
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID
        })
        const payload =  ticket.getPayload();
        const userId = payload["sub"];

        return userId;
    } catch (error) {
        console.error(error);
        return null;

    }
}
app.post("/login", async (req, res)=>{
    const userId = await verify(req.body.token);
    if (userId){
        userModel.crearUsuario({
            email: req.body.emailperson,
            nombres: req.body.nameperson,
            activado: false
        }, (error, usuario) => {
            if (error) {
                res.status = 500;
                res.json({
                    error: true,
                    message: error
                });
                return;
            }

            res.json({
                success: true,
                message: 'El usuario es valido',
                usuario: usuario
            });
        });
    }else {
        res.status(400).json({error:true, message: "No se pudo validar el usuario"});
    }

    
})

app.post('/actualizarUsuario', async (req, res) => {
    let userid = await verify(req.headers.token);
    if (userid) {
        userModel.actualizarUsuario({
            email: req.body.emailperson,
            nombres: req.body.nameperson,
            rol: req.body.roleuser,
        }, (error, usuario) => {
            if (error) {
                res.status = 500;
                res.send({
                    error: true,
                    message: error
                });
                return;
            }

            res.send({
                success: true,
                message: 'El usuario fue actualizado',
                usuario: usuario
            });
        });
    } else {
        res.status = 400;
        res.send({
            error: true,
            message: 'No se pudo validar el usuario'
        });
    }
})

app.get('/usuarios', async (req, res) => {
    if (req.headers.token) {
        let userid = await verify(req.headers.token);
        if (userid) {
            userModel.cargarTodos((error, usuarios) => {
                if (error) {
                    res.status = 500;
                    res.send({
                        error: true,
                        message: 'Ocurrio un error en el servidor',
                        errorMessage: error
                    });
                    return;
                }

                res.send({
                    success: true,
                    usuarios: usuarios
                });

                return;
            });
        } else {

            res.status = 400;

            res.send({
                error: true,
                message: 'El TOKEN es invalido'
            });
        }
    } else {

        res.status = 400;

        res.send({
            error: true,
            message: 'El usuario no esta autorizado NO TOKEN'
        });
    }


})


app.listen(port, () => {
    console.log(`App listening in port ${port}`);
});