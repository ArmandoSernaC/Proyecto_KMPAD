const {users_model} = require('../models');

getAllusers = (req, res) => {
    users_model.find().exec((err, users)=>{
        if(err) return res.status(500).json({error:true, message:err });
        res.json({users})
    })
}
adduser = (req, res) => {
    const users_new = new users_model(req.body);
    users_new.save((err, product)=>{
        if(err) return res.status(500).json({error:true, message:err });
        res.json({message:"Producto agragado correctamente"})
    }) 
}
module.exports = Object.freeze({
    getAllusers,
    adduser
})