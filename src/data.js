/* Manejo de data */

const filterData=(data,condition)=>{
let nuevosPokemones = [];

    for(let i=0;i<data.length;i++){

      let x = data[i].type;
      
      for(let j=0;j<x.length;j++){
      
      if(x[j]===condition){

      nuevosPokemones.push(data[i]);
        

     return nuevosPokemones;
    
}
      }
    }
  }
  window.filterData= filterData;



const average = (pokemons,peso)=>{

let newarray=[];
 let suma = 0;
 let promedio;

 for(let i=0; i<pokemon.length; i++){
 newarray.push(parseFloat((pokemon[i].weight).slice(0,-2)));
 suma += newarray[i];
 }

 promedio = suma/newarray.length;
 return promedio;

 }
window.average = average;