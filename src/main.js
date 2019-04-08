const data = POKEMON.pokemon;
const root = document.getElementById('root');
const selecType = document.getElementById("selecType");
const OrderAz=document.getElementById("OrderAz");

OrderAz.addEventListener("change",()=>{
  if(OrderAz.value==="Ascendente"){
    const ordenadoAz=data.sort(window.compareNames);
root.innerHTML=window.printPokemons(ordenadoAz);
  }
  else if (OrderAz.value==="Descendente"){
    const ordenadoZA=data.sort(window.compareNames).reverse();
    root.innerHTML=window.printPokemons(ordenadoZA);
  }
})

selecType.addEventListener("change",()=>{
  root.innerHTML = "";
  if(selecType.value === "Todos"){
    root.innerHTML = printPokemons(data);
  }
  else{
  const dataFiltrada = window.filterPokemons(data, selecType.value);
  root.innerHTML = printPokemons(dataFiltrada);
  }
});
  root.innerHTML=printPokemons(data);