import React from 'react';
import "../../components/style.css"
import Encabezado from '../../components/Encabezado';
import Busqueda from '../../components/Busqueda';
import Registro from '../../components/Registro';
import Tabla from '../../components/Tabla';
import Noinfo from '../../components/Noinfo';

const Products = () => {
    return (
        
        <div class="Panel-principal">

        <Encabezado subtitle = {"Productos"} element = {"nuevo producto"}/>
        <Busqueda subtitle = {"Productos"} />
        <Registro type = {"Productos"}/>
        <div class="Panel-registro shadow rounded-top" style={{ display: "flexbox"}}  >
        <Tabla type = {"Productos"}/>
        <Noinfo type = {"Productos"}/>
        </div>   
        </div>
        )
}

export default Products
