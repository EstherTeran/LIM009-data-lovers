/* Manejo del DOM */
//const fulltype =data.pokemon.map(pokemon=>`${pokemon.name}`);
//console.log(fulltype)
const todo = POKEMON.pokemon.map(pokemon=>"Numero:" +`${pokemon.num}  \n Nombre: ${pokemon.name} \n Tipo: ${pokemon.type} \n Altura: ${pokemon.height} \n Peso: ${pokemon.weight} \n Caramelos: ${pokemon.candy} \n Huevos: ${pokemon.egg} \n Debilidades: ${pokemon.weaknesses} `);
//console.log(todo)
for  ( i=0; i<todo.length; i++){
  console.log(todo[i])
}
//const mostrar = POKEMON.pokemon;

// for  ( i=0; i<mostrar.length; i++)
// console.log(mostrar[i].img);
/*console.log(POKEMON.pokemon[1]);*/
function mostrarPokemones(pokemon){
for(let i=0;i<pokemon.length;i++){
console.log(pokemon[i])
}
};
mostrarPokemones(POKEMON.pokemon)