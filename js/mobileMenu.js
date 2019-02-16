

var burger = document.getElementById('show_nav');
burger.onclick = function(){
showNav();
}




function showNav() {
var element = document.getElementById("navbar_buttons");
element.classList.toggle("showMenu");
}
