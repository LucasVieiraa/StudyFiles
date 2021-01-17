
function sum(){
 // const numbers = Array.from(arguments)
 const numbers = [...arguments]
    return numbers.reduce((sum, atual) => sum + atual, 0);
}

    function avarege(){
     return sum(...arguments) / arguments.length
    };



/*__________________________________________________________
Normal
 return numbers.reduce(function (sum, atual) {
    return sum + atual 

*///________________________________________________________
