
/* Manejo del DOM */
const data = POKEMON.pokemon;
const root = document.getElementById('root');

 const printPokemons = (pokemons) =>{
  let template=" ";
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
    
      Huevos: ${pokemons[i].egg} </br>  
   </div> </div>
   `}
  return template;
}

// console.log(printPokemons(data))
root.innerHTML=printPokemons(data);
