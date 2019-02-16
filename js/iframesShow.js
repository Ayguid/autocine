


// asco
var discos = document.getElementsByClassName('tapa');
for (var i = 0; i < discos.length; i++) {
  discos[i].addEventListener('click', showIframe);
}

function showIframe(event) {
  if (event.path[1].id === 'disco1') {
    var disco1= document.getElementById('iframe1');
    disco1.classList.toggle("hidden");
    disco1.scrollIntoView({behavior: "smooth", block: "end", inline: "end"});
  }
  if (event.path[1].id === 'disco2') {
  var disco2 = document.getElementById('iframe2');
    disco2.classList.toggle("hidden");
    disco2.style.cssFloat = "right";
    disco2.scrollIntoView({behavior: "smooth", block: "end", inline: "end"});
  }
}
// termina el asco
