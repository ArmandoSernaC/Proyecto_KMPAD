'use strict'
 
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
 
app.use(express.urlencoded({extended : false}));
app.use(express.json());
 
app.listen(port, ()=>{
    console.log(`API REST corriendo en puerto ${port}`);
});
