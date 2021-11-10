
import React, {Component} from 'react';
import { getStyleObjectFromString } from "../utils/stringUtils";
class App extends React.Component{

    
    render(){
        return(
            

                <div style={getStyleObjectFromString("display: flex; justify-content: center;width:100%; height:100%; align-items:initial; background-color:#f0d76d")}>      
                    
                    <div class="rounded-1 shadow-lg  "style={getStyleObjectFromString("position:absolute; background-color:#ffffff; top: 10% ;   display:flex; width:80%; height: 80%; align-items: center;")} >
                        <div class="position-relative" style={{width:"65%", height:"100%" }}>
                            <img  class="rounded-start" style ={ getStyleObjectFromString(" position: relative;  width: 100%; height:100%;") }src="./img/fruta4.jpg" alt="Imagen Frutería"/>
                        </div> 
                        <div class="position-relative flex-row justify-content-center align-items-center" style={{ width:"35%", height:"100%" }}>                                
                            <div style={getStyleObjectFromString("position: relative; left:24%; padding-top: 10%;")}>
                                <img  style ={ getStyleObjectFromString(" padding-bottom: 5%;   width: 180px; height:120px;") }src="./img/image 1.png" alt="Logo Misión tic"/>
                            </div>
                            
                                <div style={getStyleObjectFromString("font-family:  'Helvetica-Neue', serif; padding-bottom: 15%; text-align: center;    height: fit-content;")}>
                                    <h2 >Log in to your account</h2>
                                </div>
                                            
                            <div class="px-5" style = {getStyleObjectFromString("position: relative; left:24%;  align-items: center; height: 50px;")}>
                                <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark">        
                                </div>
                            </div>   

                            <footer> 
                                <span>  
                                    "Don't have an account?"  
                                    <a href= "#"> Sign Up </a>
                                </span>                
                            <div class="px-5" style={getStyleObjectFromString("height: fit-content; position: relative;top: 15%")}>
                                <img src="./img/image 2.png" alt="Escudo universidad de antioquia"/>
                            </div>  
                            </footer> 
                        </div>       
                    </div>       
                </div>
            );

            }
}

    export default App;