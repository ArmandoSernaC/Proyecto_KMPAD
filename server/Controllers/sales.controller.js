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
deletesale = async (req, res)=>{


    try{
        const sale_delete = await  sales_model.findOneAndDelete({id: req.params.id});
        if(sale_delete) return res.json({sale_delete, message: "Venta eliminada correctamente"})
        else return res.status(400).json({error:true, message: "Hubo un error al intentar eliminar la venta"})

    }catch(error){
        return res.status(500).json({error:true, message: error})
    }
}

updateSale = async (req, res)=>{


    try{
        const sale_update = await  sales_model.findOneAndUpdate({id: req.body.id}, req.body,{useFindAndModify :false} );
        if(sale_update) return res.json({sale_update, message: "Venta actualizada correctamente"})
        else return res.status(400).json({error:true, message: "Hubo un error al intentar actualizar el registro de venta"})

    }catch(error){
        return res.status(500).json({error:true, message: error})
    }
}
module.exports = Object.freeze({
    getAllsales,
    addsale,
    updateSale ,
    deletesale
})