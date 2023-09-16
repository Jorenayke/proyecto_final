import '/src/styles/body.css';
import '/src/styles/conten.css';
import '/src/styles/fonts.css';
import '/src/styles/main.css';
import '/src/styles/navbar.css';
import '/src/styles/opti-caja.css';
import '/src/styles/reprod.css';
import '/src/styles/animaciones.css';

import { conexApi } from './conex-api.js';

conexApi((res) => {
    removeAllChild(contenPrin)
    res.forEach(element => {
        contenPrin.appendChild(
        itemSongComponent(
          element, 
          data => {
            storage.setItem(data)
            setCurrentSong(currentSongComponent(data))
          }
      ))
    });
  })

const currentSong = document.getElementById('pistaActual');
const setCurrentSong = (child) => {
removeAllChild(currentSong)
currentSong.appendChild(child)
}

addClickListener(responsiveMenu, () => {
    header.classList.toggle('visible')
  })
  
  
  if (storage.getItem()) {
    const data = storage.getItem()
    setCurrentSong(currentSongComponent(data))
  }