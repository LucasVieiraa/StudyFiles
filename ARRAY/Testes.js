//____________________________
//    Clonagem de array
let arr1 = ['a', 'b', 'c'];
let arr2 = [].concat(arr1);
//____________________________


arr2[arr2.length] = 'new value';

console.log(arr1);
console.log(arr2);

//______________________________________________________________________________
var frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'];
var citricos = frutas.slice(1, 3);
//indice

console.log(frutas)
console.log(citricos)
console.log(frutas)
//______________________________________________________________________________
