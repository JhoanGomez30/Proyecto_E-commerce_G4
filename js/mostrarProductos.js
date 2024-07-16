// import { conexionAPI } from "./conexionAPI.js";



// const productosContainer = document.querySelector("[data-productos]");
// const filtersTop=document.querySelector(".topFilter__content");
// const todoBtn = document.querySelector("#todo");
// let listaAPI=[];



// function crearCard(nombre, valorUnitario, imagen, id_producto){
//     const producto = document.createElement("div");
//     producto.className="cardProduct";
//     producto.innerHTML=`       
//      <figure class="card__figure">
//     <img src="${imagen}" alt="foto" class="card__img">
//   </figure>
//   <h5 class="card__title">${nombre}</h5>
//   <span class="card__startPoints">
//     <img class="card__startPoint" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
//     <img class="card__startPoint" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
//     <img class="card__startPoint" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
//     <img class="card__startPoint" src="../assets/iconos/start-bold.svg" alt="estrella rellenada">
//     <img class="card__startPoint" src="../assets/iconos/start.svg" alt="estrella sin rellenar">
//   </span>
//   <div class="card__priceAndBuyFlex">
//     <p class="card__price">$${valorUnitario}</p>
//     <img src="../assets/iconos/shoppingCart.svg" alt="carrito" class="card__buy">
//   </div>`

//   const btnSelected=producto.querySelector(".card__buy");

//   btnSelected.addEventListener("click", async()=>{
    
//     console.log("se ha hecho click", id_producto)
//     productosContainer.removeChild(producto);
    

//     // await conexionAPI.eliminarProducto(id);

//     // await conexionAPI.eliminarProducto(id_producto)

//   })

//   return producto;
// }

// async function listarProductos(){

//   try{
//      listaAPI= await conexionAPI.listarProductos();
     

//     // listaAPI.forEach(({nombre, valorUnitario, imagen, id_producto}) => productosContainer.appendChild(crearCard(nombre, valorUnitario, imagen, id_producto)));
//     mostrarProductos(listaAPI);

    
//   }catch{
//     productosContainer.innerHTML=` <h1 class="productCard__error">Ha ocurrido un problema con la conexión</h3>

//     `
//   }

// }

// function mostrarProductos(listaAPI){
//   productosContainer.innerHTML=``;
//   listaAPI.forEach(({nombre, valorUnitario, imagen, id_producto}) => productosContainer.appendChild(crearCard(nombre, valorUnitario, imagen, id_producto)));
// }


// filtersTop.addEventListener("click", (e)=>{
//   const categoria= e.target.dataset.categoria;

  
//   if(categoria){
//     const productosFiltrados = listaAPI.filter(producto => producto.categoria === categoria);
    
    
    
//     mostrarProductos(productosFiltrados);
//     return;
//   }

 

// })

// todoBtn.addEventListener("click", ()=>{
//   mostrarProductos(listaAPI);
//   console.log(listaAPI);
// })

// // todosBtn.addEventListener("click", ()=>{
// //   console.log(listaAPI);
// // })
// listarProductos();

import { conexionAPI } from "./conexionAPI.js";

const productosContainer = document.querySelector("[data-productos]");
const filtersTop = document.querySelector(".topFilter__content");
const filterBarCategories = document.querySelector(
  ".filterBar__categories .filterBar__inputs"
);
const filterBarOrder = document.querySelector(
  ".filterBar__order .filterBar__inputs"
);
const todoBtn = document.querySelector("#todo");
let listaAPI = [];

// Función para verificar si el usuario está autenticado
function isAuthenticated() {
  const user = localStorage.getItem("loggedInUser");
  console.log("User authenticated:", user);
  return !!user;
}

// Función para crear una tarjeta de producto
function crearCard(nombre, valorUnitario, imagen, id_producto) {
  const producto = document.createElement("div");
  producto.className = "cardProduct";
  producto.innerHTML = `       
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
    </div>`;

  const btnSelected = producto.querySelector(".card__buy");

  btnSelected.addEventListener("click", (e) => {
    e.stopPropagation();

    console.log("Botón 'card__buy' clicado:", id_producto);

    if (!isAuthenticated()) {
      console.log("Usuario no autenticado, mostrando alerta...");
      return Swal.fire({
        title: "No autenticado",
        text: "Debe registrarse para agregar productos al carrito.",
        icon: "warning",
        confirmButtonText: "Registrarse",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "registrarse.html";
        }
      });
    }

    // console.log("Producto agregado al carrito:", id_producto);
    ///////////
  });

  return producto;
}

async function listarProductos() {
  try {
    listaAPI = await conexionAPI.listarProductos();
    console.log("Productos listados:", listaAPI);
    mostrarProductos(listaAPI);
  } catch (error) {
    console.error("Error al listar productos:", error);
    productosContainer.innerHTML = `<h1 class="productCard__error">Ha ocurrido un problema con la conexión</h1>`;
  }
}

function mostrarProductos(listaAPI) {
  productosContainer.innerHTML = "";
  listaAPI.forEach(({ nombre, valorUnitario, imagen, id_producto }) => {
    productosContainer.appendChild(
      crearCard(nombre, valorUnitario, imagen, id_producto)
    );
  });
}

filtersTop.addEventListener("click", (e) => {
  const categoria = e.target.dataset.categoria;
  console.log("Categoría seleccionada:", categoria);

  if (categoria) {
    const productosFiltrados = listaAPI.filter(
      (producto) => producto.categoria === categoria
    );
    mostrarProductos(productosFiltrados);
    return;
  }
});

// Filtrar por categoría en filterBar
filterBarCategories.addEventListener("click", (e) => {
  const categoria = e.target.dataset.categoria;
  console.log("Categoría seleccionada (filterBar):", categoria);

  if (categoria) {
    const productosFiltrados = listaAPI.filter(
      (producto) => producto.categoria === categoria
    );
    mostrarProductos(productosFiltrados);
    return;
  }
});

// Filtrar u ordenar en filterBar
filterBarOrder.addEventListener("click", (e) => {
  const sortBy = e.target.dataset.sort;
  const filterBy = e.target.dataset.filter;

  if (sortBy === "lowestPrice") {
    listaAPI.sort((a, b) => a.valorUnitario - b.valorUnitario);
  } else if (sortBy === "highestPrice") {
    listaAPI.sort((a, b) => b.valorUnitario - a.valorUnitario);
  }

  if (filterBy === "inStock") {
    const productosEnStock = listaAPI.filter((producto) => producto.stock > 0);
    mostrarProductos(productosEnStock);
  } else {
    mostrarProductos(listaAPI);
  }
});

todoBtn.addEventListener("click", () => {
  mostrarProductos(listaAPI);
  console.log("Todos los productos:", listaAPI);
});

listarProductos();
