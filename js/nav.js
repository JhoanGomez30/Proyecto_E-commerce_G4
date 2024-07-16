const nav = document.querySelector(".nav__links");
const botonAbrir = document.querySelector("#nav__open");
const botonAbrirMenu = document.querySelector(".header__menu--container");
const botonCerrar = document.querySelector("#nav__close");
const iconoUser = document.querySelector("#user");

botonAbrirMenu.addEventListener("click", () => {
  nav.classList.add("nav__links--mostrar");
});

botonCerrar.addEventListener("click", () => {
  nav.classList.remove("nav__links--mostrar");

  nav.classList.add("nav__links--close");

  setTimeout(() => {
    nav.classList.remove("nav__links--close");
  }, 500);
});

document.addEventListener("click", function (event) {
  // Si el clic no ocurrió dentro del menú o del botón para abrir el menú, cerrar el menú
  if (!nav.contains(event.target) && event.target !== botonAbrir) {
    nav.classList.remove("nav__links--mostrar");
  }
});

// iconoUser.addEventListener("click", ()=>{

//     window.location.href="registrarse.html";
// })

// Cambio de ícono si el usuario está autenticado o no
function isAuthenticated() {
  return !!localStorage.getItem("loggedInUser");
}

document.addEventListener("DOMContentLoaded", () => {
  const userIcon = document.querySelector(".header__userIcon");

  if (isAuthenticated()) {
    userIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" style="fill: #004884;"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>`;
  } else {
    userIcon.innerHTML = `
            <svg id="user" class="header__userIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #004884;">
                <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
            </svg>`;
  }

  if (userIcon) {
    userIcon.addEventListener("click", () => {
      if (isAuthenticated()) {
        // console.log("Cerrando sesión...");
        localStorage.removeItem("loggedInUser");
        // Actualiza el ícono y redirige
        userIcon.innerHTML = `
                    <svg id="user" class="header__userIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #004884;">
                        <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
                    </svg>`;
        Swal.fire({
          title: "Sesión cerrada",
          text: "Has cerrado sesión exitosamente.",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "productos.html";
            // Redirige a la página productos
          }
        });
      } else {
        // Redirige al registro
        window.location.href = "registrarse.html";
      }
    });
  }
});
