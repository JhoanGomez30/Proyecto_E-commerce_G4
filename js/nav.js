const nav = document.querySelector('#nav__selected');
const botonAbrir = document.querySelector('#nav__open');
const botonCerrar = document.querySelector('#nav__close');

botonAbrir.addEventListener("click",()=>{
    nav.classList.add('nav__links--mostrar');
} )

botonCerrar.addEventListener("click", ()=>{
    nav.classList.remove("nav__links--mostrar");
})

document.addEventListener("click", function(event) {
    // Si el clic no ocurrió dentro del menú o del botón para abrir el menú, cerrar el menú
    if (!nav.contains(event.target) && event.target !== botonAbrir) {
        nav.classList.remove("nav__links--mostrar");
    }
})