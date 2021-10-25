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

deleteuser = async (req, res)=>{


    try{
        const user_delete = await  users_model.findOneAndDelete({emailperson: req.params.email});
        if(user_delete) return res.json({user_delete, message: "Usuario eliminado correctamente"})
        else return res.status(400).json({error:true, message: "Hubo un error al intentar eliminar al usuario"})

    }catch(error){
        return res.status(500).json({error:true, message: error})
    }
}

updateUser = async (req, res)=>{


    try{
        const user_update = await  users_model.findOneAndUpdate({id: req.body.id}, req.body,{useFindAndModify :false} );
        if(user_update) return res.json({user_update, message: "Usuario actualizado correctamente"})
        else return res.status(400).json({error:true, message: "Hubo un error al intentar actualizar el registro de usuarios"})

    }catch(error){
        return res.status(500).json({error:true, message: error})
    }
}

module.exports = Object.freeze({
    getAllusers,
    adduser,
    deleteuser,
    updateUser
})