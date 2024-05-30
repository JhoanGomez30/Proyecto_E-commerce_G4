const nav = document.querySelector('.nav__links');
const botonAbrir = document.querySelector('#nav__open');
const botonAbrirMenu = document.querySelector('.header__menu--container')
const botonCerrar = document.querySelector('#nav__close');
const path = document.getElementById('nav__open--path');

botonAbrirMenu.addEventListener("click", ()=>{
    nav.classList.add('nav__links--mostrar');
    console.log(botonAbrir);
    console.log(nav);
});

// path.addEventListener("click", ()=>{
//     nav.classList.add('nav__links--mostrar');
    
//     nav.style.opacity="1";
//     nav.style.visibility= "visible";
//     console.log(path);
//     console.log(nav);
// })

botonCerrar.addEventListener("click", ()=>{
    nav.classList.remove("nav__links--mostrar");
    // nav.style.opacity="0";
    // nav.style.visibility= "hidden";
})

document.addEventListener("click", function(event) {
    // Si el clic no ocurrió dentro del menú o del botón para abrir el menú, cerrar el menú
    if (!nav.contains(event.target) && event.target !== botonAbrir) {
        nav.classList.remove("nav__links--mostrar");
    }
})


