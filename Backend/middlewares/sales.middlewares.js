const joi = require("@hapi/joi");
const {sales_model} = require("../models");

verifyTypes = (req, res, next) => {

    const sale_joi =  joi.object({
        
        id: joi.number.required() ,
        namefruit:joi.string.required() ,
        Unitcost:joi.number.required()  ,
        amount:joi.number.required() ,
        totalCost:joi.number.required() ,
        nameClient: joi.string.required() ,
        idClient:joi.number.required() ,
        correoClient: joi.string.required() ,
        dirClient:joi.string.required()  ,
        seller:joi.string.required() ,
        fecha: joi.date.required()

        
    })
    const {error} = sale_joi.validate(req.body);
    if(error) return res.status(400).json({
        mensaje: error.details[0].message,
        error: true});
    next();
}
verifyId = (req, res, next) => {
    sales_model.findOne({id: req.body.id}).exec((err , sale)=>{
        if(err) return res.status(500).json({error:true, message :err});
        if(sale) return res.status(400).json({error:true, message: "Venta ya registrada"})
        next()
    });
}
module.exports = Object.freeze({verifyTypes,verifyId
})