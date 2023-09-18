export const itemSong = document.getElementById('contenPrin') =>{
    const div = document.createElement('div');
    
    div.classList.add('song')
    div.innerHTML =`
        <img src="${song.path.front}">
        <div class="data-song">
          <div class="text-song"
            <h4 class="titul">${song.title}</h4>
            <a calss="artist">${song.author}</a>
            <p class="duration">${song.duration}</p>
          </div>
          <div class="like-sect">
            <button class="like-btn">
              <img src="/like-icon-variant.svg" class="like-icon">
            </button>
          </div>
        </div>
    `;
}



    // Ejemplo IA
export const itemSongSect = await conexApi(track, event = ()=>{}) => {

    itemSongSect.forEach((track) => {
      const elementoPista = document.createElement('div');
      elementoPista.id = 'contenPriLis';
      elementoPista.classList.add('trakList');
      elementoPista.innerHTML = `
        <img src="${track.path.front}" id="imgTrak" class="imgTrack">
        <div class="data-song">
          <div class="text-song">
            <h4 class="titul">${track.title}</h4>
            <a href="" class="artist">${track.author}</a>
            <p class="duration">${track.duration}</p>
          </div>
          <div class="like-sect">
            <button class="like-btn">
              <img src="/like-icon-variant.svg" alt="" class="like-icon">
            </button>
          </div>
        </div>
      `;

      document.getElementById('contenPriLis').appendChild(elementoPista);
    });
    return div
  };

