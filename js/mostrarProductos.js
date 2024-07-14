import { conexionAPI } from "./conexionAPI.js";



const productosContainer = document.querySelector("[data-productos]");

function crearCard(nombre, valorUnitario, imagen, id_producto){
    const producto = document.createElement("div");
    producto.className="cardProduct";
    producto.innerHTML=`       
     <figure class="card__figure">
    <img src="${imagen}" alt="foto" class="card__img">
  </figure>
  <h5 class="card__title">${nombre}</h5>
  <span class="card__startPoints">
    <img class="card__startPoint" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
    <img class="card__startPoint" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
    <img class="card__startPoint" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
    <img class="card__startPoint" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
    <img class="card__startPoint" src="../assets/iconos/start.svg" alt="estrella sin rellenar">
  </span>
  <div class="card__priceAndBuyFlex">
    <p class="card__price">$${valorUnitario}</p>
    <img src="../assets/iconos/shoppingCart.svg" alt="carrito" class="card__buy">
  </div>`

  const btnSelected=producto.querySelector(".card__buy");

  btnSelected.addEventListener("click", async()=>{
    
    console.log("se ha hecho click", id_producto)
    productosContainer.removeChild(producto);
    

    // await conexionAPI.eliminarProducto(id);

    await conexionAPI.eliminarProducto(id_producto)

  })

  return producto;
}

async function listarProductos(){

  try{
    const listaAPI= await conexionAPI.listarProductos();

    listaAPI.forEach(({nombre, valorUnitario, imagen, id_producto}) => productosContainer.appendChild(crearCard(nombre, valorUnitario, imagen, id_producto)));
  }catch{
    contenedorMensajeError.innerHTML=` <h1 class="productCard__error">Ha ocurrido un problema con la conexión</h3>

    `
  }

}

listarProductos();