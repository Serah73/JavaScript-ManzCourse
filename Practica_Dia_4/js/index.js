var piano = document.getElementById('piano');
var teclas = ['c1','c1s','d1','d1s','e1','f1','f1s','g1','g1s','a1','a1s', 'b1', 'c2']
var urlStart = ['https://manzdev.github.io/piano-keys/']
var urlEnd = ['.mp3?']

var keys = {}

for(i = 0; i < teclas.length; i++){
  keys[teclas[i]] = new Audio(urlStart+teclas[i]+urlEnd);
}
console.log(c1);

// keys['c1'].play();
// keys.c1.play();

function nota ( notaF ) {
  keys[notaF].play();
}