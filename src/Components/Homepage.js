import React from 'react'
import "nes.css/css/nes.min.css";

export default function Homepage() {
    const axios = require('axios');
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(function (response) {
    // handle success
    console.log("RESPOMSEEEE:::",response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    return (
       
      <div class="nes-container with-title is-centered" style={{marginTop:50}}>
        <p class="title">POKEDEX</p>
        
        <button type="button" class="nes-btn is-primary" style={{marginRight:20,width:100}}>Previous</button>
        <button type="button" class="nes-btn is-primary" style={{marginRight:20,width:100}}>Next</button>
      </div>
    )
}
