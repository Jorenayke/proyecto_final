function conexApi(){
    fetch ('https://leonardoapi.onrender.com/music')
      .then(response => response.json())
      .then(json => console.log(json))
  }
  
  export {conexApi};