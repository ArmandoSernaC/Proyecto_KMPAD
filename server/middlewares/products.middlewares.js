const {product_model} = require("../models");
const joi = require("@hapi/joi");

verifyTypes = (req, res, next) => {

    const product_joi =  joi.object({

        id: joi.string().required(),
        namefruit: joi.string().required(),
        Unitcost:joi.number().required(), 
        amount: joi.number().required(),
        Disponibility: joi.boolean().optional(),
        fecha:  joi.date().required()
    });
    const {error} = product_joi.validate(req.body);
    if(error) return res.status(400).json({
        mensaje: error.details[0].message,
        error: true});
    next();
}

verifyId = (req, res, next) => {
    product_model.findOne({id: req.body.id}).exec((err , product)=>{
        if(err) return res.status(500).json({error:true, message :err});
        if(product) return res.status(400).json({error:true, message: "Producto ya registrado"})
        next()
    });
}


module.exports = Object.freeze({
    verifyTypes,
    verifyId
})
