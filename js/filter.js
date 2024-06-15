function toggleFilterBar() {
  let filterBar = document.querySelector(".filterBar");
  if (filterBar.style.display === "flex") {
    filterBar.style.display = "none";
  } else {
    filterBar.style.display = "flex";
  }
}

// const prev = document.querySelector('.topFilter__prev')
// const next = document.querySelector('.topFilter__next')
// const topFilter__paragraph = document.querySelector('.topFilter__paragraph')

// prev.addEventListener('click', () => {
//   topFilter__paragraph.scrollLeft
// })

// ____________________________________________---
// const figure = document.querySelector('.topFilter__figure');
// const optionsContainer = document.querySelector('.topFilter__paragraph');

// figure.addEventListener('click', (event) => {
//   const scrollStep = 200; // Valor de desplazamiento horizontal
//   if (event.clientX < figure.getBoundingClientRect().left) {
//     // Click a la izquierda de topFilter__figure
//     optionsContainer.scrollLeft -= scrollStep;
//   } else {
//     // Click a la derecha de topFilter__figure
//     optionsContainer.scrollLeft += scrollStep;
//   }
// });