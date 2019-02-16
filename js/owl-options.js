$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  autoplaySpeed: (true, 1000),
  responsive:{
    0:{
      items:1,
      nav:false
    },
    600:{
      items:2,
      nav:false
    },
    1000:{
      items:3,
      nav:false,
      loop:true
    }
  }
})
