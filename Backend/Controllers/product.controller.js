const {product_model} = require('../models');

getAllproducts = (req, res) => {
    product_model.find().exec((err, product)=>{
        if(err) return res.status(500).json({error:true, message:err });
        res.json({product})
    })

}

addProduct = (req, res) => {
    const product_new = new product_model(req.body);
    product_new.save((err, product)=>{
        if(err) return res.status(500).json({error:true, message:err });
        res.json({message:"Producto agragado correctamente"})
    })    
}


module.exports = Object.freeze({
    getAllproducts,
    addProduct
})