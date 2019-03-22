/* Manejo del DOM */

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