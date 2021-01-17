// //______________________________________________________________________________
//Exercicio 
//Retirar numeros repetidos

const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9];
//const numerosUnicos = [1, 3, 4, 5, 8, 9];

let numerosOrdem = numeros.reduce(  function(numerosUnicos, numeroAtual){
    if(numerosUnicos.indexOf(numeroAtual) === -1){
        numerosUnicos.push(numeroAtual)
    }
  return numerosUnicos
}, [])

console.log(numerosOrdem)