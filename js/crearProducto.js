import { conexionAPI } from "./conexionAPI.js";



const formulario = document.querySelector("[data-formulario]");
const productoAgregado= document.querySelector(".section__addMessage");
async function crearProducto(evento){
    evento.preventDefault();
    const name= document.querySelector("[data-name]").value;
    const price= document.querySelector("[data-price]").value;
    const img= document.querySelector("[data-img]").value;
    const stock= document.querySelector("[data-stock]").value;
    const category= document.querySelector("[data-category]").value;
    const description= document.querySelector("[data-description]").value;
    console.log(name, price, img, stock, category, description);
    try{
        await conexionAPI.enviarProducto(name, price, img, stock, category, description);


        productoAgregado.classList.add("section__addMessage--active");
    }catch(e){
        alert(e);
    }


}

formulario.addEventListener("submit", evento=>crearProducto(evento))