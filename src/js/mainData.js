export const itemSongSect = (song, event = ()=>{}) => {
    const div = document.createElement('div');
    div.addEventListener('click', () => {
      event(song)
    })
    div.classList.add('song')
    div.innerHTML = `
        <img src="${song.path.front}">
        <div class="description">
          <h4>${song.title}</h4>
          <p>${song.author}</p>
        </div>
        <p class="duration">${song.duration}</p>
    `;
    return div
  }
  
  export const currentSongSect = (song) => {
    const div = document.createElement('div');
    div.classList.add('song')
    div.innerHTML = `
        <img src="${song.path.front}">
        <div class="description">
          <h4>${song.title}</h4>
          <p>${song.author}</p>
        </div>
        <audio src="${song.path.audio}" controls autoplay>
    `;
    return div
  }
