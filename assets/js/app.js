var boxWork=document.getElementsByClassName("imgProducto");
//console.log(boxWork);

for (var i=0;i<boxWork.length;i++){
  boxWork[i].addEventListener("click",function(){abrir(this)});

}
//console.log(boxWork);
function abrir(imagenProducto){
  // alert("hola");
    //console.log(imagenProducto.src);
    var elemento=imagenProducto.src;
    //console.log(elemento);
    var imagen=crearModalImagen(elemento);
    console.log(imagen);
    mostrarModal(imagen);
}

function crearModalImagen(imgsrc){
  var fondo=document.createElement("div");
  var modal=document.createElement("div");
  var imagen=document.createElement("img");
  imagen.src=imgsrc;
  imagen.style.width="90%";

  fondo.appendChild(modal);
  modal.appendChild(imagen);
  fondo.className="imageProduct";
  modal.className="modal";

  var cerrar=document.createElement("div");
  var x=document.createTextNode("X");
  cerrar.appendChild(x);
  cerrar.className="cerrar";
  cerrar.addEventListener("click",function(){
  fondo.style.visibility="hidden";
  });
  modal.appendChild(cerrar);
  document.body.appendChild(fondo);
  return fondo;
}

function mostrarModal(obj){
  obj.style.visibility="visible";
}
