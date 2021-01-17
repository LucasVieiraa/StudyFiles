let arr = [1, 5, 'Hello'];
//___________________________________________________________________________
//PUSH()
let arrPush = arr.push('World', true, 10);
console.log(arr);

//___________________________________________________________________________
//POP()
let lastElement = arr.pop();
console.log(lastElement);
console.log(arr);

//___________________________________________________________________________
//SHIFT()
let firstElement = arr.shift();
console.log(firstElement);
console.log(arr);

//___________________________________________________________________________
//UNSHIFT()
let x = arr.unshift(4);
console.log(x);
console.log(arr);

//___________________________________________________________________________
//SLICE()
let frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'];
let citricos = frutas.slice(1, 4);
//indice

console.log(frutas);
console.log(citricos);
console.log(frutas);

//___________________________________________________________________________
//SPLICE()
let letras = ['A', 'B', 'C', 'D'];
let remover = letras.splice(2, 0, 'E');
 
 console.log(letras)

//___________________________________________________________________________









//push()//Acrescenta algum valor passado na array original
//pop()//Remove o ultimo elemento da array original
//shift()//Remove o primeiro elemento da array original 
//unshift()//Adiciona um ou mais elementos no início de um array e retorna o número de elementos atualizado.
//slice()//Extrai elementos da array usando os parametros de inicio e fim(opcional) como indices, nao alterando a array original
//splice()//Pode acrescentar e remover elementos de uma array, retorna os elementos removidos splice(a partir do indice, quantidade de itens para remover, itens para adicionar)


