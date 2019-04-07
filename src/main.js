const data = POKEMON.pokemon;
const root = document.getElementById('root');
const selecType = document.getElementById("selecType");

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


  
let promedio;
let finalPromedio;

  document.getElementById('input').addEventListener("click",()=>{
    Promedio=document.getElementById("resultado").value = resultado;
    finalPromedio=window.average(pokemons, peso);
   
  })
   
  // const elementoPromedio=document.getElementById("resultado").value = resultado;
  // let data = POKEMON.pokemon;
  // let promedio=window.average(data);
 


// const computeStats=(data)=>{
//   //(15+25+35)/3
//      let statsName="hp";
//     let getStats= data.map((champion)=>{ return champion.stats[statsName];})   
//    let sumatory=0;
//    for(let i=0;getStats.length>i;i++){
//      sumatory+=getStats[i];
//    }
//    let calculo=((sumatory)/getStats.length).toFixed(2);
//    return calculo;