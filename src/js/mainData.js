export const itemSongBox = (song, event = ()=>{}) =>{
    const div = document.createElement('div');
    div.addEventListener('click', () => {
      event(song)
    })

    div.classList.add('trakList')
    div.innerHTML =`
        <img src="${song.path.front}" id="imgTrak" class="imgTrack">
        <div class="data-song">
          <div class="text-song">
            <a class="titul">${song.title}</a>
            <a class="artist">${song.author}</a>
            <p class="duration">${song.duration}</p>
          </div>
          <div class="like-sect">
            <button class="like-btn">
              <img src="/like-icon-variant.svg" class="like-icon">
            </button>
          </div>
        </div>
    `;
    return div
}

export const currentSongReprod = (song) => {
  const div = document.createElement('div');
  div.classList.add('song')
  
  div.classList.add('reprod-int')
  div.innerHTML = `
    <div class="music-in-prog">
      <img src="${song.path.front}" class="portada-misc">
      <div class="text-music">
        <div class="track" id="nameTrack">
          <a href="" class="name-mus">${song.title}</a>
        </div>
        <div class="author" id="nameAuthor">
            <a  href="" class="name-art">${song.author}</a>
        </div>
      </div>
    </div>
    <div class="reprod-control-view">
      <audio id="reproductor" src="${song.path.audio}" controls autoplay></audio>
    </div>
  `;
  return div
}
