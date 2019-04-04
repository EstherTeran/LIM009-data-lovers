const root = document.getElementById('root');
const data = POKEMON.pokemon;

const paint=(data)=>{
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
}
paint(data);



 




