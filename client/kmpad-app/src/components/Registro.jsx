import React, {Component} from 'react'
import { getStyleObjectFromString } from "../utils/stringUtils";
import Axios from "axios";
import swal from 'sweetalert';
 
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class  Registro  extends Component{

    constructor(props){
        super(props);
        if(this.props.type == "Ventas"){ 
            this.state = {
                id_add: "",
                namefruit_add:"",
                Unitcost_add:0,
                amount_add:0,
                totalCost_add:0,
                nameClient_add:"",
                idClient_add:"",
                correoClient_add:"", 
                dirClient_add:"",
                seller_add:"",
            };
        }else if (this.props.type == "Productos"){
            this.state = {
                id_add: "" ,
                namefruit_add: "" ,
                Unitcost_add:0 , 
                amount_add: 0 ,
                Disponibility_add:false
                    
            };
        }else if (this.props.type == "Usuarios"){
            this.state = {      
                nameperson_add:""  ,
                idperson_add: "" ,
                emailperson_add: "" ,
                roleuser_add: ""  ,
                userstatus_add: false            
            };
        }
      }
    
     
  
    agregar=()=>{
        
    
        const date = new Date();
        try {
            if(this.props.type == "Ventas"){     
            
                console.log(this.state.id_add )
                Axios.post("http://localhost:3001/api/sales/add/",{
                    
                    id:this.state.id_add  ,
                    namefruit:this.state.namefruit_add   ,
                    Unitcost:this.state.Unitcost_add  ,
                    amount:this.state.amount_add  ,
                    totalCost:this.state.totalCost_add   ,
                    nameClient:this.state.nameClient_add  ,
                    idClient:this.state.idClient_add   ,
                    correoClient:this.state.correoClient_add ,
                    dirClient:this.state.dirClient_add ,
                    seller:this.state.seller_add  ,
                    fecha:date.toLocaleDateString()
                })
                document.getElementById(`FormReg2${this.props.type}`).reset();
                swal("Muy bien!", "La venta se registr?? correctamente!", "success");
            }else if(this.props.type == "Usuarios"){
                alert(this.state.idperson_add + this.state.nameperson_add  +this.state.emailperson_add +this.state.roleuser_add) ;
                Axios.post("http://localhost:3001/api/users/add/",{
                    
                    nameperson:this.state.nameperson_add ,
                    idperson:this.state.idperson_add   ,
                    emailperson:this.state.emailperson_add  ,
                    roleuser:this.state.roleuser_add  ,
                    userstatus:false   
                        
                })
                swal("Muy bien!", "El usuario se registr?? correctamente!", "success");
            }else if(this.props.type == "Productos"){                      
                Axios.post("http://localhost:3001/api/products/add/",{
                    id:this.state.id_add ,
                    namefruit: this.state.namefruit_add ,
                    Unitcost: this.state.Unitcost_add, 
                    amount:this.state.amount_add  ,
                    Disponibility: this.state.Disponibility_add ,
                    fecha: date.toLocaleDateString() ,
                    
                })
                swal("Muy bien!", "El producto se registr?? correctamente!", "success");
            }
            document.getElementById(`FormReg${this.props.type}`).reset();
            this.cerrar()
           
        } catch (error) {
            console.log("hubo un error:" + error)
            if(this.props.type == "Ventas"){
                document.getElementById(`FormReg2${this.props.type}`).reset();
                swal("Ops!", `Parece que hubo un error al intentar registrar la venta!`, "error")
            }else if(this.props.type == "Usurios"){
                swal("Ops!", `Parece que hubo un error al intentar registrar el usuario!`, "error")
            }else if(this.props.type == "Productos"){
                swal("Ops!", `Parece que hubo un error al intentar registrar el producto!`, "error")
            }
           
        }
        
        
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

                                <h4 style={getStyleObjectFromString("padding-bottom:4% ;")} >Informaci??n Fruta:</h4>  

                                    <div>  
                                    <form class="row g-3 buscador" id={"FormReg"+ this.props.type}>                                       

                                        <div class="col-12 form-floating">
                                        <input type="text" class="form-control" id={"frutaReg"+this.props.type} name={"frutaReg"+this.props.type} placeholder="Identificaci??n" onChange = {
                                            (e)=>{ this.setState({id_add: e.target.value}) ;}                                      
                                        }/>
                                        <label for={"frutaReg"+this.props.type} >Id:</label>                      
                                        </div>

                                        
                                        <div class="col-md-12 form-floating">
                                        <label class="visually-hidden" for={"namefrutareg"+this.props.type}>Nombre</label>
                                            <select class="form-select" id={"namefrutareg"+this.props.type} name={"namefrutareg"+this.props.type}onChange = {
                                            (e)=>{   this.setState({namefruit_add: e.target.value});}                                      
                                        }>
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
                                        <input type="number" class="form-control" id={"UnidadesReg"+this.props.type} name={"UnidadesReg"+this.props.type} placeholder="Unidades"   onChange = {
                                            (e)=>{ const c = document.getElementById(`UnidadesReg${this.props.type}`).value;
                                            const p = document.getElementById(`precioReg${this.props.type}`).value; console.log(p);
                                            document.getElementById(`totalCostReg${this.props.type}`).value = p*c;    this.setState({amount_add: e.target.value});}                                      
                                        }/>
                                        <label for={"UnidadesReg"+this.props.type} >Unidades</label>
                                        
                                        </div>
                                        <div class="col-md-6 form-floating">

                                        <input type="number" class="form-control" id={"precioReg"+this.props.type} name={"precioReg"+this.props.type} placeholder="Precio unidad"   onChange = {
                                            (e)=>{ this.setState({Unitcost_add: e.target.value});
                                                const c = document.getElementById(`UnidadesReg${this.props.type}`).value;
                                            const p = document.getElementById(`precioReg${this.props.type}`).value; console.log(p);
                                            document.getElementById(`totalCostReg${this.props.type}`).value = p*c; }                                      
                                        }/>
                                        <label for={"precioReg"+this.props.type} >Precio unidad</label>
                                        
                                        </div>

                                        <div class=" form-floating">                      
                                        <input type="number" class="form-control" id={"totalCostReg"+this.props.type} name={"totalCostReg"+this.props.type} placeholder="Precio total" onChange = {
                                            (e)=>{  this.setState({totalCost_add: e.target.value});}                                      
                                        }/>
                                        
                                        <label for={"totalCostReg"+this.props.type} >Precio total</label>
                                        </div> 
                                                            
                                    </form>

                                    
                                    </div>               
                                
                                </div>

                                <div  class="px-2" style={getStyleObjectFromString("position:relative;  justify-content: center;")}>
                                <h4  style={getStyleObjectFromString("padding-bottom:4% ;")}>Informaci??n Cliente:</h4> 
                                <div>  
                                    <form class="row g-3" id={"FormReg2"+ this.props.type}> 
                                    
                                    <div class="col-12 form-floating">
                                        <input type="text" class="form-control" id={"nameClientReg"+this.props.type} name={"nameClientReg"+this.props.type} placeholder="Nombre" onChange = {
                                            (e)=>{  this.setState({nameClient_add: e.target.value});}                                      
                                        }/>
                                        <label for={"nameClientReg"+this.props.type} >Nombre </label>                      
                                    </div>


                                    <div class="col-12 form-floating">
                                        <input type="text" class="form-control" id={"clientReg"+this.props.type} name={"clientReg"+this.props.type} placeholder="Identificaci??n" onChange = {
                                            (e)=>{  this.setState({idClient_add: e.target.value});}                                      
                                        }/>
                                        <label for={"clientReg"+this.props.type} >Identificaci??n</label>                    
                                    </div>

                                    <div class="col-12 form-floating">
                                        <input type="text" class="form-control" id={"correoReg"+this.props.type} name={"correoReg"+this.props.type} placeholder="Correo" onChange = {
                                            (e)=>{  this.setState({correoClient_add: e.target.value});}                                      
                                        }/>
                                        <label for={"correoReg"+this.props.type} >Correo</label>                      
                                    </div>

                                    <div class="col-12 form-floating">
                                        <input type="text" class="form-control" id={"dirReg"+this.props.type} name={"dirReg"+this.props.type} placeholder="Dirreccion" onChange = {
                                            (e)=>{  this.setState({dirClient_add: e.target.value});}                                      
                                        }/>
                                        <label for={"dirReg"+this.props.type}>Dirreccion</label>                      
                                    </div>


                                    
                                    <div class="col-md-12 form-floating">
                                        <label class="visually-hidden" for={"vendedorReg"+this.props.type}>Vendedor</label>
                                        <select class="form-select" id={"vendedorReg"+this.props.type} name={"vendedorReg"+this.props.type} onChange = {
                                            (e)=>{  this.setState({seller_add: e.target.value});}                                      
                                        }>
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
                                            <button type="button"   class="btn btn-outline-primary rounded-pill" id={"confirmarRegBtn"+this.props.type} onClick={this.agregar}>
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
                                    <form class="row g-3" id={"FormReg"+ this.props.type}>                    
                                        <div class="col-12 form-floating">
                                        <input type="text" class="form-control" id={"frutReg"+this.props.type} name={"frutReg"+this.props.type} placeholder="Identificaci??n" onChange = {
                                            (e)=>{ this.setState({id_add: e.target.value}) ;}                                      
                                        }/>
                                        <label for={"frutReg"+this.props.type} >Id:</label>
                                        
                                        </div>
                                        <div class="col-12 form-floating">

                                        <input type="text" class="form-control" id={"namefrutareg"+this.props.type} name={"namefrutareg"+this.props.type} placeholder="Nombre"
                                        onChange = {
                                            (e)=>{ this.setState({namefruit_add: e.target.value}) ;}                                      
                                        }/>
                                        <label for={"namefrutareg"+this.props.type} >Nombre:</label>                      
                                        </div>
                                        <div class="col-md-6 form-floating">
                                        <input type="number" class="form-control" id={"precioReg"+this.props.type} name={"precioReg"+this.props.type} placeholder="Precio unitario" onChange = {
                                            (e)=>{ this.setState({Unitcost_add: e.target.value}) ;}                                      
                                        }/>
                                        <label for={"precioReg"+this.props.type} >Precio unitario</label>
                                        
                                        </div>
                                        <div class="col-md-6 form-floating">

                                        <input type="number" class="form-control" id={"cantidadReg"+this.props.type} name={"cantidadReg"+this.props.type} placeholder="Cantidad" onChange = {
                                            (e)=>{ this.setState({amount_add: e.target.value}) ;}                                      
                                        }/>
                                        <label for={"cantidadReg"+this.props.type} >Cantidad</label>
                                        
                                        </div>                 
                                        


                                        <div class="col-md-6 form-floating">                      
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name={"inlineRadioOptionsReg"+this.props.type} id={"inlineRadio1Reg"+this.props.type} value="Disponible" onChange = {
                                            (e)=>{ this.setState({Disponibility_add: true}) ;}                                      
                                        }/>
                                            <label class="form-check-label" for={"inlineRadio1Reg"+this.props.type}>Disponible</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name={"inlineRadioOptionsReg"+this.props.type} id={"inlineRadio2Reg"+this.props.type} value="No Disponible" onChange = {
                                            (e)=>{ this.setState({Disponibility_add: false}) ;}                                      
                                        }/>
                                            <label class="form-check-label" for={"inlineRadio2Reg"+this.props.type}>No Disponible</label>
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
                                            <button  type="button"  class="btn btn-outline-primary rounded-pill" id={"confirmarRegBtn"+this.props.type} onClick={this.agregar}>
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
                                                    <form class="row g-3" id={"FormReg"+ this.props.type}>
                                                        <div class="col-12 form-floating">
                                                            <input type="text" class="form-control" id={"namepersonareg" + this.props.type } name={"namepersonareg" + this.props.type} placeholder="Nombre" onChange = {
                                            (e)=>{ this.setState({nameperson_add: e.target.value}) ;}                                      
                                        } />
                                                            <label for="namepersonareg">Nombre</label>

                                                        </div>
                                                        <div class="col-12 form-floating">

                                                            <input type="text" class="form-control" id={"idpersonareg" + this.props.type} name={"idpersonareg" + this.props.type }placeholder="Identificaci??n" onChange = {
                                            (e)=>{ this.setState({idperson_add: e.target.value}) ;}                                      
                                        }/>
                                                            <label for="idpersonareg">Identificaci??n</label>
                                                        </div>

                                                        <div class=" form-floating">
                                                            <input type="text" class="form-control" id={"correopersonareg" + this.props.type} name={"correopersonareg"+ this.props.type} placeholder="Correo electr??nico" onChange = {
                                            (e)=>{ this.setState({emailperson_add: e.target.value}) ;}                                      
                                        }/>
                                                            <label for="correopersonareg">Correo electr??nico</label>
                                                        </div>
                                                        <div class="col-md-12 form-floating">
                                                            <label class="visually-hidden" for={"rolReg"+this.props.type}>Vendedor</label>
                                                            <select class="form-select" id={"rolReg"+this.props.type} name={"rolReg"+this.props.type} onChange = {
                                            (e)=>{ this.setState({roleuser_add: e.target.value}) ;}                                      
                                        }>
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
                                                                    <button type="button"  id = {"confirmarRegBtn"+this.props.type} class="btn btn-outline-primary rounded-pill" onClick={this.agregar}>
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