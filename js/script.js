var swiper = new Swiper(".slide-content", { slidesPerView: 3, spaceBetween: 15, loop: !0, centerSlide: "true", fade: "true", grabCursor: "true", pagination: { el: ".swiper-pagination", clickable: !0, dynamincBullets: !0 }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
 breakpoints: { 0: { slidesPerView: 1 }, 408: { slidesPerView: 1 }, 
 520: { slidesPerView: 0 }, 950: { slidesPerView: 3 },
  768: { slidesPerView: 3 } } });