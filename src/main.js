
/* Manejo del DOM */
const data = POKEMON.pokemon;
const root = document.getElementById('root');

 const printPokemons = (pokemons) =>{
  let template="";  // Variable donde se almacenan los pokemones 
  for(let i=0;i<pokemons.length;i++){
    template += `
     <div class="pokemoncitos" >
     <div > <img src="${pokemons[i].img} " alt="${pokemons[i].name} "></img>
      </div>
      <div class="color">  
       Nombre:${pokemons[i].name} </br>
     Tipo: ${pokemons[i].type} </br> 
     Altura: ${pokemons[i].height} </br>  
     Peso: ${pokemons[i].weight} </br>  
   </div> </div>
   `}

  return template;
}

// LLamamos la funcion que trabajara con la data
root.innerHTML=printPokemons(data);
