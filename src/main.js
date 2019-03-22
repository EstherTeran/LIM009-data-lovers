/* Manejo del DOM */

const data = POKEMON.pokemon;
const root = document.getElementById('root');
for(let i=0;i<data.length;i++){
  root.innerHTML += `
   <div class="alert alert-primary">
   <div> <img src="${data[i].img} " alt="${data[i].name} "></img>
   <div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data[i].name}</h5>
        <p class="card-text">Numero:${data[i].num} </br>
      Tipo: ${data[i].type} </br> 
    Altura: ${data[i].height} </br>  
      Peso: ${data[i].weight} </br> 
      Caramelos: ${data[i].candy} </br>  
       Huevos: ${data[i].egg} </br>  
      Debilidades: ${data[i].weaknesses} </p>
        
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  `}