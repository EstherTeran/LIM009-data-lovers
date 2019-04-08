/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const filterPokemons = (pokemons,query) => {
  let arr = [];
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].type.indexOf(query) >= 0) {
      arr.push(pokemons[i])
    }
  }
  return arr;
}
window.filterPokemons = filterPokemons;

  function compareNames(a,z){
    a=a.name;
    z=z.name;
    if(a > z){
      return 1;
    }else 
    if (a < z){
      return -1;
    } else if(a===z){
      return 0;
    }
  }
  window.compareNames=compareNames;
  
const average = (pokemons,peso)=>{
  let newarray=[];
   let suma = 0;
   let promedio;
  for(let i=0; i<pokemon.length; i++){
    newarray.push(parseFloat((pokemon[i].weight).slice(0,-2)));
    suma += newarray[i];
    }
   
    promedio = suma/newarray.length;
    return promedio;
   
    }
   window.average = average;
   
  const printPokemons = (pokemons) => {
    let template = " ";
    for (let i = 0; i < pokemons.length; i++) {
      template += `
       <div class="pokemoncitos" >
       <div> <img src="${pokemons[i].img} " alt="${pokemons[i].name}"></img>
        </div>
        <div class="color">  
         Nombre:${pokemons[i].name} </br>
       Tipo: ${pokemons[i].type} </br> 
       Altura: ${pokemons[i].height} </br>  
       Peso: ${pokemons[i].weight} </br> 
      Huevos: ${pokemons[i].egg} </br>  
      </div>
      </div>`;
    }
    return template;
  }
  window.printPokemons=printPokemons;