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
