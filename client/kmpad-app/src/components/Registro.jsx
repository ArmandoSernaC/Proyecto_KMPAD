import React, {Component} from 'react'
import { getStyleObjectFromString } from "../utils/stringUtils";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class  Registro  extends Component{
    
    agregar=()=>{

    }

    cerrar =()=>{
        const id = `panRegistrar${this.props.type}`
        console.log(id)
        document.getElementById(id).style.display="none";
    }

    render(){  
    
      // ------------------------------------------------------------------ 
      // Cambiar names y id
      // ------------------------------------------------------------------
            if(this.props.type == "Ventas"){   
                return (   
                    <div id={"panRegistrar" + this.props.type} className = "panRegistrar" >   
                                    
                        {/* <!-- Formulario registro --> */}
                        <div class="Formulario-registrar  shadow   Texto-encabezado rounded bg-white w-50"   id= {"reg-form" + this.props.type}>
                            <div>
                            <div>
                                <h3 style={getStyleObjectFromString("color:#0d6efd; padding: 2%; padding-bottom: 4%; position: relative; text-align: center; justify-content: center")}>
                                Registrar Venta
                                </h3>
                            </div>
                            <div style={getStyleObjectFromString("display: flex;  justify-content: space-around; color: #284b63;")}>

                                <div class="px-2 " style={getStyleObjectFromString("position:relative;  justify-content: center;")}> 

                                <h4 style={getStyleObjectFromString("padding-bottom:4% ;")} >Información Fruta:</h4>  

                                    <div>  
                                    <form class="row g-3 buscador" id="infofrutaFormReg">                                       

                                        <div class="col-12 form-floating">
                                        <input type="number" class="form-control" id="idfrutreg" name="idfrutreg" placeholder="Identificación"/>
                                        <label for="idfrutreg" >Id:</label>                      
                                        </div>

                                        
                                        <div class="col-md-12 form-floating">
                                        <label class="visually-hidden" for="namefrutareg">Nombre</label>
                                            <select class="form-select" id="namefrutareg" name="namefrutareg">
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
                                        <input type="number" class="form-control" id="gramoreg" name="gramoreg" placeholder="Gramos" value="0"/>
                                        <label for="gramoreg" >Gramos</label>
                                        
                                        </div>
                                        <div class="col-md-6 form-floating">

                                        <input type="number" class="form-control" id="precioreg" name="precioreg" placeholder="Precio Gramo" value="0"/>
                                        <label for="precioreg" >Precio Gramo</label>
                                        
                                        </div>

                                        <div class=" form-floating">                      
                                        <input type="number" class="form-control" id="totalCostreg" name="totalCostreg" placeholder="Precio total" />
                                        
                                        <label for="totalCostreg" >Precio total</label>
                                        </div> 
                                                            
                                    </form>

                                    
                                    </div>               
                                
                                </div>

                                <div  class="px-2" style={getStyleObjectFromString("position:relative;  justify-content: center;")}>
                                <h4  style={getStyleObjectFromString("padding-bottom:4% ;")}>Información Cliente:</h4> 
                                <div>  
                                    <form class="row g-3" id="infoClientFormReg"> 
                                    
                                    <div class="col-12 form-floating">
                                        <input type="text" class="form-control" id="nameclientreg" name="nameclientreg" placeholder="Nombre"/>
                                        <label for="nameclientreg" >Nombre </label>                      
                                    </div>


                                    <div class="col-12 form-floating">
                                        <input type="text" class="form-control" id="idclientreg" name="idclientreg" placeholder="Identificación"/>
                                        <label for="idclientreg" >Identificación</label>                    
                                    </div>

                                    <div class="col-12 form-floating">
                                        <input type="text" class="form-control" id="correoreg" name="correoreg" placeholder="Correo"/>
                                        <label for="correoreg" >Correo</label>                      
                                    </div>

                                    <div class="col-12 form-floating">
                                        <input type="text" class="form-control" id="dirreg" name="dirreg" placeholder="Dirreccion"/>
                                        <label for="dirreg">Dirreccion</label>                      
                                    </div>


                                    
                                    <div class="col-md-12 form-floating">
                                        <label class="visually-hidden" for="vendedorreg">Vendedor</label>
                                        <select class="form-select" id="vendedorreg" name="vendedorreg">
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
                                            <button type="submit" class="btn btn-outline-primary rounded-pill" id="ConfirmarregisBtn" onclick="">
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
                    <div id={"panRegistrar" + this.props.type} className = "panRegistrar" > 
                                            
                        <div class="Formulario-registrar  shadow   Texto-encabezado rounded bg-white w-50"  id = {"reg-form" + this.props.type}>
                            <div>
                            <div>
                                <h3 style={getStyleObjectFromString("color: #0d6efd; padding: 2%; padding-bottom: 4%; position: relative; text-align: center; justify-content: center;")}>
                                Registrar Producto
                                </h3>
                            </div>
                            <div style={getStyleObjectFromString("display: flex; align-items: center; justify-content: space-around; color: #284b63;")}>
                                <div class="px-2 " style={getStyleObjectFromString("position:relative; text-align: center; justify-content: center;")}> 
                                  
                                    <div>  
                                    <form class="row g-3" id="infofrutaFormReg">                    
                                        <div class="col-12 form-floating">
                                        <input type="text" class="form-control" id="idfrutreg" name="idfrutreg" placeholder="Identificación"/>
                                        <label for="idfrutreg" >Id:</label>
                                        
                                        </div>
                                        <div class="col-12 form-floating">

                                        <input type="text" class="form-control" id="namefrutareg" name="namefrutareg" placeholder="Nombre"/>
                                        <label for="namefrutareg" >Nombre:</label>                      
                                        </div>
                                        <div class="col-md-6 form-floating">
                                        <input type="number" class="form-control" id="unitCostreg" name="unitCostreg" placeholder="Precio unitario"/>
                                        <label for="unitCostreg" >Precio unitario</label>
                                        
                                        </div>
                                        <div class="col-md-6 form-floating">

                                        <input type="number" class="form-control" id="cantidadreg" name="cantidadreg" placeholder="Cantidad"/>
                                        <label for="cantidadreg" >Cantidad</label>
                                        
                                        </div>                 
                                        


                                        <div class="col-md-6 form-floating">                      
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptionsreg" id="inlineRadio1reg" value="Disponible"/>
                                            <label class="form-check-label" for="inlineRadio1reg">Disponible</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptionsreg" id="inlineRadio2reg" value="No Disponible"/>
                                            <label class="form-check-label" for="inlineRadio2reg">No Disponible</label>
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
                                            <button type="submit" class="btn btn-outline-primary rounded-pill" id="ConfirmarEditBtn" onclick="">
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
                        <div id={"panRegistrar" + this.props.type} className = "panRegistrar">
                                        
                            <div  class="Formulario-registrar shadow   Texto-encabezado rounded bg-white w-50" id = {"reg-form" + this.props.type}>
                                 
                                    <div >
                                        <div >
                                            <h3 style={getStyleObjectFromString("color: #0d6efd; padding: 2%; padding-bottom: 4%; position: relative; text-align: center; justify-content: center;")}>
                                                Registrar Usuario
                                            </h3>
                                        </div>

                                        <div style={getStyleObjectFromString("display: flex; align-items: center; justify-content: space-around;")}>
                                            <div class="px-2" style={getStyleObjectFromString("position:relative; text-align: center; justify-content: center;")}>
                                                
                                                <div>
                                                    <form class="row g-3" id="infopersonaFormReg">
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
                                                            <label class="visually-hidden" for="vendedorreg">Vendedor</label>
                                                            <select class="form-select" id="vendedorreg" name="vendedorreg">
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
                                                                    <button type="submit" class="btn btn-outline-primary rounded-pill"
                                                                         >
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
export default Registro;