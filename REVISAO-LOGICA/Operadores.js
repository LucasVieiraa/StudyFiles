// + - * / % **
let n1 = 10;
let n2 = 5;

// OPERADORE ARITIMETICOS 
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(n1 ** n2); 
//-------------------------
// OPERADORES DE ATRIBUICAO
let n3 = 20;
n3 = n3 + 15;
n3 += 15;

//-------------------------
// INCREMENTO E DECREMENTO
let i = 0;
i++ //or ++i
i-- //or --i
console.log(i);

//-------------------------
// COMPARACAO
/*
    ==  : igualdade de valor
    === : igualdade de valor e tipo
    >   : maior
    >=  : maior igual
    <   : menor
    <=  : menor igual
    !=  : valores diferente
    !== : valores e tipos diferente
*/

//-------------------------
// OPERADORES LOGICOS
/*
    && : AND
    || : OR
    !  : NOT
*/

let idade = 18;
let paisPresentes = true;
let bilhete = false;

      if(bilhete){
      if(idade >= 18 || paisPresentes){
          console.log('Pode viajar');    
      }    
      }else{console.log('Nao pode viajar')}

// const viagem = (idade >= 18 || paisPresentes && bilhete)?'pode viajar':'Nao pode viajar';
