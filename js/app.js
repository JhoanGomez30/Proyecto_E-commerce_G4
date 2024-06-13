
const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phoneNumber: /^\d{10}$/, // validacion 10 numeros.
    message: /^[a-zA-ZÀ-ÿ0-9\s.,:;_\-!¡¿?()]{5,200}$/
}

const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll("#formulario input")
const spans = document.querySelectorAll("#formulario span")

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("tel");
const inputMessage = document.getElementById("message");
const btnSend = document.getElementById("btn__send")

const validarFormulario = (e) =>{
    switch(e.target.name){
        case "name":
            if(expresiones.name.test(e.target.value)){
                document.getElementById("name__group").classList.remove('input__wrong')
            }else{
                document.getElementById("name__group").classList.add('input__wrong')
            }
        break;
        case "email":
            if(expresiones.email.test(e.target.value)){
                document.getElementById("email__group").classList.remove('input__wrong')
            }else{
                document.getElementById("email__group").classList.add('input__wrong')
            }
        break;
        case "tel":
            if(expresiones.phoneNumber.test(e.target.value)){
                document.getElementById("tel__group").classList.remove('input__wrong')
            }else{
                document.getElementById("tel__group").classList.add('input__wrong')
            }
        break;
        case "message":
            if(expresiones.message.test(e.target.value)){
                document.getElementById("message__group").classList.remove('input__wrong')
                habilitarBoton()
            }else{
                document.getElementById("message__group").classList.add('input__wrong')
                habilitarBoton()
            }
        break;
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})


function habilitarBoton(){

    spans.forEach((span) =>{
        if(span.classList.contains('input__wrong')){
            btnSend.setAttribute('disabled', "true")
    
        }else{
            btnSend.removeAttribute('disabled')
        }
    })
}