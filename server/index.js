'use strict'
 
const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const Mongoose = require("mongoose");
const {product_routes, sales_routes, users_routes} = require("./routes");
const {OAuth2Client} = require("google-auth-library");

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
        res.json({succes:true, message: "El token es válido"});
    }else {
        res.status(400).json({error:true, message: "No se pudo validar el usuario"});
    }

    
})