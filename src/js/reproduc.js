// import { currentSongReprod } from "./mainData";

// Obtenemos los elementos del DOM
const playButton = document.getElementById('playPause');
const backButton = document.getElementById('back');
const nextButton = document.getElementById('next');
const progressBar = document.getElementById('progressBar');
const timeCurrent = document.getElementById('tiempoActual');
const timeTotal = document.getElementById('tiempoTotal');
const muteButton = document.getElementById('muteButton');
const volumeBar = document.getElementById('volumen');
const contenPrin = document.getElementById('contenPrin');

// Función para cambiar la imagen del botón de reproducción
function changePlayButtonImage() {
  if (playButton.src.includes("/pla-pau.svg")) {
    playButton.src = "/pla-pau-variant.svg";
  } 
  else {
    playButton.src = "/pla-pau.svg";
  }
}

// Función para pausar o reanudar la reproducción
function playOrPause() {
    if (playButton.src.includes("play.svg")) {
        playButton.src = "carpeta/imagen.svg";
        document.getElementById("#audio").pause();
    } 
    else {
        playButton.src = "play.svg";
        document.getElementById("#audio").play();
    }
}

// Función para retroceder a la pista anterior
function goBack() {
    if (document.getElementById("#audio").currentTime > 5) {
        document.getElementById("#audio").currentTime = 0;
    }
    else {
        document.getElementById("#audio").previousTrack();
    }
}

// Función para ir a la pista siguiente
function goNext() {
    document.getElementById("#audio").nextTrack();
}

// Función para actualizar la barra de reproducción
function updateProgressBar() {
    progressBar.style.width = (document.getElementById("#audio").currentTime / document.getElementById("#audio").duration) * 100 + "%";
}

// Función para actualizar el tiempo actual
function updateTimeCurrent() {
    timeCurrent.textContent = document.getElementById("#audio").currentTime.toFixed(2);
}

// Función para actualizar el tiempo restante
function updateTimeTotal() {
    timeTotal.textContent = document.getElementById("#audio").duration.toFixed(2);
}

// Función para silenciar la pista
function mute() {
    document.getElementById("#audio").muted = true;
    muteButton.src = "carpeta/imagen.svg";
}

// Función para activar el sonido
function unmute() {
    document.getElementById("#audio").muted = false;
    muteButton.src = "mute.svg";
}

// Eventos
playButton.addEventListener("click", playOrPause);
backButton.addEventListener("click", goBack);
nextButton.addEventListener("click", goNext);
progressBar.addEventListener("mousemove", updateProgressBar);
document.getElementById("#audio").addEventListener("timeupdate", updateTimeCurrent);
document.getElementById("#audio").addEventListener("loadedmetadata", updateTimeTotal);
muteButton.addEventListener("click", mute);
volumeBar.addEventListener("input", unmute);

// Inicializamos la reproducción
document.getElementById("#audio").play();
