// Verificar si el usuario está autenticado
function isAuthenticated() {
  return !!localStorage.getItem("loggedInUser");
}

// Función para manejar la apertura del carrito
function handleCartOpen() {
  if (!isAuthenticated()) {
    return Swal.fire({
      title: "No autenticado",
      text: "Debe registrarse para realizar una compra.",
      icon: "warning",
      confirmButtonText: "Registrarse",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "registrarse.html";
      }
    });
  } else {
    window.location.href = "detalleCarrito.html";
  }
}

// Cambiar cantidad de artículos ingresado por el usuario
const minusBtn = document.querySelector(".input__minus");
const plusBtn = document.querySelector(".input__plus");
const countInput = document.querySelector(".input__number");

let countInputNumber = 0;

plusBtn.addEventListener("click", () => {
  countInputNumber++;
  countInput.value = countInputNumber;
});

minusBtn.addEventListener("click", () => {
  if (countInputNumber <= 0) {
    return;
  }
  countInputNumber--;
  countInput.value = countInputNumber;
});

// Agregar el total de productos al carrito de compras cuando se presiona el botón ver compra
const addCartBtn = document.querySelector(".details__button");
let cartNotification = document.querySelector(".header__cart--notification");
let lastValue = parseInt(cartNotification.innerText) || 0;

addCartBtn.addEventListener("click", () => {
  if (!isAuthenticated()) {
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

  lastValue = lastValue + countInputNumber;
  cartNotification.innerText = lastValue;
  cartNotification.style.display = "block";
  drawProductInModal();
  window.location.href = "detalleCarrito.html";
});

// Mostrar el modal con el detalle del carrito

const cartIconBtn = document.querySelector(".header__cart--container");
const cartModal = document.querySelector(".cartModal");
// let priceModal = document.querySelector(".cartModal__price");
const productContainerCart = document.querySelector(".cartModal__checkout");

cartIconBtn.addEventListener("click", () => {
  handleCartOpen();
});

// Borrar el contenido del carrito
function deleteProduct() {
  const deleteCartProductBtn = document.querySelector(".cartModal__iconDelete");

  deleteCartProductBtn.addEventListener("click", () => {
    lastValue = 0;
    cartNotification.innerHTML = lastValue;
    productContainerCart.innerHTML =
      '<p class="cartModal__empty">Tu carrito está vacío</p>';
  });
}

// Función para dibujar el producto en el modal

function drawProductInModal() {
  productContainerCart.innerHTML = `
    <div class="cartModal__details">
        <img class="cartModal__img" src="../assets/img/thumbnail1-model.webp" alt="thumbnail">
        <div class="cartModal__productContainer">
            <p class="cartModal__productName">Autum Limited Edition...</p>
            <p class="cartModal__price">$125.00 x${lastValue} <span class="cartModal__priceTotal">$${
    lastValue * 125
  }.00</span></p>
        </div>
        <img src="../assets/iconos/icon-delete.svg" alt="delete" class="cartModal__iconDelete">
    </div>
    <button class="cartModal__button">Ver compra</button>
    `;
  deleteProduct();
  let priceModal = document.querySelector(".cartModal__price");
  priceModal.innerHTML = `$125.00 x${lastValue} <span class="cartModal__priceTotal">$${
    lastValue * 125
  }.00</span>`;
}

//Cambiar imagenes cuando se presione botones flecha
const imageModal = document.querySelector(".modalGallery__background");
const modalImageContainer = document.querySelector(
  ".modalGallery__imgContainer"
);

const imageContainer = document.querySelector(".gallery__imgContainer");
const previousGalleryBtn = document.querySelector(".gallery__previous");
const nextGalleryBtn = document.querySelector(".gallery__next");
let imgIndex = 1;
const imageUrls = [
  "../assets/img/thumbnail1-model.webp",
  "../assets/img/thumbnail2-model.webp",
  "../assets/img/thumbnail3-model.webp",
  "../assets/img/thumbnail4-model.webp",
  "../assets/img/thumbnail5-model.webp",
];

nextGalleryBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  imageModal.classList.remove("showModal");
  console.log("click, pasar a la sgt imagen");

  changeNextImage(imageContainer);
});

previousGalleryBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  imageModal.classList.remove("showModal");
  console.log("click");

  changePreviousImage(imageContainer);
});

//Mostrar el modal de imagenes cuando hago click en la imagen principal
imageContainer.addEventListener("click", () => {
  // imageModal.style.display="block";

  imageModal.classList.add("showModal");
  console.log("click, mostrando modal");
});

//CERRAR EL MODAL AL DARLE CLICK AL ICONO CLOSE
const iconClose = document.querySelector(".modalGallery__iconClose");
iconClose.addEventListener("click", () => {
  imageModal.classList.remove("showModal");
  console.log("click");
});

//CAMBIAR LAS IMAGENES PRINCIPALES DESDE LOS THUMBNAILS
let thumbnails = document.querySelectorAll(".gallery__thumbnail");

thumbnails = [...thumbnails];

thumbnails.forEach((thumbnail) =>
  thumbnail.addEventListener("click", (e) => {
    imageContainer.style.backgroundImage = `url(${e.target.src})`;
  })
);

//CAMBIAR LAS IMAGENES PRINCIPALES DES LOS THUMBNAILS EN EL MODAL

let modalThumbnails = document.querySelectorAll(".modalGallery__thumbnail");

modalThumbnails = [...modalThumbnails];
modalThumbnails.forEach((thumbnail) =>
  thumbnail.addEventListener("click", (e) => {
    modalImageContainer.style.backgroundImage = `url(${e.target.src})`;
    // modalImageContainer.style.backgroundImage= `url(../assets/img/thumbnail${e.target.id.slice(-1)}-model.webp)`;
  })
);

//CAMBIAR IMAGEN PRINCIPAL DE MODAL CON LAS FLECHAS EN EL MODAL

const modalPreviousBtn = document.querySelector(".modalGallery__previous");
const modalNextBtn = document.querySelector(".modalGallery__next");
modalNextBtn.addEventListener("click", (e) => {
  changeNextImage(modalImageContainer);
});

modalPreviousBtn.addEventListener("click", (e) => {
  changePreviousImage(modalImageContainer);
});

//FUNCIONES

function drawProductInModal() {
  productContainerCart.innerHTML = `
    <div class="cartModal__details">
      <img class="cartModal__img" src="../assets/img/thumbnail1-model.webp" alt="thumbnail">
      <div class="cartModal__productContainer">
        <p class="cartModal__productName">Autum Limited Edition...</p>
        <p class="cartModal__price">$125.00 x3 <span class="cartModal__priceTotal">$375.00</span></p>
      </div>
      <img src="../assets/iconos/icon-delete.svg" alt="delete" class="cartModal__iconDelete">
    </div>
    <button class="cartModal__button">Ver compra</button>
`;
  deleteProduct();
  let priceModal = document.querySelector(".cartModal__price");

  priceModal.innerHTML = `$125.00 x${lastValue} <span class="cartModal__priceTotal">$${
    lastValue * 125
  }.00</span>`;
}

function changeNextImage(imgContainer) {
  // if(imgIndex===5){
  //     imgIndex=1;
  // }else{
  // imgIndex++;

  // }

  // imgContainer.style.backgroundImage= `url("../assets/img/thumbnail${imgIndex}-model.webp")`

  if (imgIndex === 5) {
    imgIndex = 1;
  } else {
    imgIndex++;
  }
  imgContainer.style.backgroundImage = `url("../assets/img/thumbnail${imgIndex}-model.webp")`;
}

function changePreviousImage(imgContainer) {
  if (imgIndex === 1) {
    imgIndex = 5;
  } else {
    imgIndex--;
  }

  imgContainer.style.backgroundImage = `url("../assets/img/thumbnail${imgIndex}-model.webp")`;
  // Antes de inicializar lastValue
  console.log("Contenido de cartNotification:", cartNotification.innerText);

  // Inicialización de lastValue
  let lastValue = parseInt(cartNotification.innerText) || 0;
  console.log("Valor inicial de lastValue:", lastValue);
}
