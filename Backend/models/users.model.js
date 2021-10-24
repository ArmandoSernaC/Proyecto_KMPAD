const mongoose =  require("mongoose");

const users_schema = new mongoose.Schema({
    nameperson: {
        type: String,
        required: true
    } ,
    idperson: {
        type: String,
        required: true
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
        type: String,
        required: true
    }
})
module.exports = mongoose.model("users", users_schema  );