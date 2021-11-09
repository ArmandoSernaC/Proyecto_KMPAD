import React, {Component} from 'react'
import { getStyleObjectFromString } from "../utils/stringUtils";
import Axios from "axios";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class  Actualizar extends Component{

    actualizar=()=>{

        if(this.props.type == "Ventas"){

        }else if(this.props.type == "Usuarios"){

        }
        else if(this.props.type == "Productos"){
            
        }

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

                        <h4 style={getStyleObjectFromString("padding-bottom:4% ;")} >Información Fruta:</h4>  

                            <div>  
                            <form class="row g-3 buscador" id={"FormEdit"+ this.props.type}>                                       

                                <div class="col-12 form-floating">
                                <input type="number" class="form-control" id={"frutaEdit"+this.props.type} name={"frutaEdit"+this.props.type} placeholder="Identificación"/>
                                <label for={"frutaEdit"+this.props.type} >Id:</label>                      
                                </div>

                                
                                <div class="col-md-12 form-floating">
                                <label class="visually-hidden" for={"namefrutareg"+this.props.type}>Nombre</label>
                                    <select class="form-select" id={"namefrutareg"+this.props.type} name={"namefrutareg"+this.props.type}>
                                    <option selected>Seleccionar fruta</option>
                                    <option value="Aguacate">Aguacate</option>
                                    <option value="Arándano">Arándano</option>
                                    <option value="Banano">Banano</option>
                                    <option value="Borojó">Borojó</option>
                                    <option value="Cereza">Cereza</option>
                                    <option value="Ciruela">Ciruela</option>
                                    <option value="Chontaduro">Chontaduro</option>
                                    <option value="Coco">Coco</option>                        
                                    <option value="Curuba">Curuba</option>
                                    <option value="Durazno">Durazno</option>
                                    <option value="Fresa">Fresa</option>
                                    <option value="Granadilla">Granadilla</option>
                                    <option value="Guanábana">Guanábana</option>
                                    <option value="Kiwi">Kiwi</option>
                                    <option value="Limon">Limon</option>
                                    <option value="Lulo">Lulo</option>
                                    <option value="Mandarina">Mandarina</option>
                                    <option value="Mango">Mango</option>                        
                                    <option value="Mamoncillo">Mamoncillo</option>
                                    <option value="Manzana">Manzana</option>
                                    <option value="Maracuyá">Maracuyá</option>
                                    <option value="Melocotón">Melocotón</option>
                                    <option value="Melon">Melon</option>
                                    <option value="Mora">Mora</option>
                                    <option value="Naranja">Naranja</option>
                                    <option value="Papaya">Papaya</option>
                                    <option value="Pera">Pera</option>
                                    <option value="Piña">Piña</option>
                                    <option value="Pitahaya">Pitahaya</option>
                                    <option value="Sandía">Sandía</option>
                                    <option value="Tamarindo">Tamarindo</option>                        
                                    <option value="Tomate de árbol">Tomate de árbol</option>
                                    <option value="Toronja">Toronja</option>
                                    <option value="Uchuva">Uchuva</option>
                                    <option value="Uva">Uva</option>                        
                                    <option value="Zapote">Zapote</option>
                                    </select>
                                </div>


                                
                                <div class="col-md-6 form-floating">
                                <input type="number" class="form-control" id={"UnidadesEdit"+this.props.type} name={"UnidadesEdit"+this.props.type} placeholder="Unidades" value="0"/>
                                <label for={"UnidadesEdit"+this.props.type} >Unidades</label>
                                
                                </div>
                                <div class="col-md-6 form-floating">

                                <input type="number" class="form-control" id={"precioEdit"+this.props.type} name={"precioEdit"+this.props.type} placeholder="Precio unidad" value="0"/>
                                <label for={"precioEdit"+this.props.type} >Precio unidad</label>
                                
                                </div>

                                <div class=" form-floating">                      
                                <input type="number" class="form-control" id={"totalCostEdit"+this.props.type} name={"totalCostEdit"+this.props.type} placeholder="Precio total" />
                                
                                <label for={"totalCostEdit"+this.props.type} >Precio total</label>
                                </div> 
                                                    
                            </form>

                            
                            </div>               
                        
                        </div>

                        <div  class="px-2" style={getStyleObjectFromString("position:relative;  justify-content: center;")}>
                        <h4  style={getStyleObjectFromString("padding-bottom:4% ;")}>Información Cliente:</h4> 
                        <div>  
                            <form class="row g-3" id={"FormEdit2"+ this.props.type}> 
                            
                            <div class="col-12 form-floating">
                                <input type="text" class="form-control" id={"nameClientEdit"+this.props.type} name={"nameClientEdit"+this.props.type} placeholder="Nombre"/>
                                <label for={"nameClientEdit"+this.props.type} >Nombre </label>                      
                            </div>


                            <div class="col-12 form-floating">
                                <input type="text" class="form-control" id={"clientEdit"+this.props.type} name={"clientEdit"+this.props.type} placeholder="Identificación"/>
                                <label for={"clientEdit"+this.props.type} >Identificación</label>                    
                            </div>

                            <div class="col-12 form-floating">
                                <input type="text" class="form-control" id={"correoEdit"+this.props.type} name={"correoEdit"+this.props.type} placeholder="Correo"/>
                                <label for={"correoEdit"+this.props.type} >Correo</label>                      
                            </div>

                            <div class="col-12 form-floating">
                                <input type="text" class="form-control" id={"dirEdit"+this.props.type} name={"dirEdit"+this.props.type} placeholder="Dirreccion"/>
                                <label for={"dirEdit"+this.props.type}>Dirreccion</label>                      
                            </div>


                            
                            <div class="col-md-12 form-floating">
                                <label class="visually-hidden" for={"vendedorEdit"+this.props.type}>Vendedor</label>
                                <select class="form-select" id={"vendedorEdit"+this.props.type} name={"vendedorEdit"+this.props.type}>
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
                                    <button   class="btn btn-outline-primary rounded-pill" id={"confirmarEditBtn"+this.props.type} onclick="">
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
                                <input type="text" class="form-control" id={"frutEdit"+this.props.type} name={"frutEdit"+this.props.type} placeholder="Identificación"/>
                                <label for={"frutEdit"+this.props.type} >Id:</label>
                                
                                </div>
                                <div class="col-12 form-floating">

                                <input type="text" class="form-control" id={"namefrutareg"+this.props.type} name={"namefrutareg"+this.props.type} placeholder="Nombre"/>
                                <label for={"namefrutareg"+this.props.type} >Nombre:</label>                      
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
                                    <button   class="btn btn-outline-primary rounded-pill" id={"confirmarEditBtn"+this.props.type} onclick="">
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
                                    <h3 style={getStyleObjectFromString("color: #0d6efd; padding: 2%; padding-bottom: 4%; position: relative; text-align: center; justify-content: center;")}>
                                        Editar Usuario
                                    </h3>
                                </div>

                                <div style={getStyleObjectFromString("display: flex; align-items: center; justify-content: space-around;")}>
                                    <div class="px-2" style={getStyleObjectFromString("position:relative; text-align: center; justify-content: center;")}>
                                        
                                        <div>
                                            <form class="row g-3" id={"FormEdit"+ this.props.type}>
                                                <div class="col-12 form-floating">
                                                    <input type="text" class="form-control" id={"namepersonareg" + this.props.type } name={"namepersonareg" + this.props.type} placeholder="Nombre"/>
                                                    <label for="namepersonareg">Nombre</label>

                                                </div>
                                                <div class="col-12 form-floating">

                                                    <input type="number" class="form-control" id={"idpersonareg" + this.props.type} name={"idpersonareg" + this.props.type }placeholder="Identificación"/>
                                                    <label for="idpersonareg">Identificación</label>
                                                </div>

                                                <div class=" form-floating">
                                                    <input type="mail" class="form-control" id={"correopersonareg" + this.props.type} name={"correopersonareg"+ this.props.type} placeholder="Correo electrónico"/>
                                                    <label for="correopersonareg">Correo electrónico</label>
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
                                                            <button   id = {"confirmarEditBtn"+this.props.type} class="btn btn-outline-primary rounded-pill">
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