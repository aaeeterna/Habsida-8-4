document.addEventListener("DOMContentLoaded", function () {
  let swiper = null;

  function handleSwiper() {
    const isMobile = window.innerWidth <= 767;
    if (isMobile && !swiper) {
  // Initialize
  swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
} else if (!isMobile && swiper) {
  // Destroy
  swiper.destroy(true, true);
  swiper = null;
}
}

  handleSwiper(); // run on load
  window.addEventListener("resize", handleSwiper);
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