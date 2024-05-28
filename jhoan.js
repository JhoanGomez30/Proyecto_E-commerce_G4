
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const inputs = document.querySelectorAll("#formulario input")

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("tel");
const inputMessage = document.getElementById("message");
const btnSend = document.getElementById("btn__send")

const validarDatos = () => {

    if(!expresiones.nombre.test(inputName.value)){
        alert("el campo de nombre no cumple con las condiciones")
    }

    if(!expresiones.correo.test(inputEmail.value)){
        alert("el campo de email no cumple con las condiciones")
    }

    if(!expresiones.telefono.test(inputPhone.value)){
        alert("el campo de telefono no cumple con las condiciones")
    }
}



btnSend.addEventListener('click', (e) => {
    
    if(inputName.value === "" || inputEmail.value === "" || inputPhone.value === "" || inputMessage.value === ""){
        alert("Error, campos vacios")
    }else {
        validarDatos()
    }

})