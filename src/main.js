/* Manejo del DOM */
<<<<<<< HEAD

const data = POKEMON.pokemon;
const root = document.getElementById('root');
for(let i=0;i<data.length;i++){
  root.innerHTML += `
   <div class="center">
   <div> <img src="${data[i].img} " alt="${data[i].name} "></img>
    </div>
    <div>
     Numero:${data[i].num} </br>
     Nombre:${data[i].name} </br>
   Tipo: ${data[i].type} </br> 
 Altura: ${data[i].height} </br>  
   Peso: ${data[i].weight} </br> 
   Caramelos: ${data[i].candy} </br>  
    Huevos: ${data[i].egg} </br>  
   Debilidades: ${data[i].weaknesses}
 </div> </div>
  `}
=======
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
>>>>>>> 0aea4189d6676e15ca9d0e7d428fb061e46f90a9
