const arr = [1,2,3];
const arr2 = [11, 22, 33, 44, 55];
const arr3 = [5, 6, 7, 8];

//_______________________________________________________
 const [n1, n2] = arr;
//  console.log(arr);
//  console.log(n1);
//  console.log(n2);
  
//_______________________________________________________

const [_n1, ..._n2] = arr2;
// console.log(_n1, _n2);

//O parametro _n2 com spread operator armazena o restante dos numeros da array, 
//assim para armazenar toda a array basta usar um parametro com o spread operator 

//_______________________________________________________
const [a, , , b] = arr3;
console.log(a, b);

//Para pular um valor basta usar a virgula 

//_______________________________________________________


//Recupera valores de arrays e objetos sem alterar a array original usando Ex em uma array: const [n1, n2] = arrExemplo;
//Para armazenar todos os restantes da array deve usar o spread Ex: const [n1, ...n2] = arrExemplo