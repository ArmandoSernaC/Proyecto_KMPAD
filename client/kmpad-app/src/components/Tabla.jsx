import React, {Component} from 'react'
import { getStyleObjectFromString } from "../utils/stringUtils";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class  Tabla extends Component{
  render(){ 
    if (this.props.type == "Ventas"){
      return ( 
        <table class="table table-hover " id ="Tabla-registro">
        <thead id="prueba">

            <tr class="table-hover " style={getStyleObjectFromString("background-color: #ffff; color:#0d6efd ;")}>
            
            <th scope="col">Fecha</th>
            <th scope="col">Vendedor</th>  
            <th scope="col">#Id Fruta</th>
            <th scope="col">Nombre Fruta</th>                                        
            <th scope="col">Cedula Cliente </th>       
            <th scope="col">Precio Total</th>            
            
            <th> </th>
            </tr>
        </thead>
        
        </table>  
            

        )
    }
    else if (this.props.type == "Productos"){
      return (   
        <table class="table table-hover " id ="Tabla-registro">
        <thead id="prueba">
          <tr class="table-hover " style={getStyleObjectFromString("background-color: #0d6efd; color: #ffff;")}>
            <th scope="col">#Id Fruta</th>                           
            <th scope="col">Nombre Fruta </th>              
            <th scope="col">Estado</th>
            <th scope="col">Precio unitario</th>
            <th scope="col">Fecha</th>

            <th> </th>
          </tr>
        </thead>         
      </table>

        )
    } 
    if (this.props.type == "Usuarios"){
      return (   
        <table class="table table-hover " id="Tabla-registro" style={getStyleObjectFromString("background-color: #0d6efd; color: #ffff;justify-content: center;")}>
        <thead id="infouser">
            <tr class="table-hover ">
                <th scope="col">Nombre</th>
                <th scope="col">Identificación</th>
                <th scope="col">Correo electrónico
                </th>
                <th scope="col">Rol del usuario</th>
                <th scope="col">Estado del usuario
                </th>
                <th scope="col">Más</th>
                <th> </th>
            </tr>
        </thead>

    </table>   

        )
    }        
        
    }
}
export default Tabla;