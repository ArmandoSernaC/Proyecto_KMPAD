const joi = require("@hapi/joi");
const {users_model} = require("../models");

verifyTypes = (req, res, next) => {

    const user_joi =  joi.object({

        nameperson:  joi.string.required(),
        idperson:  joi.string.required(),
        emailperson: joi.string.required(),
        roleuser:  joi.string.required(),
        userstatus: joi.boolean.optional()          
    })
    const {error} = user_joi.validate(req.body);
    if(error) return res.status(400).json({
        mensaje: error.details[0].message,
        error: true});
    next();
}
verifyEmail = (req, res, next) => {
    users_model.findOne({id: req.body.id}).exec((err , user)=>{
        if(err) return res.status(500).json({error:true, message :err});
        if(user) return res.status(400).json({error:true, message: "Usuario ya registrado"})
        next()
    });
}
module.exports = Object.freeze({verifyTypes, verifyEmail})