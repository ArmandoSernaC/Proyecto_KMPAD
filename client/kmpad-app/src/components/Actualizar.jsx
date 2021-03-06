import React, {Component} from 'react'
import { getStyleObjectFromString } from "../utils/stringUtils";
import Axios from "axios";
import swal from 'sweetalert';
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class  Actualizar extends Component{

    
    constructor(props){
        super(props);
        if(this.props.type == "Ventas"){ 
            this.state = {
                id_update: "",
                namefruit_update:"",
                Unitcost_update:0,
                amount_update:0,
                totalCost_update:0,
                nameClient_update:"",
                idClient_update:"",
                correoClient_update:"", 
                dirClient_update:"",
                seller_update:"",
            };
        }else if (this.props.type == "Productos"){
            this.state = {
                id_update: "" ,
                namefruit_update: "" ,
                Unitcost_update:0 , 
                amount_update: 0 ,
                Disponibility_update:false
                    
            };
        }else if (this.props.type == "Usuarios"){
            this.state = {      
                nameperson_update:""  ,
                idperson_update: "" ,
                emailperson_update: "" ,
                roleuser_update: ""  ,
                userstatus_update: false            
            };
        }
      }
     

    actualizar=()=>{
        const date = new Date();
        if(this.props.type == "Ventas"){     
            
            const  id_update = document.getElementById(`idVentaEdit${this.props.type}`).value  ;
            const namefruit_update =  document.getElementById(`namefrutaEdit${this.props.type}`).value ;
            const  Unitcost_update =  document.getElementById(`precioEdit${this.props.type}`).value  ;
            const  amount_update = document.getElementById(`UnidadesEdit${this.props.type}`).value  ;
            const  totalCost_update = document.getElementById(`totalCostEdit${this.props.type}`).value  ;
            const nameClient_update =  document.getElementById(`nameClientEdit${this.props.type}`).value  ;
            const idClient_update =  document.getElementById(`clientEdit${this.props.type}`).value  ;
            const correoClient_update =  document.getElementById(`correoEdit${this.props.type}`).value  ;
            const  dirClient_update =  document.getElementById(`dirEdit${this.props.type}`).value  ;
            const  seller_update =  document.getElementById(`vendedorEdit${this.props.type}`).value  ;
              
             
            Axios.put("http://localhost:3001/api/sales/update/",{
                
                id: id_update,
                namefruit: namefruit_update   ,
                Unitcost: Unitcost_update  ,
                amount: amount_update  ,
                totalCost: totalCost_update   ,
                nameClient: nameClient_update  ,
                idClient: idClient_update   ,
                correoClient:  correoClient_update ,
                dirClient: dirClient_update ,
                seller: seller_update  ,
                fecha:date 
            })
            document.getElementById(`FormEdit2${this.props.type}`).reset();
            swal("Muy bien!", "La venta se actualiz?? correctamente!", "success");
        }else if(this.props.type == "Usuarios"){

            
         const nameperson_update=document.getElementById(`namepersonaEdit${this.props.type}`).value ;
          const idperson_update =document.getElementById(`idpersonaEdit${this.props.type}`).value ;
          const emailperson_update=document.getElementById(`correopersonaEdit${this.props.type}`).value ;
          const roleuser_update =document.getElementById(`rolEdit${this.props.type}`).value ;
            

            Axios.put("http://localhost:3001/api/users/update/",{
                
                nameperson: nameperson_update ,
                idperson: idperson_update   ,
                emailperson: emailperson_update  ,
                roleuser: roleuser_update  ,
                userstatus: false
                    
            })
            swal("Muy bien!", "El usuario se registr?? correctamente!", "success");
        }else if(this.props.type == "Productos"){  
            
         const id_update=document.getElementById(`frutEdit${this.props.type}`).value ;
          const namefruit_update=document.getElementById(`namefrutaEdit${this.props.type}`).value ;
          const Unitcost_update=document.getElementById(`precioEdit${this.props.type}`).value ;
          const amount_update = document.getElementById(`cantidadEdit${this.props.type}`).value ;
          const Disponibility_update=document.getElementById(`inlineRadio1Edit${this.props.type}`).value ;
                    
            Axios.put( `http://localhost:3001/api/products/update/` ,{
                id: id_update ,
                namefruit:  namefruit_update ,
                Unitcost:  Unitcost_update, 
                amount: amount_update  ,
                Disponibility:  true,
                fecha: date.toLocaleDateString() ,
                
            })
            swal("Muy bien!", "El producto se registr?? correctamente!", "success");
        }
        document.getElementById(`FormEdit${this.props.type}`).reset();
        this.cerrar()

    }
 
  cerrar =()=>{
    const id = `panEditar${this.props.type}`
    console.log(id)
    document.getElementById(id).style.display="none";
}
  render(){   
    if(this.props.type == "Ventas"){   
        return (   
            <div id={"panEditar" + this.props.type} className = "panRegistrar" >   
                            
                {/* <!-- Formulario registro --> */}
                <div class="Formulario-registrar  shadow   Texto-encabezado rounded bg-white w-50"   id= {"reg-form" + this.props.type}>
                    <div>
                    <div>
                        <h3 style={getStyleObjectFromString("color:#0d6efd; padding: 2%; padding-bottom: 4%; position: relative; text-align: center; justify-content: center")}>
                        Editar Venta
                        </h3>
                    </div>
                    <div style={getStyleObjectFromString("display: flex;  justify-content: space-around; color: #284b63;")}>

                        <div class="px-2 " style={getStyleObjectFromString("position:relative;  justify-content: center;")}> 

                        <h4 style={getStyleObjectFromString("padding-bottom:4% ;")} >Informaci??n Venta:</h4>  

                            <div>  
                            <form class="row g-3 buscador" id={"FormEdit"+ this.props.type}>                                       

                                <div class="col-12 form-floating">
                                <input type="text" class="form-control" id={"idVentaEdit"+this.props.type} name={"idVentaEdit"+this.props.type} placeholder="Identificaci??n" readOnly={true}/>
                                <label for={"idVentaEdit"+this.props.type} >Id:</label>                      
                                </div>

                                
                                <div class="col-md-12 form-floating">
                                <label class="visually-hidden" for={"namefrutaEdit"+this.props.type}>Nombre</label>
                                    <select class="form-select" id={"namefrutaEdit"+this.props.type} name={"namefrutaEdit"+this.props.type}  >
                                    <option selected>Seleccionar fruta</option>
                                    <option value="Aguacate">Aguacate</option>
                                    <option value="Ar??ndano">Ar??ndano</option>
                                    <option value="Banano">Banano</option>
                                    <option value="Boroj??">Boroj??</option>
                                    <option value="Cereza">Cereza</option>
                                    <option value="Ciruela">Ciruela</option>
                                    <option value="Chontaduro">Chontaduro</option>
                                    <option value="Coco">Coco</option>                        
                                    <option value="Curuba">Curuba</option>
                                    <option value="Durazno">Durazno</option>
                                    <option value="Fresa">Fresa</option>
                                    <option value="Granadilla">Granadilla</option>
                                    <option value="Guan??bana">Guan??bana</option>
                                    <option value="Kiwi">Kiwi</option>
                                    <option value="Limon">Limon</option>
                                    <option value="Lulo">Lulo</option>
                                    <option value="Mandarina">Mandarina</option>
                                    <option value="Mango">Mango</option>                        
                                    <option value="Mamoncillo">Mamoncillo</option>
                                    <option value="Manzana">Manzana</option>
                                    <option value="Maracuy??">Maracuy??</option>
                                    <option value="Melocot??n">Melocot??n</option>
                                    <option value="Melon">Melon</option>
                                    <option value="Mora">Mora</option>
                                    <option value="Naranja">Naranja</option>
                                    <option value="Papaya">Papaya</option>
                                    <option value="Pera">Pera</option>
                                    <option value="Pi??a">Pi??a</option>
                                    <option value="Pitahaya">Pitahaya</option>
                                    <option value="Sand??a">Sand??a</option>
                                    <option value="Tamarindo">Tamarindo</option>                        
                                    <option value="Tomate de ??rbol">Tomate de ??rbol</option>
                                    <option value="Toronja">Toronja</option>
                                    <option value="Uchuva">Uchuva</option>
                                    <option value="Uva">Uva</option>                        
                                    <option value="Zapote">Zapote</option>
                                    </select>
                                </div>


                                
                                <div class="col-md-6 form-floating">
                                <input type="number" class="form-control" id={"UnidadesEdit"+this.props.type} name={"UnidadesEdit"+this.props.type} placeholder="Unidades"  onChange = {
                                            (e)=>{ const c = document.getElementById(`UnidadesEdit${this.props.type}`).value;
                                            const p = document.getElementById(`precioEdit${this.props.type}`).value; console.log(p);
                                            document.getElementById(`totalCostEdit${this.props.type}`).value = p*c;  }}/>
                                <label for={"UnidadesEdit"+this.props.type} >Unidades</label>
                                
                                </div>
                                <div class="col-md-6 form-floating">

                                <input type="number" class="form-control" id={"precioEdit"+this.props.type} name={"precioEdit"+this.props.type} placeholder="Precio unidad" onChange = {
                                            (e)=>{ const c = document.getElementById(`UnidadesEdit${this.props.type}`).value;
                                            const p = document.getElementById(`precioEdit${this.props.type}`).value; console.log(p);
                                            document.getElementById(`totalCostEdit${this.props.type}`).value = p*c;  }}  />
                                <label for={"precioEdit"+this.props.type} >Precio unidad</label>
                                
                                </div>

                                <div class=" form-floating">                      
                                <input type="number" class="form-control" id={"totalCostEdit"+this.props.type} name={"totalCostEdit"+this.props.type} placeholder="Precio total"   />
                                
                                <label for={"totalCostEdit"+this.props.type} >Precio total</label>
                                </div> 
                                                    
                            </form>

                            
                            </div>               
                        
                        </div>

                        <div  class="px-2" style={getStyleObjectFromString("position:relative;  justify-content: center;")}>
                        <h4  style={getStyleObjectFromString("padding-bottom:4% ;")}>Informaci??n Cliente:</h4> 
                        <div>  
                            <form class="row g-3" id={"FormEdit2"+ this.props.type}> 
                            
                            <div class="col-12 form-floating">
                                <input type="text" class="form-control" id={"nameClientEdit"+this.props.type} name={"nameClientEdit"+this.props.type} placeholder="Nombre"  />
                                <label for={"nameClientEdit"+this.props.type} >Nombre </label>                      
                            </div>


                            <div class="col-12 form-floating">
                                <input type="text" class="form-control" id={"clientEdit"+this.props.type} name={"clientEdit"+this.props.type} placeholder="Identificaci??n"  />
                                <label for={"clientEdit"+this.props.type} >Identificaci??n</label>                    
                            </div>

                            <div class="col-12 form-floating">
                                <input type="text" class="form-control" id={"correoEdit"+this.props.type} name={"correoEdit"+this.props.type} placeholder="Correo"  />
                                <label for={"correoEdit"+this.props.type} >Correo</label>                      
                            </div>

                            <div class="col-12 form-floating">
                                <input type="text" class="form-control" id={"dirEdit"+this.props.type} name={"dirEdit"+this.props.type} placeholder="Dirreccion"  />
                                <label for={"dirEdit"+this.props.type}>Dirreccion</label>                      
                            </div>


                            
                            <div class="col-md-12 form-floating">
                                <label class="visually-hidden" for={"vendedorEdit"+this.props.type}>Vendedor</label>
                                <select class="form-select" id={"vendedorEdit"+this.props.type} name={"vendedorEdit"+this.props.type} >
                                <option selected>Seleccionar vendedor</option>
                                <option value="Vendedor 1">Vendedor 1</option>
                                <option value="Vendedor 2">Vendedor 2</option>
                                <option value="Vendedor 3">Vendedor 3</option>
                                </select>
                            </div>
                            <div class="col-md-12 form-floating">
                                <div   style={getStyleObjectFromString("display: flex; align-self:baseline; flex-direction: colum;")}>
                                <div  class="px-2 py-2"  style={getStyleObjectFromString("width: 110px; position: relative ;left: 32%; justify-content: center;")}>
                                    <button type="button" class="btn btn-outline-danger rounded-pill" id="CancelarregisBtn" onClick={this.cerrar}>
                                    Cancelar
                                    </button>
                                </div>
                                <div  class="px-2 py-2" style={getStyleObjectFromString("width:  110px; position: relative ;left: 32%; justify-content: center;")}>
                                    <button type="button"  class="btn btn-outline-primary rounded-pill" id={"confirmarEditBtn"+this.props.type} onClick={this.actualizar}>
                                    Aceptar 
                                    </button>
                                </div>            
                                </div>
                            </div>                                      
                            </form>                
                        </div>  
                        </div>
                    </div>  
                    </div>        
                </div>                     
            </div>
            

        )
    }else if(this.props.type == "Productos"){
        return (   
            <div id={"panEditar" + this.props.type} className = "panRegistrar" > 
                                    
                <div class="Formulario-registrar  shadow   Texto-encabezado rounded bg-white w-50"  id = {"reg-form" + this.props.type}>
                    <div>
                    <div>
                        <h3 style={getStyleObjectFromString("color: #0d6efd; padding: 2%; padding-bottom: 4%; position: relative; text-align: center; justify-content: center;")}>
                        Editar Producto
                        </h3>
                    </div>
                    <div style={getStyleObjectFromString("display: flex; align-items: center; justify-content: space-around; color: #284b63;")}>
                        <div class="px-2 " style={getStyleObjectFromString("position:relative; text-align: center; justify-content: center;")}> 
                          
                            <div>  
                            <form class="row g-3" id={"FormEdit"+ this.props.type}>                    
                                <div class="col-12 form-floating">
                                <input type="text" class="form-control" id={"frutEdit"+this.props.type} name={"frutEdit"+this.props.type} placeholder="Identificaci??n" readonly="true"/>
                                <label for={"frutEdit"+this.props.type} >Id:</label>
                                
                                </div>
                                <div class="col-12 form-floating">

                                <input type="text" class="form-control" id={"namefrutaEdit"+this.props.type} name={"namefrutaEdit"+this.props.type} placeholder="Nombre"/>
                                <label for={"namefrutaEdit"+this.props.type} >Nombre:</label>                      
                                </div>
                                <div class="col-md-6 form-floating">
                                <input type="number" class="form-control" id={"precioEdit"+this.props.type} name={"precioEdit"+this.props.type} placeholder="Precio unitario"/>
                                <label for={"precioEdit"+this.props.type} >Precio unitario</label>
                                
                                </div>
                                <div class="col-md-6 form-floating">

                                <input type="number" class="form-control" id={"cantidadEdit"+this.props.type} name={"cantidadEdit"+this.props.type} placeholder="Cantidad"/>
                                <label for={"cantidadEdit"+this.props.type} >Cantidad</label>
                                
                                </div>                 
                                


                                <div class="col-md-6 form-floating">                      
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name={"inlineRadioOptionsEdit"+this.props.type} id={"inlineRadio1Edit"+this.props.type} value="Disponible"/>
                                    <label class="form-check-label" for={"inlineRadio1Edit"+this.props.type}>Disponible</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name={"inlineRadioOptionsEdit"+this.props.type} id={"inlineRadio2Edit"+this.props.type} value="No Disponible"/>
                                    <label class="form-check-label" for={"inlineRadio2Edit"+this.props.type}>No Disponible</label>
                                </div>
                                    
                                

                                </div>                    
                                <div class="col-md-12 form-floating">
                                <div   style={getStyleObjectFromString("display: flex; align-self:baseline; flex-direction: colum;")}>
                                    <div  class="px-2 py-2"  style={getStyleObjectFromString("width: 110px; position: relative ;left: 31%; justify-content: center;")}>
                                    <button type="button" class="btn btn-outline-danger rounded-pill" id="CancelarEditBtn" onClick={this.cerrar}>
                                        Cancelar
                                    </button>
                                    </div>
                                    <div  class="px-2 py-2" style={getStyleObjectFromString("width:  110px; position: relative ;left: 32%; justify-content: center;")}>
                                    <button  type="button"  class="btn btn-outline-primary rounded-pill" id={"confirmarEditBtn"+this.props.type} onClick ={this.actualizar}onclick="">
                                        Aceptar 
                                    </button>
                                    </div>
                        
                                </div>
            
                                </div>
                            </form>

                            
                            </div>               
                        
                        </div>

                    
                    
                    </div>
                    

                    </div>
                    
                </div>
            </div>


            )


    }else if(this.props.type == "Usuarios"){
        return (   
                <div id={"panEditar" + this.props.type} className = "panRegistrar">
                                
                    <div  class="Formulario-registrar shadow   Texto-encabezado rounded bg-white w-50" id = {"reg-form" + this.props.type}>
                         
                            <div >
                                <div >
                                    <h3 style={getStyleObjectFromString("color: #0d6efd; padding: 2%; psing-bottom: 4%; position: relative; text-align: center; justify-content: center;")}>
                                        Editar Usuario
                                    </h3>
                                </div>

                                <div style={getStyleObjectFromString("display: flex; align-items: center; justify-content: space-around;")}>
                                    <div class="px-2" style={getStyleObjectFromString("position:relative; text-align: center; justify-content: center;")}>
                                        
                                        <div>
                                            <form class="row g-3" id={"FormEdit"+ this.props.type}>
                                                <div class="col-12 form-floating">
                                                    <input type="text" class="form-control" id={"namepersonaEdit" + this.props.type } name={"namepersonaEdit" + this.props.type} placeholder="Nombre"/>
                                                    <label for="namepersonaEdit">Nombre</label>

                                                </div>
                                                <div class="col-12 form-floating">

                                                    <input type="number" class="form-control" id={"idpersonaEdit" + this.props.type} name={"idpersonaEdit" + this.props.type }placeholder="Identificaci??n"/>
                                                    <label for="idpersonaEdit">Identificaci??n</label>
                                                </div>

                                                <div class=" form-floating">
                                                    <input type="mail" class="form-control" id={"correopersonaEdit" + this.props.type} name={"correopersonaEdit"+ this.props.type} placeholder="Correo electr??nico"/>
                                                    <label for="correopersonaEdit">Correo electr??nico</label>
                                                </div>
                                                <div class="col-md-12 form-floating">
                                                    <label class="visually-hidden" for={"rolEdit"+this.props.type}>Vendedor</label>
                                                    <select class="form-select" id={"rolEdit"+this.props.type} name={"rolEdit"+this.props.type}>
                                                    <option selected>Seleccionar rol usuario</option>
                                                    <option value="Administrador">Administrador</option>
                                                    <option value="Vendedor">Vendedor</option>
                                                     
                                                    </select>
                                                </div>
                                                <div class="col-md-12 form-floating">
                                                    <div style={getStyleObjectFromString("display: flex; align-self:baseline; flex-direction: colum;")}>
                                                        <div class="px-2 py-2" style={getStyleObjectFromString("width: 110px; position: relative ;left: 32%; justify-content: center;")}>
                                                            <button type="button" class="btn btn-outline-danger rounded-pill"
                                                                onClick={this.cerrar}>
                                                                Cancelar
                                                            </button>
                                                        </div>

                                                        <div class="px-2 py-2"
                                                            style={getStyleObjectFromString("width:  110px; position: relative ;left: 32%; justify-content: center;")}>
                                                            <button type="button"   id = {"confirmarEditBtn"+this.props.type} class="btn btn-outline-primary rounded-pill" onClick ={this.actualizar}>
                                                                Aceptar
                                                            </button>
                                                        </div>

                                                    </div>

                                                </div>
                                            </form>


                                        </div>

                                    </div>

                                </div>

                            </div>
                         
                    </div>

                </div>
            


            )
    }

    }
}
export default Actualizar;