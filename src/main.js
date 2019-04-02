/* Manejo del DOM */
const data = POKEMON.pokemon;
const root = document.getElementById('root');
for(let i=0;i<data.length;i++){
 root.innerHTML += `
  <div class="column-4 pokemon-class">
  <div class="center"> <img src="${data[i].img} " alt="${data[i].name} "></img>
   </div>
   <div class="color">
  
    Nombre:${data[i].name} </br>
  Tipo: ${data[i].type} </br>
  Altura: ${data[i].height} </br> 
  Peso: ${data[i].weight} </br>
    Huevos: ${data[i].egg} </br> 
 
</div> </div>`}

btnAZ.addEventListener("click", function() {
  root.innerHTML = '';
  data.sort(function(a,b){
    if(a.name > b.name)
      return 1;
    if(a.name < b.name)
      return -1;
    return 0;
  }); 
  for (let i=0; i<data.length; i++) {
    root.innerHTML += `
    <div>
    <div> <img src="${data[i].img} " alt="${data[i].name} "></img>
     </div>
    <div>
    Nombre:${data[i].name} </br>
  Tipo: ${data[i].type} </br> 
Altura: ${data[i].height} </br>  
  Peso: ${data[i].weight} </br> 
</div>`;
  }
});





 
