

export async function insertarInfo(){

    document.addEventListener("DOMContentLoaded", async function(){
        const params = new URLSearchParams(window.location.search);
        // const productId= params.get("id");
        const productId= parseInt(params.get("id"));


        const detalleProducto = document.getElementById("contenedorDetalles")

        try{
            const response= await fetch("http://localhost:8081/productos/obtener")

            if(!response.ok){
                throw new Error("no se pudo obtener la información del producto.")
            }

            const productos= await response.json();

            const producto=productos.find(product => product.id_producto === productId );

            const precioActual= producto.valorUnitario-(producto.valorUnitario*0.5);

            console.log(producto);
            detalleProducto.innerHTML=`<div class="detailProduct__container container">
            <article class="gallery">
                <div class="gallery__imgContainer">
                  <img src="../assets/iconos/icon-previous.svg" alt="flecha atras" class="gallery__previous">
                  <img src="../assets/iconos/icon-next.svg" alt="flecha delante" class="gallery__next">
          
                </div>
                <div class="gallery__thumbnails">
                  <img id="1" src="${producto.imagen}" alt="thumbnail" class="gallery__thumbnail">
                  <img id="2" src="${producto.modalimagen1}" alt="thumbnail" class="gallery__thumbnail">
                  <img id="3" src="${producto.modalimagen2}" alt="thumbnail" class="gallery__thumbnail">
                  <img id="4" src="${producto.modalimagen3}" alt="thumbnail" class="gallery__thumbnail">
                  

                </div>
            </article>
            <article class="details">
              <h2 class="details__title">${producto.nombre}</h2>
              <span class="card__startPoints--details">
                <img class="card__startPoint--details" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
                <img class="card__startPoint--details" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
                <img class="card__startPoint--details" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
                <img class="card__startPoint--details" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
                <img class="card__startPoint--details" src="../assets/iconos/start.svg" alt="estrella sin rellenar">
              </span>
              <p class="details__description">${producto.descripcion}</p>

              <div class="details__prices">
                <p class="details__before">$${producto.valorUnitario}</p>
                <p class="details__now">$${producto.valorUnitario-(producto.valorUnitario*0.5)} COP</p>
              </div>

              <div class="details__productQuantity">
                <div class="input">
                  <img src="../assets/iconos/icon-minus.svg" alt="minus" class="input__minus">
                  <input class="input__number" type="text" value="0">
                  <img src="../assets/iconos/icon-plus.svg" alt="plus" class="input__plus">
                </div>

                <button class="details__button">Agregar al carrito</button>
              </div>
            </article>
        </div>
        
            <div class="modalGallery__background">
      <article class="modalGallery">
        <img src="../assets/iconos/icon-close.svg" alt="close" class="modalGallery__iconClose">
        <div class="modalGallery__imgContainer">
          <img src="../assets/iconos/icon-previous.svg" alt="flecha atras" class="modalGallery__previous">
          <img src="../assets/iconos/icon-next.svg" alt="flecha delante" class="modalGallery__next">
        </div>
        <div class="modalGallery__thumbnails">
          <img id="m1" src="${producto.imagen}" alt="thumbnail" class="modalGallery__thumbnail">
          <img id="m2" src="${producto.modalimagen1}" alt="thumbnail" class="modalGallery__thumbnail">
          <img id="m3" src="${producto.modalimagen2}" alt="thumbnail" class="modalGallery__thumbnail">
          <img id="m4" src="${producto.modalimagen3}" alt="thumbnail" class="modalGallery__thumbnail">
          

        </div>
      </article>
    </div>
        `
        
   
    // imagenGrande.style.backgroundImage=`${producto.imagen}`

        

//Cambiar cantidad de articulos ingresado por el usuario


const minusBtn= document.querySelector(".input__minus");
const plusBtn= document.querySelector(".input__plus");
const countInput= document.querySelector(".input__number");
const imagenGrande= document.querySelector(".gallery__imgContainer");
console.log(imagenGrande);
imagenGrande.style.backgroundImage = `url(${producto.imagen})`;

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
    drawProductInModal();

})

//Mostrar el modal con el detalle del carrito

const cartIconBtn = document.querySelector(".header__cart--container");
const cartModal= document.querySelector(".cartModal");
// let priceModal = document.querySelector(".cartModal__price");
const productContainerCart= document.querySelector(".cartModal__checkout");


cartIconBtn.addEventListener("click", ()=>{
    // cartModal.style.display="block";
    cartModal.classList.toggle("showElement");
    // priceModal.innerHTML=`$125.00 x${lastValue} <span class="cartModal__priceTotal">$${lastValue * 125}.00</span>`
    if(lastValue ==0){
        productContainerCart.innerHTML='<p class="cartModal__empty" >Tu carrito está vacío</p>';

    }else{
       drawProductInModal();

    }

})


//Borrar el contenido del carrito.

function deleteProduct(){
    const deleteCartProductBtn = document.querySelector(".cartModal__iconDelete");

    deleteCartProductBtn.addEventListener("click", ()=>{
        lastValue=0;
        cartNotification.innerHTML=lastValue;
        productContainerCart.innerHTML='<p class="cartModal__empty" >Tu carrito está vacío</p>';
    

    })
}

//Cambiar imagenes cuando se presione botones flecha
const imageModal=document.querySelector(".modalGallery__background");
const modalImageContainer = document.querySelector(".modalGallery__imgContainer")

const imageContainer=document.querySelector(".gallery__imgContainer");
const previousGalleryBtn = document.querySelector(".gallery__previous");
const nextGalleryBtn = document.querySelector(".gallery__next");
let imgIndex=1;
const imageUrls = [
    `url(${producto.imagen})`,
    `url(${producto.modalimagen1})`,
    `url(${producto.modalimagen2})`,
    `url(${producto.modalimagen3})`,
]

nextGalleryBtn.addEventListener("click", (e)=>{
    e.stopPropagation();
    imageModal.classList.remove("showModal");
    console.log("click, pasar a la sgt imagen");

    changeNextImage(imageContainer);
    
})

previousGalleryBtn.addEventListener("click", (e)=>{
    e.stopPropagation();
    imageModal.classList.remove("showModal");
    console.log("click");

    changePreviousImage(imageContainer);
})


//Mostrar el modal de imagenes cuando hago click en la imagen principal
imageContainer.addEventListener("click", ()=>{
    // imageModal.style.display="block";

    imageModal.classList.add("showModal");
    console.log("click, mostrando modal");
    modalImageContainer.style.backgroundImage = `url(${producto.imagen})`;

})


//CERRAR EL MODAL AL DARLE CLICK AL ICONO CLOSE
const iconClose=document.querySelector(".modalGallery__iconClose");
iconClose.addEventListener("click", ()=>{
    imageModal.classList.remove("showModal");
    console.log("click");
})

//CAMBIAR LAS IMAGENES PRINCIPALES DESDE LOS THUMBNAILS
let thumbnails = document.querySelectorAll(".gallery__thumbnail");

thumbnails=[...thumbnails];

thumbnails.forEach(thumbnail => thumbnail.addEventListener("click", (e)=>{
    imageContainer.style.backgroundImage= `url(${e.target.src})`;


}))

//CAMBIAR LAS IMAGENES PRINCIPALES DES LOS THUMBNAILS EN EL MODAL

let modalThumbnails = document.querySelectorAll(".modalGallery__thumbnail");

modalThumbnails =[...modalThumbnails];
modalThumbnails.forEach(thumbnail => thumbnail.addEventListener("click", (e)=>{

    modalImageContainer.style.backgroundImage= `url(${e.target.src})`;
    // modalImageContainer.style.backgroundImage= `url(../assets/img/thumbnail${e.target.id.slice(-1)}-model.webp)`;



}))

//CAMBIAR IMAGEN PRINCIPAL DE MODAL CON LAS FLECHAS EN EL MODAL

const modalPreviousBtn = document.querySelector(".modalGallery__previous");
const modalNextBtn = document.querySelector(".modalGallery__next");
modalNextBtn.addEventListener("click", (e)=>{

    changeNextImage(modalImageContainer);
    
})

modalPreviousBtn.addEventListener("click", (e)=>{

    changePreviousImage(modalImageContainer);
})



//FUNCIONES

function drawProductInModal(){
    productContainerCart.innerHTML=`
    <div class="cartModal__details">
      <img class="cartModal__img" src="${producto.imagen}" alt="thumbnail">
      <div class="cartModal__productContainer">
        <p class="cartModal__productName">Autum Limited Edition...</p>
        <p class="cartModal__price">$125.00 x3 <span class="cartModal__priceTotal">$375.00</span></p>
      </div>
      <img src="../assets/iconos/icon-delete.svg" alt="delete" class="cartModal__iconDelete">
    </div>
    <button class="cartModal__button">Ver compra</button>
`
    deleteProduct();
    let priceModal = document.querySelector(".cartModal__price");

    priceModal.innerHTML=`$${precioActual} x${lastValue} <span class="cartModal__priceTotal">$${lastValue * precioActual}.00</span>`

}

function changeNextImage(imgContainer){
    // if(imgIndex===5){
    //     imgIndex=1;
    // }else{
    // imgIndex++;
    
    // }

    // imgContainer.style.backgroundImage= `url("../assets/img/thumbnail${imgIndex}-model.webp")`
   
    if(imgIndex===5){
        imgIndex=1;
    }else{
        imgIndex++;
    }

    // for (let i = 0; i < array.length; i++) {
    //     imgContainer.style.backgroundImage= imageUrls[i];
    //     console.log(imageUrls);
        
    // }
    
    imgContainer.style.backgroundImage = imageUrls[imgIndex - 1];
    console.log(imageUrls);
    

}

function changePreviousImage(imgContainer){
    if(imgIndex===1){
        imgIndex=5;

    }else{
        imgIndex--;

    }

    imgContainer.style.backgroundImage = imageUrls[imgIndex - 1];


}

        }catch(error){
                detalleProducto.innerHTML`<h1>Error al cargar los detalles del producto</h1>`
        }
    })


// const detalleProducto = document.getElementById("contenedorDetalles")

// detalleProducto.innerHTML=`<div class="detailProduct__container container">
//             <article class="gallery">
//                 <div class="gallery__imgContainer">
//                   <img src="../assets/iconos/icon-previous.svg" alt="flecha atras" class="gallery__previous">
//                   <img src="../assets/iconos/icon-next.svg" alt="flecha delante" class="gallery__next">
          
//                 </div>
//                 <div class="gallery__thumbnails">
//                   <img id="1" src="../assets/img/thumbnail3-model.webp" alt="thumbnail" class="gallery__thumbnail">
//                   <img id="2" src="../assets/img/thumbnail4-model.webp" alt="thumbnail" class="gallery__thumbnail">
//                   <img id="3" src="../assets/img/thumbnail5-model.webp" alt="thumbnail" class="gallery__thumbnail">
//                   <img id="4" src="../assets/img/thumbnail2-model.webp" alt="thumbnail" class="gallery__thumbnail">
                  

//                 </div>
//             </article>
//             <article class="details">
//               <h2 class="details__title">Fall limited Edition Sneakers</h2>
//               <span class="card__startPoints--details">
//                 <img class="card__startPoint--details" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
//                 <img class="card__startPoint--details" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
//                 <img class="card__startPoint--details" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
//                 <img class="card__startPoint--details" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
//                 <img class="card__startPoint--details" src="../assets/iconos/start.svg" alt="estrella sin rellenar">
//               </span>
//               <p class="details__description">Este top es tu compañero perfecto para el día a día. Confeccionado con tela transpirable y flexible, te ofrecerá comodidad y estilo en cualquier ocasión.</p>

//               <div class="details__prices">
//                 <p class="details__before">$350.000</p>
//                 <p class="details__now">$150.000</p>
//               </div>

//               <div class="details__productQuantity">
//                 <div class="input">
//                   <img src="../assets/iconos/icon-minus.svg" alt="minus" class="input__minus">
//                   <input class="input__number" type="text" value="0">
//                   <img src="../assets/iconos/icon-plus.svg" alt="plus" class="input__plus">
//                 </div>

//                 <button class="details__button">Agregar al carrito</button>
//               </div>
//             </article>
//         </div>`

}

insertarInfo()