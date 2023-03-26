// 썸네일 슬라이더
var sliderThumbnail = new Swiper(".slider-thumbnail", {
    slidesPerView: 1,
    spaceBetween: 4,
    watchSlidesProgress: true,
    loop: true,
    direction: "vertical"
  
  });
  
  //메인 슬라이더
  var slider = new Swiper(".slider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    thumbs: {
      swiper: sliderThumbnail
    },
    effect: "fade"
  });
  