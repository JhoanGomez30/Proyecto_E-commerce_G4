
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const inputs = document.querySelectorAll("#formulario input")

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("tel");
const inputMessage = document.getElementById("message");
const btnSend = document.getElementById("btn__send")

const validarDatos = (e) => {
    console.log("hola")
}



btnSend.addEventListener('click', (e) => {
    
    e.preventDefault()
    
    if(inputName.value === "" || inputEmail.value === "" || inputPhone.value === "" || inputMessage.value === ""){
        alert("Error, campos vacios")
    }else {
        inputs.forEach((input) =>{
            validarDatos();
        })
    }

})