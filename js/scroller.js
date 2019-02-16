
$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $("#nav").css({'background-color': 'rgba(36, 40, 50, 0.8)'});
      }
      if ($(this).scrollTop() < 50) {
         $("#nav").css({'background-color': 'rgba(145, 132, 134, 0.4)'});
      }

   });
});
