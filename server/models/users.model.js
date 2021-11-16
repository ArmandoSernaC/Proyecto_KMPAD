const mongoose =  require("mongoose");

const users_schema = new mongoose.Schema({
    nameperson: {
        type: String,
        required: true
    } ,
    idperson: {
        type: String,
        required: false
    } ,
    emailperson:{
        type: String,
        required: true
    }  ,
    roleuser: {
        type: String,
        required: true
    } ,
    userstatus:  {
        type: Boolean,
        default:false
    }
})

const userTools = ()=>{
    this.crearUsuario = (user, callback)=>{
        this.cargarUsuario({email: user.email}, (error, usuarioBD)=>{
            if(error) {
                callback(error, {});
            } else {
                if(!usuarioBD) {
                    user.rol = "Pendiente";
                    userModel.create(user, callback);
                } else {
                    user.rol = usuarioBD.rol;
                    this.actualizarUsuario(user, callback);
                }
            }
        });
    };

    this.actualizarUsuario = (user, callback)=> {
        userModel.findOneAndUpdate({email:user.email}, user, callback);
    };

    this.cargarUsuario = (user, callback)=>{
        userModel.findOne(user, callback);
    };

    this.cargarTodos = (callback)=>{
        userModel.find({}, callback);
    };

    return {
        crearUsuario: this.crearUsuario,
        actualizarUsuario: this.actualizarUsuario,
        cargarUsuario: this.cargarUsuario,
        cargarTodos: this.cargarTodos,
    }
};

module.exports = userTools();
module.exports = mongoose.model("users", users_schema  );