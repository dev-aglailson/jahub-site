$(document).ready(function(){
  /* Sliders com Owl */
  $(".slider-exemplos-template").owlCarousel({
      items:1,
      loop:true,
      dots:true,
      margin:0,
      autoplay:true,
      autoplayTimeout:6000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items: 1
          }
      }
  });

  /* Sliders com swiper */
  const swiper = new Swiper('.swiper-slider-templates', {
      loop:true,
      effect:'slide',
      autoplay: {
          delay: 300,
          disableOnInteraction:false,
          pauseOnMouseEnter:true,
          waitForTransition:true,
          enabled:false,
      },
      speed:3000,

      freeMode:{
          momentum:true,
      },

      breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          // when window width is >= 480px
          680: {
            slidesPerView: 3,
            spaceBetween: 30
          },
      },

      // Optional parameters
      direction: 'horizontal',
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        enabled:false,
        
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        enabled:false,
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
        enabled:true,
      },
  });


 const swiperTimelinePassos = new Swiper('.swiper-timeline-passos', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    
  });








})