

var burger = document.getElementById('show_nav');
var element = document.getElementById("navbar_buttons");


burger.addEventListener('click', function(){
  element.classList.toggle("showMenu");
});



window.onscroll = function (e) {
element.classList.remove("showMenu");
}
