      // Styles
import '/src/styles/body.css'; 
import '/src/styles/conten.css'; 
import '/src/styles/fonts.css'; 
import '/src/styles/main.css'; 
import '/src/styles/navbar.css'; 
import '/src/styles/opti-caja.css'; 
import '/src/styles/reprod.css'; 
import '/src/styles/animaciones.css';

import { conexApi } from './conex-api.js';
import { itemSong } from './mainData.js';

const contenPrin = document.getElementById('contenPrin')

conexApi((res) => {
    res.forEach(element => {
        contenPrin.appendChild(
      //   itemSongComponent(
      //     element, 
      //     data => {
      //       storage.setItem(data)
      //       setCurrentSong(currentSongSect(data))
      //     }
      // )
      itemSong(element)
      )

    });
  })

//   const setCurrentSong = (child) => {
//     removeAllChild(currentSongSect)
//     currentSongSect.appendChild(child)
//   }

//   var searchBox = document.getElementById ('searchBox')
//     searchBox.style.fontSize = '14px';
//     searchBox.style.fontWeight = 600;
//     searchBox.placeholder.opacity = '0.1';

//   const barraReprod =document.getElementById('barraReproduccion')
//     barraReprod.style.backgroundColor = '#e8e8e8d9';
//     barraReprod.style.outlineStyle = 'none';