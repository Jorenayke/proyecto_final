import '/src/styles/body.css'
import '/src/styles/main.css'
import '/src/styles/navbar.css'
import '/src/styles/reprod.css'
import '/src/styles/opti-caja.css'
import '/src/styles/conten.css'



// var reproductor = document.getElementById('reproductor');
// var playPauseBtn = document.getElementById('playPause');
// var anteriorBtn = document.getElementById('anterior');
// var siguienteBtn = document.getElementById('siguiente');
// var repeatBtn = document.getElementById('repeat');
// var aleatorioBtn = document.getElementById('aleatorio');
// var barraReproduccion = document.getElementById('barraReproduccion');
// var tiempoActual = document.getElementById('tiempoActual');
// var tiempoTotal = document.getElementById('tiempoTotal');
// var mostrarListaBtn = document.getElementById('mostrarLista');
// var listaReproduccion = document.getElementById('listaReproduccion');
// var volumenControl = document.getElementById('volumen');

// playPauseBtn.addEventListener('click', function() {
//   if (reproductor.paused) {
//     reproductor.play();
//     playPauseBtn.textContent = 'Pausa';
//   } else {
//     reproductor.pause();
//     playPauseBtn.textContent = 'Play';
//   }
// });

// anteriorBtn.addEventListener('click', function() {
//   // Lógica para reproducir la canción anterior
// });

// siguienteBtn.addEventListener('click', function() {
//   // Lógica para reproducir la siguiente canción
// });

// repeatBtn.addEventListener('click', function() {
//   // Lógica para activar/desactivar la repetición
// });

// aleatorioBtn.addEventListener('click', function() {
//   // Lógica para activar/desactivar la reproducción aleatoria
// });

// reproductor.addEventListener('timeupdate', function() {
//   var tiempoActualMinutos = Math.floor(reproductor.currentTime / 60);
//   var tiempoActualSegundos = Math.floor(reproductor.currentTime % 60);
//   tiempoActual.textContent = tiempoActualMinutos + ':' + (tiempoActualSegundos < 10 ? '0' : '') + tiempoActualSegundos;

//   var tiempoTotalMinutos = Math.floor(reproductor.duration / 60);
//   var tiempoTotalSegundos = Math.floor(reproductor.duration % 60);
//   tiempoTotal.textContent = tiempoTotalMinutos + ':' + (tiempoTotalSegundos < 10 ? '0' : '') + tiempoTotalSegundos;

//   var porcentajeBarra = (reproductor.currentTime / reproductor.duration) * 100;
//   barraReproduccion.value = porcentajeBarra;
// });

// barraReproduccion.addEventListener('input', function() {
//   var tiempoSeleccionado = (barraReproduccion.value / 100) * reproductor.duration;
//   reproductor.currentTime = tiempoSeleccionado;
// });

// mostrarListaBtn.addEventListener('click', function() {
//   if (listaReproduccion.style.display === 'none') {
//     listaReproduccion.style.display = 'block';
//   } else {
//     listaReproduccion.style.display = 'none';
//   }
// });

// volumenControl.addEventListener('input', function() {
//   reproductor.volume = volumenControl.value;
// });