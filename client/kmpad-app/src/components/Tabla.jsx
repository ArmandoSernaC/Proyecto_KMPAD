import React, {Component} from 'react'
import { getStyleObjectFromString } from "../utils/stringUtils";
import Axios from "axios";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Botones from './Botones';

class  Tabla extends Component{
  constructor(props) {
    super(props);

    if (this.props.type == "Ventas"){
      this.state = {
        sales:[]
      };
    }else if(this.props.type == "Productos"){
      this.state = {
        products:[]
      };
    }else if(this.props.type == "Usuarios"){
      this.state = {
        users:[]
      };
    }
    
  }
  noInfo=()=>{
    const panInfo = document.getElementById(`Info-nodata${this.props.type}`)
    if (this.props.type == "Ventas"){
      if (this.state.sales.length ==0){
        panInfo.style.display = "flex";
      }else {
        panInfo.style.display = "none";
      }
      
    }else if(this.props.type == "Productos"){
      if (this.state.products.length ==0){
        panInfo.style.display = "flex";
      }else {
        panInfo.style.display = "none";
      }
     
    }else if(this.props.type == "Usuarios"){
      if (this.state.users.length ==0){
        panInfo.style.display = "flex";
      }else {
        panInfo.style.display = "none";
      }
      
    }
  }

  componentDidMount() {
    if (this.props.type == "Ventas"){
      Axios.get("http://localhost:3001/api/sales/list/").then((res) =>{this.setState({sales: res.data.sales})});
      
    }else if(this.props.type == "Productos"){
      
      Axios.get("http://localhost:3001/api/products/list/").then((res) =>{  this.setState({ products: res.data.product})});
     
    }else if(this.props.type == "Usuarios"){
      Axios.get("http://localhost:3001/api/users/list/").then((res) =>{this.setState({users: res.data.users})});
      
    }

    this.noInfo()
    
  }
  componentDidUpdate() {
    if (this.props.type == "Ventas"){
      Axios.get("http://localhost:3001/api/sales/list/").then((res) =>{this.setState({sales: res.data.sales})});
      
    }else if(this.props.type == "Productos"){
      Axios.get("http://localhost:3001/api/products/list/").then((res) =>{this.setState({products: res.data.product})});
     
    }else if(this.props.type == "Usuarios"){
      Axios.get("http://localhost:3001/api/users/list/").then((res) =>{this.setState({users: res.data.users})});
      
    }
    this.noInfo()
  }


  render(){ 
    if (this.props.type == "Ventas"){
      return ( 
        <table class="table table-hover " id ="Tabla-registro">
        <thead id="prueba">

            <tr class="table-hover " style={getStyleObjectFromString("background-color: #ffff; color:gray ;")}>
            
            <th scope="col">#</th>
            <th scope="col">Fecha</th>
            <th scope="col">Vendedor</th>  
            <th scope="col">#Id Fruta</th>
            <th scope="col">Nombre Fruta</th>                                        
            <th scope="col">Cedula Cliente </th>       
            <th scope="col">Precio Total</th>              
            <th> </th>
            </tr>
        </thead>
        <tbody>
          {
            this.state.sales.map((value, key)=>                
                <tr>
                  <td>
                    {key}
                  </td>
                   
                  <td>
                    {value.fecha}
                  </td>
                  <td>
                    {value.seller}
                  </td>
                  <td>
                    {value.id}
                  </td>
                  <td>
                    {value.namefruit}
                  </td>
                  <td>
                    {value.idClient}
                  </td>
                  <td>
                    {value.totalCost}
                  </td>
                  <td>
                    <Botones type = {this.props.type}  id={value.id}/> 
                  </td>
                </tr> 
            )


          }
        </tbody>
        </table>  
            

        )
    }
    else if (this.props.type == "Productos"){
      return (   
        <table class="table table-hover " id ="Tabla-registro">
        <thead id="prueba">
          <tr class="table-hover " style={getStyleObjectFromString("background-color: #0d6efd; color: #ffff;")}>
            <th scope="col">#</th>
            <th scope="col">Id Fruta</th>                           
            <th scope="col">Nombre Fruta </th>              
            <th scope="col">Estado</th>
            <th scope="col">Precio unitario</th>
            <th scope="col">Fecha</th>
            <th> </th>
          </tr>
        </thead>  
        <tbody>
          {
            this.state.products.map((value, key)=>                
                <tr>
                  <td>
                    {key}
                  </td>                   
                  <td>
                    {value.id}
                  </td>
                  <td>
                    {value.namefruit}
                  </td>
                  <td>
                    {value.Disponibility.toString()}
                  </td>
                  <td>
                    {value.Unitcost}
                  </td>
                  <td>
                    {value.fecha}
                  </td>            
                  
                  <td>
                    <Botones type = {this.props.type} id={value.id}/> 
                  </td>
                </tr> 
            )


          }
        </tbody>       
      </table>

        )
    } 
    if (this.props.type == "Usuarios"){
      return (   
        <table class="table table-hover " id="Tabla-registro" >
        <thead id="infouser">
                
                <tr class="table-hover " style={getStyleObjectFromString("background-color: #0d6efd; color: #ffff;justify-content: center;")}>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Identificación</th>
                <th scope="col">Correo electrónico</th>
                <th scope="col">Rol del usuario</th>
                <th scope="col">Estado del usuario</th>
                <th scope="col"></th>
                <th> </th>
            </tr>
        </thead>
        <tbody>
          {
            this.state.users.map((value, key)=>                
                <tr>
                  <td>
                    {key}
                  </td>
                   
                  <td>
                    {value.nameperson}
                  </td>                  
                  <td>
                    {value.idperson}
                  </td>
                  <td>
                    {value.emailperson}
                  </td>                  
                  <td>
                    {value.roleuser}
                  </td>
                  <td>
                    {value.userstatus.toString()}
                  </td>
                  <td>
                    <Botones type = {this.props.type} id={value.emailperson}/> 
                  </td>
                </tr> 
            )


          }
        </tbody>

    </table>   

        )
    }        
        
    }
}
export default Tabla;