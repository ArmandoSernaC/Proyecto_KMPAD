const {sales_model} = require('../models');

getAllsales = (req, res) => {
    sales_model.find().exec((err, sales)=>{
        if(err) return res.status(500).json({error:true, message:err });
        res.json({sales})
    })
}
addsale = (req, res) => {
    const sales_new = new sales_model(req.body);
    sales_new.save((err, sale)=>{
        if(err) return res.status(500).json({error:true, message:err });
        res.json({message:"venta agragada correctamente"})
    }) 
}
module.exports = Object.freeze({
    getAllsales,
    addsale
})