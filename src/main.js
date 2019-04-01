const data = POKEMON.pokemon;
const root = document.getElementById('root');
for(let i=0;i<data.length;i++){
  root.innerHTML += `
   <div class = pokes>
   <div> <img src="${data[i].img} " alt="${data[i].name} "></img>
    </div>
    <div>
     <p> Nombre:${data[i].name} </p>
     <p> Tipo: ${data[i].type} </p> 
     <p> Altura: ${data[i].height} </p>  
     <p> Peso: ${data[i].weight} </p> 
     <p> Huevos: ${data[i].egg} </p> 
 </div> </div>
 `}

 