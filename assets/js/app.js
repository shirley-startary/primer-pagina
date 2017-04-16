var boxWork=document.getElementsByClassName("box-work");
console.log(boxWork);


for (var i=0;i<boxWork.length;i++){
  boxWork[i]=addEventListener("click",abrir);
}

function abrir(){
  // alert("hola");
}
