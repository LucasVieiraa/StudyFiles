//cria um array com numeros randomicos nao repetidos
//Generate Random Integer
function gri(max){
return parseInt(Math.random() * max);
}
let arr = [];
while(arr.length <= 20){
let rn = gri(30);

 if(arr.indexOf(rn) < 0){
     arr.push(rn);
 } 
}
console.log(arr)