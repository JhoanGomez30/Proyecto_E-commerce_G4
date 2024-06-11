import { conexionAPI } from "./conexionAPI.js";



const productosContainer = document.querySelector("[data-productos]");

function crearCard(name, price, img){
    const producto = document.createElement("div");
    producto.className="cardProduct";
    producto.innerHTML=`       
     <figure class="card__figure">
    <img src="${img}" alt="foto" class="card__img">
  </figure>
  <h5 class="card__title">${name}</h5>
  <span class="card__startPoints">
    <img class="card__startPoint" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
    <img class="card__startPoint" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
    <img class="card__startPoint" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
    <img class="card__startPoint" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
    <img class="card__startPoint" src="../assets/iconos/start.svg" alt="estrella sin rellenar">
  </span>
  <div class="card__priceAndBuyFlex">
    <p class="card__price">$${price}</p>
    <img src="../assets/iconos/shoppingCart.svg" alt="carrito" class="card__buy">
  </div>`

  return producto;
}

async function listarVideos(){
    const listaAPI= await conexionAPI.listarVideos();

    listaAPI.forEach(producto => productosContainer.appendChild(crearCard(producto.name, producto.price, producto.img)))
}

listarVideos();