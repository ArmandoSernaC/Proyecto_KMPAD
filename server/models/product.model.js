const mongoose =  require("mongoose");

const product_schema = new mongoose.Schema({

    id: {
        type: String,
        required: true
    },
    namefruit:{
        type: String,
        required: true
    } ,
    Unitcost:{
        type: Number,
        required: true

    } ,
    amount:{
        type: Number,
        required: true

    }  ,
    Disponibility:{
<<<<<<< HEAD
        type:  String,
=======
        type: String,
>>>>>>> 6a1575854cf7df053ca6d4bc41a364742e0474fd
        required: true

    }  ,
    fecha: {
        type: Date,
        required: true

    }
});

module.exports = mongoose.model("product",product_schema );