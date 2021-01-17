//---------------------------------------------------------
//funcao para calcular a media, 
//1- receber um ou mais numeros OK
//2- retornar um unico numero OK
//3- gerar um erro se nao receber um numero OK
//4- retornar zero se nao tiver nenhum numero OK
//---------------------------------------------------------

function media(notas){
 let total = 0;
 let calcMedia = 0;

  if(!notas){return calcMedia} 
  if(typeof notas !== 'number'){
  throw new Error('Apenas numeros')}

    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
        calcMedia = total / arguments[i];
        }
    return calcMedia.toFixed(2);
    }

//---------------------------------------------------------

// console.log(media(2, 5, 10, 6, 5, 2, 10, 5.5));
// console.log(media());
// console.log(media('Lucas'));


//Outra maneira usando funcao auto-invocavel
(function(){
function calcularMedia(){
    let total2 = 0;
    let qtdParametros = arguments.length;
    for(var j = 0; j < qtdParametros; j++){
        if(typeof arguments[j] !== 'number'){
            throw Error('only numbers')
        }
        total2 += arguments[j];
    }
    return (total2 / qtdParametros) || 0;
}

let x = calcularMedia(25, 6);
console.log(x)

})()

//---------------------------------------------------------