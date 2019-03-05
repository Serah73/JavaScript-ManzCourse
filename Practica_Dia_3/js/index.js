var songs = ['https://scummbar.com/mi2/MI1-CD/02%20-%20Chapter%20Screen.mp3',
             'https://scummbar.com/mi2/MI2-CD5/MI2_13-Casino.mp3',
             'https://scummbar.com/mi2/MI1-SE/01%20-%20The%20Gold%20Guy.mp3',
             'https://scummbar.com/mi2/MI1-CD2/Addressing%20%20the%20crew%20(Amiga).mp3',
             'https://scummbar.com/mi2/MI2-CD1/01%20-%20Opening%20Themes%20&%20Introduction.mp3']; //URL de las canciones
var currentSong = 0; //Cancion actual

var audio = document.getElementById('song');
var lcd = document.getElementById('lcd'); //enunciado cancion textContent o innerHTML
audio.src = songs[0]; // Hay que inicializar la cancion si o si.replace(/%20/g, ' ')

function reproducir(){
  audio.play(currentSong);
}

function pausar() {
  audio.pause();
}
function siguiente() { 
  if ( currentSong == ( songs.length - 1 ))
  {
    audio.src = songs[0];
    audio.play();
    currentSong = 0;
  }
  else{
    audio.src = songs[++currentSong];
    audio.play();
  }
}
function mostrar() { 
  var aux = songs[currentSong];
  var texto = aux.substring(aux.lastIndexOf('/') + 1 );
  lcd.textContent = texto.replace(/%20/g, ' '); 
}

//LastIndexOf('/')