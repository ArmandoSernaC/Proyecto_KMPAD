import React from 'react';
import Encabezado from '../../components/Encabezado';
import Busqueda from '../../components/Busqueda';
import Registro from '../../components/Registro';
import Tabla from '../../components/Tabla';
import Noinfo from '../../components/Noinfo';
import Actualizar from '../../components/Actualizar';
import "../../components/style.css"
const users = () => {
    return (
        <div class="Panel-principal">

            <Encabezado subtitle = {"Usuarios"} element = {"nuevo usuario"}/>
            <Busqueda subtitle = {"Usuarios"} />
            <Registro type = {"Usuarios"}/>
            <Actualizar type = {"Productos"}/>
            <div class="Panel-registro shadow rounded-top" style={{ display: "flexbox"}}  >
            <Tabla type = {"Usuarios"}/>
            <Noinfo type = {"Usuarios"}/>    
            </div> 
        </div>
    )
}

export default users;
