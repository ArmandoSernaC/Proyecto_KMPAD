// Declaración de constantes que permiten la comunicación de JS Con el DOM

// Tabla donde se registra la información 
const Tregistro = document.getElementById("Tabla-registro");

// Paneles de formularios (registrar y editar)
const Pregistro = document.getElementById("reg-form");
const Peditar = document.getElementById("edit-form");

// Panel de info - no data
const infodata = document.getElementById("Info-nodata");


// Formularios  registro
const formPersonareg = document.getElementById("infopersonaFormReg");
//const formClientereg = document.getElementById("infoClientFormReg");

// Formularios  editar
const formPersonaedit = document.getElementById("infopersonaFormEdit");
//const formClientedit = document.getElementById("infoClientFormEdit");


// panel Confirmaciones

const BtnBuscar = document.getElementById("buscarBtn1")
// Declaración de funciones  

// Funciones Agregar/Registrar Fruta -----------------------------------------------------------------
// Creación lista contenido

var lista_usuarios = [];

// Función que permite crear un objeto fruta a partir de la información de los formularios
function ingresarUsuario(form1, type) {
    let user = {};
    if (type == 1) {

        user = {

            nameperson: form1.get("namepersonareg"),
            idtperson: form1.get("idpersonareg"),
            emailperson: form1.get("correopersonareg"),
            roleuser: form1.get("usuariorolreg"),
            userstatus: form1.get("estadousuarioreg"),
            //fecha: agregarFecha()
        };
    }
    else if (type == 2) {

        user = {

            nameperson: form1.get("namepersonaEdit"),
            idtperson: form1.get("idpersonaEdit"),
            emailperson: form1.get("correopersonaEdit"),
            roleuser: form1.get("usuariorolEdit"),
            userstatus: form1.get("estadousuarioEdit"),
            //fecha: agregarFecha()
        };
    }



    return user
}


//Permite agregar un objeto fruta a la lista
function agregarUsuario(user) {
    lista_usuarios.unshift(user);

}

function registrarUsuario(Form1) {
    let user = ingresarUsuario(Form1, 1)
    if (user) {
        lista_usuarios.unshift(user)
        insertUsuario(user)
        swal("Guardado exitosamente.", "El registro se guardó correctamente.", "success");
    } else {
        swal("Oops! Hay un problema.", "Hubo un error al registrar el usuario. Inténtelo nuevamente.", "error")
    }

}

// Función que permite conocer la fecha en la que se registra una (fruta)
/*function agregarFecha() {

    let today = new Date();

    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();

    day = ('0' + day).slice(-2);
    month = ('0' + month).slice(-2);

    let date = `${day}/${month}/${year}`;
    return date;
}*/

//Función que permite insetar un registro en la tabla, y mostrarla en el documento
function insertUsuario(user) {

    infodata.style.display = "none";
    Pregistro.style.display = "none";

    //formClientereg.reset();
    formPersonareg.reset();

    let newlistRow = Tregistro.insertRow(1);
    let newlistCell = newlistRow.insertCell(0);

    newlistCell.textContent = user.nameperson

    newlistCell = newlistRow.insertCell(1);
    newlistCell.textContent = user.idtperson

    newlistCell = newlistRow.insertCell(2);
    newlistCell.textContent = user.emailperson

    newlistCell = newlistRow.insertCell(3);
    newlistCell.textContent = user.roleuser

    newlistCell = newlistRow.insertCell(4);
    newlistCell.textContent = user.userstatus

    //newlistCell = newlistRow.insertCell(5);
    //newlistCell.textContent = user.status1

    let optionsCell = newlistRow.insertCell(5);
    optionsCell.insertAdjacentHTML("beforeend", `<div class="dropdown">
        <button class="btn  bg-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            </svg>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            
            <li>
                <button class="dropdown-item" id="edit-${user.nameperson}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                    </svg> 
                    Editar información   
                </button>
            </li>
            <li>
                <button class="dropdown-item" id="delete-${user.nameperson}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    Eliminar usuario 
                </button>
            </li>             
        </ul>
    </div>` )


    //Eventos

    // Captura el evento que permite ver la información addicional del usuario
    //let botoneinfo = document.getElementById(`info-${user.namepersona}`)



    // Captura el evento que permite editar la información del usuario
    let botoneditar = document.getElementById(`edit-${user.nameperson}`)

    botoneditar.addEventListener("click", (event) => {
        showForm2()
        autocompletarForm(user.nameperson)
    }
    )


    // Captura el evento que permite eliminar del usuario
    let botoneborrar = document.getElementById(`delete-${user.nameperson}`)

    botoneborrar.addEventListener("click", (event) => {
        eliminarUsuario(user.nameperson)
    }
    )

    return user

}


//Captura el evento que permite registrar la fruta 

formPersonareg.addEventListener("submit", function (event) {

    event.preventDefault();

    let form1 = new FormData(formPersonareg);
//    let form2 = new FormData(formClientereg);

    registrarUsuario(form1); 

}
)
// Función que permite ver la confirmación del registro  o de la edicción de la fruta

// Funciones Editar info  -----------------------------------------------------------------------------------------------------------------------------------------

// Permite eliminar un elemento de la lista cuyo identificador
// corresponda al pasado por parámetro. 

function eliminarUsuario(namepersona) {

    swal({
        title: "¿Estás seguro?",
        text: "Una vez eliminado, no podrás recuperar el registro.",
        icon: "Warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {

                for (let user in lista_usuarios) {
                    //console.log(fruta )
                    if (lista_usuarios[user].nameperson == namepersona) {
                        lista_usuarios.splice(user, 1);
                        if (lista_usuarios.length == 0) {
                            infodata.style.display = "flex";
                        }
                    }
                }
                document.getElementById(`delete-${namepersona}`).parentNode.parentNode.parentNode.parentNode.parentNode.remove()

                swal("El registro se eliminó correctamente.", {
                    icon: "success",
                });
            }
        });

}

// Permite remplazar un elemento de la lista cuyo identificador
// corresponda al pasado por parámetro. 

function remplazarUser(form3) {

    let user = ingresarUsuario(form3, 2);

    for (let piuser in lista_usuarios) {
        //console.log(fruta )
        if (lista_usuarios[piuser].nameperson == user.nameperson) {
            lista_usuarios.splice(piuser, 1, user);
        }
    }


    document.getElementById(`delete-${user.nameperson}`).parentNode.parentNode.parentNode.parentNode.parentNode.remove();
    insertUsuario(user);
    //swal("Muy bien!", "El registro se modificó correctamente!", "success");
    Peditar.style.display = "none";

}

//Función que permite auto completar el formulario de editar

let autocompletarForm = (namepersona) => {

    let infopersona = [];
    for (let i in lista_usuarios) {
        if (lista_usuarios[i].nameperson == namepersona) {
            infopersona = lista_usuarios[i]
        }
    }

    document.getElementById("namepersonaEdit").value = infopersona.nameperson;
    document.getElementById("idpersonaEdit").value = infopersona.idtperson;
    document.getElementById("correopersonaEdit").value = infopersona.emailperson;
    document.getElementById("usuariorolEdit").value = infopersona.roleuser;
    document.getElementById("estadousuarioEdit").value = infopersona.userstatus;

    /*document.getElementById("idclientEdit").value = infofruta.idClient;
    document.getElementById("nameclientEdit").value = infofruta.nameClient;
    document.getElementById("vendedorEdit").value = infofruta.seller; */

}


// Funciones que permiten mostrar los paneles de registro y editar

// panel registro
let showForm = () => {
    Pregistro.style.display = "block";
    infodata.style.display = "none";

}

// panel editar
let showForm2 = () => {
    Peditar.style.display = "block";
    infodata.style.display = "none";

}

// Función que nos permite cerrar los paneles de registro y editar
function cancelar() {

    Pregistro.style.display = "none";
    Peditar.style.display = "none";

    if (lista_usuarios.length > 0) {

    }
    else {
        infodata.style.display = "flex";
    }


}

    formPersonaedit.addEventListener("submit", function (event) {

    event.preventDefault();

    swal({
        title: "¿Estás seguro?",

        icon: "Warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willedit) => {
            if (willedit) {
                let form3 = new FormData(formPersonaedit);
                //let form4 = new FormData(formClientedit);
                remplazarUser(form3);
                swal("El registro ha sido modificado.", {
                    icon: "success",
                });
            }
        });
 
}
)

// Funcion que nos permite limpiar la tabla
function limpiarTabla() {
    let numRow = document.getElementById("infouser").childElementCount
    for (let i = 1; i < numRow; i++) {
        Tregistro.deleteRow(1)
    }

}

// Función que permite carga tabla completa 

function cargarUsuarios() {

    limpiarTabla()
    if (lista_usuarios.length > 0) {
        for (let i = lista_usuarios.length - 1; i >= 0; i--) {
            insertUsuario(lista_usuarios[i])
        }
    } else {
        infodata.style.display = "flex";

    }

}

// Función Buscar fruta 
//--------------------------------------------------------------------------------------
let busqueda = (keyWord) => {
    let isElement = false;
    for (let user in lista_usuarios) {
        if (lista_usuarios[user].idtperson == keyWord || lista_usuarios[user].nameperson == keyWord) {
            limpiarTabla()
            isElement = true
            insertUsuario(lista_usuarios[user])
        }
    }
    if (!isElement) {

        swal("Lo sentimos, no hemos podido encontrar el elemento que buscas.", "Warning")
        crearBtnbuscar()
    }
}


let crearBtnLimpiar = () => {
    BtnBuscar.id = "limpiar";
    BtnBuscar.innerHTML = "Limpiar búsqueda"
}
let crearBtnbuscar = () => {
    BtnBuscar.id = "buscarBtn1";
    console.log(BtnBuscar.id)
    BtnBuscar.innerHTML = `<div class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                </div>
                <span class="align-self-center px-1">
                Buscar
                </span>`;


    console.log("se ha cambiado a modo busqueda")

}


if (BtnBuscar) {

    BtnBuscar.addEventListener("click", (event) => {
        if (BtnBuscar.id == "limpiar") {
            crearBtnbuscar()
            cargarUsuarios()

        } else {

            let barrabus = document.getElementById("barrabusqueda")
            let keyWord = barrabus.value
            crearBtnLimpiar()
            busqueda(keyWord)
            barrabus.value = " "


        }

    })
}