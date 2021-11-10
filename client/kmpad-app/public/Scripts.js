
const btnAgregarProductos = document.getElementById("btnagregarProductos")
const btnAgregarVentas= document.getElementById("btnagregarVentas")
const btnAgregarUsuarios= document.getElementById("btnagregarUsuarios")

if(btnAgregarProductos){
    btnAgregarProductos.addEventListener("click", (event) =>{                
            showForm("Productos");
        } 
    )
}
else if (btnAgregarVentas){
    btnAgregarVentas.addEventListener("click", (event) =>{                
        showForm("Ventas");
    } 
)
}
else if(btnAgregarUsuarios){
    btnAgregarUsuarios.addEventListener("click", (event) =>{                
        showForm("Usuarios");
    } 
)
}


const showForm = ()  =>{
    console.log("Hola mundo")
    document.getElementById(`panRegistrarProductos`).style.display="block";
}