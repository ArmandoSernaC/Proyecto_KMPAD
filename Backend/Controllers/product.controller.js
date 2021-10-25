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
deleteproduct = async (req, res)=>{


    try{
        const product_delete = await  product_model.findOneAndDelete({id: req.params.id});
        if(product_delete) return res.json({product_delete, message: "Producto eliminado correctamente"})
        else return res.status(400).json({error:true, message: "Hubo un error al intentar eliminar el producto"})

    }catch(error){
        return res.status(500).json({error:true, message: error})
    }
}

updateProduct = async (req, res)=>{


    try{
        const product_update = await  product_model.findOneAndUpdate({id: req.body.id}, req.body,{useFindAndModify :false} );
        if(product_update) return res.json({product_update, message: "Producto actualizado correctamente"})
        else return res.status(400).json({error:true, message: "Hubo un error al intentar actualizar el producto"})

    }catch(error){
        return res.status(500).json({error:true, message: error})
    }
}

module.exports = Object.freeze({
    getAllproducts,
    addProduct,
    updateProduct,
    deleteproduct
})