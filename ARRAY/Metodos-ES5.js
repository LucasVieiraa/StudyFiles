function sum(){
     const numbers = [];
    // for(let i = 0 ; i < arguments.length; i++){
    //     numbers.push(arguments[i]);
    // }
    // console.log(numbers)

    Array.prototype.forEach.call(arguments, function(a){
    numbers.push(a)
    })
      return numbers.reduce(function(a, b){
      return a + b
      }, 0)

};
console.log(sum(1,2,3,4,5))

//__________________________________________________________
//Array.prototype//Cria um prototipo de um array
//call()//console.log(null, 1, 2, 3, 4, 5)
//apply()//console.log(null, [1, 2, 3, 4, 5])