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


  const sortDataAZ = (a,b) => {
    if(a.name < b.name)
      return 1;
    if(a.name > b.name)
      return -1;
    return 0;
  }
  window.sortDataAZ= sortDataAZ;

  const sortDataZA = (a,b) => {
    if(a.name > b.name)
      return 1;
    if(a.name < b.name)
      return -1;
    return 0;
  }
  window.sortDataZA= sortDataZA;

const average = () => {
  let nuevoArray=[];
 for(let i=0; i<data.length; i++){
 copy.push(parseInt((data[i].weight).slice(0,-2)));
 }
 
 let suma=(new Function("return" + nuevoArray.join("+")))();

 let media= suma/nuevoArray.length;
}
window.average = average;