function toggleFilterBar() {
  let filterBar = document.querySelector(".filterBar");
 filterBar.classList.toggle("filterBar--active")
}

// document.addEventListener("DOMContentLoaded", function() {
//   const leftScrollButton = document.querySelector('.left-scroll');
//   const rightScrollButton = document.querySelector('.right-scroll');
//   const topFilterContent = document.querySelector('.topFilter__content');

//   leftScrollButton.addEventListener("click", function() {
//     topFilterContent.scrollBy({
//       left: -150,
//       behavior: "smooth"
//     })
//   })
  
//   rightScrollButton.addEventListener("click", function() {
//     topFilterContent.scrollBy({
//       left: 150,
//       behavior: "smooth"
//     });
//   })
// })

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.topFilter__content');
  const leftScrollBtn = document.querySelector('.left-scroll');
  const rightScrollBtn = document.querySelector('.right-scroll');

  function scrollLeft() {
    if (container.scrollLeft === 0) {
      container.scrollLeft = container.scrollWidth - container.clientWidth;
    } else {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  function scrollRight() {
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollLeft = 0;
    } else {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  leftScrollBtn.addEventListener('click', scrollLeft);
  rightScrollBtn.addEventListener('click', scrollRight);
});
