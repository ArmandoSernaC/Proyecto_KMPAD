const mongoose =  require("mongoose");
const sales_schema = new mongoose.Schema({
    
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
    amount: {
        type: Number,
        required: true 
    } ,
    totalCost:{ 
        type: Number,
        required: true
    } ,
    nameClient: {
        type: String,
        required: true 
    } ,
    idClient:{ 
        type: String,
        required: true
    } ,
    correoClient:{
        type: String,
        required: true 
    } ,
    dirClient: {
        type: String,
        required: true 
    },
    seller:{
        type: String,
        required: true 
    } ,
    fecha:{
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("sales",sales_schema  );