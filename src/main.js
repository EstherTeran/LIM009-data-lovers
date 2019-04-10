const dataBase = window.POKEMON.pokemon;
const root = document.getElementById('root');
const selecType = document.getElementById('selecType');
const OrderAz = document.getElementById('OrderAz');
const averageInformation = document.getElementById('prom');

OrderAz.addEventListener('change', () => {
  const upward = GlobalFunctions.sortData(dataBase, 'name', OrderAz.value);
  root.innerHTML = GlobalFunctions.printPokemons(upward);
});

selecType.addEventListener('change', () => {
  root.innerHTML = '';
  if (selecType.value === 'Todos') {
    root.innerHTML = GlobalFunctions.printPokemons(dataBase);
  } else {
    const dataBaseFiltrada = GlobalFunctions.filterPokemons(
      dataBase,
      selecType.value
    );
    root.innerHTML = GlobalFunctions.printPokemons(dataBaseFiltrada);
  }
});
root.innerHTML = GlobalFunctions.printPokemons(dataBase);
let promedio = GlobalFunctions.average(dataBase);
averageInformation.innerHTML = ` El Promedio total del peso de los pokemones es:  ${promedio} `;