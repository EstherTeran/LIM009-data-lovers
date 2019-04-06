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