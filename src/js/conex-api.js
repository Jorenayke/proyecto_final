export const conexApi = (mediasong) => {
  fetch ('https://leonardoapi.onrender.com/music')
    .then(response => response.json())
    .then(response => mediasong(response));
}