
/* Manejo del DOM */
const pokemon = POKEMON.pokemon;
const root = document.getElementById('root');
for(let i=0;i<pokemon.length;i++){
 root.innerHTML += `
  <div class="column-4 pokemon-class">
  <div class="center"> <img src="${pokemon[i].img} " alt="${pokemon[i].name} "></img>
   </div>
   <div class="color">
   Nombre:${pokemon[i].name} </br>
  Tipo: ${pokemon[i].type} </br>
  Altura: ${pokemon[i].height} </br> 
  Peso: ${pokemon[i].weight} </br>
    Huevos: ${pokemon[i].egg} </br> 
 </div> </div>`}
