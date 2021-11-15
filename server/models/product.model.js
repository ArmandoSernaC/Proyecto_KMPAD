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
        type:  String,
        required: true

    }  ,
    fecha: {
        type: Date,
        required: true

    }
});

module.exports = mongoose.model("product",product_schema );