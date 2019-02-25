var dado = document.getElementById('dado');
var aux = document.getElementById('aux');

function lanzar(){
  var numero = ( Math.floor(Math.random() * 6) ) + 1;
  dado.innerHTML = numero;
}