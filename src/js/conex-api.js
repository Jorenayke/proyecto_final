export const conexApi = (callback) => {
  fetch ('https://leonardoapi.onrender.com/music')
    .then(res => res.json())
    .then(res => callback(res));
}