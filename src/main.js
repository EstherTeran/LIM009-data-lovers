/* Manejo del DOM */
// const fulltype =data.pokemon.map(pokemon=>`${pokemon.name}`);
// console.log(fulltype)
// const todo = POKEMON.pokemon.map(pokemon => `Numero: ${pokemon.num} 
// Nombre: ${pokemon.name}  
// Tipo: ${pokemon.type} 
// Altura: ${pokemon.height}  
// Peso: ${pokemon.weight} 
//  Caramelos: ${pokemon.candy}  
//  Huevos: ${pokemon.egg}  
//  Debilidades: ${pokemon.weaknesses} `);
// for (i = 0; i < todo.length; i++) {
//     console.log(todo[i])
// }
//const mostrar = POKEMON.pokemon;
// for  ( i=0; i<mostrar.length; i++)
// console.log(mostrar[i].img);
/*console.log(POKEMON.pokemon[1]);*/
// function mostrarPokemones(pokemon){
// for(let i=0;i<pokemon.length;i++){
// console.log(pokemon[i])
// }
// };
// mostrarPokemones(POKEMON.pokemon)
// console.log(POKEMON.pokemon[0].name);
// como saber si elemento existe dentro de un array
const pokemon = POKEMON.pokemon;
const root = document.getElementById('root');
for(let i=0;i<pokemon.length;i++){
  root.innerHTML += `
   <div>
   <div class="container-yellow"> <img src="${pokemon[i].img} " alt="${pokemon[i].name} "></img>
    </div>
    <div class="container-yellow">
     Numero:${pokemon[i].num} </br>
     Nombre:${pokemon[i].name} </br>
   Tipo: ${pokemon[i].type} </br> 
 Altura: ${pokemon[i].height} </br>  
   Peso: ${pokemon[i].weight} </br> 
   Caramelos: ${pokemon[i].candy} </br>  
    Huevos: ${pokemon[i].egg} </br>  
   Debilidades: ${pokemon[i].weaknesses}
 </div> </div>
 `}