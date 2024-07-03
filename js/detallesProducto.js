//Cambiar cantidad de articulos ingresado por el usuario


const minusBtn= document.querySelector(".input__minus");
const plusBtn= document.querySelector(".input__plus");
const countInput= document.querySelector(".input__number");


let countInputNumber = 0;

plusBtn.addEventListener("click", ()=>{
    countInputNumber++;
    countInput.value=countInputNumber;
})

minusBtn.addEventListener("click", ()=>{

    if(countInputNumber<=0){
        return;
    }
    countInputNumber--;
    countInput.value=countInputNumber;
})

//Agregar el total de productos al carrito de compras cuando se preisona el boton ver compra
const addCartBtn = document.querySelector(".details__button");
let cartNotification = document.querySelector(".header__cart--notification");
let lastValue = parseInt(cartNotification.innerText);



addCartBtn.addEventListener("click", ()=>{

    
    lastValue=lastValue+countInputNumber
    cartNotification.innerText=lastValue;
    cartNotification.style.display="block";
    priceModal.innerHTML=`$125.00 x${lastValue} <span class="cartModal__priceTotal">$${lastValue * 125}.00</span>`

})

//Mostrar el modal con el detalle del carrito

const cartIconBtn = document.querySelector(".header__cart--container");
const cartModal= document.querySelector(".cartModal");
let priceModal = document.querySelector(".cartModal__price");

cartIconBtn.addEventListener("click", ()=>{
    // cartModal.style.display="block";
    cartModal.classList.toggle("showElement");
    // priceModal.innerHTML=`$125.00 x${lastValue} <span class="cartModal__priceTotal">$${lastValue * 125}.00</span>`
})


//Borrar el contenido del carrito.

const deleteCartProductBtn = document.querySelector(".cartModal__iconDelete");
const productContainerCart= document.querySelector(".cartModal__checkout");

deleteCartProductBtn.addEventListener("click", ()=>{
    productContainerCart.innerHTML='<p class="cartModal__empty" >Tu carrito está vacío</p>'
})
