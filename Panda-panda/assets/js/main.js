var img = document.getElementsByClassName('imagen');
var cerrar = document.getElementsByClassName("cerrar");

for(i = 0; i<img.length; i++){
  img[i].addEventListener("click", eliminar);
}

function eliminar(){
  this.style.display = "none";
}
