//const buscador = document.getElementById("buscador")
//const lupa = document.getElementById("lupa")

//lupa.addEventListener("click",() => {
   // console.log( buscador.classList.toggle("header__input__show"));
//} )
//function mostrarBuscador (){
 //   buscador.classList.toggle("header__input__show")
//}

    let header__search = document.querySelector('.header__search');
    let header__closeIcon = document.querySelector('.header__closeIcon');
    let searchBox = document.querySelector('.searchBox');

        header__search.onclick = function(){
            searchBox.classList.add('active');
            header__closeIcon.classList.add('active');
            header__search.classList.add('active');

        }
        closeBtn.onclick = function(){
            searchBox.classList.remove('active');
            header__closeIcon.classList.remove('active');
            header__search.classList.remove('active');
        }