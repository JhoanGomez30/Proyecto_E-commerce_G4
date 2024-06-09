const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    amount: /^\d{1,3}(,\d{3})*(\.\d+)?$/,///^[0-9.\s,]\d{1,12}$/, // validacion numeros.
    stock: /^\d{1,4}$/,
    message: /^[a-zA-ZÀ-ÿ0-9\s.,:;_\-!¡¿?()]{5,200}$/,
}

const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll("#formulario input")
const spans = document.querySelectorAll("#formulario span")
const btnSend = document.getElementById("btn__send")

// const inputNameProduct = document.getElementById("name_product");
// const inputPrice = document.getElementById("price");
// const inputCategories = document.getElementById("list__categories");
// const inputStock = document.getElementById("stock__product");
// const description= document.getElementById("description");
// 

// validacion al enviar el formulario
// const validarDatos = () => {

//     if(!expresiones.name.test(inputName.value)){
//         alert("el campo de nombre no cumple con las condiciones")
//     }

//     if(!expresiones.email.test(inputEmail.value)){
//         alert("el campo de email no cumple con las condiciones")
//     }

//     if(!expresiones.phoneNumber.test(inputPhone.value)){
//         alert("el campo de telefono no cumple con las condiciones")
//     }
// }


const validarFormulario = (e) =>{
    switch(e.target.name){
        case "name__product":
            if(expresiones.name.test(e.target.value)){
                document.getElementById("name__product__group").classList.remove('input__wrong')
            }else{
                document.getElementById("name__product__group").classList.add('input__wrong')
            }
        break;
        case "price":
            if(expresiones.amount.test(e.target.value)){
                document.getElementById("price__group").classList.remove('input__wrong')
            }else{
                document.getElementById("price__group").classList.add('input__wrong')
            }
        break;
        case "stock__product":
            if(expresiones.stock.test(e.target.value)){
                document.getElementById("stock__product__group").classList.remove('input__wrong')
            }else{
                document.getElementById("stock__product__group").classList.add('input__wrong')
            }
        break;
        case "description":
            if(expresiones.message.test(e.target.value)){
                document.getElementById("description__group").classList.remove('input__wrong')
                habilitarBoton()
            }else{
                document.getElementById("description__group").classList.add('input__wrong')
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
        if(span.classList.contains("input__wrong")){
            btnSend.setAttribute('disabled', 'true')
            console.log(span.classList.contains("input__wrong"))
    
        }else{
            btnSend.setAttribute('disabled', 'false')
        }
    })
}

function saveProducts(){
    console.log("funciona")
}

let myNumericInput = new AutoNumeric('.input__price',{decimalPlaces: 2});

document.querySelector('.input__price').addEventListener('keyup',() =>{
  console.log(myNumericInput.getNumber())
})

