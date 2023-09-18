export const conexApi = (callback) => {
  fetch ('https://leonardoapi.onrender.com/music')
    .then(response => response.json())
    .then(response => callback(response));
}