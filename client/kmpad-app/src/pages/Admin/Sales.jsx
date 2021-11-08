// import React from 'react';
// import ReactDOM from 'react-dom';
// import Home from '../../components/home';
 
import React from 'react';
import "../../components/style.css"
import Tabla from '../../components/Tabla';
import Busqueda from '../../components/Busqueda';
import Encabezado from '../../components/Encabezado';
import Registro from '../../components/Registro';
import Noinfo from '../../components/Noinfo';

const sales = () => {
  return (
    <div class="Panel-principal">
      <Encabezado subtitle = {"Ventas"} element = {"nueva venta"}/>
      <Busqueda subtitle = {"Ventas"} />
      <Registro type = {"Ventas"}/>
      <div class="Panel-registro shadow rounded-top" style={{ display: "flexbox"}}  >
      <Tabla type = {"Ventas"}/>
      <Noinfo type = {"Ventas"}/>
      </div> 
    </div>
  )
}

export default sales;



// ReactDOM.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
