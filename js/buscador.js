//const buscador = document.getElementById("buscador")
//const lupa = document.getElementById("lupa")

//lupa.addEventListener("click",() => {
   // console.log( buscador.classList.toggle("header__input__show"));
//} )
//function mostrarBuscador (){
 //   buscador.classList.toggle("header__input__show")
//}

    let header__search = document.querySelector('.header__search');
    let header__close = document.querySelector('.header__close');
    let searchBox = document.querySelector('.searchBox');

    header__search.onclick = function(){
        searchBox.classList.add('active');
        header__close.classList.add('active');
        header__search.classList.add('active');

    } 
    
    
    header__close.onclick = function(){
        searchBox.classList.remove('active');
        header__close.classList.remove('active');
        header__search.classList.remove('active');
    } 