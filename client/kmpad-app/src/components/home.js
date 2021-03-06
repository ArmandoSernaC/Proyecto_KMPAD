import React, {Component} from 'react';
import { getStyleObjectFromString } from "../utils/stringUtils";

class Home extends React.Component{
    render(){
        return(
            <div>
                <div class="  ventana-principal">


                {/* <!-- Barra de navegación --> */}
                <div>
                <nav class="navbar navbar-expand-lg   _3q4or " style=" height: 50px; width: 1360px;;">
                <div class="container-fluid  "/>
                <div class="d-flex justify-content-evenly">
                    <svg  class="d-flex align-self-center mx-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16">
                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    <a  style = "color: #668f80; "class="navbar-brand d-flex align-self-center " href="#">          
                    KMPAD
                    </a>

                </div>      


                <button class="navbar-toggler btns" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div  class="collapse navbar-collapse d-lg-flex justify-content-lg-end " style="color: #284b63;" id="navbarSupportedContent">
                    
                    <ul    class="navbar-nav  pb-2 pb-lg-0   ">
                    <li class="nav-item px-4  align-self-center d-lg-flex ">
                        <a class="nav-link  " aria-current="page" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right" viewBox="0 0 16 16">
                        <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                        </svg>
                        </a>
                    </li>
                    <li class="nav-item px-2   d-lg-flex align-self-center  ">
                        <a class="nav-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                        </svg>
                        
                        </a>
                    </li>
                    <span class="_sP9B"></span>
                    <li class="nav-item dropdown d-lg-flex px-4   align-self-center">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Usuario
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Rol</a></li>
                        
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                        </svg>  Configuraciones</a></li>
                        <li><a class="dropdown-item" href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg> Salir</a></li>
                        </ul>
                    </li>
                    
                    </ul>
                    <div class="d-flex p-3"> </div>
                </div>
                </nav>
                </div>

                {/* <!-- Panel donde se alberga todo el contenido de la página  --> */}
                <div class="Panel-principal ">

                {/* <!-- Panel donde se alberga  el contenido de la parte superior de la página, en ese panel
                a parecen el nombre de la sección donde me encuentro y el botón para registrar una nueva fruta --> */}

                <div class="Panel-Encabezado   " style="width: 1360px;color: #668f80;">
                    
                    <div class="d-flex _3mYbO px-5 align-self-center Texto-encabezado">
                    <h1>
                        Mis Ventas
                    </h1>
                    </div>
                    
                    <div  class="d-flex px-5">
                    <button type="button" class="btn btns  rounded-pill" id="liveAlertBtn" onclick="showForm()" >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" class="buttonnext246841004__prefix" data-hook="prefix-icon"><path d="M12 12L12 6 11 6 11 12 5 12 5 13 11 13 11 19 12 19 12 13 18 13 18 12z"></path></svg> Registrar nueva venta</button>
                    </div>

                    

                </div>

                {/* <!-- Panel donde se encuentra la sección de busqeda --> */}
                <div class="Panel-Busqueda  justify-content-lg-end ">  
                    <div class="  align-self-center px-2" style=" display: flex; flex-direction: row;">      
                    <input id = "barrabusqueda"class="form-control p-2 rounded-pill icon-placerholder buscador " type="search" placeholder=" Search" aria-label="Search"/>
                    </div>
                    <div  class="p-2" >        
                    <button type="button" style=" display: flex; flex-direction: row;" class="btn btns rounded-pill align-self-center" id="buscarBtn1"  > 
                        <div class="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        </div>
                        <span class="align-self-center px-1">
                        Buscar
                        </span>        
                    </button>
                    </div>
                </div>

                <div class="panel-info formulario shadow rounded bg-white w-50" tyle = "display: none"    id="panel-info"/>
                    <h3 id="tituloinfo"></h3>

                    
                    <div >
                    <hr>
                    <h5>Informacion Fruta</h5>
                    </hr>       
                    <h5 id="nameefruta"></h5>
                    <h5 id="gramofruta"></h5>
                    <h5 id="preciofruta"></h5>       
                    <h5 id="totalfruta"></h5>
                    
                        cd
                

                    <hr>
                    
                    <h5>Informacion Cliente</h5>
                    </hr>
                    <h5 id="namecliente"></h5>
                    <h5 id="idcliente"></h5>
                    <h5 id="correocliente"></h5>
                    <h5 id="dirrcliente"></h5>
                
                    <hr>
                    <h5>Vendedor</h5>
                    </hr>

                    <h5 id="idvendedor"></h5>
                    </div>

                    

                </div>




                {/* <!-- Formulario registro --> */}
                <div class="Formulario-registrar shadow   Texto-encabezado rounded bg-white w-50"  id = "reg-form">
                    <div>
                    <div>
                        <h3 style="color: #284b63; padding: 2%; padding-bottom: 4%; position: relative; text-align: center; justify-content: center">
                        Registrar Fruta
                        </h3>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: space-around; color: #284b63;">

                        <div class="px-2 " style="position:relative; text-align: center; justify-content: center;"> 

                        <h4 style="padding-bottom:4% ;" >Información Fruta</h4>  

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

                        <div  class="px-2" style=" position:relative; text-align: center; justify-content: center;">
                        <h4  style="padding-bottom:4% ;">Información Cliente</h4> 
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
                                <div   style="display: flex; align-self:baseline; flex-direction: colum;">
                                <div  class="px-2 py-2"  style="width: 110px; position: relative ;left: 18%; justify-content: center;">
                                    <button type="button" class="btn btn-outline-danger rounded-pill" id="CancelarregisBtn" onclick="cancelar()">
                                    Cancelar
                                    </button>
                                </div>
                                <div  class="px-2 py-2" style="width:  110px; position: relative ;left: 19%; justify-content: center;">
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

                {/* <!-- Formulario editar registro --> */}
                <div class="Formulario-registrar shadow   Texto-encabezado rounded bg-white w-50" id = "edit-form">
                    <div>
                    <div>
                        <h3 style=" position: relative; text-align: center; justify-content: center;">
                        Editar Fruta
                        </h3>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: space-around;">
                        <div class="px-2" style="position:relative; text-align: center; justify-content: center;"> 
                        <h4 >Información Fruta</h4>   
                            <div>  
                            <form class="row g-3" id="infofrutaFormEdit"> 

                                <div class="col-12 form-floating">
                                <input type="number" class="form-control" id="idfrutEdit" name="idfrutEdit" placeholder="Identificación"  readonly="true"/>
                                <label for="idfrutEdit" >Id:</label>                      
                                </div>

                                                    
                                <div class="col-md-12 form-floating">
                                <label class="visually-hidden" for="namefrutaEdit">Nombre</label>
                                    <select class="form-select" id="namefrutaEdit" name="namefrutaEdit">
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
                                <input type="number" class="form-control" id="gramoEdit" name="gramoEdit" placeholder="Gramos"/>
                                <label for="gramoEdit" >Gramos</label>                      
                                </div>

                                <div class="col-md-6 form-floating">
                                <input type="number" class="form-control" id="precioEdit" name="precioEdit" placeholder="Precio Gramo"/>
                                <label for="precioEdit" >Precio Gramo</label>                      
                                </div>

                                <div class=" form-floating">                      
                                <input type="number" class="form-control" id="totalCostEdit" name="totalCostEdit" placeholder="Precio total"/ >
                                <label for="totalCostEdit" >Precio total</label>
                                </div>  
                            </form>                  
                            </div>      
                        </div>

                        <div  class="px-2" style="position:relative; text-align: center; justify-content: center;">
                        <h4  >Información Cliente</h4> 
                        
                        <div>  
                            <form class="row g-3" id="infoClientFormEdit">  
                            
                            <div class="col-12 form-floating">
                                <input type="text" class="form-control" id="nameclientEdit" name="nameclientEdit" placeholder="Nombre"/>
                                <label for="nameclientEdit" >Nombre</label>                      
                            </div>

                            <div class="col-12 form-floating">
                                <input type="text" class="form-control" id="idclientEdit" name="idclientEdit" placeholder="Identificación"/>
                                <label for="idclientEdit" >Identificación</label>                    
                            </div>

                            <div class="col-12 form-floating">
                                <input type="text" class="form-control" id="correoEdit" name="correoEdit" placeholder="Correo"/>
                                <label for="correoEdit" >Correo</label>                      
                            </div>

                            <div class="col-12 form-floating">
                                <input type="text" class="form-control" id="dirEdit" name="dirEdit" placeholder="Dirreccion"/>
                                <label for="dirEdit">Dirreccion</label>                      
                            </div>
                            
                            <div class="col-md-12 form-floating">
                                <label class="visually-hidden" for="vendedorEdit">Vendedor</label>
                                <select class="form-select" id="vendedorEdit" name="vendedorEdit">
                                <option selected>Seleccionar vendedor</option>
                                <option value="Vendedor 1">Vendedor 1</option>
                                <option value="Vendedor 2">Vendedor 2</option>
                                <option value="Vendedor 3">Vendedor 3</option>
                                </select>
                            </div>
                            <div class="col-md-12 form-floating">
                                <div   style="display: flex; align-self:baseline; flex-direction: colum;">
                                <div  class="px-2 py-2"  style="width: 110px; position: relative ;left: 18%; justify-content: center;">
                                    <button type="button" class="btn btn-outline-danger rounded-pill" id="CancelarEditBtn" onclick="cancelar()">
                                    Cancelar
                                    </button>
                                </div>
                                <div  class="px-2 py-2" style="width:  110px; position: relative ;left: 19%; justify-content: center;">
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

                {/* <!-- Panel donde se encuentra la información a mostrar/tabla --> */}
                <div class="Panel-registro shadow rounded-top" style="display: flexbox; ">
                    <table class="table table-hover " id ="Tabla-registro">
                    <thead id="prueba">

                        <tr class="table-hover " style="background-color: #353535; color: #f8f9fa;">
                        
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
                    <div class="no-data  " id="Info-nodata">
                    <div class="d-flex px-3 "  style="position: relative; align-self:flex-start; opacity:30%;">
                        <svg id="b21613c9-2bf0-4d37-bef0-3b193d34fc5d" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 647.63626 632.17383">
                        <path d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z" transform="translate(-276.18187 -133.91309)" fill="#f2f2f2"/>
                        <path d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"/>
                        <path d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z" transform="translate(-276.18187 -133.91309)" fill="#6c63ff"/>
                        <circle cx="190.15351" cy="24.95465" r="20" fill="#6c63ff"/>
                        <circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff"/>
                        <path d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z" transform="translate(-276.18187 -133.91309)" fill="#e6e6e6"/>
                        <path d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"/>
                        <path d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z" transform="translate(-276.18187 -133.91309)" fill="#6c63ff"/><circle cx="433.63626" cy="105.17383" r="20" fill="#6c63ff"/><circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff"/>
                        </svg>
                    </div>
                    <div class="d-flex  " style="position: absolute; align-self:flex-baseline">
                        
                        <span class="p-2">
                        <p>Parece que aún no hay ningúna venta registrada!</p>
                        
                        
                        <button type="button" class="btn btn-link" onclick="showForm()" style="color: #668f80;">¿Desea registrar una nueva venta?</button>
                        
                        </span>
                        

                        </div>
                        
                    </div>
                </div>



                    
                </div>

            </div>

            );

            }
}

export default Home;