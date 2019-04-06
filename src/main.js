const data = POKEMON.pokemon;
const root = document.getElementById('root');
const selecType = document.getElementById("selecType");
const inputSearch = document.getElementById("inputSearch");
const buttonSearch = document.getElementById("buttonSearch");

buttonSearch.addEventListener("click",()=>{
  inputSearch.innerHTML
});

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
root.innerHTML=printPokemons(data);

