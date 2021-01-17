//                 NUMEROS RANDOMICOS
function getRandomNumber(inicio = 0, fim = 10, integer = true){

    let r = Math.random() * (fim - inicio + 1) + inicio
    //inicio = inicio || 0
    //fim = fim || 5
    console.log(inicio, fim)
    return integer ? parseInt(r) : r

};
//numero inicial, numero final, true para inteiro, false para decimais
console.log(getRandomNumber(2, 3))