/* Manejo de data */
const filterPokemons = (pokemons, query) => {
  let arr = [];
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].type.indexOf(query) >= 0) {
      arr.push(pokemons[i]);
    }
  }
  return arr;
};
const sortData = (pokemons, sortby, orderDirection) => {
  if (orderDirection === 'Ascendente' && sortby === 'name') {
    return pokemons.sort(compareNames);
  } else if (orderDirection === 'Descendente' && sortby === 'name') {
    return pokemons.sort(compareNames).reverse();
  }
};

function compareNames(objectA, objectZ) {
  objectA = objectA.name;
  objectZ = objectZ.name;
  if (objectA > objectZ) {
    return 1;
  } else if (objectA < objectZ) {
    return -1;
  // } else if (objectA === objectZ) {
  //   return 0;
  }
}
const average = pokemons => {
  let newarray = [];
  let suma = 0;
  let promedio;
  for (let i = 0; i < pokemons.length; i++) {
    newarray.push(parseFloat(pokemons[i].weight.slice(0, -2)));
    suma += newarray[i];
  }

  promedio = suma / newarray.length;
  return promedio;
};

const printPokemons = pokemons => {
  let template = '';
  for (let i = 0; i < pokemons.length; i++) {
    template += `
       <div class='pokemoncitos' >
       <div> <img src='${pokemons[i].img} ' alt='${pokemons[i].name}'></img>
        </div>
        <div class='color'>  
         Nombre:${pokemons[i].name} </br>
       Tipo: ${pokemons[i].type} </br> 
       Altura: ${pokemons[i].height} </br>  
       Peso: ${pokemons[i].weight} </br>  
      </div>
      </div>`;
  }
  return template;
};

window.GlobalFunctions = {
  printPokemons,
  filterPokemons,
  average,
  compareNames,
  sortData
};
