const data = window.POKEMON.pokemon;
const root = document.getElementById('root');
const selecType = document.getElementById('selecType');
const OrderAz = document.getElementById('OrderAz');
const prom = document.getElementById('prom');

OrderAz.addEventListener('change', () => {
  if (OrderAz.value === 'Ascendente') {
    const ordenadoAz = data.sort(GlobalFunctions.compareNames);
    root.innerHTML = GlobalFunctions.printPokemons(ordenadoAz);
  } else if (OrderAz.value === 'Descendente') {
    const ordenadoZA = data.sort(GlobalFunctions.compareNames).reverse();
    root.innerHTML = GlobalFunctions.printPokemons(ordenadoZA);
  }
});

selecType.addEventListener('change', () => {
  root.innerHTML = '';
  if (selecType.value === 'Todos') {
    root.innerHTML = window.printPokemons(data);
  } else {
    const dataFiltrada = GlobalFunctions.filterPokemons(data, selecType.value);
    root.innerHTML = GlobalFunctions.printPokemons(dataFiltrada);
  }
});
root.innerHTML = GlobalFunctions.printPokemons(data);

let promedio = GlobalFunctions.average(data);
prom.innerHTML = ` El Promedio total del peso de los pokemones es:  ${promedio} `;
