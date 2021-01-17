//String / number(int, float) / boolean(true, false)
let string = 'Minha string';
let string2 = 'Minha "string" aspas duplas';
console.log(string2);
let idade = 19;

// let msg = 'Eu tenho ' + idade + ' anos'; //Concatenacao normal
let msg = `Eu tenho ${idade} anos`; //Concatenacao usada quando tem muitas concatenacoes(para ficar mais legivel)
const n1 = 50;
const n2 = 1.1;

console.log('Hello '+'World');
// console.log(typeof msg,'--', typeof idade);
console.log(`O tipo do n1 e:${typeof n1}, seu valor e: ${n1}`);
console.log(`O tipo do n2 e:${typeof n2}, seu valor e: ${n2}`);

const isValid = true;
console.log(`isValid: ${isValid}`);
