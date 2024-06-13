const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const contrasena = document.getElementById("contrasena");
const concontrasena = document.getElementById("concontrasena");
const form_container = document.getElementById("form_container");

form_container.addEventListener("submit", e => {
    e.preventDefault()
    if(nombre.nodeValuevalue.length < 6) {
        alert ("nombre muy corto")
    }
} )

