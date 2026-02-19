document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    }
  });
});


const wrapper = document.querySelector(".swiper-wrapper");
const button = document.querySelector(".show-more");
const text = button.querySelector(".text");

button.addEventListener("click", function () {
  wrapper.classList.toggle("collapsed");
  button.classList.toggle("active");

  if (wrapper.classList.contains("collapsed")) {
    text.textContent = "Показать все";
  } else {
    text.textContent = "Скрыть";
  }
});