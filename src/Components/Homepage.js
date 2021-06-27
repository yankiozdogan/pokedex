import React,{useState, useEffect} from 'react'
import "nes.css/css/nes.min.css";

export default function Homepage() {
  const [count, setCount] = useState(0); // count statein adı, setCount count stateinin değerini değiştiren fonksiyon, 0 statein ilk değeri
  const [pokeName, setPokeName] = useState("");  // statein ilk değeri boş bir obje 
  const [pokePic, setpokePic] = useState("");
  const [poke, setPoke] = useState({name:"", url:""});

  function dataDoldurma(){
    const axios = require('axios');
    axios.get(`https://pokeapi.co/api/v2/pokemon/${count+1}`)  //get isteği 
  .then(function (response) {
    // handle success
    console.log("RESPOMSEEEE:::",response.data);
    setPokeName(response.data.name)
    setpokePic(response.data.sprites.front_default);
    setPoke({name:response.data.name, url:response.data.sprites.front_default})
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });  
  }
 /*sayfa ilk yüklendiğinde dataDoldurma() fonksiyonu çalışıyor. 
 [] içine yazılanın değeri her değişdiğinde useEffect tetiklenir, 
 boş [] iken sadece sayfa ilk yüklendiğinde çalışır */

  useEffect(() => { 
  dataDoldurma();   
 }, [ count ])


 function azalt(){
  setCount(count-1)
  if(count<1){
   setCount(150);
  }
  if(count>149){
    setCount(count-1);
   }
}

function arttir(){
  setCount(count+1)
  
  if(count>149){
    setCount(0);
   }
}
    return (
       
      <div className="nes-container with-title is-centered" style={{marginTop:50,marginLeft:750,marginRight:750}}>
        <p className="title">POKEDEX</p>
        <p>{count+1}</p>

        <p>{pokeName}</p>
        
        <p>
          <img 
        src={pokePic}
        alt={pokeName}
          />
      </p>
        {/* <p>{poke.name}</p>
        
        <p><img 
      src={poke.url}
      alt={poke.name}
      /></p> */}
        <button type="button" className="nes-btn is-primary" style={{marginRight:20,width:100}} onClick={()=>azalt()}>Previous</button>
        <button type="button" className="nes-btn is-primary" style={{marginRight:20,width:100}} onClick={()=>arttir()}>Next</button>
      </div>
    )
}
