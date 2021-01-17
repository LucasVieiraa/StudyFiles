const arr = [1, 5, 10, 'ola', true];
//___________________________________________________________________________
//EVERY()
let onlyNumbers = arr.every(function(element){
    // console.log(element)
    return typeof element === 'number';
});

//___________________________________________________________________________
//SOME()
let _onlyNumbers = arr.some(function(element){
    // console.log(element)
    return typeof element === 'number';

});
//___________________________________________________________________________
//FILTER()
let arr1 = arr.filter(function(el, i, _arr){
console.log(el)
console.log(i)
console.log(_arr)
console.log('_________________________')
return true;
});
//______________________________________________

const _arr1 = arr.filter(function(el, i, _arr){
    return typeof el === 'number';
    });

    // console.log(arr)
    // console.log(_arr1)
//___________________________________________________________________________
//FOREACH()
arr.forEach(function(el, i, _arr){
  console.log(i, ':', el)
})

// console.log(arr);

//___________________________________________________________________________
//Map()
arr1 = arr1.map(function(el, i, _arr){
    return el * el;
})
console.log(arr1);



//___________________________________________________________________________

//arr.every()//Se um elemento do array for falso, tudo e falso
//arr.some()//Se um elemento do array for ao menos verdade, mesmo que o resto seja falso, a expressao se torna verdadeira
//arr.some()//A expressao retorna falso somente se todos os valores dorem falsos
//arr.filter()//Nao altera nada na array original, apenas filtra e retorna o resultado em uma nova array
//arr.forEach()//Retorna somente undefined, o metodo percorre e mostra os conteudos da array usando o elemento, indice e a array
//arr.map()//Retorna um valor passado em callback em uma nova array