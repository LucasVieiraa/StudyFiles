//---------------------------------------------------------
//Declaracao de funcao 
function ola(){
    console.log('Hello world');
              }
ola();

//---------------------------------------------------------
//Expressao de funcao
let ola2 = function(){
    console.log('Hello world of function expression');
                     }
ola2();

//---------------------------------------------------------
//Arrow functions 
const ola3 = () => {
    console.log('Hello world of function arrow');
                   }
ola3();

//---------------------------------------------------------
//Retorno de valores
const nome = 'Lucas'
let x = (a) => {
console.log(`Bom dia ${a}!`);
}
x(nome);

//------------------------------
 function obtemDiadaSemana(){
     return new Date().getDay()
                       }                       
let dia = obtemDiadaSemana()
console.log(dia);

//------------------------------
function somar(n1 = 0, n2 = 0){
//   let _n1 = n1 || 0; -Maneira-   
//   let _n2 = n2 || 0; -antiga-  
return n1 + n2;
}
let soma = somar(3, 5);
 console.log(`A soma e: ${soma}`);
 console.log(`A soma e: ${somar(10, 4)}`);
 console.log(`A soma e: ${somar(5, 14)}`);
 console.log(`A soma e: ${somar(8)}`);
//--------------------------------------------------------- 