var img = document.getElementsByClassName('imagen');

for(i = 0; i<img.length; i++){
  img[i].addEventListener("click", eliminar);
}

function eliminar(){
  this.style.display = "none";
}
