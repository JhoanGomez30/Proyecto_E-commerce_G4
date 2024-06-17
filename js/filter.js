// function toggleFilterBar() {
//   let filterBar = document.querySelector(".filterBar");
//   if (filterBar.style.display === "flex") {
//     filterBar.style.display = "none";
//   } else {
//     filterBar.style.display = "flex";
//   }
// }

function toggleFilterBar() {
  let filterBar = document.querySelector(".filterBar");
 filterBar.classList.toggle("filterBar--active")
}

document.addEventListener("DOMContentLoaded", function() {
  const leftScrollButton = document.querySelector('.left-scroll');
  const rightScrollButton = document.querySelector('.right-scroll');
  const topFilterContent = document.querySelector('.topFilter__content');

  leftScrollButton.addEventListener("click", function() {
    topFilterContent.scrollBy({
      left: -150,
      behavior: "smooth"
    })
  })
  
  rightScrollButton.addEventListener("click", function() {
    topFilterContent.scrollBy({
      left: 150, // Ajusta el valor según sea necesario para el desplazamiento
      behavior: "smooth" // Desplazamiento suave
    });
  })
})