//Function Declaration
function somar(){
    console.log('_________________________________________________________')
    console.log(arguments)
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
};
console.log('Resultado da soma:', somar(1, 2, 3));
console.log('Resultado da soma:', somar(1, 2, 3, 20, 15, 6));
console.log('Resultado da soma:', somar(1, 2, 39)); 
console.log('_________________________________________________________')
