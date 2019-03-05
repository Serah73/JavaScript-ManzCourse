var teamA = document.querySelector('.teamA');
var teamB = document.querySelector('.teamB');
var golesA = document.querySelector('.golesA');
var golesB = document.querySelector('.golesB');

var equipos = ['A','B','C','D','E','F','G','H'];
var totalEquipos = equipos.length;

function resultado(){
  var A = Math.floor(Math.random() * 8);
  var B = Math.floor(Math.random() * 5);
  return Math.floor( A + B / 2 );
}

function seleccionTeam(){
  var e1 = equipos[Math.floor(Math.random() * totalEquipos)];
  var e2 = equipos[Math.floor(Math.random() * totalEquipos)];

  while ( e1 == e2 ){
    e2 = equipos[Math.floor(Math.random() * totalEquipos)];
  }
  teamA.textContent = e1;
  teamB.textContent = e2;
}

function runAll(){  
  seleccionTeam();
  golesA.textContent = resultado();
  golesB.textContent = resultado();
}