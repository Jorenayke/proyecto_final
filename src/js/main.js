import '/src/styles/body.css'; import '/src/styles/conten.css'; import '/src/styles/fonts.css'; import '/src/styles/main.css'; import '/src/styles/navbar.css'; import '/src/styles/opti-caja.css'; import '/src/styles/reprod.css'; import '/src/styles/animaciones.css';

import { conexApi } from './conex-api.js'; import { itemSongBox, currentSongReprod } from './mainData.js'; import { removeAllChild, useLocalstorage } from './local.js' 

const header = document.getElementById('up-main'); const trackBox = document.getElementById('contenPrin'); const currentSong = document.getElementById('controlReprod')

const storage = useLocalstorage('currentSong')

conexApi((res) =>{
  removeAllChild(trackBox)
  res.forEach(element => {
    trackBox.appendChild(
      itemSongBox(
        element,
        data => {
          storage.setItem(data)
          setCurrentSong(currentSongReprod(data))
        }
    ))
  });
})

const setCurrentSong = (child) => {
  removeAllChild(currentSong)
  currentSong.appendChild(child)
}

if (storage.getItem()) {
  const data = storage.getItem()
  setCurrentSong(currentSongReprod(song))
}

var searchBox = document.getElementById ('searchBox')
  searchBox.style.fontSize = '14px';
  searchBox.style.fontWeight = 600;

var audioControl = document.getElementById('reproductor') 
  audioControl.style.width = '500px';